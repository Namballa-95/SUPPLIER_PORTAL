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
import type { CommunicationDataTextApi } from './CommunicationDataTextApi';

/**
 * This class represents the entity "CommunicationDataText" of service "API_BUSINESS_PARTNER".
 */
export class CommunicationDataText<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements CommunicationDataTextType<T>
{
  /**
   * Technical entity name for CommunicationDataText.
   */
  static override _entityName = 'CommunicationDataText';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CommunicationDataText entity.
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
   * Communication Language.
   * Maximum length: 2.
   * @nullable
   */
  declare communicationLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remark.
   * Maximum length: 50.
   * @nullable
   */
  declare remark?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CommunicationDataTextApi<T>) {
    super(_entityApi);
  }
}

export interface CommunicationDataTextType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  communicationLanguage?: DeserializedType<T, 'Edm.String'> | null;
  remark?: DeserializedType<T, 'Edm.String'> | null;
}
