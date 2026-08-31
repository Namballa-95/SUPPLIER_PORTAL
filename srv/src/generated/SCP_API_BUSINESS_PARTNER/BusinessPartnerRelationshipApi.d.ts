/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRelationship } from './BusinessPartnerRelationship';
import { BusinessPartnerRelationshipRequestBuilder } from './BusinessPartnerRelationshipRequestBuilder';
import { ContactPersonApi } from './ContactPersonApi';
import { BusinessPartnerApi } from './BusinessPartnerApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class BusinessPartnerRelationshipApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  BusinessPartnerRelationship<DeSerializersT>,
  DeSerializersT
> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): BusinessPartnerRelationshipApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ContactPersonApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof BusinessPartnerRelationship;
  requestBuilder(): BusinessPartnerRelationshipRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessPartnerRelationship<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessPartnerRelationship<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessPartnerRelationship,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    RELATIONSHIP_CATEGORY: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_BUSINESS_PARTNER_ID: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SECOND_BUSINESS_PARTNER_ID: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACT_PERSON: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      ContactPersonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toFirstBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FIRST_BUSINESS_PARTNER: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSecondBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SECOND_BUSINESS_PARTNER: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerRelationship<DeSerializers>>;
  };
}
