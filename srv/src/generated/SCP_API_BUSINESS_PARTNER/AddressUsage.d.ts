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
import type { AddressUsageApi } from './AddressUsageApi';
import { Address, AddressType } from './Address';
import {
  AddressInformation,
  AddressInformationType
} from './AddressInformation';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "AddressUsage" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressUsage<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressUsageType<T>
{
  /**
   * Technical entity name for AddressUsage.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddressUsage entity.
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
   * Created By User.
   * Maximum length: 128.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 128.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
   * Address Usage.
   * Maximum length: 10.
   * @nullable
   */
  addressUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Address.
   * @nullable
   */
  isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Root Id.
   * @nullable
   */
  rootId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Address Id.
   * @nullable
   */
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  toAddress?: Address<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressInformation} entity.
   */
  toParent?: AddressInformation<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toRoot?: BusinessPartner<T> | null;
  constructor(_entityApi: AddressUsageApi<T>);
}
export interface AddressUsageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  addressUsage?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  rootId?: DeserializedType<T, 'Edm.Guid'> | null;
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  toAddress?: AddressType<T> | null;
  toParent?: AddressInformationType<T> | null;
  toRoot?: BusinessPartnerType<T> | null;
}
