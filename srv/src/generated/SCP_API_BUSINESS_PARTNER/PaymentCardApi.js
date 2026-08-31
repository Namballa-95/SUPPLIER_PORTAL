"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCardApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PaymentCard_1 = require("./PaymentCard");
const PaymentCardRequestBuilder_1 = require("./PaymentCardRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PaymentCardApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PaymentCard_1.PaymentCard;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PaymentCardApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new PaymentCardRequestBuilder_1.PaymentCardRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PaymentCard_1.PaymentCard, this.deSerializers);
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
                 * Static representation of the {@link validityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link paymentCardId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_ID: fieldBuilder.buildEdmTypeField('PaymentCardID', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentCardType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_TYPE: fieldBuilder.buildEdmTypeField('PaymentCardType', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentCardNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_NUMBER: fieldBuilder.buildEdmTypeField('PaymentCardNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link isStandardCard} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_STANDARD_CARD: fieldBuilder.buildEdmTypeField('IsStandardCard', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link cardDescription} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_DESCRIPTION: fieldBuilder.buildEdmTypeField('CardDescription', 'Edm.String', true),
                /**
                 * Static representation of the {@link cardHolder} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_HOLDER: fieldBuilder.buildEdmTypeField('CardHolder', 'Edm.String', true),
                /**
                 * Static representation of the {@link cardIssuingBank} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_ISSUING_BANK: fieldBuilder.buildEdmTypeField('CardIssuingBank', 'Edm.String', true),
                /**
                 * Static representation of the {@link cardCategory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_CATEGORY: fieldBuilder.buildEdmTypeField('CardCategory', 'Edm.String', true),
                /**
                 * Static representation of the {@link paymentCardLock} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYMENT_CARD_LOCK: fieldBuilder.buildEdmTypeField('PaymentCardLock', 'Edm.String', true),
                /**
                 * Static representation of the {@link cardIssueDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CARD_ISSUE_DATE: fieldBuilder.buildEdmTypeField('CardIssueDate', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PaymentCard_1.PaymentCard)
            };
        }
        return this._schema;
    }
}
exports.PaymentCardApi = PaymentCardApi;
//# sourceMappingURL=PaymentCardApi.js.map