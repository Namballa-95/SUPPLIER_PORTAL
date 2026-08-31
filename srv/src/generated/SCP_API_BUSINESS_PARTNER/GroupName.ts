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
export class GroupName<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GroupNameType<T>
{
  /**
   * Technical entity name for GroupName.
   */
  static override _entityName = 'GroupName';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GroupName entity.
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
   * Script Code.
   * Maximum length: 1.
   * @nullable
   */
  declare scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Group Name 1.
   * Maximum length: 40.
   * @nullable
   */
  declare businessPartnerGroupName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Group Name 2.
   * Maximum length: 40.
   * @nullable
   */
  declare businessPartnerGroupName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Group Type.
   * Maximum length: 4.
   * @nullable
   */
  declare businessPartnerGroupType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;

  constructor(_entityApi: GroupNameApi<T>) {
    super(_entityApi);
  }
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
