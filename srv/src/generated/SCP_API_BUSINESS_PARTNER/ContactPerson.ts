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
export class ContactPerson<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContactPersonType<T>
{
  /**
   * Technical entity name for ContactPerson.
   */
  static override _entityName = 'ContactPerson';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ContactPerson entity.
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
   * Vip Partner.
   * Maximum length: 1.
   * @nullable
   */
  declare vipPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * Maximum length: 4.
   * @nullable
   */
  declare department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Function.
   * Maximum length: 4.
   * @nullable
   */
  declare partnerFunction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Authority.
   * Maximum length: 1.
   * @nullable
   */
  declare partnerAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note.
   * Maximum length: 40.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  declare customerContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Contact Person.
   * Maximum length: 10.
   * @nullable
   */
  declare supplierContactPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartnerRelationship} entity.
   */
  declare toParent?: BusinessPartnerRelationship<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkPlaceAddressInformation} entity.
   */
  declare toWorkPlaceAddressInformation: WorkPlaceAddressInformation<T>[];
  /**
   * One-to-one navigation property to the {@link WorkPlaceAddressInformation} entity.
   */
  declare toCurrentDefaultWorkPlaceAddressInformation?: WorkPlaceAddressInformation<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkPlaceAddressInformation} entity.
   */
  declare toCwai?: WorkPlaceAddressInformation<T> | null;

  constructor(_entityApi: ContactPersonApi<T>) {
    super(_entityApi);
  }
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
