/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Identification } from './Identification';
import { IdentificationRequestBuilder } from './IdentificationRequestBuilder';
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
export declare class IdentificationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Identification<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): IdentificationApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [BusinessPartnerApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof Identification;
  requestBuilder(): IdentificationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Identification<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Identification<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Identification, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_TYPE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTITUTE: OrderableEdmTypeField<
      Identification<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Identification<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Identification<DeSerializers>>;
  };
}
