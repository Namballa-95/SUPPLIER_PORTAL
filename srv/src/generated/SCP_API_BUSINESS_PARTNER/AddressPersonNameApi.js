"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressPersonNameApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressPersonName_1 = require("./AddressPersonName");
const AddressPersonNameRequestBuilder_1 = require("./AddressPersonNameRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressPersonNameApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressPersonName_1.AddressPersonName;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressPersonNameApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new AddressPersonNameRequestBuilder_1.AddressPersonNameRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressPersonName_1.AddressPersonName, this.deSerializers);
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
                 * Static representation of the {@link gender} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GENDER: fieldBuilder.buildEdmTypeField('Gender', 'Edm.String', true),
                /**
                 * Static representation of the {@link academicTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField('AcademicTitle', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalAcademicTitle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField('AdditionalAcademicTitle', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastNamePrefix} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField('LastNamePrefix', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalNamePrefix} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_NAME_PREFIX: fieldBuilder.buildEdmTypeField('AdditionalNamePrefix', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameSupplement} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_SUPPLEMENT: fieldBuilder.buildEdmTypeField('NameSupplement', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_COUNTRY: fieldBuilder.buildEdmTypeField('NameCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link nameFormat} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME_FORMAT: fieldBuilder.buildEdmTypeField('NameFormat', 'Edm.String', true),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link middleName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIDDLE_NAME: fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link additionalLastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDITIONAL_LAST_NAME: fieldBuilder.buildEdmTypeField('AdditionalLastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link birthName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BIRTH_NAME: fieldBuilder.buildEdmTypeField('BirthName', 'Edm.String', true),
                /**
                 * Static representation of the {@link nickName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NICK_NAME: fieldBuilder.buildEdmTypeField('NickName', 'Edm.String', true),
                /**
                 * Static representation of the {@link initials} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INITIALS: fieldBuilder.buildEdmTypeField('Initials', 'Edm.String', true),
                /**
                 * Static representation of the {@link fullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FULL_NAME: fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true),
                /**
                 * Static representation of the {@link birthDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressPersonName_1.AddressPersonName)
            };
        }
        return this._schema;
    }
}
exports.AddressPersonNameApi = AddressPersonNameApi;
//# sourceMappingURL=AddressPersonNameApi.js.map