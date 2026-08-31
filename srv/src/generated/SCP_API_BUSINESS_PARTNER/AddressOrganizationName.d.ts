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
import type { AddressOrganizationNameApi } from './AddressOrganizationNameApi';
import { Address, AddressType } from './Address';
/**
 * This class represents the entity "AddressOrganizationName" of service "API_BUSINESS_PARTNER".
 */
export declare class AddressOrganizationName<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressOrganizationNameType<T>
{
  /**
   * Technical entity name for AddressOrganizationName.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddressOrganizationName entity.
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
   * Maximum length: 12.
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
   * Maximum length: 12.
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
   * Form Of Address.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Form.
   * Maximum length: 2.
   * @nullable
   */
  legalForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foundation Date.
   * @nullable
   */
  foundationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Liquidation Date.
   * @nullable
   */
  liquidationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Organization Name 1.
   * Maximum length: 40.
   * @nullable
   */
  organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name 2.
   * Maximum length: 40.
   * @nullable
   */
  organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name 3.
   * Maximum length: 40.
   * @nullable
   */
  organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name 4.
   * Maximum length: 40.
   * @nullable
   */
  organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  toParent?: Address<T> | null;
  constructor(_entityApi: AddressOrganizationNameApi<T>);
}
export interface AddressOrganizationNameType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  legalForm?: DeserializedType<T, 'Edm.String'> | null;
  foundationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  liquidationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: AddressType<T> | null;
}
