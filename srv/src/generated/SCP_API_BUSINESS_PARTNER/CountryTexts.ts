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
import type { CountryTextsApi } from './CountryTextsApi';

/**
 * This class represents the entity "CountryTexts" of service "API_BUSINESS_PARTNER".
 */
export class CountryTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CountryTextsType<T>
{
  /**
   * Technical entity name for CountryTexts.
   */
  static override _entityName = 'CountryTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CountryTexts entity.
   */
  static _keys = [
    'BusConfignVersion',
    'CountryTwoLetterISOCode',
    'LanguageTwoLetterISOCode'
  ];
  /**
   * Bus Confign Version.
   */
  declare busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bus Confign Is Deleted.
   * @nullable
   */
  declare busConfignIsDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Country Two Letter Iso Code.
   * Maximum length: 2.
   */
  declare countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Two Letter Iso Code.
   * Maximum length: 2.
   */
  declare languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Iso Short Name.
   * Maximum length: 100.
   * @nullable
   */
  declare countryIsoShortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Iso Full Name.
   * Maximum length: 200.
   * @nullable
   */
  declare countryIsoFullName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CountryTextsApi<T>) {
    super(_entityApi);
  }
}

export interface CountryTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  busConfignIsDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  countryIsoShortName?: DeserializedType<T, 'Edm.String'> | null;
  countryIsoFullName?: DeserializedType<T, 'Edm.String'> | null;
}
