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
import type { BusinessPartnerRelationshipApi } from './BusinessPartnerRelationshipApi';
import { ContactPerson, ContactPersonType } from './ContactPerson';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "BusinessPartnerRelationship" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerRelationship<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements BusinessPartnerRelationshipType<T>
{
  /**
   * Technical entity name for BusinessPartnerRelationship.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessPartnerRelationship entity.
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
   * Relationship Category.
   * Maximum length: 6.
   * @nullable
   */
  relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default.
   * @nullable
   */
  isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Status.
   * Maximum length: 2.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Business Partner Id.
   * @nullable
   */
  firstBusinessPartnerId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Second Business Partner Id.
   * @nullable
   */
  secondBusinessPartnerId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link ContactPerson} entity.
   */
  toContactPerson?: ContactPerson<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toFirstBusinessPartner?: BusinessPartner<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toSecondBusinessPartner?: BusinessPartner<T> | null;
  constructor(_entityApi: BusinessPartnerRelationshipApi<T>);
}
export interface BusinessPartnerRelationshipType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
  isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  firstBusinessPartnerId?: DeserializedType<T, 'Edm.Guid'> | null;
  secondBusinessPartnerId?: DeserializedType<T, 'Edm.Guid'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  toContactPerson?: ContactPersonType<T> | null;
  toFirstBusinessPartner?: BusinessPartnerType<T> | null;
  toSecondBusinessPartner?: BusinessPartnerType<T> | null;
}
