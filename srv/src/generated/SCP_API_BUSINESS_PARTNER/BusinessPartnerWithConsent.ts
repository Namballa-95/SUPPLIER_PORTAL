/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * BusinessPartnerWithConsent
 */
export interface BusinessPartnerWithConsent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.Guid'>;
  /**
   * Business Partner Category.
   * @nullable
   */
  businessPartnerCategory?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Business Partner Number.
   * @nullable
   */
  businessPartnerNumber?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Organization Name 1.
   * @nullable
   */
  organizationName1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Last Name.
   * @nullable
   */
  lastName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Consent Template Name.
   * @nullable
   */
  consentTemplateName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Consent Template Id.
   * @nullable
   */
  consentTemplateId?: DeserializedType<DeSerializersT, 'Edm.Guid'>;
  /**
   * Consent Id.
   * @nullable
   */
  consentId?: DeserializedType<DeSerializersT, 'Edm.Guid'>;
}

/**
 * BusinessPartnerWithConsentField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPartnerWithConsentField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BusinessPartnerWithConsent,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BusinessPartnerWithConsent.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Guid', true, false> =
    this._fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', true);
  /**
   * Representation of the {@link BusinessPartnerWithConsent.businessPartnerCategory} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerCategory: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BusinessPartnerCategory',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BusinessPartnerWithConsent.businessPartnerNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  businessPartnerNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'BusinessPartnerNumber',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BusinessPartnerWithConsent.organizationName1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  organizationName1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'OrganizationName1',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BusinessPartnerWithConsent.lastName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lastName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true);
  /**
   * Representation of the {@link BusinessPartnerWithConsent.consentTemplateName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consentTemplateName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ConsentTemplateName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link BusinessPartnerWithConsent.consentTemplateId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consentTemplateId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Guid',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ConsentTemplateId',
    'Edm.Guid',
    true
  );
  /**
   * Representation of the {@link BusinessPartnerWithConsent.consentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  consentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Guid',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ConsentId', 'Edm.Guid', true);

  /**
   * Creates an instance of BusinessPartnerWithConsentField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BusinessPartnerWithConsent,
      fieldOptions
    );
  }
}

export namespace BusinessPartnerWithConsent {
  /**
   * Metadata information on all properties of the `BusinessPartnerWithConsent` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPartnerWithConsent>[] =
    [
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
}
