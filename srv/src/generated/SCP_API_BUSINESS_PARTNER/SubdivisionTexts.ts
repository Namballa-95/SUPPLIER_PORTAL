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
import type { SubdivisionTextsApi } from './SubdivisionTextsApi';

/**
 * This class represents the entity "SubdivisionTexts" of service "API_BUSINESS_PARTNER".
 */
export class SubdivisionTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubdivisionTextsType<T>
{
  /**
   * Technical entity name for SubdivisionTexts.
   */
  static override _entityName = 'SubdivisionTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubdivisionTexts entity.
   */
  static _keys = [
    'BusConfignVersion',
    'CountryTwoLetterISOCode',
    'CountrySubdivision',
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
   * Country Subdivision.
   * Maximum length: 3.
   */
  declare countrySubdivision: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Two Letter Iso Code.
   * Maximum length: 2.
   */
  declare languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Subdivision Name.
   * Maximum length: 100.
   * @nullable
   */
  declare countrySubdivisionName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubdivisionTextsApi<T>) {
    super(_entityApi);
  }
}

export interface SubdivisionTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  busConfignIsDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  countrySubdivision: DeserializedType<T, 'Edm.String'>;
  languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  countrySubdivisionName?: DeserializedType<T, 'Edm.String'> | null;
}
