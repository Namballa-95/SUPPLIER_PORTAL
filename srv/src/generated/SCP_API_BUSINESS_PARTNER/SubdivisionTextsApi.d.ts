/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubdivisionTexts } from './SubdivisionTexts';
import { SubdivisionTextsRequestBuilder } from './SubdivisionTextsRequestBuilder';
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
export declare class SubdivisionTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SubdivisionTexts<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SubdivisionTextsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof SubdivisionTexts;
  requestBuilder(): SubdivisionTextsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SubdivisionTexts<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SubdivisionTexts<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SubdivisionTexts, DeSerializersT>;
  private _schema?;
  get schema(): {
    BUS_CONFIGN_VERSION: OrderableEdmTypeField<
      SubdivisionTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUS_CONFIGN_IS_DELETED: OrderableEdmTypeField<
      SubdivisionTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COUNTRY_TWO_LETTER_ISO_CODE: OrderableEdmTypeField<
      SubdivisionTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_SUBDIVISION: OrderableEdmTypeField<
      SubdivisionTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_TWO_LETTER_ISO_CODE: OrderableEdmTypeField<
      SubdivisionTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_SUBDIVISION_NAME: OrderableEdmTypeField<
      SubdivisionTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubdivisionTexts<DeSerializers>>;
  };
}
