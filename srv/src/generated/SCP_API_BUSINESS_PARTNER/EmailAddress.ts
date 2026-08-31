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
export class EmailAddress<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmailAddressType<T>
{
  /**
   * Technical entity name for EmailAddress.
   */
  static override _entityName = 'EmailAddress';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmailAddress entity.
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
   * Is Default Email Address.
   * @nullable
   */
  declare isDefaultEmailAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Email Address.
   * Maximum length: 241.
   * @nullable
   */
  declare emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Denied Indicator.
   * @nullable
   */
  declare usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  declare toEmailNote: CommunicationDataText<T>[];

  constructor(_entityApi: EmailAddressApi<T>) {
    super(_entityApi);
  }
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
