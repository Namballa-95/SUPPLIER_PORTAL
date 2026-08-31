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
import type { C_CountriesApi } from './C_CountriesApi';
import { CountryTexts, CountryTextsType } from './CountryTexts';
import { Subdivisions, SubdivisionsType } from './Subdivisions';

/**
 * This class represents the entity "C_Countries" of service "API_BUSINESS_PARTNER".
 */
export class C_Countries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements C_CountriesType<T>
{
  /**
   * Technical entity name for C_Countries.
   */
  static override _entityName = 'C_Countries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the C_Countries entity.
   */
  static _keys = ['BusConfignVersion', 'CountryTwoLetterISOCode'];
  /**
   * Bus Confign Version.
   */
  declare busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Country Two Letter Iso Code.
   * Maximum length: 2.
   */
  declare countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Three Letter Iso Code.
   * Maximum length: 3.
   * @nullable
   */
  declare countryThreeLetterIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Three Digit Iso Code.
   * Maximum length: 3.
   * @nullable
   */
  declare countryThreeDigitIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CountryTexts} entity.
   */
  declare text: CountryTexts<T>[];
  /**
   * One-to-many navigation property to the {@link Subdivisions} entity.
   */
  declare subdivision: Subdivisions<T>[];
  /**
   * One-to-one navigation property to the {@link CountryTexts} entity.
   */
  declare localised?: CountryTexts<T> | null;

  constructor(_entityApi: C_CountriesApi<T>) {
    super(_entityApi);
  }
}

export interface C_CountriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  countryThreeLetterIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  countryThreeDigitIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  text: CountryTextsType<T>[];
  subdivision: SubdivisionsType<T>[];
  localised?: CountryTextsType<T> | null;
}
