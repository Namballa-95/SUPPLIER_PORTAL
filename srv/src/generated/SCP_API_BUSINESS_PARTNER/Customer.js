"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Customer" of service "API_BUSINESS_PARTNER".
 */
class Customer extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Customer = Customer;
/**
 * Technical entity name for Customer.
 */
Customer._entityName = 'Customer';
/**
 * Default url path for the according service.
 */
Customer._defaultBasePath = '/';
/**
 * All key fields of the Customer entity.
 */
Customer._keys = ['Id'];
//# sourceMappingURL=Customer.js.map