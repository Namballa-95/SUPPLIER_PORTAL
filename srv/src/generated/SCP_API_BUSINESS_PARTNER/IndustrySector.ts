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
import type { IndustrySectorApi } from './IndustrySectorApi';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';

/**
 * This class represents the entity "IndustrySector" of service "API_BUSINESS_PARTNER".
 */
export class IndustrySector<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IndustrySectorType<T>
{
  /**
   * Technical entity name for IndustrySector.
   */
  static override _entityName = 'IndustrySector';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IndustrySector entity.
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
   * Industry Sector.
   * Maximum length: 10.
   * @nullable
   */
  declare industrySector?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industry System Type.
   * Maximum length: 4.
   * @nullable
   */
  declare industrySystemType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Industry.
   * @nullable
   */
  declare isDefaultIndustry?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;

  constructor(_entityApi: IndustrySectorApi<T>) {
    super(_entityApi);
  }
}

export interface IndustrySectorType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  industrySector?: DeserializedType<T, 'Edm.String'> | null;
  industrySystemType?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultIndustry?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: BusinessPartnerType<T> | null;
}
