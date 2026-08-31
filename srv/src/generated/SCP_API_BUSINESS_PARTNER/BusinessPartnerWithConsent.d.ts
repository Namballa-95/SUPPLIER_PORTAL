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
  Entity,
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
export declare class BusinessPartnerWithConsentField<
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
  private _fieldBuilder;
  /**
   * Representation of the {@link BusinessPartnerWithConsent.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Guid', true, false>;
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
  >;
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
  >;
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
  >;
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
  >;
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
  >;
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
  >;
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
  >;
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
  );
}
export declare namespace BusinessPartnerWithConsent {
  /**
   * Metadata information on all properties of the `BusinessPartnerWithConsent` complex type.
   */
  const _propertyMetadata: PropertyMetadata<BusinessPartnerWithConsent>[];
}
