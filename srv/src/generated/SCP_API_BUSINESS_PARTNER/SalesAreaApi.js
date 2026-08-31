"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAreaApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SalesArea_1 = require("./SalesArea");
const SalesAreaRequestBuilder_1 = require("./SalesAreaRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesAreaApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesArea_1.SalesArea;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesAreaApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_CUSTOMER_PARTNER_FUNCTION: new odata_v2_1.Link('to_CustomerPartnerFunction', this, linkedApis[0]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesAreaRequestBuilder_1.SalesAreaRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesArea_1.SalesArea, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTimeOffset', true),
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
                 * Static representation of the {@link salesOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link distributionChannel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', true),
                /**
                 * Static representation of the {@link division} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DIVISION: fieldBuilder.buildEdmTypeField('Division', 'Edm.String', true),
                /**
                 * Static representation of the {@link isMarkedForDeletion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField('IsMarkedForDeletion', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link orderIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORDER_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('DeliveryIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link billingIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link completeDeliveryIsDefined} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField('CompleteDeliveryIsDefined', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link partialDeliveryIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARTIAL_DELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PartialDeliveryIsAllowed', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField('IncotermsClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link incotermsTransferLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField('IncotermsTransferLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerPriceGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_PRICE_GROUP: fieldBuilder.buildEdmTypeField('CustomerPriceGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField('CustomerGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryPriority} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField('DeliveryPriority', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_GROUP: fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesOffice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_OFFICE: fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesBlockForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_BLOCK_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('SalesBlockForCustomer', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesArea_1.SalesArea)
            };
        }
        return this._schema;
    }
}
exports.SalesAreaApi = SalesAreaApi;
//# sourceMappingURL=SalesAreaApi.js.map