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
import type { GroupNameApi } from './GroupNameApi';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "GroupName" of service "API_BUSINESS_PARTNER".
 */
export declare class GroupName<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GroupNameType<T>
{
  /**
   * Technical entity name for GroupName.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the GroupName entity.
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
   * Script Code.
   * Maximum length: 1.
   * @nullable
   */
  scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Group Name 1.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerGroupName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Group Name 2.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerGroupName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Group Type.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerGroupType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: GroupNameApi<T>);
}
export interface GroupNameType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerGroupName1?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerGroupName2?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerGroupType?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: BusinessPartnerType<T> | null;
}
