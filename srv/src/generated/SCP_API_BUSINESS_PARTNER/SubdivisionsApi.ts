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
export class SubdivisionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Subdivisions<DeSerializersT>, DeSerializersT> {
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
  ): SubdivisionsApi<DeSerializersT> {
    return new SubdivisionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      SubdivisionTextsApi<DeSerializersT>,
      SubdivisionTextsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUBDIVISION_TEXT: new Link('subdivisionText', this, linkedApis[0]),
      LOCALISED_SUBDIVISION: new OneToOneLink(
        'localisedSubdivision',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = Subdivisions;

  requestBuilder(): SubdivisionsRequestBuilder<DeSerializersT> {
    return new SubdivisionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Subdivisions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Subdivisions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Subdivisions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Subdivisions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Subdivisions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link countrySubdivision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_SUBDIVISION: fieldBuilder.buildEdmTypeField(
          'CountrySubdivision',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countrySubdivisionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_SUBDIVISION_TYPE: fieldBuilder.buildEdmTypeField(
          'CountrySubdivisionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countrySubdivisionRegionaldivision} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_SUBDIVISION_REGIONALDIVISION: fieldBuilder.buildEdmTypeField(
          'CountrySubdivisionRegionaldivision',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countrySubdivisionRomanizationSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_SUBDIVISION_ROMANIZATION_SYSTEM: fieldBuilder.buildEdmTypeField(
          'CountrySubdivisionRomanizationSystem',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Subdivisions)
      };
    }

    return this._schema;
  }
}
