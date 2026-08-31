"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subdivisions = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Subdivisions" of service "API_BUSINESS_PARTNER".
 */
class Subdivisions extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Subdivisions = Subdivisions;
/**
 * Technical entity name for Subdivisions.
 */
Subdivisions._entityName = 'Subdivisions';
/**
 * Default url path for the according service.
 */
Subdivisions._defaultBasePath = '/';
/**
 * All key fields of the Subdivisions entity.
 */
Subdivisions._keys = [
    'BusConfignVersion',
    'CountryTwoLetterISOCode',
    'CountrySubdivision'
];
//# sourceMappingURL=Subdivisions.js.map