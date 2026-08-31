"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryTexts = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CountryTexts" of service "API_BUSINESS_PARTNER".
 */
class CountryTexts extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.CountryTexts = CountryTexts;
/**
 * Technical entity name for CountryTexts.
 */
CountryTexts._entityName = 'CountryTexts';
/**
 * Default url path for the according service.
 */
CountryTexts._defaultBasePath = '/';
/**
 * All key fields of the CountryTexts entity.
 */
CountryTexts._keys = [
    'BusConfignVersion',
    'CountryTwoLetterISOCode',
    'LanguageTwoLetterISOCode'
];
//# sourceMappingURL=CountryTexts.js.map