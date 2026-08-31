"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressIndependentWebApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressIndependentWeb_1 = require("./AddressIndependentWeb");
const AddressIndependentWebRequestBuilder_1 = require("./AddressIndependentWebRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressIndependentWebApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressIndependentWeb_1.AddressIndependentWeb;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressIndependentWebApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_WEB_NOTE: new odata_v2_1.Link('to_WebNote', this, linkedApis[0]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new AddressIndependentWebRequestBuilder_1.AddressIndependentWebRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressIndependentWeb_1.AddressIndependentWeb, this.deSerializers);
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
                 * Static representation of the {@link isDefaultUri} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DEFAULT_URI: fieldBuilder.buildEdmTypeField('IsDefaultUri', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link uriType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                URI_TYPE: fieldBuilder.buildEdmTypeField('UriType', 'Edm.String', true),
                /**
                 * Static representation of the {@link uri} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                URI: fieldBuilder.buildEdmTypeField('Uri', 'Edm.String', true),
                /**
                 * Static representation of the {@link usageDeniedIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USAGE_DENIED_INDICATOR: fieldBuilder.buildEdmTypeField('UsageDeniedIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link addressType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TYPE: fieldBuilder.buildEdmTypeField('AddressType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressIndependentWeb_1.AddressIndependentWeb)
            };
        }
        return this._schema;
    }
}
exports.AddressIndependentWebApi = AddressIndependentWebApi;
//# sourceMappingURL=AddressIndependentWebApi.js.map