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
export class AddressOrganizationName<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressOrganizationNameType<T>
{
  /**
   * Technical entity name for AddressOrganizationName.
   */
  static override _entityName = 'AddressOrganizationName';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressOrganizationName entity.
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
   * Maximum length: 12.
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
   * Maximum length: 12.
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
   * Form Of Address.
   * Maximum length: 4.
   * @nullable
   */
  declare formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Form.
   * Maximum length: 2.
   * @nullable
   */
  declare legalForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foundation Date.
   * @nullable
   */
  declare foundationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Liquidation Date.
   * @nullable
   */
  declare liquidationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Organization Name 1.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name 2.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name 3.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Name 4.
   * Maximum length: 40.
   * @nullable
   */
  declare organizationName4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;

  constructor(_entityApi: AddressOrganizationNameApi<T>) {
    super(_entityApi);
  }
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
