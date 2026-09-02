sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/routing/History"
], function (
    Controller,
    JSONModel,
    MessageBox,
    History
) {
    "use strict";

    return Controller.extend(
        "supplier.po.supplierportal.controller.PurchaseOrderDetail",
        {

            // =====================================================
            // INIT
            // =====================================================

            onInit: function () {

                // PO Header model
                this.getView().setModel(
                    new JSONModel({}),
                    "poDetail"
                );


                // PO Items model
                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "poItems"
                );


                // Listen for PO detail route
                this.getOwnerComponent()
                    .getRouter()
                    .getRoute("RoutePurchaseOrderDetail")
                    .attachPatternMatched(
                        this._onRouteMatched,
                        this
                    );
            },


            // =====================================================
            // ROUTE MATCHED
            // =====================================================

            _onRouteMatched: async function (oEvent) {

                const args =
                    oEvent.getParameter("arguments");

                const businessPartner =
                    args.BusinessPartner;

                const purchaseOrder =
                    args.PurchaseOrder;


                console.log(
                    "===================================="
                );

                console.log(
                    "PURCHASE ORDER DETAIL"
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
                    "===================================="
                );


                if (
                    !businessPartner ||
                    !purchaseOrder
                ) {

                    MessageBox.error(
                        "Business Partner or Purchase Order is missing."
                    );

                    return;
                }


                // =================================================
                // LOAD PO HEADER
                // =================================================

                await this._loadPurchaseOrder(
                    businessPartner,
                    purchaseOrder
                );


                // =================================================
                // LOAD PO ITEMS
                // =================================================

                await this._loadPurchaseOrderItems(
                    businessPartner,
                    purchaseOrder
                );
            },


            // =====================================================
            // LOAD PO HEADER
            // =====================================================

            _loadPurchaseOrder: async function (
                businessPartner,
                purchaseOrder
            ) {

                try {

                    const url =
                        "/bp/MyPurchaseOrderDetails" +
                        "?BusinessPartner=" +
                        encodeURIComponent(
                            businessPartner
                        ) +
                        "&PurchaseOrder=" +
                        encodeURIComponent(
                            purchaseOrder
                        );


                    console.log(
                        "Loading PO Header:",
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
                        "PO Header Response:",
                        data
                    );


                    // Backend returns:
                    //
                    // {
                    //     value: [
                    //         {
                    //             PurchaseOrder: "62",
                    //             ...
                    //         }
                    //     ]
                    // }


                    const poHeader =
                        data.value &&
                            data.value.length > 0
                            ? data.value[0]
                            : {};


                    console.log(
                        "PO Header Object:",
                        poHeader
                    );


                    this.getView()
                        .getModel("poDetail")
                        .setData(
                            poHeader
                        );


                } catch (error) {

                    console.error(
                        "PO Header Error:",
                        error
                    );


                    MessageBox.error(
                        "Failed to load Purchase Order details.\n\n" +
                        error.message
                    );
                }
            },


            // =====================================================
            // LOAD PO ITEMS
            // =====================================================

            _loadPurchaseOrderItems: async function (
                businessPartner,
                purchaseOrder
            ) {

                try {

                    const url =
                        "/bp/MyPurchaseOrderItems" +
                        "?BusinessPartner=" +
                        encodeURIComponent(
                            businessPartner
                        ) +
                        "&PurchaseOrder=" +
                        encodeURIComponent(
                            purchaseOrder
                        );


                    console.log(
                        "Loading PO Items:",
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
                        .setData(
                            data
                        );


                } catch (error) {

                    console.error(
                        "PO Items Error:",
                        error
                    );


                    MessageBox.error(
                        "Failed to load Purchase Order items.\n\n" +
                        error.message
                    );
                }
            },

            // =====================================================
            // FORMAT DATE
            // =====================================================

            formatDate: function (value) {

                if (!value) {
                    return "";
                }

                // SAP OData V2 date format:
                // /Date(1786406400000)/

                const match =
                    String(value).match(/\/Date\((\d+)\)\//);

                if (match) {

                    const timestamp =
                        parseInt(match[1], 10);

                    const date =
                        new Date(timestamp);

                    return date.toLocaleDateString("en-IN");
                }

                return value;
            },


            // =====================================================
            // FORMAT PO STATUS
            // =====================================================

            formatPOStatus: function (status) {

                switch (String(status)) {

                    case "01":
                        return "Open";

                    case "02":
                        return "Released";

                    case "03":
                        return "Completed";

                    default:
                        return status || "Unknown";
                }
            },


            // =====================================================
            // FORMAT PO STATUS STATE
            // =====================================================

            formatPOStatusState: function (status) {

                switch (String(status)) {

                    case "01":
                        return "Warning";

                    case "02":
                        return "Information";

                    case "03":
                        return "Success";

                    default:
                        return "None";
                }
            },
            // =====================================================
// DELIVERY STATUS
// =====================================================

formatDeliveryStatus: function (isDelivered) {

    if (isDelivered === true) {
        return "Delivered";
    }

    return "Pending Delivery";
},


// =====================================================
// DELIVERY STATUS STATE
// =====================================================
formatDeliveryStatusState: function (isDelivered) {
    if (isDelivered === true) {
        return "Success";
    }
    return "Warning";
},

// =====================================================
// INVOICE STATUS
// =====================================================
formatInvoiceStatus: function (isFinallyInvoiced) {
    if (isFinallyInvoiced === true) {
        return "Invoiced";
    }
    return "Invoice Pending";
},


// =====================================================
// INVOICE STATUS STATE
// =====================================================
formatInvoiceStatusState: function (isFinallyInvoiced) {
    if (isFinallyInvoiced === true) {
        return "Success";
    }
    return "Warning";
},

// =====================================================
// DELIVERY FORMATTERS
// =====================================================

formatQuantity: function (quantity, unit) {

    if (quantity === undefined || quantity === null) {
        return "-";
    }

    return quantity + " " + (unit || "");
},


// =====================================================
// GOODS RECEIPT EXPECTED
// =====================================================

formatGoodsReceiptExpected: function (expected) {

    if (expected === true) {
        return "Expected";
    }

    return "Not Expected";
},


formatGoodsReceiptExpectedState: function (expected) {

    if (expected === true) {
        return "Information";
    }

    return "None";
},


// =====================================================
// DELIVERY STATUS
// =====================================================

formatDeliveryStatus: function (isCompletelyDelivered) {

    if (isCompletelyDelivered === true) {
        return "Completely Delivered";
    }

    return "Pending";
},


formatDeliveryStatusState: function (isCompletelyDelivered) {

    if (isCompletelyDelivered === true) {
        return "Success";
    }

    return "Warning";
},


            // =====================================================
            // PURCHASE ORDER ITEM PRESS
            // =====================================================

            onPurchaseOrderItemPress: function (oEvent) {

                const oItem =
                    oEvent.getSource();

                const oContext =
                    oItem.getBindingContext("poItems");

                const itemData =
                    oContext.getObject();

                console.log(
                    "Selected PO Item:",
                    itemData
                );


                // Create dialog only once
                if (!this._oItemDialog) {

                    this._oItemDialog =
                        new sap.m.Dialog({

                            title: "Purchase Order Item Details",

                            contentWidth: "500px",

                            content: [

                                new sap.m.VBox({

                                    class: "sapUiMediumMargin",

                                    items: [

                                        new sap.m.Label({
                                            text: "Item"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/PurchaseOrderItem}"
                                        }),

                                        new sap.m.Label({
                                            text: "Description"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/PurchaseOrderItemText}"
                                        }),

                                        new sap.m.Label({
                                            text: "Material"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/Material}"
                                        }),

                                        new sap.m.Label({
                                            text: "Quantity"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/OrderQuantity}"
                                        }),

                                        new sap.m.Label({
                                            text: "Unit"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/PurchaseOrderQuantityUnit}"
                                        }),

                                        new sap.m.Label({
                                            text: "Net Price"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/NetPriceAmount}"
                                        }),

                                        new sap.m.Label({
                                            text: "Plant"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/Plant}"
                                        }),

                                        new sap.m.Label({
                                            text: "Storage Location"
                                        }),

                                        new sap.m.Text({
                                            text: "{itemDetail>/StorageLocation}"
                                        }),

                                        new sap.m.Label({
                                            text: "Goods Receipt Expected"
                                        }),

                                        new sap.m.ObjectStatus({
                                            text: {
                                                path: "itemDetail>/GoodsReceiptIsExpected",
                                                formatter: function (value) {
                                                    return value ? "Yes" : "No";
                                                }
                                            },
                                            state: {
                                                path: "itemDetail>/GoodsReceiptIsExpected",
                                                formatter: function (value) {
                                                    return value ? "Success" : "None";
                                                }
                                            }
                                        }),

                                        new sap.m.Label({
                                            text: "Invoice Expected"
                                        }),

                                        new sap.m.ObjectStatus({
                                            text: {
                                                path: "itemDetail>/InvoiceIsExpected",
                                                formatter: function (value) {
                                                    return value ? "Yes" : "No";
                                                }
                                            },
                                            state: {
                                                path: "itemDetail>/InvoiceIsExpected",
                                                formatter: function (value) {
                                                    return value ? "Success" : "None";
                                                }
                                            }
                                        }),

                                        new sap.m.Label({
                                            text: "Delivery Status"
                                        }),

                                        new sap.m.ObjectStatus({
                                            text: {
                                                path: "itemDetail>/IsCompletelyDelivered",
                                                formatter: function (value) {
                                                    return value
                                                        ? "Completely Delivered"
                                                        : "Not Completely Delivered";
                                                }
                                            },
                                            state: {
                                                path: "itemDetail>/IsCompletelyDelivered",
                                                formatter: function (value) {
                                                    return value ? "Success" : "Warning";
                                                }
                                            }
                                        }),

                                        new sap.m.Button({

    text: "View Delivery Tracking",

    icon: "sap-icon://shipping-status",

    type: "Emphasized",

    width: "100%",

    press: this._onViewDeliveryTracking.bind(this)

}),

                                    ]

                                })

                            ],

                            beginButton: new sap.m.Button({

                                text: "Close",

                                press: function () {

                                    this._oItemDialog.close();

                                }.bind(this)

                            })

                        });


                    this.getView()
                        .addDependent(
                            this._oItemDialog
                        );

                }


                // Create/update item model
                const oItemModel =
                    new sap.ui.model.json.JSONModel(
                        itemData
                    );


                this._oItemDialog.setModel(
                    oItemModel,
                    "itemDetail"
                );


                this._oItemDialog.open();

            },

            // =====================================================
// VIEW DELIVERY TRACKING
// =====================================================

_onViewDeliveryTracking: function () {

    const item =
        this._oItemDialog
            .getModel("itemDetail")
            .getData();


    if (!item) {

        MessageBox.error(
            "Purchase Order item details are not available."
        );

        return;
    }


    // -------------------------------------------------
    // Create dialog only once
    // -------------------------------------------------

    if (!this._oDeliveryTrackingDialog) {

        this._oDeliveryTrackingDialog =
            new sap.m.Dialog({

                title: "Delivery Tracking",

                contentWidth: "500px",

                content: [

                    new sap.m.VBox({

                        class: "sapUiMediumMargin",

                        items: [

                            new sap.m.Title({
                                text: "Purchase Order Information",
                                level: "H3"
                            }),

                            new sap.m.Label({
                                text: "Purchase Order"
                            }),

                            new sap.m.Text({
                                text: "{deliveryTracking>/PurchaseOrder}"
                            }),


                            new sap.m.Label({
                                text: "Item"
                            }),

                            new sap.m.Text({
                                text: "{deliveryTracking>/PurchaseOrderItem}"
                            }),


                            new sap.m.Label({
                                text: "Description"
                            }),

                            new sap.m.Text({
                                text: "{deliveryTracking>/PurchaseOrderItemText}"
                            }),


                            new sap.m.Label({
                                text: "Material"
                            }),

                            new sap.m.Text({
                                text: "{deliveryTracking>/Material}"
                            }),


                            new sap.m.Label({
                                text: "Ordered Quantity"
                            }),

                            new sap.m.ObjectNumber({

                                number:
                                    "{deliveryTracking>/OrderQuantity}",

                                unit:
                                    "{deliveryTracking>/PurchaseOrderQuantityUnit}"

                            }),


                            new sap.m.Label({
                                text: "Goods Receipt"
                            }),

                            new sap.m.ObjectStatus({

                                text: {

                                    path:
                                        "deliveryTracking>/GoodsReceiptIsExpected",

                                    formatter: function (value) {

                                        return value
                                            ? "Expected"
                                            : "Not Expected";

                                    }

                                },

                                state: {

                                    path:
                                        "deliveryTracking>/GoodsReceiptIsExpected",

                                    formatter: function (value) {

                                        return value
                                            ? "Information"
                                            : "None";

                                    }

                                }

                            }),


                            new sap.m.Label({
                                text: "Delivery Status"
                            }),

                            new sap.m.ObjectStatus({

                                text: {

                                    path:
                                        "deliveryTracking>/IsCompletelyDelivered",

                                    formatter: function (value) {

                                        return value
                                            ? "Fully Delivered"
                                            : "Not Fully Delivered";

                                    }

                                },

                                state: {

                                    path:
                                        "deliveryTracking>/IsCompletelyDelivered",

                                    formatter: function (value) {

                                        return value
                                            ? "Success"
                                            : "Warning";

                                    }

                                }

                            }),


                            new sap.m.Text({
                                text:
                                    "Use Refresh on the Purchase Order page to retrieve the latest delivery status."
                            })

                        ]

                    })

                ],


                beginButton:
                    new sap.m.Button({

                        text: "Close",

                        press: function () {

                            this._oDeliveryTrackingDialog.close();

                        }.bind(this)

                    })

            });


        this.getView()
            .addDependent(
                this._oDeliveryTrackingDialog
            );

    }


    // -------------------------------------------------
    // Set item data
    // -------------------------------------------------

    this._oDeliveryTrackingDialog.setModel(

        new sap.ui.model.json.JSONModel(item),

        "deliveryTracking"

    );


    // -------------------------------------------------
    // Open dialog
    // -------------------------------------------------

    this._oDeliveryTrackingDialog.open();

},

            // =====================================================
// PRINT PURCHASE ORDER
// =====================================================

onPrintPurchaseOrder: function () {

    const po =
        this.getView()
            .getModel("poDetail")
            .getData();

    const items =
        this.getView()
            .getModel("poItems")
            .getProperty("/value") || [];


    if (!po || !po.PurchaseOrder) {

        MessageBox.error(
            "Purchase Order details are not available."
        );

        return;
    }


    // =================================================
    // CREATE PRINT WINDOW
    // =================================================

    let printWindow =
        window.open(
            "",
            "_blank",
            "width=1000,height=800"
        );


    if (!printWindow) {

        MessageBox.error(
            "Please allow pop-ups to print the Purchase Order."
        );

        return;
    }


    // =================================================
    // BUILD ITEM ROWS
    // =================================================

    let itemRows = "";

    items.forEach(function (item) {

        itemRows += `
            <tr>

                <td>
                    ${item.PurchaseOrderItem || ""}
                </td>

                <td>
                    ${item.PurchaseOrderItemText || ""}
                </td>

                <td>
                    ${item.Material || ""}
                </td>

                <td>
                    ${item.OrderQuantity || ""}
                    ${item.PurchaseOrderQuantityUnit || ""}
                </td>

                <td>
                    ${item.NetPriceAmount || ""}
                    ${item.DocumentCurrency || ""}
                </td>

                <td>
                    ${item.Plant || ""}
                </td>

            </tr>
        `;

    });


    // =================================================
    // PRINT HTML
    // =================================================

    const html = `

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Purchase Order ${po.PurchaseOrder}
            </title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    margin: 40px;
                    color: #222;
                }

                h1 {
                    margin-bottom: 5px;
                }

                h2 {
                    margin-top: 30px;
                }

                .header {
                    border-bottom: 2px solid #333;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }

                .info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px 40px;
                    margin-bottom: 25px;
                }

                .label {
                    font-weight: bold;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 15px;
                }

                th,
                td {
                    border: 1px solid #ccc;
                    padding: 8px;
                    text-align: left;
                }

                th {
                    background: #f2f2f2;
                }

                .footer {
                    margin-top: 40px;
                    font-size: 12px;
                    color: #666;
                }

            </style>

        </head>


        <body>


            <div class="header">

                <h1>
                    Purchase Order
                </h1>

                <div>
                    PO Number:
                    <strong>
                        ${po.PurchaseOrder || ""}
                    </strong>
                </div>

            </div>


            <div class="info">

                <div>
                    <span class="label">
                        Company Code:
                    </span>

                    ${po.CompanyCode || ""}
                </div>


                <div>
                    <span class="label">
                        PO Type:
                    </span>

                    ${po.PurchaseOrderType || ""}
                </div>


                <div>
                    <span class="label">
                        Supplier:
                    </span>

                    ${po.Supplier || ""}
                </div>


                <div>
                    <span class="label">
                        Supplier Name:
                    </span>

                    ${po.AddressName || ""}
                </div>


                <div>
                    <span class="label">
                        PO Date:
                    </span>

                    ${this.formatDate(po.PurchaseOrderDate)}
                </div>


                <div>
                    <span class="label">
                        Currency:
                    </span>

                    ${po.DocumentCurrency || ""}
                </div>


                <div>
                    <span class="label">
                        Purchasing Organization:
                    </span>

                    ${po.PurchasingOrganization || ""}
                </div>


                <div>
                    <span class="label">
                        Purchasing Group:
                    </span>

                    ${po.PurchasingGroup || ""}
                </div>


                <div>
                    <span class="label">
                        Payment Terms:
                    </span>

                    ${po.PaymentTerms || ""}
                </div>


                <div>
                    <span class="label">
                        Status:
                    </span>

                    ${this.formatPOStatus(
                        po.PurchasingProcessingStatus
                    )}
                </div>

            </div>


            <h2>
                Purchase Order Items
            </h2>


            <table>

                <thead>

                    <tr>

                        <th>
                            Item
                        </th>

                        <th>
                            Description
                        </th>

                        <th>
                            Material
                        </th>

                        <th>
                            Quantity
                        </th>

                        <th>
                            Net Price
                        </th>

                        <th>
                            Plant
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${itemRows}

                </tbody>

            </table>


            <div class="footer">

                Generated from Supplier Portal

            </div>


        </body>

        </html>
    `;


    // =================================================
    // WRITE AND PRINT
    // =================================================

    printWindow.document.open();

    printWindow.document.write(html);

    printWindow.document.close();
    printWindow.onload = function () {
        printWindow.focus();
        printWindow.print();

    };

},

// =====================================================
// SEND PURCHASE ORDER
// =====================================================

onSendPurchaseOrder: function () {

    const po =
        this.getView()
            .getModel("poDetail")
            .getData();

    if (!po || !po.PurchaseOrder) {

        MessageBox.error(
            "Purchase Order details are not available."
        );

        return;
    }

    // -------------------------------------------------
    // Create dialog only once
    // -------------------------------------------------

    if (!this._oSendPODialog) {

        this._oSendPODialog =
            new sap.m.Dialog({

                title: "Send Purchase Order",

                contentWidth: "500px",

                content: [

                    new sap.m.VBox({

                        class: "sapUiMediumMargin",

                        items: [

                            new sap.m.Label({
                                text: "Purchase Order"
                            }),

                            new sap.m.Text({
                                text: "{sendPO>/PurchaseOrder}"
                            }),

                            new sap.m.Label({
                                text: "Supplier"
                            }),

                            new sap.m.Text({
                                text: "{sendPO>/Supplier}"
                            }),

                            new sap.m.Label({
                                text: "Email Address"
                            }),

                            new sap.m.Input({
                                id: this.createId("poEmailInput"),
                                placeholder: "Enter supplier email",
                                type: "Email"
                            }),

                            new sap.m.Label({
                                text: "Subject"
                            }),

                            new sap.m.Input({
                                id: this.createId("poSubjectInput"),
                                value: {
                                    parts: [
                                        "sendPO>/PurchaseOrder"
                                    ],
                                    formatter: function (purchaseOrder) {
                                        return "Purchase Order " +
                                            (purchaseOrder || "");
                                    }
                                }
                            }),

                            new sap.m.Label({
                                text: "Message"
                            }),

                            new sap.m.TextArea({
                                id: this.createId("poMessageInput"),
                                rows: 5,
                                width: "100%",
                                value: {
                                    parts: [
                                        "sendPO>/PurchaseOrder"
                                    ],
                                    formatter: function (purchaseOrder) {

                                        return (
                                            "Dear Supplier,\n\n" +
                                            "Please find the Purchase Order " +
                                            (purchaseOrder || "") +
                                            " details.\n\n" +
                                            "Regards,\n" +
                                            "Supplier Portal"
                                        );
                                    }
                                }
                            })

                        ]

                    })

                ],

                beginButton: new sap.m.Button({

                    text: "Send",

                    type: "Emphasized",

                    press: this._onSendPOConfirm.bind(this)

                }),

                endButton: new sap.m.Button({

                    text: "Cancel",

                    press: function () {

                        this._oSendPODialog.close();

                    }.bind(this)

                })

            });

        this.getView().addDependent(
            this._oSendPODialog
        );
    }

    // -------------------------------------------------
    // Set PO data
    // -------------------------------------------------

    this._oSendPODialog.setModel(
        new sap.ui.model.json.JSONModel(po),
        "sendPO"
    );

    // Clear previous email
    this.byId("poEmailInput").setValue("");

    this._oSendPODialog.open();
},


// =====================================================
// SEND PO - CONFIRM
// =====================================================

_onSendPOConfirm: async function () {

    const email =
        this.byId("poEmailInput")
            .getValue()
            .trim();

    const subject =
        this.byId("poSubjectInput")
            .getValue()
            .trim();

    const message =
        this.byId("poMessageInput")
            .getValue()
            .trim();


    // -------------------------------------------------
    // PO DATA
    // -------------------------------------------------

    const po =
        this.getView()
            .getModel("poDetail")
            .getData();


    const purchaseOrder =
        po.PurchaseOrder;


    const businessPartner =
        po.BusinessPartner;


    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (!purchaseOrder) {

        MessageBox.error(
            "Purchase Order details are not available."
        );

        return;
    }


    if (!businessPartner) {

        MessageBox.error(
            "Business Partner is not available."
        );

        return;
    }


    if (!email) {

        MessageBox.warning(
            "Please enter the supplier email address."
        );

        return;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        MessageBox.error(
            "Please enter a valid email address."
        );

        return;
    }


    if (!subject) {

        MessageBox.warning(
            "Please enter a subject."
        );

        return;
    }


    // -------------------------------------------------
    // DEBUG
    // -------------------------------------------------

    console.log(
        "===================================="
    );

    console.log(
        "CALLING CAP EMAIL ACTION"
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
        "Recipient Email:",
        email
    );

    console.log(
        "Subject:",
        subject
    );

    console.log(
        "Message:",
        message
    );

    console.log(
        "===================================="
    );


    // -------------------------------------------------
    // CALL CAP ACTION
    // -------------------------------------------------

    try {

        const response =
            await fetch(
                "/bp/sendPurchaseOrderEmail",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        BusinessPartner:
                            businessPartner,

                        PurchaseOrder:
                            purchaseOrder,

                        RecipientEmail:
                            email

                    })
                }
            );


        // -------------------------------------------------
        // HANDLE ERROR RESPONSE
        // -------------------------------------------------

        if (!response.ok) {

            const errorText =
                await response.text();

            console.error(
                "CAP EMAIL ERROR:",
                errorText
            );

            throw new Error(
                "HTTP " +
                response.status +
                ": " +
                errorText
            );
        }


        // -------------------------------------------------
        // READ RESPONSE
        // -------------------------------------------------

        const result =
            await response.json();


        console.log(
            "CAP EMAIL RESPONSE:",
            result
        );


        // -------------------------------------------------
        // SUCCESS
        // -------------------------------------------------

        MessageBox.success(
            result.value ||
            "Purchase Order " +
            purchaseOrder +
            " sent successfully to " +
            email
        );


        // Close dialog

        this._oSendPODialog.close();


    } catch (error) {

        console.error(
            "Purchase Order email failed:",
            error
        );


        MessageBox.error(
            "Failed to send Purchase Order email.\n\n" +
            error.message
        );
    }

},

// =====================================================
// REFRESH LATEST PURCHASE ORDER
// =====================================================

onRefreshPurchaseOrder: async function () {

    console.log(
        "===================================="
    );

    console.log(
        "REFRESHING PURCHASE ORDER"
    );

    console.log(
        "===================================="
    );


    // -------------------------------------------------
    // GET CURRENT PO DATA
    // -------------------------------------------------

    const po =
        this.getView()
            .getModel("poDetail")
            .getData();


    if (!po || !po.PurchaseOrder) {

        MessageBox.error(
            "Purchase Order details are not available."
        );

        return;
    }


    // -------------------------------------------------
    // GET BUSINESS PARTNER
    // -------------------------------------------------

    const businessPartner =
        po.BusinessPartner ||
        po.Supplier;


    const purchaseOrder =
        po.PurchaseOrder;


    if (!businessPartner || !purchaseOrder) {

        MessageBox.error(
            "Business Partner or Purchase Order is missing."
        );

        return;
    }


    try {

        // -------------------------------------------------
        // SHOW REFRESH MESSAGE
        // -------------------------------------------------

        sap.m.MessageToast.show(
            "Refreshing Purchase Order..."
        );


        // -------------------------------------------------
        // LOAD LATEST HEADER
        // -------------------------------------------------

        await this._loadPurchaseOrder(
            businessPartner,
            purchaseOrder
        );


        // -------------------------------------------------
        // LOAD LATEST ITEMS
        // -------------------------------------------------

        await this._loadPurchaseOrderItems(
            businessPartner,
            purchaseOrder
        );


        // -------------------------------------------------
        // SUCCESS
        // -------------------------------------------------

        sap.m.MessageToast.show(
            "Purchase Order refreshed successfully."
        );


        console.log(
            "Purchase Order refresh completed."
        );


    } catch (error) {

        console.error(
            "Purchase Order Refresh Error:",
            error
        );

        MessageBox.error(
            "Failed to refresh Purchase Order.\n\n" +
            error.message
        );
    }
},


            // =====================================================
            // BACK TO PURCHASE ORDERS
            // =====================================================

            onNavBack: function () {

                console.log(
                    "Navigating back to Purchase Orders..."
                );

                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RoutePurchaseOrder",
                        {
                            status: "ALL"
                        }
                    );

            }

        }
    );
});