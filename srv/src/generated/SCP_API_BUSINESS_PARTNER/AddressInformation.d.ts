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
import type { AddressInformationApi } from './AddressInformationApi';
import { AddressUsage, AddressUsageType } from './AddressUsage';
import { Address, AddressType } from './Address';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "AddressInformation" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressInformation<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressInformationType<T>
{
  /**
   * Technical entity name for AddressInformation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddressInformation entity.
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
   * Address Id.
   * @nullable
   */
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Independent.
   * @nullable
   */
  isIndependent?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link AddressUsage} entity.
   */
  toAddressUsage: AddressUsage<T>[];
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  toAddress?: Address<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: AddressInformationApi<T>);
}
export interface AddressInformationType<
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
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  isIndependent?: DeserializedType<T, 'Edm.Boolean'> | null;
  toAddressUsage: AddressUsageType<T>[];
  toAddress?: AddressType<T> | null;
  toParent?: BusinessPartnerType<T> | null;
}
