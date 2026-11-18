
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
        "supplier.po.supplierportal.controller.Profile",
        {

            // =====================================================
            // INIT
            // =====================================================

            onInit: function () {

                // PROFILE MODEL - DISPLAY

                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "profile"
                );

                // PROFILE EDIT MODEL

                this.getView().setModel(
                    new JSONModel({
                        isEditing: false
                    }),
                    "profileEdit"
                );

                // Automatically load logged-in supplier profile
                this.loadProfile();
            },


            // =====================================================
            // LOAD LOGGED-IN SUPPLIER PROFILE
            // =====================================================

            loadProfile: async function () {

                try {

                    MessageToast.show(
                        "Loading your profile..."
                    );

                    const url = "/bp/MyProfile";

                    console.log(
                        "===================================="
                    );

                    console.log(
                        "LOADING SUPPLIER PROFILE"
                    );

                    console.log(
                        "Calling:",
                        url
                    );

                    console.log(
                        "===================================="
                    );

                    const response = await fetch(
                        url,
                        {
                            method: "GET",
                            headers: {
                                "Accept": "application/json"
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
                        "MyProfile Response:",
                        data
                    );

                    // VALIDATE RESPONSE

                    if (
                        !data ||
                        !Array.isArray(data.value) ||
                        data.value.length === 0
                    ) {

                        MessageBox.warning(
                            "No supplier profile found for the logged-in user."
                        );

                        return;
                    }

                    // SET PROFILE MODEL

                    this.getView()
                        .getModel("profile")
                        .setData(data);

                    const profile = data.value[0];

                    console.log(
                        "===================================="
                    );

                    console.log(
                        "LOGGED-IN SUPPLIER PROFILE"
                    );

                    console.log(
                        "Business Partner:",
                        profile.BusinessPartner
                    );

                    console.log(
                        "Supplier:",
                        profile.Supplier
                    );

                    console.log(
                        "Supplier Name:",
                        profile.BusinessPartnerFullName
                    );

                    console.log(
                        "===================================="
                    );

                    MessageToast.show(
                        "Profile loaded successfully."
                    );

                } catch (error) {

                    console.error(
                        "Profile Error:",
                        error
                    );

                    MessageBox.error(
                        "Failed to load supplier profile.\n\n" +
                        error.message
                    );
                }
            },


            // =====================================================
            // EDIT PROFILE
            // =====================================================

            onEditProfile: function () {

                const oProfileModel =
                    this.getView().getModel("profile");

                const oEditModel =
                    this.getView().getModel("profileEdit");

                const oProfileData =
                    oProfileModel.getProperty("/value/0");

                if (!oProfileData) {

                    MessageBox.warning(
                        "Profile data is not available."
                    );

                    return;
                }

                // Create a separate copy for editing

                oEditModel.setData({

                    isEditing: true,

                    // BUSINESS PARTNER

                    BusinessPartner:
                        oProfileData.BusinessPartner || "",

                    BusinessPartnerFullName:
                        oProfileData.BusinessPartnerFullName || "",

                    BusinessPartnerName:
                        oProfileData.BusinessPartnerName || "",

                    SearchTerm1:
                        oProfileData.SearchTerm1 || "",

                    SearchTerm2:
                        oProfileData.SearchTerm2 || "",

                    // ADDRESS

                    AddressID:
                        oProfileData.AddressID || "",

                    StreetName:
                        oProfileData.StreetName || "",

                    HouseNumber:
                        oProfileData.HouseNumber || "",

                    CityName:
                        oProfileData.CityName || "",

                    PostalCode:
                        oProfileData.PostalCode || "",

                    Region:
                        oProfileData.Region || "",

                    Country:
                        oProfileData.Country || "",

                    // CONTACT INFORMATION

                    Email:
                        oProfileData.Email || "",

                    Phone:
                        oProfileData.Phone || "",

                    Mobile:
                        oProfileData.Mobile || ""

                });

                MessageToast.show(
                    "You can now edit your profile."
                );
            },


            // =====================================================
            // SAVE PROFILE - VALIDATION ONLY
            // BACKEND INTEGRATION WILL BE ADDED NEXT
            // =====================================================

            
onSaveProfile: async function () {

    const oEditModel =
        this.getView().getModel("profileEdit");

    const oData =
        oEditModel.getData();

    // ---------------------------------------------
    // BASIC VALIDATION
    // ---------------------------------------------

    if (!oData.BusinessPartnerFullName?.trim()) {
        MessageBox.warning(
            "Please enter your full name."
        );
        return;
    }

    if (!oData.CityName?.trim()) {
        MessageBox.warning(
            "Please enter your city."
        );
        return;
    }

    if (!oData.Email?.trim()) {
        MessageBox.warning(
            "Please enter your email address."
        );
        return;
    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(oData.Email.trim())) {
        MessageBox.error(
            "Please enter a valid email address."
        );
        return;
    }

    // ---------------------------------------------
    // BUILD REQUEST PAYLOAD
    // ---------------------------------------------

    const payload = {
        BusinessPartner: oData.BusinessPartner,
        BusinessPartnerFullName: oData.BusinessPartnerFullName,
        BusinessPartnerName: oData.BusinessPartnerName,
        SearchTerm1: oData.SearchTerm1,
        SearchTerm2: oData.SearchTerm2,
        AddressID: oData.AddressID,
        StreetName: oData.StreetName,
        HouseNumber: oData.HouseNumber,
        CityName: oData.CityName,
        PostalCode: oData.PostalCode,
        Region: oData.Region,
        Country: oData.Country,
        Email: oData.Email,
        Phone: oData.Phone,
        Mobile: oData.Mobile
    };

    try {

        // -----------------------------------------
        // FETCH CSRF TOKEN
        // -----------------------------------------

        MessageToast.show(
            "Saving supplier profile..."
        );

        const csrfResponse = await fetch(
            "/bp/",
            {
                method: "GET",
                credentials: "same-origin",
                headers: {
                    "Accept": "application/json",
                    "X-CSRF-Token": "Fetch"
                }
            }
        );

        if (!csrfResponse.ok) {
            throw new Error(
                "Unable to retrieve CSRF token. HTTP " +
                csrfResponse.status
            );
        }

        const csrfToken =
            csrfResponse.headers.get("x-csrf-token");

        if (!csrfToken) {
            throw new Error(
                "CSRF token was not received from CAP."
            );
        }

        // -----------------------------------------
        // CALL CAP ACTION
        // -----------------------------------------

        const response = await fetch(
            "/bp/updateMyProfile",
            {
                method: "POST",
                credentials: "same-origin",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken
                },
                body: JSON.stringify(payload)
            }
        );

        const responseText =
            await response.text();

        let result = {};

        try {
            result = responseText
                ? JSON.parse(responseText)
                : {};
        } catch (parseError) {
            result = {
                message: responseText
            };
        }

        if (!response.ok) {

            const errorMessage =
                result?.error?.message?.value ||
                result?.error?.message ||
                result?.message ||
                responseText ||
                "Profile update failed.";

            throw new Error(
                typeof errorMessage === "string"
                    ? errorMessage
                    : JSON.stringify(errorMessage)
            );
        }

        console.log(
            "UPDATE MY PROFILE RESPONSE:",
            result
        );

        // -----------------------------------------
        // RELOAD PROFILE FROM S/4HANA
        // -----------------------------------------

        await this.loadProfile();

        oEditModel.setProperty(
            "/isEditing",
            false
        );

        MessageBox.success(
            "Supplier profile update request completed. Please verify the refreshed profile."
        );

    } catch (error) {

        console.error(
            "UPDATE PROFILE ERROR:",
            error
        );

        MessageBox.error(
            "Unable to update supplier profile.\n\n" +
            error.message
        );

    }

},



            // =====================================================
            // CANCEL EDIT
            // =====================================================

            onCancelEdit: function () {

                this.getView()
                    .getModel("profileEdit")
                    .setProperty(
                        "/isEditing",
                        false
                    );

                MessageToast.show(
                    "Changes discarded."
                );
            },


            // =====================================================
            // BACK TO DASHBOARD
            // =====================================================

            onNavBack: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo(
                        "RouteDashboard"
                    );

            }

        }
    );
});
