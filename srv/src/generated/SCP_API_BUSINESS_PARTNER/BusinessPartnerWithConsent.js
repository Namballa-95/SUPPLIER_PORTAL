"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerWithConsent = exports.BusinessPartnerWithConsentField = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * BusinessPartnerWithConsentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class BusinessPartnerWithConsentField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of BusinessPartnerWithConsentField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, BusinessPartnerWithConsent, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.id} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.id = this._fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.businessPartnerCategory} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.businessPartnerCategory = this._fieldBuilder.buildEdmTypeField('BusinessPartnerCategory', 'Edm.String', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.businessPartnerNumber} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.businessPartnerNumber = this._fieldBuilder.buildEdmTypeField('BusinessPartnerNumber', 'Edm.String', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.organizationName1} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.organizationName1 = this._fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.lastName} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.lastName = this._fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.consentTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.consentTemplateName = this._fieldBuilder.buildEdmTypeField('ConsentTemplateName', 'Edm.String', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.consentTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.consentTemplateId = this._fieldBuilder.buildEdmTypeField('ConsentTemplateId', 'Edm.Guid', true);
        /**
         * Representation of the {@link BusinessPartnerWithConsent.consentId} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.consentId = this._fieldBuilder.buildEdmTypeField('ConsentId', 'Edm.Guid', true);
    }
}
exports.BusinessPartnerWithConsentField = BusinessPartnerWithConsentField;
var BusinessPartnerWithConsent;
(function (BusinessPartnerWithConsent) {
    /**
     * Metadata information on all properties of the `BusinessPartnerWithConsent` complex type.
     */
    BusinessPartnerWithConsent._propertyMetadata = [
        {
            originalName: 'Id',
            name: 'id',
            type: 'Edm.Guid',
            isCollection: false
        },
        {
            originalName: 'BusinessPartnerCategory',
            name: 'businessPartnerCategory',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'BusinessPartnerNumber',
            name: 'businessPartnerNumber',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'OrganizationName1',
            name: 'organizationName1',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'LastName',
            name: 'lastName',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'ConsentTemplateName',
            name: 'consentTemplateName',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'ConsentTemplateId',
            name: 'consentTemplateId',
            type: 'Edm.Guid',
            isCollection: false
        },
        {
            originalName: 'ConsentId',
            name: 'consentId',
            type: 'Edm.Guid',
            isCollection: false
        }
    ];
})(BusinessPartnerWithConsent || (exports.BusinessPartnerWithConsent = BusinessPartnerWithConsent = {}));
//# sourceMappingURL=BusinessPartnerWithConsent.js.map