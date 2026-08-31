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
import type { PersonNameApi } from './PersonNameApi';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "PersonName" of service "API_BUSINESS_PARTNER".
 */
export declare class PersonName<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PersonNameType<T>
{
  /**
   * Technical entity name for PersonName.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the PersonName entity.
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
   * Form Of Address.
   * Maximum length: 4.
   * @nullable
   */
  formOfAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * Maximum length: 1.
   * @nullable
   */
  gender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality.
   * Maximum length: 2.
   * @nullable
   */
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Academic Title.
   * Maximum length: 4.
   * @nullable
   */
  academicTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Academic Title.
   * Maximum length: 4.
   * @nullable
   */
  additionalAcademicTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * Maximum length: 4.
   * @nullable
   */
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Name Prefix.
   * Maximum length: 4.
   * @nullable
   */
  additionalNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Supplement.
   * Maximum length: 4.
   * @nullable
   */
  nameSupplement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Country.
   * Maximum length: 2.
   * @nullable
   */
  nameCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Format.
   * Maximum length: 2.
   * @nullable
   */
  nameFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * Maximum length: 40.
   * @nullable
   */
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Last Name.
   * Maximum length: 40.
   * @nullable
   */
  additionalLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Name.
   * Maximum length: 40.
   * @nullable
   */
  birthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nick Name.
   * Maximum length: 40.
   * @nullable
   */
  nickName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initials.
   * Maximum length: 10.
   * @nullable
   */
  initials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Birth Date.
   * @nullable
   */
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Marital Status.
   * Maximum length: 1.
   * @nullable
   */
  maritalStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Natural Person Employer Name.
   * Maximum length: 35.
   * @nullable
   */
  naturalPersonEmployerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Occupation Group.
   * Maximum length: 4.
   * @nullable
   */
  businessPartnerOccupationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Birthplace Name.
   * Maximum length: 40.
   * @nullable
   */
  businessPartnerBirthplaceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Death Date.
   * @nullable
   */
  businessPartnerDeathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: PersonNameApi<T>);
}
export interface PersonNameType<
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
  nationality?: DeserializedType<T, 'Edm.String'> | null;
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
  birthDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  maritalStatus?: DeserializedType<T, 'Edm.String'> | null;
  naturalPersonEmployerName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerOccupationGroup?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerBirthplaceName?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerDeathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  toParent?: BusinessPartnerType<T> | null;
}
