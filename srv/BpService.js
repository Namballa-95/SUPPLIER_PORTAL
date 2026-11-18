const cds = require('@sap/cds');
const { SELECT } = cds.ql;
const { executeHttpRequest } = require('@sap-cloud-sdk/http-client');
const { getDestination } = require("@sap-cloud-sdk/connectivity");
const { sendMail } = require("@sap-cloud-sdk/mail-client");

module.exports = cds.service.impl(async function (srv) {

    const {
        MyBp,
        SupplierAddress,
        SupplierContact,
        SupplierDetail,
        MyProfile,
        MyPurchaseOrders,
        MyPurchaseOrderDetails,
        MyDashboard,
        Suppliers
    } = this.entities;


    // =========================================================
    // COMMON HELPER
    // Normalize values such as:
    //
    // 0000000002 -> 2
    // 0000000003 -> 3
    // 2          -> 2
    // =========================================================

    const normalizeValue = (value) => {

        if (
            value === null ||
            value === undefined
        ) {
            return '';
        }

        const stringValue =
            String(value).trim();

        if (!stringValue) {
            return '';
        }

        return stringValue.replace(/^0+/, '') || '0';
    };

    // =========================================================
    // COMMON HELPER
    // Get the logged-in business partner from the request context
    // =========================================================
    this.on("validateSupplier", async (req) => {

        const { SupplierID, SupplierEmail } = req.data;

        if (!SupplierID || !SupplierEmail) {
            return false;
        }

        try {

            const response = await executeHttpRequest(
                {
                    destinationName: "BP_CAP_APP"
                },
                {
                    method: "GET",
                    url: `/bp/validateSupplier(SupplierID='${encodeURIComponent(SupplierID)}',SupplierEmail='${encodeURIComponent(SupplierEmail)}')`,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            return response.data.value;

        } catch (error) {

            console.error(
                "BP CAP validation failed:",
                error.message
            );

            req.reject(
                502,
                "Unable to validate supplier with the Business Partner service."
            );
        }
    });
    //===========================================================================================================



    this.on("getMySupplier", async (req) => {
        const user = req.user;

        console.log("==============================================");
        console.log("GET MY SUPPLIER");
        console.log("User ID:", user?.id);
        console.log("User Email:", user?.email);
        console.log("==============================================");

        // 1. Validate login
        if (!user || user.id === "anonymous") {
            return req.reject(401, "User is not authenticated.");
        }

        // 2. Get logged-in user's email
        const email = user.email || user.attr?.email || user.id;

        if (!email || !email.includes("@")) {
            return req.reject(
                400,
                "Unable to determine the email address of the logged-in user."
            );
        }

        // 3. Retrieve logged-in user's JWT
        const authorization = req.http?.req?.headers?.authorization;

        console.log("HTTP context available:", !!req.http);
        console.log("Authorization header available:", !!authorization);

        if (!authorization || !authorization.startsWith("Bearer ")) {
            return req.reject(
                401,
                "Unable to retrieve the logged-in user's access token."
            );
        }

        const jwt = authorization.substring(7);

        // 4. Prepare supplier email filter
        const escapedEmail = email.replace(/'/g, "''");
        const filter = `SupplierEmail eq '${escapedEmail}'`;

        console.log("Validating supplier email:", email);

        let response;

        // 5. Resolve BP CAP destination and call the service
        try {
            const destination = await getDestination({
                destinationName: "BP_CAP_APP",
                jwt: jwt
            });

            if (!destination) {
                throw new Error("BP_CAP_APP destination could not be resolved.");
            }

            response = await executeHttpRequest(
                destination,
                {
                    method: "GET",
                    url: `/bp/Suppliers?$filter=${encodeURIComponent(filter)}&$select=SupplierID,SupplierEmail&$top=1`,
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            console.log("BP CAP response:", response.data);

        } catch (err) {
            console.error("BP CAP SUPPLIER VALIDATION ERROR:", {
                message: err.message,
                status: err.response?.status,
                response: err.response?.data
            });

            return req.reject(
                502,
                "Unable to validate supplier registration through Business Partner service."
            );
        }

        // 6. Get matching supplier
        const supplier = response.data?.value?.[0];

        if (!supplier) {
            console.log("Supplier not registered:", email);

            return req.reject(
                403,
                "This email is not registered in Business Partner. Please contact the administrator."
            );
        }

        console.log("Supplier identified:", supplier.SupplierID);

        // 7. Return SupplierID
        return supplier.SupplierID;
    });

    // =========================================================
    // 1. GET SUPPLIERS
    //
    // GET /bp/MyBp
    // =========================================================

    srv.on('READ', MyBp, async (req) => {

        try {

            const query =
                req.http?.req?.query || {};

            let page =
                parseInt(
                    query.page || '1',
                    10
                );

            const pageSize = 20;
            const totalRecords = 80;

            if (page < 1) {
                page = 1;
            }

            const totalPages =
                Math.ceil(
                    totalRecords / pageSize
                );

            if (page > totalPages) {
                page = totalPages;
            }

            const skip =
                (page - 1) * pageSize;


            const filter =
                encodeURIComponent(
                    "Supplier ne ''"
                );


            const select =
                encodeURIComponent([
                    'BusinessPartner',
                    'Supplier',
                    'Customer',
                    'BusinessPartnerFullName',
                    'BusinessPartnerName',
                    'BusinessPartnerCategory',
                    'BusinessPartnerGrouping',
                    'AuthorizationGroup',
                    'SearchTerm1',
                    'SearchTerm2',
                    'AcademicTitle'
                ].join(','));


            const response =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner` +
                            `?$top=${totalRecords}` +
                            `&$filter=${filter}` +
                            `&$select=${select}` +
                            `&$format=json`,

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const allSuppliers =
                response.data?.d?.results || [];


            console.log(
                `Fetched ${allSuppliers.length} suppliers from S/4HANA`
            );


            const pageData =
                allSuppliers.slice(
                    skip,
                    skip + pageSize
                );


            console.log(
                `Page ${page}/${totalPages}`
            );

            console.log(
                `Showing ${pageData.length} suppliers`
            );


            return pageData.map(bp => ({

                BusinessPartner:
                    bp.BusinessPartner,

                Supplier:
                    bp.Supplier,

                Customer:
                    bp.Customer,

                BusinessPartnerFullName:
                    bp.BusinessPartnerFullName,

                BusinessPartnerName:
                    bp.BusinessPartnerName,

                BusinessPartnerCategory:
                    bp.BusinessPartnerCategory,

                BusinessPartnerGrouping:
                    bp.BusinessPartnerGrouping,

                AuthorizationGroup:
                    bp.AuthorizationGroup,

                SearchTerm1:
                    bp.SearchTerm1,

                SearchTerm2:
                    bp.SearchTerm2,

                AcademicTitle:
                    bp.AcademicTitle

            }));

        } catch (err) {

            console.error(
                'Business Partner API Error:',
                err.response?.data ||
                err.message ||
                err
            );

            req.error(
                500,
                'Failed to fetch Supplier data from S/4HANA'
            );
        }

    });



    // =========================================================
    // 2. SUPPLIER ADDRESS
    //
    // GET /bp/SupplierAddress?BusinessPartner=1
    // =========================================================

    srv.on('READ', SupplierAddress, async (req) => {

        try {

            const bp =
                req.http?.req?.query?.BusinessPartner;

            if (!bp) {

                return req.error(
                    400,
                    'BusinessPartner is required'
                );
            }


            console.log(
                `Fetching address for Business Partner: ${bp}`
            );


            const response =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartner('${encodeURIComponent(bp)}')/` +
                            `to_BusinessPartnerAddress`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const addresses =
                response.data?.d?.results || [];


            console.log(
                `Found ${addresses.length} address(es)`
            );


            return addresses.map(address => ({

                BusinessPartner:
                    address.BusinessPartner,

                AddressID:
                    address.AddressID,

                FullName:
                    address.FullName,

                StreetName:
                    address.StreetName,

                HouseNumber:
                    address.HouseNumber,

                CityName:
                    address.CityName,

                PostalCode:
                    address.PostalCode,

                Country:
                    address.Country,

                Region:
                    address.Region,

                AddressTimeZone:
                    address.AddressTimeZone

            }));

        } catch (err) {

            console.error(
                'Address API Error:',
                err.response?.data ||
                err.message ||
                err
            );

            req.error(
                500,
                'Failed to fetch Business Partner address'
            );
        }

    });



    // =========================================================
    // 3. SUPPLIER CONTACT
    //
    // GET /bp/SupplierContact?BusinessPartner=1
    // =========================================================

    srv.on('READ', SupplierContact, async (req) => {

        try {

            const bp =
                req.http?.req?.query?.BusinessPartner;

            if (!bp) {

                return req.error(
                    400,
                    'BusinessPartner is required'
                );
            }


            console.log(
                `Fetching contact information for Business Partner: ${bp}`
            );


            const addressResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartner('${encodeURIComponent(bp)}')/` +
                            `to_BusinessPartnerAddress`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const addresses =
                addressResponse.data?.d?.results || [];


            console.log(
                `Found ${addresses.length} address(es)`
            );


            if (addresses.length === 0) {

                return [{
                    BusinessPartner: bp,
                    Email: '',
                    Phone: '',
                    Mobile: ''
                }];
            }


            const addressID =
                addresses[0].AddressID;


            console.log(
                `Using AddressID: ${addressID}`
            );


            // EMAIL

            const emailResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartnerAddress(` +
                            `BusinessPartner='${encodeURIComponent(bp)}',` +
                            `AddressID='${encodeURIComponent(addressID)}'` +
                            `)/to_EmailAddress`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const emails =
                emailResponse.data?.d?.results || [];


            // PHONE

            const phoneResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartnerAddress(` +
                            `BusinessPartner='${encodeURIComponent(bp)}',` +
                            `AddressID='${encodeURIComponent(addressID)}'` +
                            `)/to_PhoneNumber`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const phones =
                phoneResponse.data?.d?.results || [];


            // MOBILE

            const mobileResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartnerAddress(` +
                            `BusinessPartner='${encodeURIComponent(bp)}',` +
                            `AddressID='${encodeURIComponent(addressID)}'` +
                            `)/to_MobilePhoneNumber`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const mobiles =
                mobileResponse.data?.d?.results || [];


            console.log(
                '================ EMAIL RESPONSE ================'
            );

            console.log(
                JSON.stringify(
                    emails,
                    null,
                    2
                )
            );


            console.log(
                '================ PHONE RESPONSE ================'
            );

            console.log(
                JSON.stringify(
                    phones,
                    null,
                    2
                )
            );


            console.log(
                '================ MOBILE RESPONSE ================'
            );

            console.log(
                JSON.stringify(
                    mobiles,
                    null,
                    2
                )
            );


            return [{
                BusinessPartner: bp,

                Email:
                    emails[0]?.EmailAddress || '',

                Phone:
                    phones[0]?.PhoneNumber || '',

                Mobile:
                    mobiles[0]?.PhoneNumber || ''
            }];

        } catch (err) {

            console.error(
                'Contact API Error:',
                err.response?.data ||
                err.message ||
                err
            );

            req.error(
                500,
                'Failed to fetch Business Partner contact'
            );
        }

    });



    // =========================================================
    // 4. SUPPLIER DETAIL
    //
    // GET /bp/SupplierDetail('1')
    // =========================================================

    srv.on('READ', SupplierDetail, async (req) => {

        try {

            const bp =
                req.params?.[0]?.BusinessPartner ||
                req.http?.req?.query?.BusinessPartner;


            if (!bp) {

                return req.error(
                    400,
                    'BusinessPartner is required'
                );
            }


            console.log(
                `Fetching complete supplier detail for BP: ${bp}`
            );


            // BUSINESS PARTNER

            const bpResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartner('${encodeURIComponent(bp)}')`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const bpData =
                bpResponse.data?.d || {};


            // ADDRESS

            const addressResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartner('${encodeURIComponent(bp)}')/` +
                            `to_BusinessPartnerAddress`,

                        params: {
                            '$format': 'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const addresses =
                addressResponse.data?.d?.results || [];


            let address = {};


            if (addresses.length > 0) {

                address =
                    addresses[0];

                console.log(
                    `Using AddressID: ${address.AddressID}`
                );
            }


            // CONTACT

            let email = '';
            let phone = '';
            let mobile = '';


            if (address.AddressID) {

                const addressID =
                    address.AddressID;


                const emailResponse =
                    await executeHttpRequest(
                        {
                            destinationName: 'S4HANA1'
                        },
                        {
                            method: 'GET',

                            url:
                                `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                                `A_BusinessPartnerAddress(` +
                                `BusinessPartner='${encodeURIComponent(bp)}',` +
                                `AddressID='${encodeURIComponent(addressID)}'` +
                                `)/to_EmailAddress`,

                            params: {
                                '$format': 'json'
                            },

                            headers: {
                                Accept:
                                    'application/json'
                            }
                        }
                    );


                const emails =
                    emailResponse.data?.d?.results || [];


                email =
                    emails[0]?.EmailAddress || '';


                const phoneResponse =
                    await executeHttpRequest(
                        {
                            destinationName: 'S4HANA1'
                        },
                        {
                            method: 'GET',

                            url:
                                `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                                `A_BusinessPartnerAddress(` +
                                `BusinessPartner='${encodeURIComponent(bp)}',` +
                                `AddressID='${encodeURIComponent(addressID)}'` +
                                `)/to_PhoneNumber`,

                            params: {
                                '$format': 'json'
                            },

                            headers: {
                                Accept:
                                    'application/json'
                            }
                        }
                    );


                const phones =
                    phoneResponse.data?.d?.results || [];


                phone =
                    phones[0]?.PhoneNumber || '';


                const mobileResponse =
                    await executeHttpRequest(
                        {
                            destinationName: 'S4HANA1'
                        },
                        {
                            method: 'GET',

                            url:
                                `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                                `A_BusinessPartnerAddress(` +
                                `BusinessPartner='${encodeURIComponent(bp)}',` +
                                `AddressID='${encodeURIComponent(addressID)}'` +
                                `)/to_MobilePhoneNumber`,

                            params: {
                                '$format': 'json'
                            },

                            headers: {
                                Accept:
                                    'application/json'
                            }
                        }
                    );


                const mobiles =
                    mobileResponse.data?.d?.results || [];


                mobile =
                    mobiles[0]?.PhoneNumber || '';
            }


            return {

                BusinessPartner:
                    bpData.BusinessPartner,

                Supplier:
                    bpData.Supplier,

                Customer:
                    bpData.Customer,

                BusinessPartnerFullName:
                    bpData.BusinessPartnerFullName,

                BusinessPartnerName:
                    bpData.BusinessPartnerName,

                BusinessPartnerCategory:
                    bpData.BusinessPartnerCategory,

                BusinessPartnerGrouping:
                    bpData.BusinessPartnerGrouping,

                AuthorizationGroup:
                    bpData.AuthorizationGroup,

                SearchTerm1:
                    bpData.SearchTerm1,

                SearchTerm2:
                    bpData.SearchTerm2,

                AcademicTitle:
                    bpData.AcademicTitle,

                AddressID:
                    address.AddressID || '',

                StreetName:
                    address.StreetName || '',

                HouseNumber:
                    address.HouseNumber || '',

                CityName:
                    address.CityName || '',

                PostalCode:
                    address.PostalCode || '',

                Country:
                    address.Country || '',

                Region:
                    address.Region || '',

                AddressTimeZone:
                    address.AddressTimeZone || '',

                Email:
                    email,

                Phone:
                    phone,

                Mobile:
                    mobile
            };

        } catch (err) {

            console.error(
                'Supplier Detail API Error:',
                err.response?.data ||
                err.message ||
                err
            );

            req.error(
                500,
                'Failed to fetch Supplier detail from S/4HANA'
            );
        }

    });


    // =========================================================
    // 8. MY PROFILE
    //
    // GET:
    // /bp/MyProfile
    //
    // FLOW:
    //
    // Logged-in User
    //      ↓
    // Business Partner
    //      ↓
    // API_BUSINESS_PARTNER
    //      ↓
    // Supplier + Address + Contact Details
    //      ↓
    // MyProfile
    // =========================================================

    

srv.on('READ', MyProfile, async (req) => {
    try {
        // STEP 1: Identify the logged-in portal supplier
        const businessPartner = await getLoggedInBusinessPartner(req);

        console.log('========== MY PROFILE ==========');
        console.log('Portal Supplier ID:', businessPartner);

        if (!businessPartner) {
            return req.error(
                400,
                'Business Partner could not be determined for the logged-in user'
            );
        }

        // STEP 2: Resolve the S/4HANA supplier ID dynamically
        const supplierMapping = await cds.run(
            cds.ql.SELECT.one
                .from('BpService.db.SupplierMapping')
                .where({ PortalSupplierID: businessPartner })
        );

        if (!supplierMapping?.S4SupplierID) {
            return req.error(
                404,
                `No S/4HANA supplier mapping found for ${businessPartner}`
            );
        }

        const s4SupplierID = normalizeValue(
            supplierMapping.S4SupplierID
        );

        console.log('S/4 Supplier ID:', s4SupplierID);

        // STEP 3: Fetch Business Partner details
        const bpParams = new URLSearchParams({
            '$filter': `BusinessPartner eq '${s4SupplierID}'`,
            '$select': [
                'BusinessPartner',
                'Customer',
                'Supplier',
                'BusinessPartnerFullName',
                'BusinessPartnerName',
                'BusinessPartnerCategory',
                'BusinessPartnerGrouping',
                'SearchTerm1',
                'SearchTerm2'
            ].join(','),
            '$format': 'json'
        });

        const bpResponse = await executeHttpRequest(
            { destinationName: 'S4HANA1' },
            {
                method: 'GET',
                url:
                    '/sap/opu/odata/sap/API_BUSINESS_PARTNER/' +
                    'A_BusinessPartner?' +
                    bpParams.toString(),
                headers: {
                    Accept: 'application/json'
                }
            }
        );

        const bpData = bpResponse.data?.d?.results?.[0] || {};

        if (!bpData.BusinessPartner) {
            return req.error(
                404,
                `Business Partner ${s4SupplierID} was not found in S/4HANA`
            );
        }

        // STEP 4: Fetch address and communication details
        let address = {};
        let email = '';
        let phone = '';
        let mobile = '';

        try {
            const addressParams = new URLSearchParams({
                '$filter': `BusinessPartner eq '${s4SupplierID}'`,
                '$expand':
                    'to_EmailAddress,to_PhoneNumber,to_MobilePhoneNumber',
                '$format': 'json'
            });

            const addressResponse = await executeHttpRequest(
                { destinationName: 'S4HANA1' },
                {
                    method: 'GET',
                    url:
                        '/sap/opu/odata/sap/API_BUSINESS_PARTNER/' +
                        'A_BusinessPartnerAddress?' +
                        addressParams.toString(),
                    headers: {
                        Accept: 'application/json'
                    }
                }
            );

            const addresses =
                addressResponse.data?.d?.results || [];

            // Prefer the default address; otherwise use the first address
            address =
                addresses.find(item => item.IsDefaultAddress === true) ||
                addresses[0] ||
                {};

            // OData V2 expanded navigation collections
            const getExpandedResults = (navigation) => {
                const value = address[navigation];

                if (Array.isArray(value?.results)) {
                    return value.results;
                }

                if (Array.isArray(value)) {
                    return value;
                }

                return [];
            };

            const emails = getExpandedResults('to_EmailAddress');
            const phones = getExpandedResults('to_PhoneNumber');
            const mobiles = getExpandedResults('to_MobilePhoneNumber');

            // Prefer default email, then the first available email
            const emailRecord =
                emails.find(item => item.IsDefaultEmailAddress === true) ||
                emails[0];

            // Prefer default telephone, then the first available telephone
            const phoneRecord =
                phones.find(item => item.IsDefaultPhoneNumber === true) ||
                phones[0];

            // Prefer default mobile, then the first available mobile
            const mobileRecord =
                mobiles.find(item => item.IsDefaultPhoneNumber === true) ||
                mobiles[0];

            email = emailRecord?.EmailAddress || '';

            phone =
                phoneRecord?.InternationalPhoneNumber ||
                phoneRecord?.PhoneNumber ||
                '';

            mobile =
                mobileRecord?.InternationalPhoneNumber ||
                mobileRecord?.PhoneNumber ||
                '';

        } catch (communicationError) {
            console.warn(
                'Address/communication details could not be loaded:',
                communicationError.response?.data ||
                communicationError.message
            );
        }

        // STEP 5: Build the supplier profile
        const profile = {
            BusinessPartner: normalizeValue(
                bpData.BusinessPartner
            ),
            Supplier: normalizeValue(bpData.Supplier),
            Customer: normalizeValue(bpData.Customer),

            BusinessPartnerFullName:
                bpData.BusinessPartnerFullName || '',

            BusinessPartnerName:
                bpData.BusinessPartnerName || '',

            BusinessPartnerCategory:
                bpData.BusinessPartnerCategory || '',

            BusinessPartnerGrouping:
                bpData.BusinessPartnerGrouping || '',

            SearchTerm1: bpData.SearchTerm1 || '',
            SearchTerm2: bpData.SearchTerm2 || '',

            AddressID: address.AddressID || '',
            StreetName: address.StreetName || '',
            HouseNumber: address.HouseNumber || '',
            CityName: address.CityName || '',
            PostalCode: address.PostalCode || '',
            Country: address.Country || '',
            Region: address.Region || '',

            // Dynamically fetched S/4HANA communication details
            Email: email,
            Phone: phone,
            Mobile: mobile
        };

        console.log('MY PROFILE RESULT:', {
            BusinessPartner: profile.BusinessPartner,
            Supplier: profile.Supplier,
            EmailLoaded: Boolean(profile.Email),
            PhoneLoaded: Boolean(profile.Phone),
            MobileLoaded: Boolean(profile.Mobile)
        });

        return [profile];

    } catch (err) {
        console.error(
            'My Profile API Error:',
            err.response?.data ||
            err.message ||
            err
        );

        return req.error(
            500,
            'Failed to fetch Supplier Profile from S/4HANA'
        );
    }
});



    // =========================================================
    // UPDATE MY PROFILE
    //
    // Updates:
    // 1. Business Partner information
    // 2. Business Partner Address
    //
    // Email / Phone / Mobile are intentionally NOT updated here.
    // =========================================================

    srv.on('updateMyProfile', async (req) => {

        try {

            // =====================================================
            // STEP 1: GET LOGGED-IN BUSINESS PARTNER
            // =====================================================

            const businessPartner =
                getLoggedInBusinessPartner(req);

            if (!businessPartner) {
                return req.error(
                    400,
                    'Business Partner could not be determined for the logged-in user'
                );
            }


            // =====================================================
            // STEP 2: READ REQUEST DATA
            // =====================================================

            const {
                BusinessPartnerFullName,
                BusinessPartnerName,
                SearchTerm1,
                SearchTerm2,

                AddressID,
                StreetName,
                HouseNumber,
                CityName,
                PostalCode,
                Region,
                Country
            } = req.data;


            console.log(
                '=============================================='
            );

            console.log(
                'UPDATE MY PROFILE'
            );

            console.log(
                'Business Partner:',
                businessPartner
            );

            console.log(
                'Address ID:',
                AddressID
            );

            console.log(
                'Request Data:',
                req.data
            );

            console.log(
                '=============================================='
            );


            // =====================================================
            // STEP 3: UPDATE BUSINESS PARTNER
            // =====================================================

            const businessPartnerPayload = {};

            if (BusinessPartnerFullName !== undefined) {
                businessPartnerPayload.BusinessPartnerFullName =
                    BusinessPartnerFullName;
            }

            if (BusinessPartnerName !== undefined) {
                businessPartnerPayload.BusinessPartnerName =
                    BusinessPartnerName;
            }

            if (SearchTerm1 !== undefined) {
                businessPartnerPayload.SearchTerm1 =
                    SearchTerm1;
            }

            if (SearchTerm2 !== undefined) {
                businessPartnerPayload.SearchTerm2 =
                    SearchTerm2;
            }


            if (
                Object.keys(businessPartnerPayload).length > 0
            ) {

                console.log(
                    'Updating Business Partner:',
                    businessPartnerPayload
                );


                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'PATCH',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartner('${encodeURIComponent(businessPartner)}')`,

                        data:
                            businessPartnerPayload,

                        headers: {
                            Accept:
                                'application/json',

                            'Content-Type':
                                'application/json'
                        }
                    }
                );


                console.log(
                    'Business Partner updated successfully'
                );
            }


            // =====================================================
            // STEP 4: UPDATE BUSINESS PARTNER ADDRESS
            // =====================================================

            if (!AddressID) {

                console.log(
                    'No AddressID supplied. Address update skipped.'
                );

            } else {

                const addressPayload = {};


                if (StreetName !== undefined) {
                    addressPayload.StreetName =
                        StreetName;
                }

                if (HouseNumber !== undefined) {
                    addressPayload.HouseNumber =
                        HouseNumber;
                }

                if (CityName !== undefined) {
                    addressPayload.CityName =
                        CityName;
                }

                if (PostalCode !== undefined) {
                    addressPayload.PostalCode =
                        PostalCode;
                }

                if (Region !== undefined) {
                    addressPayload.Region =
                        Region;
                }

                if (Country !== undefined) {
                    addressPayload.Country =
                        Country;
                }


                if (
                    Object.keys(addressPayload).length > 0
                ) {

                    console.log(
                        'Updating Business Partner Address:'
                    );

                    console.log(
                        addressPayload
                    );


                    const addressUrl =
                        `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                        `A_BusinessPartnerAddress(` +
                        `BusinessPartner='${encodeURIComponent(businessPartner)}',` +
                        `AddressID='${encodeURIComponent(AddressID)}'` +
                        `)`;


                    console.log(
                        'Address PATCH URL:',
                        addressUrl
                    );


                    await executeHttpRequest(
                        {
                            destinationName: 'S4HANA1'
                        },
                        {
                            method: 'PATCH',

                            url:
                                addressUrl,

                            data:
                                addressPayload,

                            headers: {
                                Accept:
                                    'application/json',

                                'Content-Type':
                                    'application/json'
                            }
                        }
                    );


                    console.log(
                        'Business Partner Address updated successfully'
                    );
                }
            }


            // =====================================================
            // STEP 5: RETURN SUCCESS
            // =====================================================

            console.log(
                '=============================================='
            );

            console.log(
                'PROFILE UPDATE COMPLETED SUCCESSFULLY'
            );

            console.log(
                '=============================================='
            );


            return 'Supplier profile updated successfully';


        } catch (err) {

            console.error(
                '=============================================='
            );

            console.error(
                'UPDATE MY PROFILE ERROR'
            );

            console.error(
                'Status:',
                err.response?.status
            );

            console.error(
                'SAP Error:',
                JSON.stringify(
                    err.response?.data,
                    null,
                    2
                )
            );

            console.error(
                'Message:',
                err.message
            );

            console.error(
                '=============================================='
            );


            return req.error(
                500,
                err.response?.data?.error?.message?.value ||
                err.message ||
                'Failed to update Supplier Profile in S/4HANA'
            );
        }

    });

    // =========================================================
    // DEVELOPMENT / USER BUSINESS PARTNER RESOLUTION
    // =========================================================


    async function getLoggedInBusinessPartner(req) {
        const user = req.user;

        console.log("==============================================");
        console.log("LOGGED-IN BUSINESS PARTNER RESOLUTION");
        console.log("User ID:", user?.id);
        console.log("User Email:", user?.email);
        console.log("==============================================");

        if (!user || user.id === "anonymous") {
            console.log("User is not authenticated.");
            return null;
        }

        const email =
            user.email ||
            user.attr?.email ||
            user.id;

        if (!email || !email.includes("@")) {
            console.log("Unable to determine logged-in user email.");
            return null;
        }

        console.log("Resolved login email:", email);

        try {
            const jwtToken = user?.authInfo?.token?.jwt;

            if (!jwtToken) {
                console.log(
                    "JWT token not available for BP CAP token exchange."
                );
                return null;
            }

            const response = await executeHttpRequest(
                {
                    destinationName: "BP_CAP_APP",
                    jwt: jwtToken
                },
                {
                    method: "GET",
                    url: "/bp/getMySupplier()",
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            const supplierId = response.data?.value;

            console.log(
                "Supplier ID returned by BP CAP:",
                supplierId
            );

            if (
                supplierId === undefined ||
                supplierId === null ||
                String(supplierId).trim() === ""
            ) {
                console.log(
                    "No supplier found for logged-in user."
                );
                return null;
            }

            return normalizeValue(supplierId);

        } catch (error) {
            console.error(
                "BP CAP supplier validation failed:",
                error.response?.data || error.message || error
            );

            return null;
        }
    }


    // =========================================================
    // 6. MY PURCHASE ORDERS
    //
    // GET:
    // /bp/MyPurchaseOrders?BusinessPartner=1
    //
    // FLOW:
    // BusinessPartner
    //      ↓
    // Supplier
    //      ↓
    // Purchase Orders for that Supplier
    // =========================================================

    
srv.on('READ', MyPurchaseOrders, async (req) => {
    try {

        // STEP 1: GET PORTAL SUPPLIER ID
        const businessPartner =
            await getLoggedInBusinessPartner(req);

        console.log('==============================================');
        console.log('MY PURCHASE ORDERS');
        console.log('Portal Supplier ID:', businessPartner);
        console.log('==============================================');

        if (!businessPartner) {
            return req.error(
                400,
                'Business Partner could not be determined for the logged-in user'
            );
        }

        // STEP 2: GET DYNAMIC S/4HANA SUPPLIER MAPPING
        const supplierMapping = await cds.run(
            cds.ql.SELECT.one
                .from('BpService.db.SupplierMapping')
                .where({ PortalSupplierID: businessPartner })
        );

        if (!supplierMapping || !supplierMapping.S4SupplierID) {
            return req.error(
                404,
                `No S/4HANA supplier mapping found for ${businessPartner}`
            );
        }

        const normalizedSupplier =
            normalizeValue(supplierMapping.S4SupplierID);

        console.log(
            'Mapped S/4HANA Supplier ID:',
            normalizedSupplier
        );

        // STEP 3: FETCH PURCHASE ORDERS FROM S/4HANA
        const filter =
            `Supplier eq '${normalizedSupplier}'`;

        const queryParams = new URLSearchParams({
            '$filter': filter,
            '$format': 'json'
        });

        const poResponse = await executeHttpRequest(
            {
                destinationName: 'S4HANA1'
            },
            {
                method: 'GET',
                url:
                    '/sap/opu/odata/sap/' +
                    'API_PURCHASEORDER_PROCESS_SRV/' +
                    'A_PurchaseOrder?' +
                    queryParams.toString(),
                headers: {
                    Accept: 'application/json'
                }
            }
        );

        const myPurchaseOrders =
            poResponse.data?.d?.results || [];

        console.log(
            'Purchase Orders Found:',
            myPurchaseOrders.length
        );

        // STEP 4: RETURN EMPTY RESULT WHEN NO PURCHASE ORDERS
        if (myPurchaseOrders.length === 0) {
            console.log(
                'No Purchase Orders found for Supplier:',
                normalizedSupplier
            );

            return [];
        }

        // STEP 5: RETURN PURCHASE ORDER DATA
        return myPurchaseOrders.map(po => ({
            PurchaseOrder: po.PurchaseOrder,
            CompanyCode: po.CompanyCode || '',
            PurchaseOrderType: po.PurchaseOrderType || '',
            PurchasingProcessingStatus:
                po.PurchasingProcessingStatus || '',
            CreatedByUser: po.CreatedByUser || '',
            CreationDate: po.CreationDate || null,
            Supplier: po.Supplier || '',
            PaymentTerms: po.PaymentTerms || '',
            NetPaymentDays: po.NetPaymentDays || 0,
            PurchasingOrganization:
                po.PurchasingOrganization || '',
            PurchasingGroup: po.PurchasingGroup || '',
            PurchaseOrderDate: po.PurchaseOrderDate || null,
            DocumentCurrency: po.DocumentCurrency || '',
            SupplierQuotationExternalID:
                po.SupplierQuotationExternalID || '',
            SupplierRespSalesPersonName:
                po.SupplierRespSalesPersonName || '',
            SupplierPhoneNumber: po.SupplierPhoneNumber || '',
            IncotermsClassification:
                po.IncotermsClassification || '',
            IncotermsLocation1: po.IncotermsLocation1 || '',
            IncotermsLocation2: po.IncotermsLocation2 || '',
            AddressCityName: po.AddressCityName || '',
            AddressPostalCode: po.AddressPostalCode || '',
            AddressStreetName: po.AddressStreetName || '',
            AddressHouseNumber: po.AddressHouseNumber || '',
            AddressRegion: po.AddressRegion || '',
            AddressCountry: po.AddressCountry || ''
        }));

    } catch (err) {

        console.error(
            'Purchase Order API Error:',
            err.response?.data ||
            err.message ||
            err
        );

        return req.error(
            500,
            'Failed to fetch Purchase Orders from S/4HANA'
        );
    }
});

    srv.on('READ', MyPurchaseOrderDetails, async (req) => {

        try {

            const businessPartner =
                req.data?.BusinessPartner ||
                req.params?.[0]?.BusinessPartner ||
                req.http?.req?.query?.BusinessPartner;

            const purchaseOrder =
                req.data?.PurchaseOrder ||
                req.params?.[0]?.PurchaseOrder ||
                req.http?.req?.query?.PurchaseOrder;


            console.log('==============================================');
            console.log('MY PURCHASE ORDER DETAILS');
            console.log('BusinessPartner:', businessPartner);
            console.log('PurchaseOrder:', purchaseOrder);
            console.log('==============================================');


            if (!businessPartner) {
                return req.error(
                    400,
                    'BusinessPartner is required'
                );
            }


            if (!purchaseOrder) {
                return req.error(
                    400,
                    'PurchaseOrder is required'
                );
            }


            // =====================================================
            // STEP 1
            // Business Partner -> Supplier
            // =====================================================

            const bpResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_BUSINESS_PARTNER/` +
                            `A_BusinessPartner('${encodeURIComponent(businessPartner)}')`,

                        params: {
                            '$select':
                                'BusinessPartner,Supplier',
                            '$format':
                                'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const bpData =
                bpResponse.data?.d ||
                bpResponse.data ||
                {};


            const supplier =
                bpData.Supplier;
            console.log(
                'Supplier from BP:',
                supplier
            );
            if (!supplier) {
                return req.error(
                    404,
                    `No Supplier found for Business Partner ${businessPartner}`
                );
            }


            // =====================================================
            // STEP 2
            // Get exact PO from S/4HANA
            // =====================================================

            const poResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',

                        url:
                            `/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/` +
                            `A_PurchaseOrder('${encodeURIComponent(purchaseOrder)}')`,

                        params: {
                            '$format':
                                'json'
                        },

                        headers: {
                            Accept:
                                'application/json'
                        }
                    }
                );


            const po =
                poResponse.data?.d ||
                poResponse.data ||
                {};


            console.log(
                'PO returned:',
                JSON.stringify(
                    po,
                    null,
                    2
                )
            );


            if (!po.PurchaseOrder) {

                return req.error(
                    404,
                    `Purchase Order ${purchaseOrder} not found`
                );

            }


            // =====================================================
            // STEP 3
            // Check Supplier
            // =====================================================

            console.log(
                'BP Supplier:',
                supplier
            );

            console.log(
                'PO Supplier:',
                po.Supplier
            );


            const normalizedSupplier =
                normalizeValue(supplier);


            const normalizedPOSupplier =
                normalizeValue(po.Supplier);


            console.log(
                'Normalized BP Supplier:',
                normalizedSupplier
            );

            console.log(
                'Normalized PO Supplier:',
                normalizedPOSupplier
            );


            if (
                normalizedSupplier !==
                normalizedPOSupplier
            ) {

                return req.error(
                    403,
                    `Purchase Order ${purchaseOrder} does not belong to Business Partner ${businessPartner}`
                );

            }


            // =====================================================
            // STEP 4
            // Return PO details
            // =====================================================

            return {

                BusinessPartner:
                    String(businessPartner),

                PurchaseOrder:
                    po.PurchaseOrder,

                CompanyCode:
                    po.CompanyCode || '',

                PurchaseOrderType:
                    po.PurchaseOrderType || '',

                PurchasingProcessingStatus:
                    po.PurchasingProcessingStatus || '',

                CreatedByUser:
                    po.CreatedByUser || '',

                CreationDate:
                    po.CreationDate || null,

                Supplier:
                    po.Supplier || '',

                PaymentTerms:
                    po.PaymentTerms || '',

                CashDiscount1Days:
                    po.CashDiscount1Days ?? null,

                CashDiscount2Days:
                    po.CashDiscount2Days ?? null,

                NetPaymentDays:
                    po.NetPaymentDays ?? null,

                CashDiscount1Percent:
                    po.CashDiscount1Percent ?? null,

                CashDiscount2Percent:
                    po.CashDiscount2Percent ?? null,

                PurchasingOrganization:
                    po.PurchasingOrganization || '',

                PurchasingGroup:
                    po.PurchasingGroup || '',

                PurchaseOrderDate:
                    po.PurchaseOrderDate || null,

                DocumentCurrency:
                    po.DocumentCurrency || '',

                ExchangeRate:
                    po.ExchangeRate || '',

                SupplierQuotationExternalID:
                    po.SupplierQuotationExternalID || '',

                SupplierRespSalesPersonName:
                    po.SupplierRespSalesPersonName || '',

                SupplierPhoneNumber:
                    po.SupplierPhoneNumber || '',

                IncotermsClassification:
                    po.IncotermsClassification || '',

                IncotermsLocation1:
                    po.IncotermsLocation1 || '',

                IncotermsLocation2:
                    po.IncotermsLocation2 || '',

                AddressCityName:
                    po.AddressCityName || '',

                AddressHouseNumber:
                    po.AddressHouseNumber || '',

                AddressName:
                    po.AddressName || '',

                AddressPostalCode:
                    po.AddressPostalCode || '',

                AddressStreetName:
                    po.AddressStreetName || '',

                AddressPhoneNumber:
                    po.AddressPhoneNumber || '',

                AddressRegion:
                    po.AddressRegion || '',

                AddressCountry:
                    po.AddressCountry || '',

                AddressCorrespondenceLanguage:
                    po.AddressCorrespondenceLanguage || ''

            };


        } catch (err) {

            console.error(
                '=============================================='
            );

            console.error(
                'PO DETAILS ERROR'
            );

            console.error(
                err.response?.data ||
                err.message ||
                err
            );

            console.error(
                '=============================================='
            );


            return req.error(
                500,
                'Failed to fetch Purchase Order details from S/4HANA'
            );

        }

    });
    // ============================================================
    // MY PURCHASE ORDER ITEMS
    // ============================================================
    this.on('READ', 'MyPurchaseOrderItems', async (req) => {

        // --------------------------------------------------------
        // Read query parameters from OData URL
        // Example:
        // /MyPurchaseOrderItems?BusinessPartner=1&PurchaseOrder=4500003742
        // --------------------------------------------------------

        const BusinessPartner =
            req._.req.query.BusinessPartner;

        const PurchaseOrder =
            req._.req.query.PurchaseOrder;

        console.log('==============================================');
        console.log('MY PURCHASE ORDER ITEMS');
        console.log('BusinessPartner:', BusinessPartner);
        console.log('PurchaseOrder:', PurchaseOrder);
        console.log('==============================================');

        if (!BusinessPartner) {
            return req.error(400, 'BusinessPartner is required');
        }

        if (!PurchaseOrder) {
            return req.error(400, 'PurchaseOrder is required');
        }
        // --------------------------------------------------------
        // 1. Validate input
        // --------------------------------------------------------
        if (!BusinessPartner) {
            return req.error(400, 'BusinessPartner is required');
        }

        if (!PurchaseOrder) {
            return req.error(400, 'PurchaseOrder is required');
        }

        // --------------------------------------------------------
        // 2. Get Business Partner from S/4HANA
        // --------------------------------------------------------
        const bpResponse = await executeHttpRequest(
            { destinationName: 'S4HANA1' },
            {
                method: 'GET',
                url: `/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner('${BusinessPartner}')?$format=json`
            }
        );

        const bp = bpResponse.data?.d;

        if (!bp) {
            return req.error(
                404,
                `Business Partner ${BusinessPartner} not found`
            );
        }

        const bpSupplier = String(
            bp.Supplier || BusinessPartner
        ).trim();

        console.log('Supplier from BP:', bpSupplier);

        // --------------------------------------------------------
        // 3. Get PO Header from S/4HANA
        // --------------------------------------------------------
        const poResponse = await executeHttpRequest(
            { destinationName: 'S4HANA1' },
            {
                method: 'GET',
                url: `/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/A_PurchaseOrder('${PurchaseOrder}')?$format=json`
            }
        );

        const po = poResponse.data?.d;

        if (!po) {
            return req.error(
                404,
                `Purchase Order ${PurchaseOrder} not found`
            );
        }

        console.log('PO Supplier:', po.Supplier);

        // --------------------------------------------------------
        // 4. Validate that PO belongs to Business Partner
        // --------------------------------------------------------
        const normalizedBpSupplier = String(bpSupplier).trim();
        const normalizedPoSupplier = String(po.Supplier || '').trim();

        console.log('Normalized BP Supplier:', normalizedBpSupplier);
        console.log('Normalized PO Supplier:', normalizedPoSupplier);

        if (normalizedBpSupplier !== normalizedPoSupplier) {
            return req.error(
                403,
                `Purchase Order ${PurchaseOrder} does not belong to Business Partner ${BusinessPartner}`
            );
        }

        // --------------------------------------------------------
        // 5. Get PO Items from S/4HANA
        // --------------------------------------------------------
        const itemResponse = await executeHttpRequest(
            { destinationName: 'S4HANA1' },
            {
                method: 'GET',
                url:
                    `/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV/` +
                    `A_PurchaseOrder('${PurchaseOrder}')/to_PurchaseOrderItem?$format=json`
            }
        );

        const items = itemResponse.data?.d?.results || [];

        console.log('Number of PO Items:', items.length);

        // --------------------------------------------------------
        // 6. Convert S/4HANA response to CAP response
        // --------------------------------------------------------
        return items.map(item => ({

            BusinessPartner: String(BusinessPartner),

            PurchaseOrder: String(
                item.PurchaseOrder || PurchaseOrder
            ),

            PurchaseOrderItem: String(
                item.PurchaseOrderItem || ''
            ),

            PurchaseOrderItemText:
                item.PurchaseOrderItemText || '',

            Plant:
                item.Plant || '',

            StorageLocation:
                item.StorageLocation || '',

            MaterialGroup:
                item.MaterialGroup || '',

            PurchasingInfoRecord:
                item.PurchasingInfoRecord || '',

            SupplierMaterialNumber:
                item.SupplierMaterialNumber || '',

            OrderQuantity:
                item.OrderQuantity != null
                    ? Number(item.OrderQuantity)
                    : 0,

            PurchaseOrderQuantityUnit:
                item.PurchaseOrderQuantityUnit || '',

            OrderPriceUnit:
                item.OrderPriceUnit || '',

            DocumentCurrency:
                item.DocumentCurrency || '',

            NetPriceAmount:
                item.NetPriceAmount != null
                    ? Number(item.NetPriceAmount)
                    : 0,

            NetPriceQuantity:
                item.NetPriceQuantity != null
                    ? Number(item.NetPriceQuantity)
                    : 0,

            TaxCode:
                item.TaxCode || '',

            PurchaseOrderItemCategory:
                item.PurchaseOrderItemCategory || '',

            AccountAssignmentCategory:
                item.AccountAssignmentCategory || '',

            GoodsReceiptIsExpected:
                item.GoodsReceiptIsExpected ?? false,

            InvoiceIsExpected:
                item.InvoiceIsExpected ?? false,

            IsCompletelyDelivered:
                item.IsCompletelyDelivered ?? false,

            IsFinallyInvoiced:
                item.IsFinallyInvoiced ?? false,

            Material:
                item.Material || '',

            ManufacturerMaterial:
                item.ManufacturerMaterial || '',

            ProductType:
                item.ProductType || '',

            DeliveryAddressName:
                item.DeliveryAddressName || '',

            DeliveryAddressStreetName:
                item.DeliveryAddressStreetName || '',

            DeliveryAddressHouseNumber:
                item.DeliveryAddressHouseNumber || '',

            DeliveryAddressCityName:
                item.DeliveryAddressCityName || '',

            DeliveryAddressPostalCode:
                item.DeliveryAddressPostalCode || '',

            DeliveryAddressRegion:
                item.DeliveryAddressRegion || '',

            DeliveryAddressCountry:
                item.DeliveryAddressCountry || ''

        }));
    });


    srv.on('READ', MyDashboard, async (req) => {
        try {

            // -----------------------------------------------------
            // STEP 1: GET LOGGED-IN PORTAL SUPPLIER ID
            // -----------------------------------------------------

            const supplierId =
                await getLoggedInBusinessPartner(req);

            console.log('==============================================');
            console.log('MY DASHBOARD');
            console.log('Portal Supplier ID:', supplierId);
            console.log('==============================================');

            if (!supplierId) {
                return req.error(
                    403,
                    'This email is not registered in Business Partner. Please contact the administrator.'
                );
            }

            // -----------------------------------------------------
            // STEP 2: GET S/4 SUPPLIER ID FROM MAPPING TABLE
            // -----------------------------------------------------

            const supplierMapping = await cds.run(
                cds.ql.SELECT.one
                    .from('BpService.db.SupplierMapping')
                    .where({
                        PortalSupplierID: supplierId
                    })
            );

            if (!supplierMapping || !supplierMapping.S4SupplierID) {
                console.log(
                    'No S/4 mapping found for Portal Supplier:',
                    supplierId
                );

                return req.error(
                    404,
                    `No S/4HANA supplier mapping found for Portal Supplier ${supplierId}.`
                );
            }

            const s4SupplierId =
                supplierMapping.S4SupplierID;

            console.log('Portal Supplier ID:', supplierId);
            console.log('Mapped S/4 Supplier ID:', s4SupplierId);

            // -----------------------------------------------------
            // STEP 3: FIND S/4 BUSINESS PARTNER USING MAPPED ID
            // -----------------------------------------------------

            const supplierFilter =
                `Supplier eq '${s4SupplierId}'`;

            const bpQueryParams =
                new URLSearchParams({
                    '$filter': supplierFilter,
                    '$select':
                        'BusinessPartner,' +
                        'Supplier,' +
                        'BusinessPartnerFullName,' +
                        'BusinessPartnerName',
                    '$format': 'json'
                });

            console.log(
                'Finding S/4 Business Partner using:',
                s4SupplierId
            );

            const bpResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',
                        url:
                            '/sap/opu/odata/sap/' +
                            'API_BUSINESS_PARTNER/' +
                            'A_BusinessPartner?' +
                            bpQueryParams.toString(),
                        headers: {
                            Accept: 'application/json'
                        }
                    }
                );

            const bpResults =
                bpResponse.data?.d?.results || [];

            console.log(
                'S/4 Business Partner Results:',
                bpResults.length
            );

            if (bpResults.length === 0) {
                return req.error(
                    404,
                    `Mapped S/4HANA Supplier ${s4SupplierId} was not found.`
                );
            }

            const bpData = bpResults[0];

            const businessPartner =
                bpData.BusinessPartner;

            const supplier =
                bpData.Supplier;

            const supplierName =
                bpData.BusinessPartnerFullName ||
                bpData.BusinessPartnerName ||
                '';

            console.log('S/4 Business Partner:', businessPartner);
            console.log('S/4 Supplier:', supplier);
            console.log('Supplier Name:', supplierName);

            // -----------------------------------------------------
            // STEP 4: NORMALIZE S/4 SUPPLIER ID
            // -----------------------------------------------------

            const normalizedSupplier =
                normalizeValue(
                    supplier || s4SupplierId
                );

            console.log(
                'Normalized S/4 Supplier:',
                normalizedSupplier
            );

            // -----------------------------------------------------
            // STEP 5: FETCH PURCHASE ORDERS
            // -----------------------------------------------------

            const filter =
                `Supplier eq '${normalizedSupplier}'`;

            const queryParams =
                new URLSearchParams({
                    '$filter': filter,
                    '$format': 'json'
                });

            console.log(
                'Fetching dashboard POs using filter:',
                filter
            );

            const poResponse =
                await executeHttpRequest(
                    {
                        destinationName: 'S4HANA1'
                    },
                    {
                        method: 'GET',
                        url:
                            '/sap/opu/odata/sap/' +
                            'API_PURCHASEORDER_PROCESS_SRV/' +
                            'A_PurchaseOrder?' +
                            queryParams.toString(),
                        headers: {
                            Accept: 'application/json'
                        }
                    }
                );

            const purchaseOrders =
                poResponse.data?.d?.results || [];

            console.log(
                'Dashboard Purchase Orders:',
                purchaseOrders.length
            );

            // -----------------------------------------------------
            // STEP 6: CALCULATE TOTAL PURCHASE ORDERS
            // -----------------------------------------------------

            const totalPurchaseOrders =
                purchaseOrders.length;

            // -----------------------------------------------------
            // STEP 7: CALCULATE OPEN / COMPLETED ORDERS
            // -----------------------------------------------------

            let completedPurchaseOrders = 0;
            let openPurchaseOrders = 0;

            purchaseOrders.forEach(po => {

                console.log(
                    `PO ${po.PurchaseOrder} | ` +
                    `Status ${po.PurchasingProcessingStatus}`
                );

                if (po.PurchasingProcessingStatus === '05') {
                    completedPurchaseOrders++;
                } else {
                    openPurchaseOrders++;
                }
            });

            // -----------------------------------------------------
            // STEP 8: BUILD DASHBOARD
            // -----------------------------------------------------

            const dashboard = {
                ID: '1',

                BusinessPartner:
                    businessPartner,

                Supplier:
                    normalizedSupplier,

                SupplierName:
                    supplierName,

                TotalPurchaseOrders:
                    totalPurchaseOrders,

                OpenPurchaseOrders:
                    openPurchaseOrders,

                CompletedPurchaseOrders:
                    completedPurchaseOrders
            };

            // -----------------------------------------------------
            // STEP 9: LOG DASHBOARD
            // -----------------------------------------------------

            console.log('==============================================');
            console.log('DASHBOARD RESULT');
            console.log(
                JSON.stringify(dashboard, null, 2)
            );
            console.log('==============================================');

            // -----------------------------------------------------
            // STEP 10: RETURN DASHBOARD
            // -----------------------------------------------------

            return [dashboard];

        } catch (err) {

            console.error(
                'Dashboard API Error:',
                err.response?.data ||
                err.message ||
                err
            );

            return req.error(
                500,
                'Failed to fetch Supplier Dashboard from S/4HANA'
            );
        }
    });

    // =========================================================
    // SEND PURCHASE ORDER EMAIL
    // =========================================================

    this.on("sendPurchaseOrderEmail", async (req) => {

        const {
            BusinessPartner,
            PurchaseOrder,
            RecipientEmail
        } = req.data;


        console.log("====================================");
        console.log("SEND PURCHASE ORDER EMAIL");
        console.log("Business Partner:", BusinessPartner);
        console.log("Purchase Order:", PurchaseOrder);
        console.log("Recipient Email:", RecipientEmail);
        console.log("====================================");


        // =====================================================
        // VALIDATION
        // =====================================================

        if (!BusinessPartner) {
            return req.error(
                400,
                "Business Partner is required."
            );
        }


        if (!PurchaseOrder) {
            return req.error(
                400,
                "Purchase Order is required."
            );
        }


        if (!RecipientEmail) {
            return req.error(
                400,
                "Recipient email is required."
            );
        }


        // =====================================================
        // EMAIL VALIDATION
        // =====================================================

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(RecipientEmail)) {
            return req.error(
                400,
                "Invalid email address."
            );
        }


        // =====================================================
        // EMAIL CONTENT
        // =====================================================

        const subject =
            `Purchase Order ${PurchaseOrder}`;


        const message =
            `Dear Supplier,

Please find the details of Purchase Order ${PurchaseOrder}.

Business Partner: ${BusinessPartner}
Purchase Order: ${PurchaseOrder}

Regards,
Supplier Portal`;


        console.log("Email Subject:", subject);
        console.log("Email Message:", message);


        // =====================================================
        // SEND EMAIL THROUGH BTP MAIL DESTINATION
        // =====================================================

        try {

            console.log(
                "Connecting to GmailSMTP destination..."
            );


            const result = await sendMail(
                {
                    destinationName: "GmailSMTP"
                },
                {
                    from: "namballabharath399@gmail.com",
                    to: RecipientEmail,
                    subject: subject,
                    text: message
                }
            );

            console.log("====================================");
            console.log("SMTP SEND RESULT");
            console.log(JSON.stringify(result, null, 2));
            console.log("====================================");

            return `Purchase Order ${PurchaseOrder} sent successfully to ${RecipientEmail}.`;


        } catch (error) {

            console.error(
                "===================================="
            );

            console.error(
                "EMAIL SENDING FAILED"
            );

            console.error(
                error
            );

            console.error(
                "===================================="
            );
            return req.error(
                500,
                "Failed to send Purchase Order email: " +
                error.message
            );
        }
    });
});