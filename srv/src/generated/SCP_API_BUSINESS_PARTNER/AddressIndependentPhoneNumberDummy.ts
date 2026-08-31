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
import type { AddressIndependentPhoneNumberDummyApi } from './AddressIndependentPhoneNumberDummyApi';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';
import {
  AddressIndependentCommunication,
  AddressIndependentCommunicationType
} from './AddressIndependentCommunication';

/**
 * This class represents the entity "AddressIndependentPhoneNumberDummy" of service "API_BUSINESS_PARTNER".
 */
export class AddressIndependentPhoneNumberDummy<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressIndependentPhoneNumberDummyType<T>
{
  /**
   * Technical entity name for AddressIndependentPhoneNumberDummy.
   */
  static override _entityName = 'AddressIndependentPhoneNumberDummy';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressIndependentPhoneNumberDummy entity.
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
   * Address Type.
   * Maximum length: 10.
   * @nullable
   */
  declare addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  declare toPhoneNote: CommunicationDataText<T>[];
  /**
   * One-to-one navigation property to the {@link AddressIndependentCommunication} entity.
   */
  declare toParent?: AddressIndependentCommunication<T> | null;

  constructor(_entityApi: AddressIndependentPhoneNumberDummyApi<T>) {
    super(_entityApi);
  }
}

export interface AddressIndependentPhoneNumberDummyType<
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
