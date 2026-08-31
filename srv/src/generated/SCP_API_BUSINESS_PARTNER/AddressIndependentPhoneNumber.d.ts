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
import type { AddressIndependentPhoneNumberApi } from './AddressIndependentPhoneNumberApi';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';
import {
  AddressIndependentCommunication,
  AddressIndependentCommunicationType
} from './AddressIndependentCommunication';
/**
 * This class represents the entity "AddressIndependentPhoneNumber" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressIndependentPhoneNumber<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressIndependentPhoneNumberType<T>
{
  /**
   * Technical entity name for AddressIndependentPhoneNumber.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddressIndependentPhoneNumber entity.
   */
  static _keys: string[];
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Validity Start Date.
   * @nullable
   */
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity End Date.
   * @nullable
   */
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Is Default Phone Number.
   * @nullable
   */
  isDefaultPhoneNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Destination Location Country.
   * Maximum length: 2.
   * @nullable
   */
  destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   * Maximum length: 30.
   * @nullable
   */
  number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Type.
   * Maximum length: 1.
   * @nullable
   */
  numberType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Extension.
   * Maximum length: 10.
   * @nullable
   */
  numberExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Denied Indicator.
   * @nullable
   */
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Sms Enabled Indicator.
   * @nullable
   */
  smsEnabledIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Address Type.
   * Maximum length: 10.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  toPhoneNote: CommunicationDataText<T>[];
  /**
   * One-to-one navigation property to the {@link AddressIndependentCommunication} entity.
   */
  toParent?: AddressIndependentCommunication<T> | null;
  constructor(_entityApi: AddressIndependentPhoneNumberApi<T>);
}
export interface AddressIndependentPhoneNumberType<
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
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  toPhoneNote: CommunicationDataTextType<T>[];
  toParent?: AddressIndependentCommunicationType<T> | null;
}
