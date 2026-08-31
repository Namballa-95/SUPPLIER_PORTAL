"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SupplierCompany_1 = require("./SupplierCompany");
const SupplierCompanyRequestBuilder_1 = require("./SupplierCompanyRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompanyApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierCompany_1.SupplierCompany;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierCompanyApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_WITHHOLDING_TAX: new odata_v2_1.Link('to_WithholdingTax', this, linkedApis[0]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierCompanyRequestBuilder_1.SupplierCompanyRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierCompany_1.SupplierCompany, this.deSerializers);
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
                 * Static representation of the {@link companyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link reconciliationAccount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECONCILIATION_ACCOUNT: fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true),
                /**
                 * Static representation of the {@link layoutSortingRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAYOUT_SORTING_RULE: fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link minorityGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINORITY_GROUP: fieldBuilder.buildEdmTypeField('MinorityGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link deletionIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supplierIsBlockedForPosting} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_IS_BLOCKED_FOR_POSTING: fieldBuilder.buildEdmTypeField('SupplierIsBlockedForPosting', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link paymentBlockingReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_BLOCKING_REASON: fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                /**
                 * Static representation of the {@link isDoubleInvoice} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DOUBLE_INVOICE: fieldBuilder.buildEdmTypeField('IsDoubleInvoice', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link paymentMethodsList} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_METHODS_LIST: fieldBuilder.buildEdmTypeField('PaymentMethodsList', 'Edm.String', true),
                /**
                 * Static representation of the {@link houseBank} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOUSE_BANK: fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true),
                /**
                 * Static representation of the {@link cashPlanningGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CASH_PLANNING_GROUP: fieldBuilder.buildEdmTypeField('CashPlanningGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingClerk} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_CLERK: fieldBuilder.buildEdmTypeField('AccountingClerk', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingClerkInternetAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_CLERK_INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField('AccountingClerkInternetAddress', 'Edm.String', true),
                /**
                 * Static representation of the {@link accountingClerkPhoneNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACCOUNTING_CLERK_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link alternativePayee} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_PAYEE: fieldBuilder.buildEdmTypeField('AlternativePayee', 'Edm.String', true),
                /**
                 * Static representation of the {@link aparToleranceGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APAR_TOLERANCE_GROUP: fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link clearCustomerSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CLEAR_CUSTOMER_SUPPLIER: fieldBuilder.buildEdmTypeField('ClearCustomerSupplier', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierCompany_1.SupplierCompany)
            };
        }
        return this._schema;
    }
}
exports.SupplierCompanyApi = SupplierCompanyApi;
//# sourceMappingURL=SupplierCompanyApi.js.map