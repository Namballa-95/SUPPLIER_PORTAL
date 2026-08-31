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
import type { FaxNumberApi } from './FaxNumberApi';
import { Address, AddressType } from './Address';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';

/**
 * This class represents the entity "FaxNumber" of service "API_BUSINESS_PARTNER".
 */
export class FaxNumber<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FaxNumberType<T>
{
  /**
   * Technical entity name for FaxNumber.
   */
  static override _entityName = 'FaxNumber';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FaxNumber entity.
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
   * Is Default Fax Number.
   * @nullable
   */
  declare isDefaultFaxNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Destination Location Country.
   * Maximum length: 2.
   * @nullable
   */
  declare destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number.
   * Maximum length: 30.
   * @nullable
   */
  declare number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Extension.
   * Maximum length: 10.
   * @nullable
   */
  declare numberExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Usage Denied Indicator.
   * @nullable
   */
  declare usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;
  /**
   * One-to-many navigation property to the {@link CommunicationDataText} entity.
   */
  declare toFaxNote: CommunicationDataText<T>[];

  constructor(_entityApi: FaxNumberApi<T>) {
    super(_entityApi);
  }
}

export interface FaxNumberType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isDefaultFaxNumber?: DeserializedType<T, 'Edm.Boolean'> | null;
  destinationLocationCountry?: DeserializedType<T, 'Edm.String'> | null;
  number?: DeserializedType<T, 'Edm.String'> | null;
  numberExtension?: DeserializedType<T, 'Edm.String'> | null;
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: AddressType<T> | null;
  toFaxNote: CommunicationDataTextType<T>[];
}
