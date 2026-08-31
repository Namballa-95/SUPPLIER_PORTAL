"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressIndependentPhoneNumberDummyApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddressIndependentPhoneNumberDummy_1 = require("./AddressIndependentPhoneNumberDummy");
const AddressIndependentPhoneNumberDummyRequestBuilder_1 = require("./AddressIndependentPhoneNumberDummyRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressIndependentPhoneNumberDummyApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddressIndependentPhoneNumberDummy_1.AddressIndependentPhoneNumberDummy;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddressIndependentPhoneNumberDummyApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PHONE_NOTE: new odata_v2_1.Link('to_PhoneNote', this, linkedApis[0]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new AddressIndependentPhoneNumberDummyRequestBuilder_1.AddressIndependentPhoneNumberDummyRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddressIndependentPhoneNumberDummy_1.AddressIndependentPhoneNumberDummy, this.deSerializers);
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
                 * Static representation of the {@link isDefaultPhoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DEFAULT_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('IsDefaultPhoneNumber', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link destinationLocationCountry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESTINATION_LOCATION_COUNTRY: fieldBuilder.buildEdmTypeField('DestinationLocationCountry', 'Edm.String', true),
                /**
                 * Static representation of the {@link number} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
                /**
                 * Static representation of the {@link numberType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NUMBER_TYPE: fieldBuilder.buildEdmTypeField('NumberType', 'Edm.String', true),
                /**
                 * Static representation of the {@link numberExtension} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('NumberExtension', 'Edm.String', true),
                /**
                 * Static representation of the {@link usageDeniedIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USAGE_DENIED_INDICATOR: fieldBuilder.buildEdmTypeField('UsageDeniedIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link smsEnabledIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SMS_ENABLED_INDICATOR: fieldBuilder.buildEdmTypeField('SMSEnabledIndicator', 'Edm.Boolean', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddressIndependentPhoneNumberDummy_1.AddressIndependentPhoneNumberDummy)
            };
        }
        return this._schema;
    }
}
exports.AddressIndependentPhoneNumberDummyApi = AddressIndependentPhoneNumberDummyApi;
//# sourceMappingURL=AddressIndependentPhoneNumberDummyApi.js.map