"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonNameApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PersonName_1 = require("./PersonName");
const PersonNameRequestBuilder_1 = require("./PersonNameRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PersonNameApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PersonName_1.PersonName;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PersonNameApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new PersonNameRequestBuilder_1.PersonNameRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PersonName_1.PersonName, this.deSerializers);
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
                 * Static representation of the {@link nationality} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NATIONALITY: fieldBuilder.buildEdmTypeField('Nationality', 'Edm.String', true),
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
                 * Static representation of the {@link birthDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link maritalStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MARITAL_STATUS: fieldBuilder.buildEdmTypeField('MaritalStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link naturalPersonEmployerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NATURAL_PERSON_EMPLOYER_NAME: fieldBuilder.buildEdmTypeField('NaturalPersonEmployerName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerOccupationGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_OCCUPATION_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerOccupationGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerBirthplaceName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_BIRTHPLACE_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerBirthplaceName', 'Edm.String', true),
                /**
                 * Static representation of the {@link businessPartnerDeathDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_PARTNER_DEATH_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerDeathDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PersonName_1.PersonName)
            };
        }
        return this._schema;
    }
}
exports.PersonNameApi = PersonNameApi;
//# sourceMappingURL=PersonNameApi.js.map