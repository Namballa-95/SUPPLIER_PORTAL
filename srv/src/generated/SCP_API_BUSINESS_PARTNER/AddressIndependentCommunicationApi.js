"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressIndependentCommunicationApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressIndependentCommunication_1 = require("./AddressIndependentCommunication");
const AddressIndependentCommunicationRequestBuilder_1 = require("./AddressIndependentCommunicationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressIndependentCommunicationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressIndependentCommunication_1.AddressIndependentCommunication;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressIndependentCommunicationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_ADDRESS_INDEPENDENT_LANDLINE_PHONE: new odata_v2_1.Link('to_AddressIndependentLandlinePhone', this, linkedApis[0]),
            TO_ADDRESS_INDEPENDENT_MOBILE_PHONE: new odata_v2_1.Link('to_AddressIndependentMobilePhone', this, linkedApis[1]),
            TO_ADDRESS_INDEPENDENT_FAX: new odata_v2_1.Link('to_AddressIndependentFax', this, linkedApis[2]),
            TO_ADDRESS_INDEPENDENT_EMAIL: new odata_v2_1.Link('to_AddressIndependentEmail', this, linkedApis[3]),
            TO_ADDRESS_INDEPENDENT_WEB: new odata_v2_1.Link('to_AddressIndependentWeb', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new AddressIndependentCommunicationRequestBuilder_1.AddressIndependentCommunicationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressIndependentCommunication_1.AddressIndependentCommunication, this.deSerializers);
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
                 * Static representation of the {@link isDeleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DELETED: fieldBuilder.buildEdmTypeField('IsDeleted', 'Edm.Boolean', true),
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
                 * Static representation of the {@link addressType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TYPE: fieldBuilder.buildEdmTypeField('AddressType', 'Edm.String', true),
                /**
                 * Static representation of the {@link isIndependent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_INDEPENDENT: fieldBuilder.buildEdmTypeField('IsIndependent', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link prfrdCommMediumType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressIndependentCommunication_1.AddressIndependentCommunication)
            };
        }
        return this._schema;
    }
}
exports.AddressIndependentCommunicationApi = AddressIndependentCommunicationApi;
//# sourceMappingURL=AddressIndependentCommunicationApi.js.map