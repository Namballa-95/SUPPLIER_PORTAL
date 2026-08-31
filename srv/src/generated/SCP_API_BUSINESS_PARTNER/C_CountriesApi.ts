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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class C_CountriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<C_Countries<DeSerializersT>, DeSerializersT> {
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
  ): C_CountriesApi<DeSerializersT> {
    return new C_CountriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      CountryTextsApi<DeSerializersT>,
      SubdivisionsApi<DeSerializersT>,
      CountryTextsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEXT: new Link('text', this, linkedApis[0]),
      SUBDIVISION: new Link('subdivision', this, linkedApis[1]),
      LOCALISED: new OneToOneLink('localised', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = C_Countries;

  requestBuilder(): C_CountriesRequestBuilder<DeSerializersT> {
    return new C_CountriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    C_Countries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<C_Countries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<C_Countries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof C_Countries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(C_Countries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link countryTwoLetterIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_TWO_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryTwoLetterISOCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryThreeLetterIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_THREE_LETTER_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryThreeLetterISOCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryThreeDigitIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_THREE_DIGIT_ISO_CODE: fieldBuilder.buildEdmTypeField(
          'CountryThreeDigitISOCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', C_Countries)
      };
    }

    return this._schema;
  }
}
