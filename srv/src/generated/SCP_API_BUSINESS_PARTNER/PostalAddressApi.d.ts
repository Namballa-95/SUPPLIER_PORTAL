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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class PostalAddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostalAddress<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): PostalAddressApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [AddressApi<DeSerializersT>]): this;
  entityConstructor: typeof PostalAddress;
  requestBuilder(): PostalAddressRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    PostalAddress<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<PostalAddress<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof PostalAddress, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
