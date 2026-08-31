/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Subdivisions } from './Subdivisions';
import { SubdivisionsRequestBuilder } from './SubdivisionsRequestBuilder';
import { SubdivisionTextsApi } from './SubdivisionTextsApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SubdivisionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Subdivisions<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SubdivisionsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SubdivisionTextsApi<DeSerializersT>,
      SubdivisionTextsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Subdivisions;
  requestBuilder(): SubdivisionsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Subdivisions<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Subdivisions<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Subdivisions, DeSerializersT>;
  private _schema?;
  get schema(): {
    BUS_CONFIGN_VERSION: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUS_CONFIGN_IS_DELETED: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COUNTRY_TWO_LETTER_ISO_CODE: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_SUBDIVISION: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_SUBDIVISION_TYPE: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_SUBDIVISION_REGIONALDIVISION: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_SUBDIVISION_ROMANIZATION_SYSTEM: OrderableEdmTypeField<
      Subdivisions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link subdivisionText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBDIVISION_TEXT: Link<
      Subdivisions<DeSerializersT>,
      DeSerializersT,
      SubdivisionTextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localisedSubdivision} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALISED_SUBDIVISION: OneToOneLink<
      Subdivisions<DeSerializersT>,
      DeSerializersT,
      SubdivisionTextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Subdivisions<DeSerializers>>;
  };
}
