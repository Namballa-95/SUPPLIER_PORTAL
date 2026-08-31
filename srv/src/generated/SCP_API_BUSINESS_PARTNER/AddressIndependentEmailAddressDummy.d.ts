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
import type { AddressIndependentEmailAddressDummyApi } from './AddressIndependentEmailAddressDummyApi';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';
import {
  AddressIndependentCommunication,
  AddressIndependentCommunicationType
} from './AddressIndependentCommunication';
/**
 * This class represents the entity "AddressIndependentEmailAddressDummy" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressIndependentEmailAddressDummy<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressIndependentEmailAddressDummyType<T>
{
  /**
   * Technical entity name for AddressIndependentEmailAddressDummy.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddressIndependentEmailAddressDummy entity.
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
   * Is Default Email Address.
   * @nullable
   */
  isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Denied Indicator.
   * @nullable
   */
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Address Type.
   * Maximum length: 10.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  toEmailNote: CommunicationDataText<T>[];
  /**
   * One-to-one navigation property to the {@link AddressIndependentCommunication} entity.
   */
  toParent?: AddressIndependentCommunication<T> | null;
  constructor(_entityApi: AddressIndependentEmailAddressDummyApi<T>);
}
export interface AddressIndependentEmailAddressDummyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  toEmailNote: CommunicationDataTextType<T>[];
  toParent?: AddressIndependentCommunicationType<T> | null;
}
