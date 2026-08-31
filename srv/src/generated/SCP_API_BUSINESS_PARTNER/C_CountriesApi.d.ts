/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { C_Countries } from './C_Countries';
import { C_CountriesRequestBuilder } from './C_CountriesRequestBuilder';
import { CountryTextsApi } from './CountryTextsApi';
import { SubdivisionsApi } from './SubdivisionsApi';
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
export declare class C_CountriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<C_Countries<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): C_CountriesApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      CountryTextsApi<DeSerializersT>,
      SubdivisionsApi<DeSerializersT>,
      CountryTextsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof C_Countries;
  requestBuilder(): C_CountriesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    C_Countries<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<C_Countries<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof C_Countries, DeSerializersT>;
  private _schema?;
  get schema(): {
    BUS_CONFIGN_VERSION: OrderableEdmTypeField<
      C_Countries<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COUNTRY_TWO_LETTER_ISO_CODE: OrderableEdmTypeField<
      C_Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_THREE_LETTER_ISO_CODE: OrderableEdmTypeField<
      C_Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_THREE_DIGIT_ISO_CODE: OrderableEdmTypeField<
      C_Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link text} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXT: Link<
      C_Countries<DeSerializersT>,
      DeSerializersT,
      CountryTextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link subdivision} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBDIVISION: Link<
      C_Countries<DeSerializersT>,
      DeSerializersT,
      SubdivisionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localised} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALISED: OneToOneLink<
      C_Countries<DeSerializersT>,
      DeSerializersT,
      CountryTextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<C_Countries<DeSerializers>>;
  };
}
