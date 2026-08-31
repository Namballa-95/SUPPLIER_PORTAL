"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubdivisionsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Subdivisions_1 = require("./Subdivisions");
const SubdivisionsRequestBuilder_1 = require("./SubdivisionsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SubdivisionsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Subdivisions_1.Subdivisions;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SubdivisionsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            SUBDIVISION_TEXT: new odata_v2_1.Link('subdivisionText', this, linkedApis[0]),
            LOCALISED_SUBDIVISION: new odata_v2_1.OneToOneLink('localisedSubdivision', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SubdivisionsRequestBuilder_1.SubdivisionsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Subdivisions_1.Subdivisions, this.deSerializers);
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
                 * Static representation of the {@link countrySubdivisionType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_SUBDIVISION_TYPE: fieldBuilder.buildEdmTypeField('CountrySubdivisionType', 'Edm.String', true),
                /**
                 * Static representation of the {@link countrySubdivisionRegionaldivision} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_SUBDIVISION_REGIONALDIVISION: fieldBuilder.buildEdmTypeField('CountrySubdivisionRegionaldivision', 'Edm.String', true),
                /**
                 * Static representation of the {@link countrySubdivisionRomanizationSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY_SUBDIVISION_ROMANIZATION_SYSTEM: fieldBuilder.buildEdmTypeField('CountrySubdivisionRomanizationSystem', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Subdivisions_1.Subdivisions)
            };
        }
        return this._schema;
    }
}
exports.SubdivisionsApi = SubdivisionsApi;
//# sourceMappingURL=SubdivisionsApi.js.map