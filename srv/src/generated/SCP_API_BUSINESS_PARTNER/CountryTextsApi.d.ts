/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CountryTexts } from './CountryTexts';
import { CountryTextsRequestBuilder } from './CountryTextsRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class CountryTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CountryTexts<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): CountryTextsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof CountryTexts;
  requestBuilder(): CountryTextsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CountryTexts<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<CountryTexts<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof CountryTexts, DeSerializersT>;
  private _schema?;
  get schema(): {
    BUS_CONFIGN_VERSION: OrderableEdmTypeField<
      CountryTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUS_CONFIGN_IS_DELETED: OrderableEdmTypeField<
      CountryTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COUNTRY_TWO_LETTER_ISO_CODE: OrderableEdmTypeField<
      CountryTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_TWO_LETTER_ISO_CODE: OrderableEdmTypeField<
      CountryTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_ISO_SHORT_NAME: OrderableEdmTypeField<
      CountryTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_ISO_FULL_NAME: OrderableEdmTypeField<
      CountryTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CountryTexts<DeSerializers>>;
  };
}
