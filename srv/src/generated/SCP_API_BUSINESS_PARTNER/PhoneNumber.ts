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
import type { PhoneNumberApi } from './PhoneNumberApi';
import { Address, AddressType } from './Address';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';

/**
 * This class represents the entity "PhoneNumber" of service "API_BUSINESS_PARTNER".
 */
export class PhoneNumber<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PhoneNumberType<T>
{
  /**
   * Technical entity name for PhoneNumber.
   */
  static override _entityName = 'PhoneNumber';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PhoneNumber entity.
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
   * Validity Start Date.
   * @nullable
   */
  declare validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity End Date.
   * @nullable
   */
  declare validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Is Default Phone Number.
   * @nullable
   */
  declare isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Destination Location Country.
   * Maximum length: 2.
   * @nullable
   */
  declare destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   * Maximum length: 30.
   * @nullable
   */
  declare number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Type.
   * Maximum length: 1.
   * @nullable
   */
  declare numberType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Extension.
   * Maximum length: 10.
   * @nullable
   */
  declare numberExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Denied Indicator.
   * @nullable
   */
  declare usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Sms Enabled Indicator.
   * @nullable
   */
  declare smsEnabledIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  declare toPhoneNote: CommunicationDataText<T>[];

  constructor(_entityApi: PhoneNumberApi<T>) {
    super(_entityApi);
  }
}

export interface PhoneNumberType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  number?: DeserializedType<T, 'Edm.String'> | null;
  numberType?: DeserializedType<T, 'Edm.String'> | null;
  numberExtension?: DeserializedType<T, 'Edm.String'> | null;
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  smsEnabledIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: AddressType<T> | null;
  toPhoneNote: CommunicationDataTextType<T>[];
}
