"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Supplier_1 = require("./Supplier");
const SupplierRequestBuilder_1 = require("./SupplierRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Supplier_1.Supplier;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0]),
            TO_ADDRESS_INFORMATION: new odata_v2_1.OneToOneLink('to_AddressInformation', this, linkedApis[1]),
            TO_COMPANY_CODE: new odata_v2_1.Link('to_CompanyCode', this, linkedApis[2]),
            TO_SUPPLIER_PURCHASING: new odata_v2_1.Link('to_SupplierPurchasing', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierRequestBuilder_1.SupplierRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Supplier_1.Supplier, this.deSerializers);
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
                 * Static representation of the {@link supplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                /**
                 * Static representation of the {@link customer} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                /**
                 * Static representation of the {@link responsibleType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESPONSIBLE_TYPE: fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true),
                /**
                 * Static representation of the {@link supplierAccountGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link deletionIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link postingIsBlocked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POSTING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link vatLiability} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VAT_LIABILITY: fieldBuilder.buildEdmTypeField('VATLiability', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isStandardSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_STANDARD_SUPPLIER: fieldBuilder.buildEdmTypeField('IsStandardSupplier', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link addressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('Address_Id', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link alternativePayee} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATIVE_PAYEE: fieldBuilder.buildEdmTypeField('AlternativePayee', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentIsBlockedForSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PaymentIsBlockedForSupplier', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link purchasingIsBlocked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PurchasingIsBlocked', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Supplier_1.Supplier)
            };
        }
        return this._schema;
    }
}
exports.SupplierApi = SupplierApi;
//# sourceMappingURL=SupplierApi.js.map