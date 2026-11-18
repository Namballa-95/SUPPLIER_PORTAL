sap.ui.define([
    "sap/ui/core/UIComponent",
    "supplier/po/supplierportal/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("supplier.po.supplierportal.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // Initialize base component
            UIComponent.prototype.init.apply(this, arguments);

            // Set device model
            this.setModel(models.createDeviceModel(), "device");

            // Record login first, then initialize routing
            this._recordSupplierLogin().finally(() => {
                this.getRouter().initialize();
            });
        },

        // -----------------------------------------------------
        // RECORD SUPPLIER LOGIN
        // -----------------------------------------------------

        async _recordSupplierLogin() {

            const loginKey = "supplierLoginRecorded";

            // Prevent duplicate login records on page refresh
            if (sessionStorage.getItem(loginKey)) {
                console.log("Login already recorded in this session.");
                return;
            }

            try {

                // Fetch CSRF token
                const tokenResponse = await fetch("/bp/$metadata", {
                    method: "GET",
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    credentials: "same-origin"
                });

                if (!tokenResponse.ok) {
                    throw new Error("Unable to fetch CSRF token");
                }

                const csrfToken =
                    tokenResponse.headers.get("X-CSRF-Token");

                if (!csrfToken) {
                    throw new Error("CSRF token not received");
                }

                // Call CAP action to record login
                const response = await fetch(
                    "/bp/recordSupplierLogin",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "X-CSRF-Token": csrfToken
                        },
                        body: "{}",
                        credentials: "same-origin"
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Login recording failed: ${response.status}`
                    );
                }

                // Mark login as recorded only after success
                sessionStorage.setItem(loginKey, "true");

                console.log(
                    "Supplier login recorded successfully."
                );

            } catch (error) {

                console.error(
                    "Supplier login recording error:",
                    error
                );

            }
        }
    });
});
