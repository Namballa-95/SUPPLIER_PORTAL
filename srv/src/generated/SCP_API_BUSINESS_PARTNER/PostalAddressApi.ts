/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostalAddress } from './PostalAddress';
import { PostalAddressRequestBuilder } from './PostalAddressRequestBuilder';
import { AddressApi } from './AddressApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class PostalAddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostalAddress<DeSerializersT>, DeSerializersT> {
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
  ): PostalAddressApi<DeSerializersT> {
    return new PostalAddressApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      PostalAddress<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [AddressApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PostalAddress;

  requestBuilder(): PostalAddressRequestBuilder<DeSerializersT> {
    return new PostalAddressRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostalAddress<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PostalAddress<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PostalAddress<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PostalAddress, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PostalAddress, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX_IS_WITHOUT_NUMBER: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PO_BOX_POSTAL_CODE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX_DEVIATING_COUNTRY: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX_DEVIATING_REGION: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_POSTAL_CODE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_PREFIX_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_STREET_PREFIX_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_SUFFIX_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_STREET_SUFFIX_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_NUMBER: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_NUMBER_SUPPLEMENT_TEXT: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_CODE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_CITY_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRICT: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TIME_ZONE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLOOR: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM_NUMBER: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARE_OF_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX_LOBBY_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PO_BOX_DEVIATING_CITY_NAME: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LATITUDE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LONGITUDE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DELIVERY_SERVICE_NUMBER: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_SERVICE_TYPE_CODE: OrderableEdmTypeField<
      PostalAddress<DeSerializers>,
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
      PostalAddress<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PostalAddress<DeSerializers>>;
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
         * Static representation of the {@link scriptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_CODE: fieldBuilder.buildEdmTypeField(
          'ScriptCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correspondenceLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'CorrespondenceLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link poBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX: fieldBuilder.buildEdmTypeField('PoBox', 'Edm.String', true),
        /**
         * Static representation of the {@link poBoxIsWithoutNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PoBoxIsWithoutNumber',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link poBoxPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'PoBoxPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link poBoxDeviatingCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField(
          'PoBoxDeviatingCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link poBoxDeviatingRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField(
          'PoBoxDeviatingRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'PostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyPostalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyPostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_NAME: fieldBuilder.buildEdmTypeField(
          'StreetName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetPrefixName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField(
          'StreetPrefixName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalStreetPrefixName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField(
          'AdditionalStreetPrefixName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetSuffixName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField(
          'StreetSuffixName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalStreetSuffixName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField(
          'AdditionalStreetSuffixName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_NUMBER: fieldBuilder.buildEdmTypeField(
          'HouseNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseNumberSupplementText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'HouseNumberSupplementText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_CODE: fieldBuilder.buildEdmTypeField(
          'CityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_NAME: fieldBuilder.buildEdmTypeField(
          'CityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'AdditionalCityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link district} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRICT: fieldBuilder.buildEdmTypeField(
          'District',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link region} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
        /**
         * Static representation of the {@link addressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField(
          'AddressTimeZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link building} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING: fieldBuilder.buildEdmTypeField(
          'Building',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link floor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true),
        /**
         * Static representation of the {@link roomNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM_NUMBER: fieldBuilder.buildEdmTypeField(
          'RoomNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link careOfName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARE_OF_NAME: fieldBuilder.buildEdmTypeField(
          'CareOfName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link poBoxLobbyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField(
          'PoBoxLobbyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link poBoxDeviatingCityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField(
          'PoBoxDeviatingCityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link latitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LATITUDE: fieldBuilder.buildEdmTypeField(
          'Latitude',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link longitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONGITUDE: fieldBuilder.buildEdmTypeField(
          'Longitude',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link deliveryServiceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryServiceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryServiceTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryServiceTypeCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostalAddress)
      };
    }

    return this._schema;
  }
}
