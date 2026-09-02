sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (
    Controller,
    JSONModel,
    MessageBox,
    MessageToast
) {

    "use strict";

    return Controller.extend(
        "supplier.po.supplierportal.controller.Dashboard",
        {

            // =====================================================
            // INIT
            // =====================================================

            onInit: function () {

                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "dashboard"
                );

                this.loadDashboard();
            },


            // =====================================================
            // LOAD DASHBOARD
            // =====================================================

            loadDashboard: async function () {

                try {

                    console.log(
                        "===================================="
                    );

                    console.log(
                        "LOADING SUPPLIER DASHBOARD"
                    );

                    console.log(
                        "===================================="
                    );


                    const response =
                        await fetch(
                            "/bp/MyDashboard",
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
                        "FULL DASHBOARD RESPONSE:",
                        data
                    );


                    // =================================================
                    // CHECK BACKEND RESPONSE
                    // =================================================

                    if (
                        !data ||
                        !Array.isArray(data.value) ||
                        data.value.length === 0
                    ) {

                        console.warn(
                            "Dashboard API returned no data."
                        );


                        this.getView()
                            .getModel("dashboard")
                            .setData({
                                value: []
                            });


                        MessageToast.show(
                            "No dashboard information found."
                        );

                        return;
                    }


                    // =================================================
                    // LOGGED-IN SUPPLIER DASHBOARD
                    // =================================================

                    const dashboard =
                        data.value[0];


                    console.log(
                        "===================================="
                    );

                    console.log(
                        "LOGGED-IN SUPPLIER DASHBOARD"
                    );

                    console.log(
                        "Business Partner:",
                        dashboard.BusinessPartner
                    );

                    console.log(
                        "Supplier:",
                        dashboard.Supplier
                    );

                    console.log(
                        "Supplier Name:",
                        dashboard.SupplierName
                    );

                    console.log(
                        "Total POs:",
                        dashboard.TotalPurchaseOrders
                    );

                    console.log(
                        "Open POs:",
                        dashboard.OpenPurchaseOrders
                    );

                    console.log(
                        "Completed POs:",
                        dashboard.CompletedPurchaseOrders
                    );

                    console.log(
                        "===================================="
                    );


                    // =================================================
                    // SET MODEL
                    // =================================================

                    this.getView()
                        .getModel("dashboard")
                        .setData(data);


                    this.getView()
                        .getModel("dashboard")
                        .refresh(true);


                    // =================================================
                    // WELCOME MESSAGE
                    // =================================================

                    MessageToast.show(
                        "Welcome " +
                        (
                            dashboard.SupplierName ||
                            "Supplier"
                        )
                    );


                } catch (error) {

                    console.error(
                        "===================================="
                    );

                    console.error(
                        "DASHBOARD ERROR"
                    );

                    console.error(
                        error
                    );

                    console.error(
                        "===================================="
                    );


                    MessageBox.error(
                        "Failed to load Supplier Dashboard.\n\n" +
                        error.message
                    );
                }
            },


            // =====================================================
            // TOTAL PURCHASE ORDERS
            // =====================================================

            onTotalPurchaseOrdersPress: function () {

                console.log(
                    "Total Purchase Orders tile clicked."
                );


                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrder",
                        {
                            status: "all"
                        }
                    );
            },


            // =====================================================
            // OPEN PURCHASE ORDERS
            // =====================================================

            onOpenPurchaseOrdersPress: function () {

                console.log(
                    "Open Purchase Orders tile clicked."
                );


                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrder",
                        {
                            status: "open"
                        }
                    );
            },


            // =====================================================
            // COMPLETED PURCHASE ORDERS
            // =====================================================

            onCompletedPurchaseOrdersPress: function () {

                console.log(
                    "Completed Purchase Orders tile clicked."
                );


                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrder",
                        {
                            status: "completed"
                        }
                    );
            },


            // =====================================================
            // MY PURCHASE ORDERS
            // =====================================================

            onPurchaseOrdersPress: function () {

                console.log(
                    "My Purchase Orders tile clicked."
                );


                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrder",
                        {
                            status: "all"
                        }
                    );
            },


            // =====================================================
            // PROFILE
            // =====================================================

            onProfilePress: function () {

                console.log(
                    "Navigating to My Profile..."
                );


                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RouteProfile"
                    );

            }

        }
    );
});