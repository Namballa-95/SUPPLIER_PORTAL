"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_CountriesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const C_Countries_1 = require("./C_Countries");
const C_CountriesRequestBuilder_1 = require("./C_CountriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class C_CountriesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = C_Countries_1.C_Countries;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new C_CountriesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TEXT: new odata_v2_1.Link('text', this, linkedApis[0]),
            SUBDIVISION: new odata_v2_1.Link('subdivision', this, linkedApis[1]),
            LOCALISED: new odata_v2_1.OneToOneLink('localised', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new C_CountriesRequestBuilder_1.C_CountriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(C_Countries_1.C_Countries, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link busConfignVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUS_CONFIGN_VERSION: fieldBuilder.buildEdmTypeField('BusConfignVersion', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link countryTwoLetterIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField('CountryTwoLetterISOCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link countryThreeLetterIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_THREE_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField('CountryThreeLetterISOCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link countryThreeDigitIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_THREE_DIGIT_ISO_CODE: fieldBuilder.buildEdmTypeField('CountryThreeDigitISOCode', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', C_Countries_1.C_Countries)
            };
        }
        return this._schema;
    }
}
exports.C_CountriesApi = C_CountriesApi;
//# sourceMappingURL=C_CountriesApi.js.map