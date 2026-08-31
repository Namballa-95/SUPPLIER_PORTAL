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
export declare class Subdivisions<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SubdivisionsType<T>
{
  /**
   * Technical entity name for Subdivisions.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Subdivisions entity.
   */
  static _keys: string[];
  /**
   * Bus Confign Version.
   */
  busConfignVersion: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Bus Confign Is Deleted.
   * @nullable
   */
  busConfignIsDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Country Two Letter Iso Code.
   * Maximum length: 2.
   */
  countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Subdivision.
   * Maximum length: 3.
   */
  countrySubdivision: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Subdivision Type.
   * Maximum length: 50.
   * @nullable
   */
  countrySubdivisionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Subdivision Regionaldivision.
   * Maximum length: 10.
   * @nullable
   */
  countrySubdivisionRegionaldivision?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Subdivision Romanization System.
   * Maximum length: 200.
   * @nullable
   */
  countrySubdivisionRomanizationSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link SubdivisionTexts} entity.
   */
  subdivisionText: SubdivisionTexts<T>[];
  /**
   * One-to-one navigation property to the {@link SubdivisionTexts} entity.
   */
  localisedSubdivision?: SubdivisionTexts<T> | null;
  constructor(_entityApi: SubdivisionsApi<T>);
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
