/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FaxNumber } from './FaxNumber';
import { FaxNumberRequestBuilder } from './FaxNumberRequestBuilder';
import { AddressApi } from './AddressApi';
import { CommunicationDataTextApi } from './CommunicationDataTextApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class FaxNumberApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FaxNumber<DeSerializersT>, DeSerializersT> {
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
  ): FaxNumberApi<DeSerializersT> {
    return new FaxNumberApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      FaxNumber<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toFaxNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FAX_NOTE: Link<
      FaxNumber<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressApi<DeSerializersT>,
      CommunicationDataTextApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0]),
      TO_FAX_NOTE: new Link('to_FaxNote', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = FaxNumber;

  requestBuilder(): FaxNumberRequestBuilder<DeSerializersT> {
    return new FaxNumberRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FaxNumber<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FaxNumber<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FaxNumber<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FaxNumber, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FaxNumber, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_FAX_NUMBER: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DESTINATION_LOCATION_COUNTRY: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_EXTENSION: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      FaxNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      FaxNumber<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toFaxNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FAX_NOTE: Link<
      FaxNumber<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FaxNumber<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'Parent_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link validityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link isDefaultFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'IsDefaultFaxNumber',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link destinationLocationCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_LOCATION_COUNTRY: fieldBuilder.buildEdmTypeField(
          'DestinationLocationCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
        /**
         * Static representation of the {@link numberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'NumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageDeniedIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_DENIED_INDICATOR: fieldBuilder.buildEdmTypeField(
          'UsageDeniedIndicator',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FaxNumber)
      };
    }

    return this._schema;
  }
}
