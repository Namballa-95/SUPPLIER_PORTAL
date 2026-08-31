/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { PostalAddressApi } from './PostalAddressApi';
import { Address, AddressType } from './Address';

/**
 * This class represents the entity "PostalAddress" of service "API_BUSINESS_PARTNER".
 */
export class PostalAddress<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PostalAddressType<T>
{
  /**
   * Technical entity name for PostalAddress.
   */
  static override _entityName = 'PostalAddress';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostalAddress entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Script Code.
   * Maximum length: 1.
   * @nullable
   */
  declare scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Language.
   * Maximum length: 2.
   * @nullable
   */
  declare correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Po Box.
   * Maximum length: 10.
   * @nullable
   */
  declare poBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Po Box Is Without Number.
   * @nullable
   */
  declare poBoxIsWithoutNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Po Box Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Po Box Deviating Country.
   * Maximum length: 2.
   * @nullable
   */
  declare poBoxDeviatingCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Po Box Deviating Region.
   * Maximum length: 3.
   * @nullable
   */
  declare poBoxDeviatingRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare postalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  declare companyPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Name.
   * Maximum length: 60.
   * @nullable
   */
  declare streetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Prefix Name.
   * Maximum length: 40.
   * @nullable
   */
  declare streetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Street Prefix Name.
   * Maximum length: 40.
   * @nullable
   */
  declare additionalStreetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Suffix Name.
   * Maximum length: 40.
   * @nullable
   */
  declare streetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Street Suffix Name.
   * Maximum length: 40.
   * @nullable
   */
  declare additionalStreetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Number.
   * Maximum length: 10.
   * @nullable
   */
  declare houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Number Supplement Text.
   * Maximum length: 10.
   * @nullable
   */
  declare houseNumberSupplementText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Code.
   * Maximum length: 12.
   * @nullable
   */
  declare cityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City Name.
   * Maximum length: 40.
   * @nullable
   */
  declare cityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional City Name.
   * Maximum length: 40.
   * @nullable
   */
  declare additionalCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District.
   * Maximum length: 40.
   * @nullable
   */
  declare district?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 2.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 3.
   * @nullable
   */
  declare region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * Maximum length: 6.
   * @nullable
   */
  declare addressTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * Maximum length: 40.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building.
   * Maximum length: 20.
   * @nullable
   */
  declare building?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Floor.
   * Maximum length: 10.
   * @nullable
   */
  declare floor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room Number.
   * Maximum length: 10.
   * @nullable
   */
  declare roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Care Of Name.
   * Maximum length: 40.
   * @nullable
   */
  declare careOfName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Po Box Lobby Name.
   * Maximum length: 40.
   * @nullable
   */
  declare poBoxLobbyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Po Box Deviating City Name.
   * Maximum length: 40.
   * @nullable
   */
  declare poBoxDeviatingCityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Latitude.
   * @nullable
   */
  declare latitude?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Longitude.
   * @nullable
   */
  declare longitude?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Delivery Service Number.
   * Maximum length: 10.
   * @nullable
   */
  declare deliveryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Service Type Code.
   * Maximum length: 4.
   * @nullable
   */
  declare deliveryServiceTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;

  constructor(_entityApi: PostalAddressApi<T>) {
    super(_entityApi);
  }
}

export interface PostalAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  poBox?: DeserializedType<T, 'Edm.String'> | null;
  poBoxIsWithoutNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  poBoxPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  poBoxDeviatingCountry?: DeserializedType<T, 'Edm.String'> | null;
  poBoxDeviatingRegion?: DeserializedType<T, 'Edm.String'> | null;
  postalCode?: DeserializedType<T, 'Edm.String'> | null;
  companyPostalCode?: DeserializedType<T, 'Edm.String'> | null;
  streetName?: DeserializedType<T, 'Edm.String'> | null;
  streetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  additionalStreetPrefixName?: DeserializedType<T, 'Edm.String'> | null;
  streetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  additionalStreetSuffixName?: DeserializedType<T, 'Edm.String'> | null;
  houseNumber?: DeserializedType<T, 'Edm.String'> | null;
  houseNumberSupplementText?: DeserializedType<T, 'Edm.String'> | null;
  cityCode?: DeserializedType<T, 'Edm.String'> | null;
  cityName?: DeserializedType<T, 'Edm.String'> | null;
  additionalCityName?: DeserializedType<T, 'Edm.String'> | null;
  district?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  building?: DeserializedType<T, 'Edm.String'> | null;
  floor?: DeserializedType<T, 'Edm.String'> | null;
  roomNumber?: DeserializedType<T, 'Edm.String'> | null;
  careOfName?: DeserializedType<T, 'Edm.String'> | null;
  poBoxLobbyName?: DeserializedType<T, 'Edm.String'> | null;
  poBoxDeviatingCityName?: DeserializedType<T, 'Edm.String'> | null;
  latitude?: DeserializedType<T, 'Edm.Decimal'> | null;
  longitude?: DeserializedType<T, 'Edm.Decimal'> | null;
  deliveryServiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryServiceTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: AddressType<T> | null;
}
