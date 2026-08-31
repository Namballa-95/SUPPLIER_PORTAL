"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesTaxApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesTax_1 = require("./SalesTax");
const SalesTaxRequestBuilder_1 = require("./SalesTaxRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesTaxApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesTax_1.SalesTax;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesTaxApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_CUSTOMER: new odata_v2_1.OneToOneLink('to_Customer', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesTaxRequestBuilder_1.SalesTaxRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesTax_1.SalesTax, this.deSerializers);
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
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                /**
                 * Static representation of the {@link taxCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_CATEGORY: fieldBuilder.buildEdmTypeField('TaxCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link taxClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField('TaxClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ID: fieldBuilder.buildEdmTypeField('Customer_Id', 'Edm.Guid', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesTax_1.SalesTax)
            };
        }
        return this._schema;
    }
}
exports.SalesTaxApi = SalesTaxApi;
//# sourceMappingURL=SalesTaxApi.js.map