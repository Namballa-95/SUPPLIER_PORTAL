sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (BaseController, MessageBox) => {
    "use strict";

    return BaseController.extend(
        "supplier.po.supplierportal.controller.App",
        {
            onInit: function () {
                this._validateSupplier();
            },

            _validateSupplier: async function () {
                try {
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

                    const responseText = await response.text();

                    // Stop validation if the backend returns an error.
                    if (!response.ok) {
                        let errorMessage =
                            "Unable to validate your supplier registration. Please try again later.";

                        try {
                            const errorData = JSON.parse(responseText);

                            if (errorData?.error?.message) {
                                errorMessage = errorData.error.message;
                            }
                        } catch (parseError) {
                            // Keep the default message if the response
                            // is not valid JSON.
                        }

                        MessageBox.error(errorMessage, {
                            title: "Supplier Validation Failed"
                        });

                        return;
                    }

                    // Parse the successful backend response.
                    let data;

                    try {
                        data = JSON.parse(responseText);
                    } catch (parseError) {
                        data = responseText.trim();
                    }

                    // Support a scalar response, { value: "..." },
                    // or an object containing SupplierID.
                    const supplier =
                        data?.value ?? data;

                    const supplierId =
                        typeof supplier === "string" ||
                        typeof supplier === "number"
                            ? supplier
                            : supplier?.SupplierID ??
                              supplier?.supplierID ??
                              supplier?.supplierId ??
                              supplier?.ID;

                    // Never allow dashboard navigation without a valid ID.
                    if (
                        supplierId === undefined ||
                        supplierId === null ||
                        String(supplierId).trim() === ""
                    ) {
                        MessageBox.error(
                            "Your supplier registration could not be identified. Please contact the administrator.",
                            {
                                title: "Supplier Validation Failed"
                            }
                        );

                        return;
                    }

                    // Store the validated supplier ID.
                    sessionStorage.setItem(
                        "SupplierID",
                        String(supplierId)
                    );

                    // Navigate only after successful validation.
                    this.getOwnerComponent()
                        .getRouter()
                        .navTo("RouteDashboard", {}, true);

                } catch (error) {
                    MessageBox.error(
                        "Unable to connect to the supplier validation service. Please try again later.",
                        {
                            title: "Supplier Validation Failed"
                        }
                    );
                }
            }
        }
    );
});