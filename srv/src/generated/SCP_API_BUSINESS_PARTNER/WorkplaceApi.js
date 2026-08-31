"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkplaceApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Workplace_1 = require("./Workplace");
const WorkplaceRequestBuilder_1 = require("./WorkplaceRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class WorkplaceApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Workplace_1.Workplace;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new WorkplaceApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new WorkplaceRequestBuilder_1.WorkplaceRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Workplace_1.Workplace, this.deSerializers);
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
                 * Static representation of the {@link scriptCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCRIPT_CODE: fieldBuilder.buildEdmTypeField('ScriptCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link functionalTitleName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FUNCTIONAL_TITLE_NAME: fieldBuilder.buildEdmTypeField('FunctionalTitleName', 'Edm.String', true),
                /**
                 * Static representation of the {@link departmentName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPARTMENT_NAME: fieldBuilder.buildEdmTypeField('DepartmentName', 'Edm.String', true),
                /**
                 * Static representation of the {@link building} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUILDING: fieldBuilder.buildEdmTypeField('Building', 'Edm.String', true),
                /**
                 * Static representation of the {@link floor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true),
                /**
                 * Static representation of the {@link room} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.String', true),
                /**
                 * Static representation of the {@link correspondenceShortName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRESPONDENCE_SHORT_NAME: fieldBuilder.buildEdmTypeField('CorrespondenceShortName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Workplace_1.Workplace)
            };
        }
        return this._schema;
    }
}
exports.WorkplaceApi = WorkplaceApi;
//# sourceMappingURL=WorkplaceApi.js.map