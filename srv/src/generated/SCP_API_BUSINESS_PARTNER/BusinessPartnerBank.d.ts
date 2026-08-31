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
import type { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
import { C_Countries, C_CountriesType } from './C_Countries';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "BusinessPartnerBank" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerBank<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements BusinessPartnerBankType<T>
{
  /**
   * Technical entity name for BusinessPartnerBank.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessPartnerBank entity.
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
   * Bank Identification.
   * Maximum length: 4.
   * @nullable
   */
  bankIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * Maximum length: 18.
   * @nullable
   */
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Country Key.
   * Maximum length: 3.
   * @nullable
   */
  bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Number.
   * Maximum length: 15.
   * @nullable
   */
  bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Control Key.
   * Maximum length: 2.
   * @nullable
   */
  bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Name.
   * Maximum length: 40.
   * @nullable
   */
  bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Holder Name.
   * Maximum length: 60.
   * @nullable
   */
  bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * Maximum length: 34.
   * @nullable
   */
  iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban Validity Start Date.
   * @nullable
   */
  ibanValidityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
   * Bank Account Reference Text.
   * Maximum length: 20.
   * @nullable
   */
  bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link C_Countries} entity.
   */
  toCountryCode?: C_Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: BusinessPartnerBankApi<T>);
}
export interface BusinessPartnerBankType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  bankIdentification?: DeserializedType<T, 'Edm.String'> | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
  bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  ibanValidityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
  toCountryCode?: C_CountriesType<T> | null;
  toParent?: BusinessPartnerType<T> | null;
}
