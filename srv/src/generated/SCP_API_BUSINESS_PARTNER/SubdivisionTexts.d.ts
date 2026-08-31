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
export declare class SubdivisionTexts<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SubdivisionTextsType<T>
{
  /**
   * Technical entity name for SubdivisionTexts.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SubdivisionTexts entity.
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
   * Language Two Letter Iso Code.
   * Maximum length: 2.
   */
  languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Country Subdivision Name.
   * Maximum length: 100.
   * @nullable
   */
  countrySubdivisionName?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: SubdivisionTextsApi<T>);
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
