"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartner_1 = require("./BusinessPartner");
const BusinessPartnerRequestBuilder_1 = require("./BusinessPartnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartner_1.BusinessPartner;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_CUSTOMER: new odata_v2_1.Link('to_Customer', this, linkedApis[0]),
            TO_ADDRESS_INFORMATION: new odata_v2_1.Link('to_AddressInformation', this, linkedApis[1]),
            TO_PERSON: new odata_v2_1.Link('to_Person', this, linkedApis[2]),
            TO_ORGANIZATION: new odata_v2_1.Link('to_Organization', this, linkedApis[3]),
            TO_GROUP: new odata_v2_1.Link('to_Group', this, linkedApis[4]),
            TO_IDENTIFICATION: new odata_v2_1.Link('to_Identification', this, linkedApis[5]),
            TO_INDUSTRY_SECTOR: new odata_v2_1.Link('to_IndustrySector', this, linkedApis[6]),
            TO_ROLE: new odata_v2_1.Link('to_Role', this, linkedApis[7]),
            TO_ADDRESS_USAGE: new odata_v2_1.Link('to_AddressUsage', this, linkedApis[8]),
            TO_TAX_NUMBER: new odata_v2_1.Link('to_TaxNumber', this, linkedApis[9]),
            TO_DEFAULT_INDUSTRY_SECTOR: new odata_v2_1.OneToOneLink('to_DefaultIndustrySector', this, linkedApis[10]),
            TO_DEFAULT_PERSON: new odata_v2_1.OneToOneLink('to_DefaultPerson', this, linkedApis[11]),
            TO_DEFAULT_ORGANIZATION: new odata_v2_1.OneToOneLink('to_DefaultOrganization', this, linkedApis[12]),
            TO_DEFAULT_GROUP: new odata_v2_1.OneToOneLink('to_DefaultGroup', this, linkedApis[13]),
            TO_CURRENT_ADDRESS_INFORMATION: new odata_v2_1.Link('to_CurrentAddressInformation', this, linkedApis[14]),
            TO_CURRENT_DEFAULT_ADDRESS_USAGE_CODE: new odata_v2_1.Link('to_CurrentDefaultAddressUsageCode', this, linkedApis[15]),
            TO_CURRENT_DEFAULT_ADDRESS_USAGE: new odata_v2_1.Link('to_CurrentDefaultAddressUsage', this, linkedApis[16]),
            TO_BUSINESS_PARTNER_RELATIONSHIP: new odata_v2_1.Link('to_BusinessPartnerRelationship', this, linkedApis[17]),
            TO_HAS_CONTACT_PERSON: new odata_v2_1.Link('to_HasContactPerson', this, linkedApis[18]),
            TO_CURRENT_HAS_CONTACT_PERSON: new odata_v2_1.OneToOneLink('to_CurrentHasContactPerson', this, linkedApis[19]),
            TO_CURRENT_DEFAULT_HAS_CONTACT_PERSON: new odata_v2_1.OneToOneLink('to_CurrentDefaultHasContactPerson', this, linkedApis[20]),
            TO_SUPPLIER: new odata_v2_1.Link('to_Supplier', this, linkedApis[21]),
            TO_BANK: new odata_v2_1.Link('to_Bank', this, linkedApis[22]),
            TO_PAYMENT_CARD: new odata_v2_1.Link('to_PaymentCard', this, linkedApis[23]),
            TO_ADDRESS_INDEPENDENT_COMMUNICATION: new odata_v2_1.OneToOneLink('to_AddressIndependentCommunication', this, linkedApis[24])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerRequestBuilder_1.BusinessPartnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartner_1.BusinessPartner, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
                /**
                 * Static representation of the {@link businessPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', true),
                /**
                 * Static representation of the {@link category} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY: fieldBuilder.buildEdmTypeField('Category', 'Edm.String', true),
                /**
                 * Static representation of the {@link fullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FULL_NAME: fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link authorizationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link searchTerm1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEARCH_TERM_1: fieldBuilder.buildEdmTypeField('SearchTerm1', 'Edm.String', true),
                /**
                 * Static representation of the {@link searchTerm2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEARCH_TERM_2: fieldBuilder.buildEdmTypeField('SearchTerm2', 'Edm.String', true),
                /**
                 * Static representation of the {@link isBlocked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_BLOCKED: fieldBuilder.buildEdmTypeField('IsBlocked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isReleased} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_RELEASED: fieldBuilder.buildEdmTypeField('IsReleased', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isBusinessPurposeCompleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_BUSINESS_PURPOSE_COMPLETED: fieldBuilder.buildEdmTypeField('IsBusinessPurposeCompleted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link language} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                /**
                 * Static representation of the {@link correspondenceLanguage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
                /**
                 * Static representation of the {@link isNaturalPerson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link businessPartnerGrouping} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_GROUPING: fieldBuilder.buildEdmTypeField('BusinessPartnerGrouping', 'Edm.String', true),
                /**
                 * Static representation of the {@link iamId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IAM_ID: fieldBuilder.buildEdmTypeField('IAMId', 'Edm.String', true),
                /**
                 * Static representation of the {@link contactPermission} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTACT_PERMISSION: fieldBuilder.buildEdmTypeField('ContactPermission', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerPrintFormat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_PRINT_FORMAT: fieldBuilder.buildEdmTypeField('BusinessPartnerPrintFormat', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isConsentGranted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_CONSENT_GRANTED: fieldBuilder.buildEdmTypeField('IsConsentGranted', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartner_1.BusinessPartner)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerApi = BusinessPartnerApi;
//# sourceMappingURL=BusinessPartnerApi.js.map