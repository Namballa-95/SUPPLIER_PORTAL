sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (
    Controller,
    JSONModel,
    MessageBox
) {
    "use strict";

    return Controller.extend(
        "supplier.po.supplierportal.controller.PurchaseOrderDetail",
        {

            onInit: function () {

                this.getView().setModel(
                    new JSONModel({}),
                    "poDetail"
                );

                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "poItems"
                );

                this.getOwnerComponent()
                    .getRouter()
                    .getRoute("RoutePurchaseOrderDetail")
                    .attachPatternMatched(
                        this._onRouteMatched,
                        this
                    );
            },


            _onRouteMatched: async function (oEvent) {

                const oArguments =
                    oEvent.getParameter("arguments");

                const businessPartner =
                    oArguments.BusinessPartner;

                const purchaseOrder =
                    oArguments.PurchaseOrder;

                console.log(
                    "PO Detail Page"
                );

                console.log(
                    "Business Partner:",
                    businessPartner
                );

                console.log(
                    "Purchase Order:",
                    purchaseOrder
                );

                await this._loadPurchaseOrderDetails(
                    businessPartner,
                    purchaseOrder
                );

                await this._loadPurchaseOrderItems(
                    businessPartner,
                    purchaseOrder
                );
            },


            _loadPurchaseOrderDetails: async function (
                businessPartner,
                purchaseOrder
            ) {

                try {

                    const url =
                        "/bp/MyPurchaseOrderDetails(" +
                        "BusinessPartner='" +
                        encodeURIComponent(businessPartner) +
                        "',PurchaseOrder='" +
                        encodeURIComponent(purchaseOrder) +
                        "'" +
                        ")";

                    console.log(
                        "PO Details API:",
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
                        "PO Details Response:",
                        data
                    );

                    this.getView()
                        .getModel("poDetail")
                        .setData(data);

                } catch (error) {

                    console.error(
                        "PO Details Error:",
                        error
                    );

                    MessageBox.error(
                        "Failed to load Purchase Order Details.\n\n" +
                        error.message
                    );
                }
            },


            _loadPurchaseOrderItems: async function (
                businessPartner,
                purchaseOrder
            ) {

                try {

                    const url =
                        "/bp/MyPurchaseOrderItems?" +
                        "BusinessPartner=" +
                        encodeURIComponent(businessPartner) +
                        "&PurchaseOrder=" +
                        encodeURIComponent(purchaseOrder);

                    console.log(
                        "PO Items API:",
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
                        "PO Items Response:",
                        data
                    );

                    this.getView()
                        .getModel("poItems")
                        .setData(data);

                } catch (error) {

                    console.error(
                        "PO Items Error:",
                        error
                    );

                    MessageBox.error(
                        "Failed to load Purchase Order Items.\n\n" +
                        error.message
                    );
                }
            },


            onNavBack: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrder"
                    );

            }

        }
    );
});