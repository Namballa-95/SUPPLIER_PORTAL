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
import type { AddressIndependentWebApi } from './AddressIndependentWebApi';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';
import {
  AddressIndependentCommunication,
  AddressIndependentCommunicationType
} from './AddressIndependentCommunication';
/**
 * This class represents the entity "AddressIndependentWeb" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressIndependentWeb<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressIndependentWebType<T>
{
  /**
   * Technical entity name for AddressIndependentWeb.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddressIndependentWeb entity.
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
   * Is Default Uri.
   * @nullable
   */
  isDefaultUri?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Uri Type.
   * Maximum length: 3.
   * @nullable
   */
  uriType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uri.
   * Maximum length: 2048.
   * @nullable
   */
  uri?: DeserializedType<T, 'Edm.String'> | null;
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
  toWebNote: CommunicationDataText<T>[];
  /**
   * One-to-one navigation property to the {@link AddressIndependentCommunication} entity.
   */
  toParent?: AddressIndependentCommunication<T> | null;
  constructor(_entityApi: AddressIndependentWebApi<T>);
}
export interface AddressIndependentWebType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isDefaultUri?: DeserializedType<T, 'Edm.Boolean'> | null;
  uriType?: DeserializedType<T, 'Edm.String'> | null;
  uri?: DeserializedType<T, 'Edm.String'> | null;
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  toWebNote: CommunicationDataTextType<T>[];
  toParent?: AddressIndependentCommunicationType<T> | null;
}
