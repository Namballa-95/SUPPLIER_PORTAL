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
import type { AddressPersonNameApi } from './AddressPersonNameApi';
import { Address, AddressType } from './Address';

/**
 * This class represents the entity "AddressPersonName" of service "API_BUSINESS_PARTNER".
 */
export class AddressPersonName<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressPersonNameType<T>
{
  /**
   * Technical entity name for AddressPersonName.
   */
  static override _entityName = 'AddressPersonName';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressPersonName entity.
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
   * Gender.
   * Maximum length: 1.
   * @nullable
   */
  declare gender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Academic Title.
   * Maximum length: 4.
   * @nullable
   */
  declare academicTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Academic Title.
   * Maximum length: 4.
   * @nullable
   */
  declare additionalAcademicTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * Maximum length: 4.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Name Prefix.
   * Maximum length: 4.
   * @nullable
   */
  declare additionalNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Supplement.
   * Maximum length: 4.
   * @nullable
   */
  declare nameSupplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Country.
   * Maximum length: 2.
   * @nullable
   */
  declare nameCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Format.
   * Maximum length: 2.
   * @nullable
   */
  declare nameFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * Maximum length: 40.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Last Name.
   * Maximum length: 40.
   * @nullable
   */
  declare additionalLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Name.
   * Maximum length: 40.
   * @nullable
   */
  declare birthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nick Name.
   * Maximum length: 40.
   * @nullable
   */
  declare nickName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initials.
   * Maximum length: 10.
   * @nullable
   */
  declare initials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  declare fullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   * @nullable
   */
  declare birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;

  constructor(_entityApi: AddressPersonNameApi<T>) {
    super(_entityApi);
  }
}

export interface AddressPersonNameType<
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
  gender?: DeserializedType<T, 'Edm.String'> | null;
  academicTitle?: DeserializedType<T, 'Edm.String'> | null;
  additionalAcademicTitle?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  additionalNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  nameSupplement?: DeserializedType<T, 'Edm.String'> | null;
  nameCountry?: DeserializedType<T, 'Edm.String'> | null;
  nameFormat?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  additionalLastName?: DeserializedType<T, 'Edm.String'> | null;
  birthName?: DeserializedType<T, 'Edm.String'> | null;
  nickName?: DeserializedType<T, 'Edm.String'> | null;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  fullName?: DeserializedType<T, 'Edm.String'> | null;
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toParent?: AddressType<T> | null;
}
