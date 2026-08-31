"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerBankApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartnerBank_1 = require("./BusinessPartnerBank");
const BusinessPartnerBankRequestBuilder_1 = require("./BusinessPartnerBankRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerBankApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerBank_1.BusinessPartnerBank;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerBankApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_COUNTRY_CODE: new odata_v2_1.OneToOneLink('to_CountryCode', this, linkedApis[0]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerBankRequestBuilder_1.BusinessPartnerBankRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerBank_1.BusinessPartnerBank, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
                /**
                 * Static representation of the {@link parentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_ID: fieldBuilder.buildEdmTypeField('Parent_Id', 'Edm.Guid', true),
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
                 * Static representation of the {@link bankIdentification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_IDENTIFICATION: fieldBuilder.buildEdmTypeField('BankIdentification', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT: fieldBuilder.buildEdmTypeField('BankAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankCountryKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_COUNTRY_KEY: fieldBuilder.buildEdmTypeField('BankCountryKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_NUMBER: fieldBuilder.buildEdmTypeField('BankNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankControlKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_CONTROL_KEY: fieldBuilder.buildEdmTypeField('BankControlKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField('BankAccountName', 'Edm.String', true),
                /**
                 * Static representation of the {@link bankAccountHolderName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_HOLDER_NAME: fieldBuilder.buildEdmTypeField('BankAccountHolderName', 'Edm.String', true),
                /**
                 * Static representation of the {@link iban} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
                /**
                 * Static representation of the {@link ibanValidityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IBAN_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('IBANValidityStartDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link validityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link bankAccountReferenceText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BANK_ACCOUNT_REFERENCE_TEXT: fieldBuilder.buildEdmTypeField('BankAccountReferenceText', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerBank_1.BusinessPartnerBank)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerBankApi = BusinessPartnerBankApi;
//# sourceMappingURL=BusinessPartnerBankApi.js.map