"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerWhldgTaxApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessPartnerWhldgTax_1 = require("./BusinessPartnerWhldgTax");
const BusinessPartnerWhldgTaxRequestBuilder_1 = require("./BusinessPartnerWhldgTaxRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerWhldgTaxApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerWhldgTax_1.BusinessPartnerWhldgTax;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerWhldgTaxApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerWhldgTaxRequestBuilder_1.BusinessPartnerWhldgTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerWhldgTax_1.BusinessPartnerWhldgTax, this.deSerializers);
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
                 * Static representation of the {@link parentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_ID: fieldBuilder.buildEdmTypeField('Parent_Id', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link withholdingTaxType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_TYPE: fieldBuilder.buildEdmTypeField('WithholdingTaxType', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField('WithholdingTaxCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_NUMBER: fieldBuilder.buildEdmTypeField('WithholdingTaxNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxCertificate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_CERTIFICATE: fieldBuilder.buildEdmTypeField('WithholdingTaxCertificate', 'Edm.String', true),
                /**
                 * Static representation of the {@link withholdingTaxExmptPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WITHHOLDING_TAX_EXMPT_PERCENT: fieldBuilder.buildEdmTypeField('WithholdingTaxExmptPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link exemptionReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXEMPTION_REASON: fieldBuilder.buildEdmTypeField('ExemptionReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link exemptionDateBegin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXEMPTION_DATE_BEGIN: fieldBuilder.buildEdmTypeField('ExemptionDateBegin', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link exemptionDateEnd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXEMPTION_DATE_END: fieldBuilder.buildEdmTypeField('ExemptionDateEnd', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link recipientType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECIPIENT_TYPE: fieldBuilder.buildEdmTypeField('RecipientType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerWhldgTax_1.BusinessPartnerWhldgTax)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerWhldgTaxApi = BusinessPartnerWhldgTaxApi;
//# sourceMappingURL=BusinessPartnerWhldgTaxApi.js.map