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
        {formatDate: function (value) {

    if (!value) {
        return "";
    }

    // SAP OData V2 format: /Date(1738368000000)/
    const match = String(value).match(/\/Date\((\d+)\)\//);

    if (match) {
        value = Number(match[1]);
    }

    const date = new Date(value);

    if (isNaN(date.getTime())) {
        return value;
    }

    const day =
        String(date.getDate()).padStart(2, "0");

    const month =
        String(date.getMonth() + 1).padStart(2, "0");

    const year =
        date.getFullYear();

    return `${day}/${month}/${year}`;
},


            onInit: function () {

                // Model used to display Purchase Orders
                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "purchaseOrders"
                );

            },


            // =========================================================
            // LOAD PURCHASE ORDERS
            // =========================================================

            onLoadPurchaseOrders: async function () {

                const oInput =
                    this.byId("businessPartnerInput");

                const businessPartner =
                    oInput.getValue().trim();

                if (!businessPartner) {

                    MessageBox.warning(
                        "Please enter a Business Partner."
                    );

                    return;
                }

                try {

                    MessageToast.show(
                        "Loading Purchase Orders..."
                    );

                    const url =
                        "/bp/MyPurchaseOrders?BusinessPartner=" +
                        encodeURIComponent(businessPartner);

                    console.log(
                        "Calling Purchase Order API:",
                        url
                    );

                    const response =
                        await fetch(url);

                    if (!response.ok) {

                        throw new Error(
                            "HTTP " +
                            response.status +
                            " - " +
                            response.statusText
                        );
                    }

                    const data =
                        await response.json();

                    console.log(
                        "Purchase Orders Response:",
                        data
                    );

                    this.getView()
                        .getModel("purchaseOrders")
                        .setData(data);

                    const count =
                        data.value
                            ? data.value.length
                            : 0;

                    MessageToast.show(
                        count +
                        " Purchase Order(s) loaded."
                    );

                } catch (error) {

                    console.error(
                        "Purchase Order Error:",
                        error
                    );

                    MessageBox.error(
                        "Failed to load Purchase Orders.\n\n" +
                        error.message
                    );
                }
            },


            // =========================================================
            // CLICK PURCHASE ORDER
            // =========================================================

            onPurchaseOrderPress: function (oEvent) {

                const oItem =
                    oEvent.getSource();

                const oContext =
                    oItem.getBindingContext(
                        "purchaseOrders"
                    );

                if (!oContext) {

                    MessageBox.error(
                        "Unable to get selected Purchase Order."
                    );

                    return;
                }

                const oData =
                    oContext.getObject();

                // Get Business Partner from input
                const businessPartner =
                    this.byId("businessPartnerInput")
                        .getValue()
                        .trim();

                // Get Purchase Order from selected row
                const purchaseOrder =
                    oData.PurchaseOrder;

                console.log(
                    "===================================="
                );

                console.log(
                    "NAVIGATING TO PO DETAILS"
                );

                console.log(
                    "Business Partner:",
                    businessPartner
                );

                console.log(
                    "Purchase Order:",
                    purchaseOrder
                );

                console.log(
                    "Selected PO Data:",
                    oData
                );

                console.log(
                    "===================================="
                );


                // Validate values before navigation
                if (!businessPartner) {

                    MessageBox.error(
                        "Business Partner is missing."
                    );

                    return;
                }

                if (!purchaseOrder) {

                    MessageBox.error(
                        "Purchase Order is missing."
                    );

                    return;
                }


                MessageToast.show(
                    "Opening PO " +
                    purchaseOrder
                );


                // Navigate to Purchase Order Details
                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrderDetail",
                        {
                            BusinessPartner:
                                businessPartner,

                            PurchaseOrder:
                                purchaseOrder
                        }
                    );

            }

        }
    );
});