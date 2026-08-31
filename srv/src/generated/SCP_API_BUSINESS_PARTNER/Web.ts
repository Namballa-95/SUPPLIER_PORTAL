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
import type { WebApi } from './WebApi';
import { Address, AddressType } from './Address';
import {
  CommunicationDataText,
  CommunicationDataTextType
} from './CommunicationDataText';

/**
 * This class represents the entity "Web" of service "API_BUSINESS_PARTNER".
 */
export class Web<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WebType<T>
{
  /**
   * Technical entity name for Web.
   */
  static override _entityName = 'Web';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Web entity.
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
   * Is Default Uri.
   * @nullable
   */
  declare isDefaultUri?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Uri Type.
   * Maximum length: 3.
   * @nullable
   */
  declare uriType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Uri.
   * Maximum length: 2048.
   * @nullable
   */
  declare uri?: DeserializedType<T, 'Edm.String'> | null;
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
  declare toWebNote: CommunicationDataText<T>[];

  constructor(_entityApi: WebApi<T>) {
    super(_entityApi);
  }
}

export interface WebType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  isDefaultUri?: DeserializedType<T, 'Edm.Boolean'> | null;
  uriType?: DeserializedType<T, 'Edm.String'> | null;
  uri?: DeserializedType<T, 'Edm.String'> | null;
  usageDeniedIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: AddressType<T> | null;
  toWebNote: CommunicationDataTextType<T>[];
}
