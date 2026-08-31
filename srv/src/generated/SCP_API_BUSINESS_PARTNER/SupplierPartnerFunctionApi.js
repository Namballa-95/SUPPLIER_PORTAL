"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPartnerFunctionApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SupplierPartnerFunction_1 = require("./SupplierPartnerFunction");
const SupplierPartnerFunctionRequestBuilder_1 = require("./SupplierPartnerFunctionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPartnerFunctionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierPartnerFunction_1.SupplierPartnerFunction;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierPartnerFunctionApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierPartnerFunctionRequestBuilder_1.SupplierPartnerFunctionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPartnerFunction_1.SupplierPartnerFunction, this.deSerializers);
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
                 * Static representation of the {@link partnerFunction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', true),
                /**
                 * Static representation of the {@link defaultPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEFAULT_PARTNER: fieldBuilder.buildEdmTypeField('DefaultPartner', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link partnerNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_NUMBER: fieldBuilder.buildEdmTypeField('PartnerNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link partnerType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_TYPE: fieldBuilder.buildEdmTypeField('PartnerType', 'Edm.String', true),
                /**
                 * Static representation of the {@link partnerDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_DESCRIPTION: fieldBuilder.buildEdmTypeField('PartnerDescription', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPartnerFunction_1.SupplierPartnerFunction)
            };
        }
        return this._schema;
    }
}
exports.SupplierPartnerFunctionApi = SupplierPartnerFunctionApi;
//# sourceMappingURL=SupplierPartnerFunctionApi.js.map