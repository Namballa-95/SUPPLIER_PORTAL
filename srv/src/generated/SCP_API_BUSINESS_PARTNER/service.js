"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scpApiBusinessPartner = scpApiBusinessPartner;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressApi_1 = require("./AddressApi");
const AddressIndependentCommunicationApi_1 = require("./AddressIndependentCommunicationApi");
const AddressIndependentEmailApi_1 = require("./AddressIndependentEmailApi");
const AddressIndependentEmailAddressDummyApi_1 = require("./AddressIndependentEmailAddressDummyApi");
const AddressIndependentFaxNumberApi_1 = require("./AddressIndependentFaxNumberApi");
const AddressIndependentFaxNumberDummyApi_1 = require("./AddressIndependentFaxNumberDummyApi");
const AddressIndependentPhoneNumberApi_1 = require("./AddressIndependentPhoneNumberApi");
const AddressIndependentPhoneNumberDummyApi_1 = require("./AddressIndependentPhoneNumberDummyApi");
const AddressIndependentWebApi_1 = require("./AddressIndependentWebApi");
const AddressIndependentWebDummyApi_1 = require("./AddressIndependentWebDummyApi");
const AddressInformationApi_1 = require("./AddressInformationApi");
const AddressOrganizationNameApi_1 = require("./AddressOrganizationNameApi");
const AddressPersonNameApi_1 = require("./AddressPersonNameApi");
const AddressUsageApi_1 = require("./AddressUsageApi");
const BusinessPartnerApi_1 = require("./BusinessPartnerApi");
const BusinessPartnerBankApi_1 = require("./BusinessPartnerBankApi");
const BusinessPartnerRelationshipApi_1 = require("./BusinessPartnerRelationshipApi");
const BusinessPartnerWhldgTaxApi_1 = require("./BusinessPartnerWhldgTaxApi");
const C_CountriesApi_1 = require("./C_CountriesApi");
const CommunicationDataTextApi_1 = require("./CommunicationDataTextApi");
const ContactPersonApi_1 = require("./ContactPersonApi");
const CountryTextsApi_1 = require("./CountryTextsApi");
const CustomerApi_1 = require("./CustomerApi");
const CustomerPartnerFunctionApi_1 = require("./CustomerPartnerFunctionApi");
const EmailAddressApi_1 = require("./EmailAddressApi");
const FaxNumberApi_1 = require("./FaxNumberApi");
const GroupNameApi_1 = require("./GroupNameApi");
const IdentificationApi_1 = require("./IdentificationApi");
const IndustrySectorApi_1 = require("./IndustrySectorApi");
const OrganizationNameApi_1 = require("./OrganizationNameApi");
const PaymentCardApi_1 = require("./PaymentCardApi");
const PersonNameApi_1 = require("./PersonNameApi");
const PhoneNumberApi_1 = require("./PhoneNumberApi");
const PostalAddressApi_1 = require("./PostalAddressApi");
const RoleApi_1 = require("./RoleApi");
const SalesAreaApi_1 = require("./SalesAreaApi");
const SalesTaxApi_1 = require("./SalesTaxApi");
const SubdivisionTextsApi_1 = require("./SubdivisionTextsApi");
const SubdivisionsApi_1 = require("./SubdivisionsApi");
const SupplierApi_1 = require("./SupplierApi");
const SupplierCompanyApi_1 = require("./SupplierCompanyApi");
const SupplierPartnerFunctionApi_1 = require("./SupplierPartnerFunctionApi");
const SupplierPurchasingOrgApi_1 = require("./SupplierPurchasingOrgApi");
const TaxNumberApi_1 = require("./TaxNumberApi");
const WebApi_1 = require("./WebApi");
const WorkPlaceAddressInformationApi_1 = require("./WorkPlaceAddressInformationApi");
const WorkplaceApi_1 = require("./WorkplaceApi");
const operations_1 = require("./operations");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function scpApiBusinessPartner(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new ScpApiBusinessPartner((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class ScpApiBusinessPartner {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get addressApi() {
        const api = this.initApi('addressApi', AddressApi_1.AddressApi);
        const linkedApis = [
            this.initApi('workplaceApi', WorkplaceApi_1.WorkplaceApi),
            this.initApi('emailAddressApi', EmailAddressApi_1.EmailAddressApi),
            this.initApi('phoneNumberApi', PhoneNumberApi_1.PhoneNumberApi),
            this.initApi('phoneNumberApi', PhoneNumberApi_1.PhoneNumberApi),
            this.initApi('faxNumberApi', FaxNumberApi_1.FaxNumberApi),
            this.initApi('webApi', WebApi_1.WebApi),
            this.initApi('postalAddressApi', PostalAddressApi_1.PostalAddressApi),
            this.initApi('addressPersonNameApi', AddressPersonNameApi_1.AddressPersonNameApi),
            this.initApi('addressOrganizationNameApi', AddressOrganizationNameApi_1.AddressOrganizationNameApi),
            this.initApi('postalAddressApi', PostalAddressApi_1.PostalAddressApi),
            this.initApi('emailAddressApi', EmailAddressApi_1.EmailAddressApi),
            this.initApi('phoneNumberApi', PhoneNumberApi_1.PhoneNumberApi),
            this.initApi('phoneNumberApi', PhoneNumberApi_1.PhoneNumberApi),
            this.initApi('faxNumberApi', FaxNumberApi_1.FaxNumberApi),
            this.initApi('webApi', WebApi_1.WebApi),
            this.initApi('addressPersonNameApi', AddressPersonNameApi_1.AddressPersonNameApi),
            this.initApi('addressOrganizationNameApi', AddressOrganizationNameApi_1.AddressOrganizationNameApi),
            this.initApi('workplaceApi', WorkplaceApi_1.WorkplaceApi),
            this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentCommunicationApi() {
        const api = this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi);
        const linkedApis = [
            this.initApi('addressIndependentPhoneNumberApi', AddressIndependentPhoneNumberApi_1.AddressIndependentPhoneNumberApi),
            this.initApi('addressIndependentPhoneNumberApi', AddressIndependentPhoneNumberApi_1.AddressIndependentPhoneNumberApi),
            this.initApi('addressIndependentFaxNumberApi', AddressIndependentFaxNumberApi_1.AddressIndependentFaxNumberApi),
            this.initApi('addressIndependentEmailApi', AddressIndependentEmailApi_1.AddressIndependentEmailApi),
            this.initApi('addressIndependentWebApi', AddressIndependentWebApi_1.AddressIndependentWebApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentEmailApi() {
        const api = this.initApi('addressIndependentEmailApi', AddressIndependentEmailApi_1.AddressIndependentEmailApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentEmailAddressDummyApi() {
        const api = this.initApi('addressIndependentEmailAddressDummyApi', AddressIndependentEmailAddressDummyApi_1.AddressIndependentEmailAddressDummyApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentFaxNumberApi() {
        const api = this.initApi('addressIndependentFaxNumberApi', AddressIndependentFaxNumberApi_1.AddressIndependentFaxNumberApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentFaxNumberDummyApi() {
        const api = this.initApi('addressIndependentFaxNumberDummyApi', AddressIndependentFaxNumberDummyApi_1.AddressIndependentFaxNumberDummyApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentPhoneNumberApi() {
        const api = this.initApi('addressIndependentPhoneNumberApi', AddressIndependentPhoneNumberApi_1.AddressIndependentPhoneNumberApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentPhoneNumberDummyApi() {
        const api = this.initApi('addressIndependentPhoneNumberDummyApi', AddressIndependentPhoneNumberDummyApi_1.AddressIndependentPhoneNumberDummyApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentWebApi() {
        const api = this.initApi('addressIndependentWebApi', AddressIndependentWebApi_1.AddressIndependentWebApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressIndependentWebDummyApi() {
        const api = this.initApi('addressIndependentWebDummyApi', AddressIndependentWebDummyApi_1.AddressIndependentWebDummyApi);
        const linkedApis = [
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressInformationApi() {
        const api = this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi);
        const linkedApis = [
            this.initApi('addressUsageApi', AddressUsageApi_1.AddressUsageApi),
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressOrganizationNameApi() {
        const api = this.initApi('addressOrganizationNameApi', AddressOrganizationNameApi_1.AddressOrganizationNameApi);
        const linkedApis = [this.initApi('addressApi', AddressApi_1.AddressApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressPersonNameApi() {
        const api = this.initApi('addressPersonNameApi', AddressPersonNameApi_1.AddressPersonNameApi);
        const linkedApis = [this.initApi('addressApi', AddressApi_1.AddressApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addressUsageApi() {
        const api = this.initApi('addressUsageApi', AddressUsageApi_1.AddressUsageApi);
        const linkedApis = [
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi),
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get businessPartnerApi() {
        const api = this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi);
        const linkedApis = [
            this.initApi('customerApi', CustomerApi_1.CustomerApi),
            this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi),
            this.initApi('personNameApi', PersonNameApi_1.PersonNameApi),
            this.initApi('organizationNameApi', OrganizationNameApi_1.OrganizationNameApi),
            this.initApi('groupNameApi', GroupNameApi_1.GroupNameApi),
            this.initApi('identificationApi', IdentificationApi_1.IdentificationApi),
            this.initApi('industrySectorApi', IndustrySectorApi_1.IndustrySectorApi),
            this.initApi('roleApi', RoleApi_1.RoleApi),
            this.initApi('addressUsageApi', AddressUsageApi_1.AddressUsageApi),
            this.initApi('taxNumberApi', TaxNumberApi_1.TaxNumberApi),
            this.initApi('industrySectorApi', IndustrySectorApi_1.IndustrySectorApi),
            this.initApi('personNameApi', PersonNameApi_1.PersonNameApi),
            this.initApi('organizationNameApi', OrganizationNameApi_1.OrganizationNameApi),
            this.initApi('groupNameApi', GroupNameApi_1.GroupNameApi),
            this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi),
            this.initApi('addressUsageApi', AddressUsageApi_1.AddressUsageApi),
            this.initApi('addressUsageApi', AddressUsageApi_1.AddressUsageApi),
            this.initApi('businessPartnerRelationshipApi', BusinessPartnerRelationshipApi_1.BusinessPartnerRelationshipApi),
            this.initApi('businessPartnerRelationshipApi', BusinessPartnerRelationshipApi_1.BusinessPartnerRelationshipApi),
            this.initApi('businessPartnerRelationshipApi', BusinessPartnerRelationshipApi_1.BusinessPartnerRelationshipApi),
            this.initApi('businessPartnerRelationshipApi', BusinessPartnerRelationshipApi_1.BusinessPartnerRelationshipApi),
            this.initApi('supplierApi', SupplierApi_1.SupplierApi),
            this.initApi('businessPartnerBankApi', BusinessPartnerBankApi_1.BusinessPartnerBankApi),
            this.initApi('paymentCardApi', PaymentCardApi_1.PaymentCardApi),
            this.initApi('addressIndependentCommunicationApi', AddressIndependentCommunicationApi_1.AddressIndependentCommunicationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get businessPartnerBankApi() {
        const api = this.initApi('businessPartnerBankApi', BusinessPartnerBankApi_1.BusinessPartnerBankApi);
        const linkedApis = [
            this.initApi('c_CountriesApi', C_CountriesApi_1.C_CountriesApi),
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get businessPartnerRelationshipApi() {
        const api = this.initApi('businessPartnerRelationshipApi', BusinessPartnerRelationshipApi_1.BusinessPartnerRelationshipApi);
        const linkedApis = [
            this.initApi('contactPersonApi', ContactPersonApi_1.ContactPersonApi),
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi),
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get businessPartnerWhldgTaxApi() {
        const api = this.initApi('businessPartnerWhldgTaxApi', BusinessPartnerWhldgTaxApi_1.BusinessPartnerWhldgTaxApi);
        const linkedApis = [this.initApi('supplierCompanyApi', SupplierCompanyApi_1.SupplierCompanyApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get c_CountriesApi() {
        const api = this.initApi('c_CountriesApi', C_CountriesApi_1.C_CountriesApi);
        const linkedApis = [
            this.initApi('countryTextsApi', CountryTextsApi_1.CountryTextsApi),
            this.initApi('subdivisionsApi', SubdivisionsApi_1.SubdivisionsApi),
            this.initApi('countryTextsApi', CountryTextsApi_1.CountryTextsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get communicationDataTextApi() {
        return this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi);
    }
    get contactPersonApi() {
        const api = this.initApi('contactPersonApi', ContactPersonApi_1.ContactPersonApi);
        const linkedApis = [
            this.initApi('businessPartnerRelationshipApi', BusinessPartnerRelationshipApi_1.BusinessPartnerRelationshipApi),
            this.initApi('workPlaceAddressInformationApi', WorkPlaceAddressInformationApi_1.WorkPlaceAddressInformationApi),
            this.initApi('workPlaceAddressInformationApi', WorkPlaceAddressInformationApi_1.WorkPlaceAddressInformationApi),
            this.initApi('workPlaceAddressInformationApi', WorkPlaceAddressInformationApi_1.WorkPlaceAddressInformationApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get countryTextsApi() {
        return this.initApi('countryTextsApi', CountryTextsApi_1.CountryTextsApi);
    }
    get customerApi() {
        const api = this.initApi('customerApi', CustomerApi_1.CustomerApi);
        const linkedApis = [
            this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi),
            this.initApi('salesAreaApi', SalesAreaApi_1.SalesAreaApi),
            this.initApi('salesTaxApi', SalesTaxApi_1.SalesTaxApi),
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get customerPartnerFunctionApi() {
        const api = this.initApi('customerPartnerFunctionApi', CustomerPartnerFunctionApi_1.CustomerPartnerFunctionApi);
        const linkedApis = [this.initApi('salesAreaApi', SalesAreaApi_1.SalesAreaApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get emailAddressApi() {
        const api = this.initApi('emailAddressApi', EmailAddressApi_1.EmailAddressApi);
        const linkedApis = [
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get faxNumberApi() {
        const api = this.initApi('faxNumberApi', FaxNumberApi_1.FaxNumberApi);
        const linkedApis = [
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get groupNameApi() {
        const api = this.initApi('groupNameApi', GroupNameApi_1.GroupNameApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get identificationApi() {
        const api = this.initApi('identificationApi', IdentificationApi_1.IdentificationApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get industrySectorApi() {
        const api = this.initApi('industrySectorApi', IndustrySectorApi_1.IndustrySectorApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get organizationNameApi() {
        const api = this.initApi('organizationNameApi', OrganizationNameApi_1.OrganizationNameApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get paymentCardApi() {
        const api = this.initApi('paymentCardApi', PaymentCardApi_1.PaymentCardApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get personNameApi() {
        const api = this.initApi('personNameApi', PersonNameApi_1.PersonNameApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get phoneNumberApi() {
        const api = this.initApi('phoneNumberApi', PhoneNumberApi_1.PhoneNumberApi);
        const linkedApis = [
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get postalAddressApi() {
        const api = this.initApi('postalAddressApi', PostalAddressApi_1.PostalAddressApi);
        const linkedApis = [this.initApi('addressApi', AddressApi_1.AddressApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get roleApi() {
        const api = this.initApi('roleApi', RoleApi_1.RoleApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesAreaApi() {
        const api = this.initApi('salesAreaApi', SalesAreaApi_1.SalesAreaApi);
        const linkedApis = [
            this.initApi('customerPartnerFunctionApi', CustomerPartnerFunctionApi_1.CustomerPartnerFunctionApi),
            this.initApi('customerApi', CustomerApi_1.CustomerApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get salesTaxApi() {
        const api = this.initApi('salesTaxApi', SalesTaxApi_1.SalesTaxApi);
        const linkedApis = [this.initApi('customerApi', CustomerApi_1.CustomerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get subdivisionTextsApi() {
        return this.initApi('subdivisionTextsApi', SubdivisionTextsApi_1.SubdivisionTextsApi);
    }
    get subdivisionsApi() {
        const api = this.initApi('subdivisionsApi', SubdivisionsApi_1.SubdivisionsApi);
        const linkedApis = [
            this.initApi('subdivisionTextsApi', SubdivisionTextsApi_1.SubdivisionTextsApi),
            this.initApi('subdivisionTextsApi', SubdivisionTextsApi_1.SubdivisionTextsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get supplierApi() {
        const api = this.initApi('supplierApi', SupplierApi_1.SupplierApi);
        const linkedApis = [
            this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi),
            this.initApi('addressInformationApi', AddressInformationApi_1.AddressInformationApi),
            this.initApi('supplierCompanyApi', SupplierCompanyApi_1.SupplierCompanyApi),
            this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi_1.SupplierPurchasingOrgApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get supplierCompanyApi() {
        const api = this.initApi('supplierCompanyApi', SupplierCompanyApi_1.SupplierCompanyApi);
        const linkedApis = [
            this.initApi('businessPartnerWhldgTaxApi', BusinessPartnerWhldgTaxApi_1.BusinessPartnerWhldgTaxApi),
            this.initApi('supplierApi', SupplierApi_1.SupplierApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get supplierPartnerFunctionApi() {
        const api = this.initApi('supplierPartnerFunctionApi', SupplierPartnerFunctionApi_1.SupplierPartnerFunctionApi);
        const linkedApis = [
            this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi_1.SupplierPurchasingOrgApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get supplierPurchasingOrgApi() {
        const api = this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi_1.SupplierPurchasingOrgApi);
        const linkedApis = [
            this.initApi('supplierPartnerFunctionApi', SupplierPartnerFunctionApi_1.SupplierPartnerFunctionApi),
            this.initApi('supplierApi', SupplierApi_1.SupplierApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get taxNumberApi() {
        const api = this.initApi('taxNumberApi', TaxNumberApi_1.TaxNumberApi);
        const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi_1.BusinessPartnerApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get webApi() {
        const api = this.initApi('webApi', WebApi_1.WebApi);
        const linkedApis = [
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('communicationDataTextApi', CommunicationDataTextApi_1.CommunicationDataTextApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workPlaceAddressInformationApi() {
        const api = this.initApi('workPlaceAddressInformationApi', WorkPlaceAddressInformationApi_1.WorkPlaceAddressInformationApi);
        const linkedApis = [
            this.initApi('contactPersonApi', ContactPersonApi_1.ContactPersonApi),
            this.initApi('addressApi', AddressApi_1.AddressApi),
            this.initApi('addressApi', AddressApi_1.AddressApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get workplaceApi() {
        const api = this.initApi('workplaceApi', WorkplaceApi_1.WorkplaceApi);
        const linkedApis = [this.initApi('addressApi', AddressApi_1.AddressApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get operations() {
        return {
            createBusinessPartnerWithConsent: (parameter) => (0, operations_1.createBusinessPartnerWithConsent)(parameter, this.deSerializers)
        };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map