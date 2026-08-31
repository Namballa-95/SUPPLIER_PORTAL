"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubdivisionTextsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SubdivisionTexts_1 = require("./SubdivisionTexts");
const SubdivisionTextsRequestBuilder_1 = require("./SubdivisionTextsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SubdivisionTextsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SubdivisionTexts_1.SubdivisionTexts;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SubdivisionTextsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new SubdivisionTextsRequestBuilder_1.SubdivisionTextsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SubdivisionTexts_1.SubdivisionTexts, this.deSerializers);
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
                 * Static representation of the {@link countrySubdivision} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_SUBDIVISION: fieldBuilder.buildEdmTypeField('CountrySubdivision', 'Edm.String', false),
                /**
                 * Static representation of the {@link languageTwoLetterIsoCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField('LanguageTwoLetterISOCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link countrySubdivisionName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_SUBDIVISION_NAME: fieldBuilder.buildEdmTypeField('CountrySubdivisionName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SubdivisionTexts_1.SubdivisionTexts)
            };
        }
        return this._schema;
    }
}
exports.SubdivisionTextsApi = SubdivisionTextsApi;
//# sourceMappingURL=SubdivisionTextsApi.js.map