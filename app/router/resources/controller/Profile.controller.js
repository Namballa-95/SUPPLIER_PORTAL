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

                // =====================================================
                // PROFILE MODEL - DISPLAY
                // =====================================================

                this.getView().setModel(
                    new JSONModel({
                        value: []
                    }),
                    "profile"
                );

                // =====================================================
                // PROFILE EDIT MODEL
                // =====================================================

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
            //
            // Logged-in User
            //       ↓
            // Business Partner
            //       ↓
            // Supplier
            //       ↓
            // MyProfile
            // =====================================================

            loadProfile: async function () {

                try {

                    MessageToast.show(
                        "Loading your profile..."
                    );

                    const url =
                        "/bp/MyProfile";

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
                        "MyProfile Response:",
                        data
                    );


                    // =================================================
                    // VALIDATE RESPONSE
                    // =================================================

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


                    // =================================================
                    // SET PROFILE MODEL
                    // =================================================

                    this.getView()
                        .getModel("profile")
                        .setData(data);


                    const profile =
                        data.value[0];


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

                    BusinessPartnerFullName:
                        oProfileData.BusinessPartnerFullName,

                    BusinessPartnerName:
                        oProfileData.BusinessPartnerName,

                    StreetName:
                        oProfileData.StreetName,

                    HouseNumber:
                        oProfileData.HouseNumber,

                    CityName:
                        oProfileData.CityName,

                    PostalCode:
                        oProfileData.PostalCode,

                    Region:
                        oProfileData.Region,

                    Country:
                        oProfileData.Country,

                    Email:
                        oProfileData.Email,

                    Phone:
                        oProfileData.Phone,

                    Mobile:
                        oProfileData.Mobile
                });

                MessageToast.show(
                    "Edit mode enabled."
                );
            },

            // =====================================================
// SAVE PROFILE - UI TEST
// =====================================================

onSaveProfile: function () {

    const oEditModel =
        this.getView().getModel("profileEdit");

    const oData =
        oEditModel.getData();

    // ---------------------------------------------
    // Basic validation
    // ---------------------------------------------

    if (!oData.BusinessPartnerFullName) {

        MessageBox.warning(
            "Please enter your full name."
        );

        return;
    }

    if (!oData.CityName) {

        MessageBox.warning(
            "Please enter your city."
        );

        return;
    }

    if (!oData.Email) {

        MessageBox.warning(
            "Please enter your email address."
        );

        return;
    }

    // ---------------------------------------------
    // Email validation
    // ---------------------------------------------

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(oData.Email)) {

        MessageBox.error(
            "Please enter a valid email address."
        );

        return;
    }

    // ---------------------------------------------
    // Temporary console output
    // ---------------------------------------------

    console.log(
        "===================================="
    );

    console.log(
        "PROFILE CHANGES"
    );

    console.log(
        "Full Name:",
        oData.BusinessPartnerFullName
    );

    console.log(
        "Business Partner Name:",
        oData.BusinessPartnerName
    );

    console.log(
        "Street:",
        oData.StreetName
    );

    console.log(
        "House Number:",
        oData.HouseNumber
    );

    console.log(
        "City:",
        oData.CityName
    );

    console.log(
        "Postal Code:",
        oData.PostalCode
    );

    console.log(
        "Region:",
        oData.Region
    );

    console.log(
        "Email:",
        oData.Email
    );

    console.log(
        "Phone:",
        oData.Phone
    );

    console.log(
        "Mobile:",
        oData.Mobile
    );

    console.log(
        "===================================="
    );

    MessageToast.show(
        "Profile changes validated successfully."
    );

    // Exit edit mode
    oEditModel.setProperty(
        "/isEditing",
        false
    );
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