"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubdivisionTexts = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "SubdivisionTexts" of service "API_BUSINESS_PARTNER".
 */
class SubdivisionTexts extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.SubdivisionTexts = SubdivisionTexts;
/**
 * Technical entity name for SubdivisionTexts.
 */
SubdivisionTexts._entityName = 'SubdivisionTexts';
/**
 * Default url path for the according service.
 */
SubdivisionTexts._defaultBasePath = '/';
/**
 * All key fields of the SubdivisionTexts entity.
 */
SubdivisionTexts._keys = [
    'BusConfignVersion',
    'CountryTwoLetterISOCode',
    'CountrySubdivision',
    'LanguageTwoLetterISOCode'
];
//# sourceMappingURL=SubdivisionTexts.js.map