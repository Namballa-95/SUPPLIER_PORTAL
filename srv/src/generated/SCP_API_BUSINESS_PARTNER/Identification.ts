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
import type { IdentificationApi } from './IdentificationApi';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';

/**
 * This class represents the entity "Identification" of service "API_BUSINESS_PARTNER".
 */
export class Identification<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdentificationType<T>
{
  /**
   * Technical entity name for Identification.
   */
  static override _entityName = 'Identification';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Identification entity.
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
   * Identification Number.
   * Maximum length: 60.
   * @nullable
   */
  declare identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Type.
   * Maximum length: 6.
   * @nullable
   */
  declare identificationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Date.
   * @nullable
   */
  declare entryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Country.
   * Maximum length: 2.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 3.
   * @nullable
   */
  declare region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Institute.
   * Maximum length: 40.
   * @nullable
   */
  declare institute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;

  constructor(_entityApi: IdentificationApi<T>) {
    super(_entityApi);
  }
}

export interface IdentificationType<
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
  identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  identificationType?: DeserializedType<T, 'Edm.String'> | null;
  entryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  region?: DeserializedType<T, 'Edm.String'> | null;
  institute?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: BusinessPartnerType<T> | null;
}
