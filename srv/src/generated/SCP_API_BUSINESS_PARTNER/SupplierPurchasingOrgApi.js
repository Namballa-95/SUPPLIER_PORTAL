"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const SupplierPurchasingOrg_1 = require("./SupplierPurchasingOrg");
const SupplierPurchasingOrgRequestBuilder_1 = require("./SupplierPurchasingOrgRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrgApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierPurchasingOrg_1.SupplierPurchasingOrg;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierPurchasingOrgApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SUPPLIER_PARTNER_FUNCTION: new odata_v2_1.Link('to_SupplierPartnerFunction', this, linkedApis[0]),
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierPurchasingOrgRequestBuilder_1.SupplierPurchasingOrgRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierPurchasingOrg_1.SupplierPurchasingOrg, this.deSerializers);
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
                 * Static representation of the {@link purchasingOrganization} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchaseOrderCurrency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASE_ORDER_CURRENCY: fieldBuilder.buildEdmTypeField('PurchaseOrderCurrency', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentTerms} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
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
                 * Static representation of the {@link calculationSchemaGroupCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALCULATION_SCHEMA_GROUP_CODE: fieldBuilder.buildEdmTypeField('CalculationSchemaGroupCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_GROUP: fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link purchasingIsBlockedForSupplier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PURCHASING_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PurchasingIsBlockedForSupplier', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link deletionIndicator} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link purOrdAutoGenerationIsAllowed} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PUR_ORD_AUTO_GENERATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField('PurOrdAutoGenerationIsAllowed', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link supplierAbcClassificationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPLIER_ABC_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField('SupplierABCClassificationCode', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierPurchasingOrg_1.SupplierPurchasingOrg)
            };
        }
        return this._schema;
    }
}
exports.SupplierPurchasingOrgApi = SupplierPurchasingOrgApi;
//# sourceMappingURL=SupplierPurchasingOrgApi.js.map