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
export class AddressInformation<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressInformationType<T>
{
  /**
   * Technical entity name for AddressInformation.
   */
  static override _entityName = 'AddressInformation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressInformation entity.
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
   * Created By User.
   * Maximum length: 128.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 128.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
   * Address Id.
   * @nullable
   */
  declare addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Independent.
   * @nullable
   */
  declare isIndependent?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link AddressUsage} entity.
   */
  declare toAddressUsage: AddressUsage<T>[];
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toAddress?: Address<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;

  constructor(_entityApi: AddressInformationApi<T>) {
    super(_entityApi);
  }
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
