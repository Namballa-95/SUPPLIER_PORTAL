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
import type { EmailAddressApi } from './EmailAddressApi';
import { Address, AddressType } from './Address';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';
/**
 * This class represents the entity "EmailAddress" of service "API_BUSINESS_PARTNER".
 */
export declare class EmailAddress<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements EmailAddressType<T>
{
  /**
   * Technical entity name for EmailAddress.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the EmailAddress entity.
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
   * One-to-one navigation property to the {@link Address} entity.
   */
  toParent?: Address<T> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  toEmailNote: CommunicationDataText<T>[];
  constructor(_entityApi: EmailAddressApi<T>);
}
export interface EmailAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: AddressType<T> | null;
  toEmailNote: CommunicationDataTextType<T>[];
}
