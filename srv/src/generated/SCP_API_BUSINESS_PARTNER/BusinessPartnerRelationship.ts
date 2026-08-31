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
export class BusinessPartnerRelationship<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements BusinessPartnerRelationshipType<T>
{
  /**
   * Technical entity name for BusinessPartnerRelationship.
   */
  static override _entityName = 'BusinessPartnerRelationship';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartnerRelationship entity.
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
   * Relationship Category.
   * Maximum length: 6.
   * @nullable
   */
  declare relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default.
   * @nullable
   */
  declare isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Status.
   * Maximum length: 2.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Business Partner Id.
   * @nullable
   */
  declare firstBusinessPartnerId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Second Business Partner Id.
   * @nullable
   */
  declare secondBusinessPartnerId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link ContactPerson} entity.
   */
  declare toContactPerson?: ContactPerson<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toFirstBusinessPartner?: BusinessPartner<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toSecondBusinessPartner?: BusinessPartner<T> | null;

  constructor(_entityApi: BusinessPartnerRelationshipApi<T>) {
    super(_entityApi);
  }
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
