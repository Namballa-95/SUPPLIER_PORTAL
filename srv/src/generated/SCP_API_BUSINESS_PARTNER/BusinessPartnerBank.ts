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
export class BusinessPartnerBank<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPartnerBankType<T>
{
  /**
   * Technical entity name for BusinessPartnerBank.
   */
  static override _entityName = 'BusinessPartnerBank';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartnerBank entity.
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
   * Bank Identification.
   * Maximum length: 4.
   * @nullable
   */
  declare bankIdentification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account.
   * Maximum length: 18.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Country Key.
   * Maximum length: 3.
   * @nullable
   */
  declare bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Number.
   * Maximum length: 15.
   * @nullable
   */
  declare bankNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Control Key.
   * Maximum length: 2.
   * @nullable
   */
  declare bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Name.
   * Maximum length: 40.
   * @nullable
   */
  declare bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Holder Name.
   * Maximum length: 60.
   * @nullable
   */
  declare bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * Maximum length: 34.
   * @nullable
   */
  declare iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban Validity Start Date.
   * @nullable
   */
  declare ibanValidityStartDate?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
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
   * Bank Account Reference Text.
   * Maximum length: 20.
   * @nullable
   */
  declare bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link C_Countries} entity.
   */
  declare toCountryCode?: C_Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;

  constructor(_entityApi: BusinessPartnerBankApi<T>) {
    super(_entityApi);
  }
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
