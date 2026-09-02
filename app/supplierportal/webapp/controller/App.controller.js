sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"

], (BaseController, MessageBox) => {

    "use strict";

    return BaseController.extend(
        "supplier.po.supplierportal.controller.App",
        {

            onInit() {

                this._validateSupplier();

            },


            async _validateSupplier() {

                try {

                    console.log("Supplier validation started...");


                    const response = await fetch(
                        "/bp/getMySupplier()",
                        {
                            method: "GET",
                            headers: {
                                "Accept": "application/json"
                            },
                            credentials: "include"
                        }
                    );


                    console.log(
                        "Supplier validation status:",
                        response.status
                    );


                    // ------------------------------------------------
                    // SUPPLIER NOT REGISTERED
                    // ------------------------------------------------

                    if (!response.ok) {

                        let message =
                            "This email is not registered in Business Partner. Please contact the administrator.";


                        try {

                            const errorData =
                                await response.json();

                            if (
                                errorData &&
                                errorData.error &&
                                errorData.error.message
                            ) {

                                message =
                                    errorData.error.message;

                            }

                        } catch (error) {

                            console.log(
                                "Unable to read error response."
                            );

                        }


                        MessageBox.error(
                            message,
                            {
                                title: "Access Denied"
                            }
                        );

                        return;

                    }


                    // ------------------------------------------------
                    // SUPPLIER REGISTERED
                    // ------------------------------------------------

                    const supplierId =
                        await response.json();


                    console.log(
                        "Supplier validation successful."
                    );

                    console.log(
                        "Supplier ID:",
                        supplierId
                    );


                    // Store SupplierID
                    sessionStorage.setItem(
                        "SupplierID",
                        supplierId
                    );


                    // ------------------------------------------------
                    // OPEN DASHBOARD
                    // ------------------------------------------------

                    this.getOwnerComponent()
                        .getRouter()
                        .navTo(
                            "Dashboard",
                            {},
                            true
                        );

                }


                catch (error) {

                    console.error(
                        "Supplier validation failed:",
                        error
                    );


                    MessageBox.error(
                        "Unable to validate the logged-in supplier. Please try again later.",
                        {
                            title: "Supplier Validation Error"
                        }
                    );

                }

            }

        }
    );

});