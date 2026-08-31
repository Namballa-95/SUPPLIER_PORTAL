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
export declare class Identification<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements IdentificationType<T>
{
  /**
   * Technical entity name for Identification.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Identification entity.
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
   * Identification Number.
   * Maximum length: 60.
   * @nullable
   */
  identificationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Identification Type.
   * Maximum length: 6.
   * @nullable
   */
  identificationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Date.
   * @nullable
   */
  entryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Country.
   * Maximum length: 2.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region.
   * Maximum length: 3.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Institute.
   * Maximum length: 40.
   * @nullable
   */
  institute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: IdentificationApi<T>);
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
