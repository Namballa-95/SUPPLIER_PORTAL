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
import type { WorkPlaceAddressInformationApi } from './WorkPlaceAddressInformationApi';
import { ContactPerson, ContactPersonType } from './ContactPerson';
import { Address, AddressType } from './Address';
/**
 * This class represents the entity "WorkPlaceAddressInformation" of service "API_BUSINESS_PARTNER".
 */
export declare class WorkPlaceAddressInformation<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements WorkPlaceAddressInformationType<T>
{
  /**
   * Technical entity name for WorkPlaceAddressInformation.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the WorkPlaceAddressInformation entity.
   */
  static _keys: string[];
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
   * Id.
   */
  id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Workplace Address Id.
   * @nullable
   */
  workplaceAddressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Organization Address Id.
   * @nullable
   */
  organizationAddressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Default Address.
   * @nullable
   */
  isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link ContactPerson} entity.
   */
  toParent?: ContactPerson<T> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  toWorkplaceAddress?: Address<T> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  toOrganizationAddress?: Address<T> | null;
  constructor(_entityApi: WorkPlaceAddressInformationApi<T>);
}
export interface WorkPlaceAddressInformationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  workplaceAddressId?: DeserializedType<T, 'Edm.Guid'> | null;
  organizationAddressId?: DeserializedType<T, 'Edm.Guid'> | null;
  isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: ContactPersonType<T> | null;
  toWorkplaceAddress?: AddressType<T> | null;
  toOrganizationAddress?: AddressType<T> | null;
}
