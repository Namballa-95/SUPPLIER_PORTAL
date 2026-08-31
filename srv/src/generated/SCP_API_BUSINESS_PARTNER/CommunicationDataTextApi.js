"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationDataTextApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CommunicationDataText_1 = require("./CommunicationDataText");
const CommunicationDataTextRequestBuilder_1 = require("./CommunicationDataTextRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CommunicationDataTextApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CommunicationDataText_1.CommunicationDataText;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CommunicationDataTextApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CommunicationDataTextRequestBuilder_1.CommunicationDataTextRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CommunicationDataText_1.CommunicationDataText, this.deSerializers);
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
                 * Static representation of the {@link communicationLanguage} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMMUNICATION_LANGUAGE: fieldBuilder.buildEdmTypeField('CommunicationLanguage', 'Edm.String', true),
                /**
                 * Static representation of the {@link remark} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REMARK: fieldBuilder.buildEdmTypeField('remark', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CommunicationDataText_1.CommunicationDataText)
            };
        }
        return this._schema;
    }
}
exports.CommunicationDataTextApi = CommunicationDataTextApi;
//# sourceMappingURL=CommunicationDataTextApi.js.map