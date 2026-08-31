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
export class WorkPlaceAddressInformation<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements WorkPlaceAddressInformationType<T>
{
  /**
   * Technical entity name for WorkPlaceAddressInformation.
   */
  static override _entityName = 'WorkPlaceAddressInformation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WorkPlaceAddressInformation entity.
   */
  static _keys = ['Id'];
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
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Workplace Address Id.
   * @nullable
   */
  declare workplaceAddressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Organization Address Id.
   * @nullable
   */
  declare organizationAddressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Default Address.
   * @nullable
   */
  declare isDefaultAddress?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link ContactPerson} entity.
   */
  declare toParent?: ContactPerson<T> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toWorkplaceAddress?: Address<T> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toOrganizationAddress?: Address<T> | null;

  constructor(_entityApi: WorkPlaceAddressInformationApi<T>) {
    super(_entityApi);
  }
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
