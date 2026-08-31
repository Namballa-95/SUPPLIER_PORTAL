"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Address_1 = require("./Address");
const AddressRequestBuilder_1 = require("./AddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Address_1.Address;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_WORKPLACE_ADDRESS: new odata_v2_1.Link('to_WorkplaceAddress', this, linkedApis[0]),
            TO_EMAIL: new odata_v2_1.Link('to_Email', this, linkedApis[1]),
            TO_MOBILE_PHONE: new odata_v2_1.Link('to_MobilePhone', this, linkedApis[2]),
            TO_LANDLINE_PHONE: new odata_v2_1.Link('to_LandlinePhone', this, linkedApis[3]),
            TO_FAX: new odata_v2_1.Link('to_Fax', this, linkedApis[4]),
            TO_WEB: new odata_v2_1.Link('to_Web', this, linkedApis[5]),
            TO_POSTAL_ADDRESS: new odata_v2_1.Link('to_PostalAddress', this, linkedApis[6]),
            TO_PERSON: new odata_v2_1.Link('to_Person', this, linkedApis[7]),
            TO_ORGANIZATION: new odata_v2_1.Link('to_Organization', this, linkedApis[8]),
            TO_DEFAULT_POSTAL_ADDRESS: new odata_v2_1.OneToOneLink('to_DefaultPostalAddress', this, linkedApis[9]),
            TO_DEFAULT_EMAIL: new odata_v2_1.OneToOneLink('to_DefaultEmail', this, linkedApis[10]),
            TO_DEFAULT_MOBILE_PHONE: new odata_v2_1.OneToOneLink('to_DefaultMobilePhone', this, linkedApis[11]),
            TO_DEFAULT_LANDLINE_PHONE: new odata_v2_1.OneToOneLink('to_DefaultLandlinePhone', this, linkedApis[12]),
            TO_DEFAULT_FAX: new odata_v2_1.OneToOneLink('to_DefaultFax', this, linkedApis[13]),
            TO_DEFAULT_WEB: new odata_v2_1.OneToOneLink('to_DefaultWeb', this, linkedApis[14]),
            TO_DEFAULT_PERSON: new odata_v2_1.OneToOneLink('to_DefaultPerson', this, linkedApis[15]),
            TO_DEFAULT_ORGANIZATION: new odata_v2_1.OneToOneLink('to_DefaultOrganization', this, linkedApis[16]),
            TO_DEFAULT_WORKPLACE_ADDRESS: new odata_v2_1.OneToOneLink('to_DefaultWorkplaceAddress', this, linkedApis[17]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[18])
        };
        return this;
    }
    requestBuilder() {
        return new AddressRequestBuilder_1.AddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Address_1.Address, this.deSerializers);
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
                 * Static representation of the {@link addressType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_TYPE: fieldBuilder.buildEdmTypeField('AddressType', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', Address_1.Address)
            };
        }
        return this._schema;
    }
}
exports.AddressApi = AddressApi;
//# sourceMappingURL=AddressApi.js.map