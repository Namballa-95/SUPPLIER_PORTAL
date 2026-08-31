"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Customer_1 = require("./Customer");
const CustomerRequestBuilder_1 = require("./CustomerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Customer_1.Customer;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_ADDRESS_INFORMATION: new odata_v2_1.OneToOneLink('to_AddressInformation', this, linkedApis[0]),
            TO_SALES_AREA: new odata_v2_1.Link('to_SalesArea', this, linkedApis[1]),
            TO_SALES_TAX: new odata_v2_1.Link('to_SalesTax', this, linkedApis[2]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerRequestBuilder_1.CustomerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Customer_1.Customer, this.deSerializers);
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
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerCorporateGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_CORPORATE_GROUP: fieldBuilder.buildEdmTypeField('CustomerCorporateGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerAccountGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
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
                 * Static representation of the {@link billingIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerClassification', 'Edm.String', true),
                /**
                 * Static representation of the {@link deliveryIsBlockedForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELIVERY_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('DeliveryIsBlockedForCustomer', 'Edm.String', true),
                /**
                 * Static representation of the {@link nielsenRegion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NIELSEN_REGION: fieldBuilder.buildEdmTypeField('NielsenRegion', 'Edm.String', true),
                /**
                 * Static representation of the {@link salesBlockForCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALES_BLOCK_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('SalesBlockForCustomer', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isStandardCustomer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_STANDARD_CUSTOMER: fieldBuilder.buildEdmTypeField('IsStandardCustomer', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('Address_Id', 'Edm.Guid', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Customer_1.Customer)
            };
        }
        return this._schema;
    }
}
exports.CustomerApi = CustomerApi;
//# sourceMappingURL=CustomerApi.js.map