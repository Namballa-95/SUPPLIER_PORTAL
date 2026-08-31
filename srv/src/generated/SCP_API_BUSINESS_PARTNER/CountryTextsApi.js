"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryTextsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CountryTexts_1 = require("./CountryTexts");
const CountryTextsRequestBuilder_1 = require("./CountryTextsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CountryTextsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CountryTexts_1.CountryTexts;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CountryTextsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CountryTextsRequestBuilder_1.CountryTextsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CountryTexts_1.CountryTexts, this.deSerializers);
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
                 * Static representation of the {@link busConfignIsDeleted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUS_CONFIGN_IS_DELETED: fieldBuilder.buildEdmTypeField('BusConfignIsDeleted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link countryTwoLetterIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField('CountryTwoLetterISOCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link languageTwoLetterIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField('LanguageTwoLetterISOCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link countryIsoShortName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_ISO_SHORT_NAME: fieldBuilder.buildEdmTypeField('CountryISOShortName', 'Edm.String', true),
                /**
                 * Static representation of the {@link countryIsoFullName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_ISO_FULL_NAME: fieldBuilder.buildEdmTypeField('CountryISOFullName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CountryTexts_1.CountryTexts)
            };
        }
        return this._schema;
    }
}
exports.CountryTextsApi = CountryTextsApi;
//# sourceMappingURL=CountryTextsApi.js.map