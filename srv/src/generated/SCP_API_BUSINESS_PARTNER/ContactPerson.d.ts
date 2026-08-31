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
import type { ContactPersonApi } from './ContactPersonApi';
import {
  BusinessPartnerRelationship,
  BusinessPartnerRelationshipType
} from './BusinessPartnerRelationship';
import {
  WorkPlaceAddressInformation,
  WorkPlaceAddressInformationType
} from './WorkPlaceAddressInformation';
/**
 * This class represents the entity "ContactPerson" of service "API_BUSINESS_PARTNER".
 */
export declare class ContactPerson<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements ContactPersonType<T>
{
  /**
   * Technical entity name for ContactPerson.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ContactPerson entity.
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
   * Vip Partner.
   * Maximum length: 1.
   * @nullable
   */
  vipPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * Maximum length: 4.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Function.
   * Maximum length: 4.
   * @nullable
   */
  partnerFunction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Authority.
   * Maximum length: 1.
   * @nullable
   */
  partnerAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * Maximum length: 40.
   * @nullable
   */
  note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  customerContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  supplierContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartnerRelationship} entity.
   */
  toParent?: BusinessPartnerRelationship<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkPlaceAddressInformation} entity.
   */
  toWorkPlaceAddressInformation: WorkPlaceAddressInformation<T>[];
  /**
   * One-to-one navigation property to the {@link WorkPlaceAddressInformation} entity.
   */
  toCurrentDefaultWorkPlaceAddressInformation?: WorkPlaceAddressInformation<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkPlaceAddressInformation} entity.
   */
  toCwai?: WorkPlaceAddressInformation<T> | null;
  constructor(_entityApi: ContactPersonApi<T>);
}
export interface ContactPersonType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  vipPartner?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  partnerFunction?: DeserializedType<T, 'Edm.String'> | null;
  partnerAuthority?: DeserializedType<T, 'Edm.String'> | null;
  note?: DeserializedType<T, 'Edm.String'> | null;
  customerContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  supplierContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: BusinessPartnerRelationshipType<T> | null;
  toWorkPlaceAddressInformation: WorkPlaceAddressInformationType<T>[];
  toCurrentDefaultWorkPlaceAddressInformation?: WorkPlaceAddressInformationType<T> | null;
  toCwai?: WorkPlaceAddressInformationType<T> | null;
}
