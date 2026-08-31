/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CountryTexts } from './CountryTexts';
import { CountryTextsRequestBuilder } from './CountryTextsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class CountryTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CountryTexts<DeSerializersT>, DeSerializersT> {
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CountryTextsApi<DeSerializersT> {
    return new CountryTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CountryTexts;

  requestBuilder(): CountryTextsRequestBuilder<DeSerializersT> {
    return new CountryTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CountryTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CountryTexts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CountryTexts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CountryTexts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CountryTexts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link busConfignVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUS_CONFIGN_VERSION: fieldBuilder.buildEdmTypeField(
          'BusConfignVersion',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link busConfignIsDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUS_CONFIGN_IS_DELETED: fieldBuilder.buildEdmTypeField(
          'BusConfignIsDeleted',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link countryTwoLetterIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryTwoLetterISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link languageTwoLetterIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'LanguageTwoLetterISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryIsoShortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_ISO_SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'CountryISOShortName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryIsoFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_ISO_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'CountryISOFullName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CountryTexts)
      };
    }

    return this._schema;
  }
}
