"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrganizationNameApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressOrganizationName_1 = require("./AddressOrganizationName");
const AddressOrganizationNameRequestBuilder_1 = require("./AddressOrganizationNameRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressOrganizationNameApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressOrganizationName_1.AddressOrganizationName;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressOrganizationNameApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new AddressOrganizationNameRequestBuilder_1.AddressOrganizationNameRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressOrganizationName_1.AddressOrganizationName, this.deSerializers);
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
                 * Static representation of the {@link scriptCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCRIPT_CODE: fieldBuilder.buildEdmTypeField('ScriptCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link formOfAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link legalForm} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LEGAL_FORM: fieldBuilder.buildEdmTypeField('LegalForm', 'Edm.String', true),
                /**
                 * Static representation of the {@link foundationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FOUNDATION_DATE: fieldBuilder.buildEdmTypeField('FoundationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link liquidationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIQUIDATION_DATE: fieldBuilder.buildEdmTypeField('LiquidationDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link organizationName1} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName3} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true),
                /**
                 * Static representation of the {@link organizationName4} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressOrganizationName_1.AddressOrganizationName)
            };
        }
        return this._schema;
    }
}
exports.AddressOrganizationNameApi = AddressOrganizationNameApi;
//# sourceMappingURL=AddressOrganizationNameApi.js.map