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
export class AddressUsage<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressUsageType<T>
{
  /**
   * Technical entity name for AddressUsage.
   */
  static override _entityName = 'AddressUsage';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressUsage entity.
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
   * Address Usage.
   * Maximum length: 10.
   * @nullable
   */
  declare addressUsage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Address.
   * @nullable
   */
  declare isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Root Id.
   * @nullable
   */
  declare rootId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Address Id.
   * @nullable
   */
  declare addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toAddress?: Address<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressInformation} entity.
   */
  declare toParent?: AddressInformation<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toRoot?: BusinessPartner<T> | null;

  constructor(_entityApi: AddressUsageApi<T>) {
    super(_entityApi);
  }
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
