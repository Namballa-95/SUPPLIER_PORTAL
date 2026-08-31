"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPersonApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ContactPerson_1 = require("./ContactPerson");
const ContactPersonRequestBuilder_1 = require("./ContactPersonRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ContactPersonApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ContactPerson_1.ContactPerson;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ContactPersonApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0]),
            TO_WORK_PLACE_ADDRESS_INFORMATION: new odata_v2_1.Link('to_WorkPlaceAddressInformation', this, linkedApis[1]),
            TO_CURRENT_DEFAULT_WORK_PLACE_ADDRESS_INFORMATION: new odata_v2_1.OneToOneLink('to_CurrentDefaultWorkPlaceAddressInformation', this, linkedApis[2]),
            TO_CWAI: new odata_v2_1.OneToOneLink('to_Cwai', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new ContactPersonRequestBuilder_1.ContactPersonRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ContactPerson_1.ContactPerson, this.deSerializers);
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
                 * Static representation of the {@link vipPartner} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VIP_PARTNER: fieldBuilder.buildEdmTypeField('VipPartner', 'Edm.String', true),
                /**
                 * Static representation of the {@link department} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPARTMENT: fieldBuilder.buildEdmTypeField('Department', 'Edm.String', true),
                /**
                 * Static representation of the {@link partnerFunction} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', true),
                /**
                 * Static representation of the {@link partnerAuthority} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTNER_AUTHORITY: fieldBuilder.buildEdmTypeField('PartnerAuthority', 'Edm.String', true),
                /**
                 * Static representation of the {@link note} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerContactPerson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_CONTACT_PERSON: fieldBuilder.buildEdmTypeField('CustomerContactPerson', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierContactPerson} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_CONTACT_PERSON: fieldBuilder.buildEdmTypeField('SupplierContactPerson', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ContactPerson_1.ContactPerson)
            };
        }
        return this._schema;
    }
}
exports.ContactPersonApi = ContactPersonApi;
//# sourceMappingURL=ContactPersonApi.js.map