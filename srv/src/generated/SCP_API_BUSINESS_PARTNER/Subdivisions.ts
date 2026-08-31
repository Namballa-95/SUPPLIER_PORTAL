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
import type { SubdivisionsApi } from './SubdivisionsApi';
import { SubdivisionTexts, SubdivisionTextsType } from './SubdivisionTexts';

/**
 * This class represents the entity "Subdivisions" of service "API_BUSINESS_PARTNER".
 */
export class Subdivisions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SubdivisionsType<T>
{
  /**
   * Technical entity name for Subdivisions.
   */
  static override _entityName = 'Subdivisions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Subdivisions entity.
   */
  static _keys = [
    'BusConfignVersion',
    'CountryTwoLetterISOCode',
    'CountrySubdivision'
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
   * Country Subdivision Type.
   * Maximum length: 50.
   * @nullable
   */
  declare countrySubdivisionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Subdivision Regionaldivision.
   * Maximum length: 10.
   * @nullable
   */
  declare countrySubdivisionRegionaldivision?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Country Subdivision Romanization System.
   * Maximum length: 200.
   * @nullable
   */
  declare countrySubdivisionRomanizationSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link SubdivisionTexts} entity.
   */
  declare subdivisionText: SubdivisionTexts<T>[];
  /**
   * One-to-one navigation property to the {@link SubdivisionTexts} entity.
   */
  declare localisedSubdivision?: SubdivisionTexts<T> | null;

  constructor(_entityApi: SubdivisionsApi<T>) {
    super(_entityApi);
  }
}

export interface SubdivisionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  busConfignIsDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  countrySubdivision: DeserializedType<T, 'Edm.String'>;
  countrySubdivisionType?: DeserializedType<T, 'Edm.String'> | null;
  countrySubdivisionRegionaldivision?: DeserializedType<T, 'Edm.String'> | null;
  countrySubdivisionRomanizationSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  subdivisionText: SubdivisionTextsType<T>[];
  localisedSubdivision?: SubdivisionTextsType<T> | null;
}
