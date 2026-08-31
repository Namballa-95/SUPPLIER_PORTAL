sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (
    Controller,
    JSONModel,
    MessageToast,
    MessageBox
) {

    "use strict";

    return Controller.extend(
        "supplier.po.supplierportal.controller.PurchaseOrder",
        {

            // =========================================================
            // FORMAT DATE
            // =========================================================

            formatDate: function (value) {

                if (!value) {
                    return "";
                }

                // SAP OData V2 format:
                // /Date(1738368000000)/

                const match =
                    String(value).match(
                        /\/Date\((\d+)\)\//
                    );

                if (match) {
                    value = Number(match[1]);
                }

                const date =
                    new Date(value);

                if (isNaN(date.getTime())) {
                    return value;
                }

                const day =
                    String(
                        date.getDate()
                    ).padStart(2, "0");

                const month =
                    String(
                        date.getMonth() + 1
                    ).padStart(2, "0");

                const year =
                    date.getFullYear();

                return `${day}/${month}/${year}`;
            },


            // =========================================================
            // INIT
            // =========================================================

            onInit: function () {

                // Model displayed by the table
                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "purchaseOrders"
                );


                // =====================================================
                // STORE ALL PURCHASE ORDERS
                // =====================================================

                this._allPurchaseOrders = [];


                // =====================================================
                // CURRENT ROUTE STATUS
                // =====================================================

                this._currentStatus = "all";


                // =====================================================
                // SEARCH VALUE
                // =====================================================

                this._searchValue = "";


                // =====================================================
                // DATE FILTER
                // =====================================================

                this._selectedDate = null;


                // =====================================================
                // STATUS FILTER
                // =====================================================

                this._selectedStatus = "ALL";


                // =====================================================
                // SORT
                // =====================================================

                this._sortKey = "NONE";


                // =====================================================
                // ROUTE
                // =====================================================

                this.getOwnerComponent()
                    .getRouter()
                    .getRoute(
                        "RoutePurchaseOrder"
                    )
                    .attachPatternMatched(
                        this._onPurchaseOrderRouteMatched,
                        this
                    );
            },


            // =========================================================
            // ROUTE MATCHED
            // =========================================================

            _onPurchaseOrderRouteMatched: function (oEvent) {

                const args =
                    oEvent.getParameter(
                        "arguments"
                    );


                const status =
                    args.status || "all";


                console.log(
                    "===================================="
                );

                console.log(
                    "PURCHASE ORDER ROUTE"
                );

                console.log(
                    "Status:",
                    status
                );

                console.log(
                    "===================================="
                );


                this._currentStatus =
                    String(status).toLowerCase();


                // =====================================================
                // SET STATUS FILTER BASED ON ROUTE
                // =====================================================

                if (
                    this._currentStatus === "open"
                ) {

                    this._selectedStatus =
                        "OPEN";

                } else if (
                    this._currentStatus === "completed"
                ) {

                    this._selectedStatus =
                        "COMPLETED";

                } else {

                    this._selectedStatus =
                        "ALL";
                }


                // =====================================================
                // UPDATE STATUS SELECT UI
                // =====================================================

                const statusSelect =
                    this.byId(
                        "statusFilter"
                    );

                if (statusSelect) {

                    statusSelect.setSelectedKey(
                        this._selectedStatus
                    );
                }


                // =====================================================
                // LOAD PURCHASE ORDERS
                // =====================================================

                this.loadPurchaseOrders(
                    this._currentStatus
                );
            },


            // =========================================================
            // LOAD PURCHASE ORDERS
            //
            // Backend automatically determines:
            //
            // Logged-in User
            //       ↓
            // Business Partner
            //       ↓
            // Supplier
            //       ↓
            // Purchase Orders
            //
            // UI does NOT send Business Partner.
            // =========================================================

            loadPurchaseOrders: async function (
                status
            ) {

                try {

                    MessageToast.show(
                        "Loading your Purchase Orders..."
                    );


                    const url =
                        "/bp/MyPurchaseOrders";


                    console.log(
                        "Calling Purchase Order API:",
                        url
                    );


                    const response =
                        await fetch(
                            url,
                            {
                                method: "GET",

                                headers: {
                                    "Accept":
                                        "application/json"
                                }
                            }
                        );


                    if (!response.ok) {

                        const errorText =
                            await response.text();

                        throw new Error(
                            "HTTP " +
                            response.status +
                            " - " +
                            errorText
                        );
                    }


                    const data =
                        await response.json();


                    console.log(
                        "Purchase Orders Response:",
                        data
                    );


                    // =================================================
                    // GET ALL PURCHASE ORDERS
                    // =================================================

                    let purchaseOrders =
                        Array.isArray(
                            data.value
                        )
                            ? data.value
                            : [];


                    console.log(
                        "Total POs from backend:",
                        purchaseOrders.length
                    );


                    // =================================================
                    // STORE ORIGINAL DATA
                    // =================================================

                    this._allPurchaseOrders =
                        purchaseOrders.slice();


                    // =================================================
                    // APPLY ROUTE STATUS
                    //
                    // Dashboard:
                    // Open       -> status = open
                    // Completed  -> status = completed
                    // All        -> status = all
                    // =================================================

                    if (
                        String(status).toLowerCase()
                        === "open"
                    ) {

                        purchaseOrders =
                            purchaseOrders.filter(
                                function (po) {

                                    return (
                                        po.PurchasingProcessingStatus
                                        !== "05"
                                    );
                                }
                            );

                    } else if (
                        String(status).toLowerCase()
                        === "completed"
                    ) {

                        purchaseOrders =
                            purchaseOrders.filter(
                                function (po) {

                                    return (
                                        po.PurchasingProcessingStatus
                                        === "05"
                                    );
                                }
                            );
                    }


                    // =================================================
                    // SAVE ROUTE-FILTERED DATA
                    // =================================================

                    this._routePurchaseOrders =
                        purchaseOrders.slice();


                    // =================================================
                    // APPLY SEARCH / FILTER / SORT
                    // =================================================

                    this._applyFilters();


                    console.log(
                        "===================================="
                    );

                    console.log(
                        "PURCHASE ORDER DATA LOADED"
                    );

                    console.log(
                        "Route Status:",
                        status
                    );

                    console.log(
                        "Route Filtered Count:",
                        purchaseOrders.length
                    );

                    console.log(
                        "===================================="
                    );


                } catch (error) {

                    console.error(
                        "===================================="
                    );

                    console.error(
                        "Purchase Order Error:",
                        error
                    );

                    console.error(
                        "===================================="
                    );


                    MessageBox.error(
                        "Failed to load your Purchase Orders.\n\n" +
                        error.message
                    );
                }
            },


            // =========================================================
            // APPLY ALL FILTERS
            // =========================================================

            _applyFilters: function () {

                let purchaseOrders =
                    (
                        this._routePurchaseOrders ||
                        []
                    ).slice();


                // =====================================================
                // 1. SEARCH BY PO NUMBER
                // =====================================================

                const searchValue =
                    String(
                        this._searchValue || ""
                    )
                        .trim()
                        .toLowerCase();


                if (searchValue) {

                    purchaseOrders =
                        purchaseOrders.filter(
                            function (po) {

                                const poNumber =
                                    String(
                                        po.PurchaseOrder ||
                                        ""
                                    )
                                        .toLowerCase();

                                return poNumber.includes(
                                    searchValue
                                );
                            }
                        );
                }


                // =====================================================
                // 2. STATUS FILTER
                // =====================================================

                if (
                    this._selectedStatus ===
                    "OPEN"
                ) {

                    purchaseOrders =
                        purchaseOrders.filter(
                            function (po) {

                                return (
                                    po.PurchasingProcessingStatus
                                    !== "05"
                                );
                            }
                        );

                } else if (
                    this._selectedStatus ===
                    "COMPLETED"
                ) {

                    purchaseOrders =
                        purchaseOrders.filter(
                            function (po) {

                                return (
                                    po.PurchasingProcessingStatus
                                    === "05"
                                );
                            }
                        );
                }


                // =====================================================
                // 3. DATE FILTER
                // =====================================================

                if (this._selectedDate) {

                    purchaseOrders =
                        purchaseOrders.filter(
                            function (po) {

                                const poDate =
                                    this._parseSAPDate(
                                        po.PurchaseOrderDate
                                    );


                                if (!poDate) {
                                    return false;
                                }


                                return (
                                    poDate.getFullYear() ===
                                        this._selectedDate.getFullYear()
                                    &&
                                    poDate.getMonth() ===
                                        this._selectedDate.getMonth()
                                    &&
                                    poDate.getDate() ===
                                        this._selectedDate.getDate()
                                );
                            }
                        );
                }


                // =====================================================
                // 4. SORT
                // =====================================================

                purchaseOrders =
                    this._sortPurchaseOrders(
                        purchaseOrders
                    );


                // =====================================================
                // 5. UPDATE TABLE MODEL
                // =====================================================

                this.getView()
                    .getModel(
                        "purchaseOrders"
                    )
                    .setData({
                        value:
                            purchaseOrders
                    });


                this.getView()
                    .getModel(
                        "purchaseOrders"
                    )
                    .refresh(true);


                console.log(
                    "===================================="
                );

                console.log(
                    "FILTER RESULT"
                );

                console.log(
                    "Search:",
                    this._searchValue
                );

                console.log(
                    "Status:",
                    this._selectedStatus
                );

                console.log(
                    "Date:",
                    this._selectedDate
                );

                console.log(
                    "Sort:",
                    this._sortKey
                );

                console.log(
                    "Final Count:",
                    purchaseOrders.length
                );

                console.log(
                    "===================================="
                );
            },


            // =========================================================
            // SEARCH BY PURCHASE ORDER NUMBER
            // =========================================================

            onSearchPO: function (oEvent) {

                this._searchValue =
                    oEvent.getParameter(
                        "newValue"
                    ) || "";


                console.log(
                    "Searching PO:",
                    this._searchValue
                );


                this._applyFilters();
            },


            // =========================================================
            // STATUS FILTER
            // =========================================================

            onStatusFilterChange: function (oEvent) {

                this._selectedStatus =
                    oEvent.getParameter(
                        "selectedItem"
                    ).getKey();


                console.log(
                    "Selected Status:",
                    this._selectedStatus
                );


                this._applyFilters();
            },

            // =====================================================
// FORMAT PURCHASE ORDER STATUS
// =====================================================

formatStatus: function (sStatus) {

    switch (String(sStatus)) {

        case "01":
            return "In Process";

        case "02":
            return "Released";

        case "03":
            return "Completed";

        case "04":
            return "Blocked";

        default:
            return sStatus || "Unknown";

    }
},


// =====================================================
// STATUS COLOR / STATE
// =====================================================

formatStatusState: function (sStatus) {

    switch (String(sStatus)) {

        case "01":
            return "Warning";

        case "02":
            return "Success";

        case "03":
            return "Success";

        case "04":
            return "Error";

        default:
            return "Information";

    }
},


            // =========================================================
            // DATE FILTER
            // =========================================================

            onDateFilterChange: function (oEvent) {

                const dateValue =
                    oEvent.getParameter(
                        "value"
                    );


                const datePicker =
                    oEvent.getSource();


                const dateValueObject =
                    datePicker.getDateValue();


                console.log(
                    "Selected PO Date:",
                    dateValue
                );


                this._selectedDate =
                    dateValueObject || null;


                this._applyFilters();
            },


            // =========================================================
            // SORT CHANGE
            // =========================================================

            onSortChange: function (oEvent) {

                this._sortKey =
                    oEvent.getParameter(
                        "selectedItem"
                    ).getKey();


                console.log(
                    "Sort:",
                    this._sortKey
                );


                this._applyFilters();
            },


            // =========================================================
            // SORT PURCHASE ORDERS
            // =========================================================

            _sortPurchaseOrders:
                function (purchaseOrders) {

                    const sorted =
                        purchaseOrders.slice();


                    // =================================================
                    // NO SORT
                    // =================================================

                    if (
                        this._sortKey ===
                        "NONE"
                    ) {

                        return sorted;
                    }


                    // =================================================
                    // PO NUMBER ASCENDING
                    // =================================================

                    if (
                        this._sortKey ===
                        "PO_ASC"
                    ) {

                        sorted.sort(
                            function (a, b) {

                                return String(
                                    a.PurchaseOrder || ""
                                ).localeCompare(
                                    String(
                                        b.PurchaseOrder || ""
                                    ),
                                    undefined,
                                    {
                                        numeric: true
                                    }
                                );
                            }
                        );
                    }


                    // =================================================
                    // PO NUMBER DESCENDING
                    // =================================================

                    else if (
                        this._sortKey ===
                        "PO_DESC"
                    ) {

                        sorted.sort(
                            function (a, b) {

                                return String(
                                    b.PurchaseOrder || ""
                                ).localeCompare(
                                    String(
                                        a.PurchaseOrder || ""
                                    ),
                                    undefined,
                                    {
                                        numeric: true
                                    }
                                );
                            }
                        );
                    }


                    // =================================================
                    // DATE ASCENDING
                    // =================================================

                    else if (
                        this._sortKey ===
                        "DATE_ASC"
                    ) {

                        sorted.sort(
                            function (a, b) {

                                const dateA =
                                    this._parseSAPDate(
                                        a.PurchaseOrderDate
                                    );

                                const dateB =
                                    this._parseSAPDate(
                                        b.PurchaseOrderDate
                                    );


                                if (!dateA && !dateB) {
                                    return 0;
                                }

                                if (!dateA) {
                                    return 1;
                                }

                                if (!dateB) {
                                    return -1;
                                }


                                return (
                                    dateA.getTime() -
                                    dateB.getTime()
                                );
                            }.bind(this)
                        );
                    }


                    // =================================================
                    // DATE DESCENDING
                    // =================================================

                    else if (
                        this._sortKey ===
                        "DATE_DESC"
                    ) {

                        sorted.sort(
                            function (a, b) {

                                const dateA =
                                    this._parseSAPDate(
                                        a.PurchaseOrderDate
                                    );

                                const dateB =
                                    this._parseSAPDate(
                                        b.PurchaseOrderDate
                                    );


                                if (!dateA && !dateB) {
                                    return 0;
                                }

                                if (!dateA) {
                                    return 1;
                                }

                                if (!dateB) {
                                    return -1;
                                }


                                return (
                                    dateB.getTime() -
                                    dateA.getTime()
                                );
                            }.bind(this)
                        );
                    }


                    return sorted;
                },


            // =========================================================
            // PARSE SAP DATE
            // =========================================================

            _parseSAPDate: function (value) {

                if (!value) {
                    return null;
                }


                // SAP OData V2:
                // /Date(1786406400000)/

                const match =
                    String(value).match(
                        /\/Date\((\d+)\)\//
                    );


                if (match) {

                    return new Date(
                        Number(match[1])
                    );
                }


                const date =
                    new Date(value);


                if (
                    isNaN(
                        date.getTime()
                    )
                ) {

                    return null;
                }


                return date;
            },


            // =========================================================
            // CLEAR FILTERS
            // =========================================================

            onClearFilters: function () {

                console.log(
                    "Clearing all PO filters..."
                );


                // =====================================================
                // RESET SEARCH
                // =====================================================

                this._searchValue = "";


                const searchField =
                    this.byId(
                        "poSearchField"
                    );


                if (searchField) {

                    searchField.setValue("");
                }


                // =====================================================
                // RESET STATUS
                // =====================================================

                this._selectedStatus =
                    "ALL";


                const statusSelect =
                    this.byId(
                        "statusFilter"
                    );


                if (statusSelect) {

                    statusSelect.setSelectedKey(
                        "ALL"
                    );
                }


                // =====================================================
                // RESET DATE
                // =====================================================

                this._selectedDate =
                    null;


                const datePicker =
                    this.byId(
                        "poDateFilter"
                    );


                if (datePicker) {

                    datePicker.setValue("");
                }


                // =====================================================
                // RESET SORT
                // =====================================================

                this._sortKey =
                    "NONE";


                const sortSelect =
                    this.byId(
                        "sortSelect"
                    );


                if (sortSelect) {

                    sortSelect.setSelectedKey(
                        "NONE"
                    );
                }


                // =====================================================
                // IMPORTANT
                //
                // If we came from Dashboard with:
                //
                // Open
                // Completed
                //
                // keep the original route status.
                // =====================================================

                if (
                    this._currentStatus ===
                    "open"
                ) {

                    this._selectedStatus =
                        "OPEN";


                    if (statusSelect) {

                        statusSelect.setSelectedKey(
                            "OPEN"
                        );
                    }

                } else if (
                    this._currentStatus ===
                    "completed"
                ) {

                    this._selectedStatus =
                        "COMPLETED";


                    if (statusSelect) {

                        statusSelect.setSelectedKey(
                            "COMPLETED"
                        );
                    }
                }


                // =====================================================
                // APPLY
                // =====================================================

                this._applyFilters();


                MessageToast.show(
                    "Filters cleared."
                );
            },


            // =========================================================
            // REFRESH
            // =========================================================

            onRefresh: function () {

                console.log(
                    "Refreshing Purchase Orders..."
                );


                this.loadPurchaseOrders(
                    this._currentStatus ||
                    "all"
                );
            },


            // =========================================================
            // BACK TO DASHBOARD
            // =========================================================

            onNavBack: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RouteDashboard"
                    );
            },


            // =========================================================
            // CLICK PURCHASE ORDER
            // =========================================================

            onPurchaseOrderPress:
                function (oEvent) {

                    const oItem =
                        oEvent.getSource();


                    const oContext =
                        oItem.getBindingContext(
                            "purchaseOrders"
                        );


                    // -------------------------------------------------
                    // CHECK CONTEXT
                    // -------------------------------------------------

                    if (!oContext) {

                        MessageBox.error(
                            "Unable to get selected Purchase Order."
                        );

                        return;
                    }


                    // -------------------------------------------------
                    // GET SELECTED PO
                    // -------------------------------------------------

                    const oData =
                        oContext.getObject();


                    console.log(
                        "===================================="
                    );

                    console.log(
                        "SELECTED PURCHASE ORDER"
                    );

                    console.log(
                        "Selected PO Data:",
                        oData
                    );

                    console.log(
                        "===================================="
                    );


                    // -------------------------------------------------
                    // GET PURCHASE ORDER
                    // -------------------------------------------------

                    const purchaseOrder =
                        oData.PurchaseOrder;


                    if (!purchaseOrder) {

                        MessageBox.error(
                            "Purchase Order is missing."
                        );

                        return;
                    }


                    // -------------------------------------------------
                    // GET BUSINESS PARTNER
                    // -------------------------------------------------

                    const businessPartner =
                        oData.BusinessPartner ||
                        oData.Supplier;


                    if (!businessPartner) {

                        MessageBox.error(
                            "Business Partner/Supplier is missing from the selected Purchase Order."
                        );

                        return;
                    }


                    console.log(
                        "Business Partner:",
                        businessPartner
                    );

                    console.log(
                        "Purchase Order:",
                        purchaseOrder
                    );


                    // -------------------------------------------------
                    // NAVIGATION
                    // -------------------------------------------------

                    MessageToast.show(
                        "Opening PO " +
                        purchaseOrder
                    );


                    this.getOwnerComponent()
                        .getRouter()
                        .navTo(
                            "RoutePurchaseOrderDetail",
                            {

                                BusinessPartner:
                                    String(
                                        businessPartner
                                    ),

                                PurchaseOrder:
                                    String(
                                        purchaseOrder
                                    )
                            }
                        );


                    console.log(
                        "Navigation command completed."
                    );
                }

        }
    );
    
});