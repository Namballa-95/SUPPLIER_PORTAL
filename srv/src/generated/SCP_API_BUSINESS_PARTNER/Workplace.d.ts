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
import type { WorkplaceApi } from './WorkplaceApi';
import { Address, AddressType } from './Address';
/**
 * This class represents the entity "Workplace" of service "API_BUSINESS_PARTNER".
 */
export declare class Workplace<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkplaceType<T>
{
  /**
   * Technical entity name for Workplace.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Workplace entity.
   */
  static _keys: string[];
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Script Code.
   * Maximum length: 1.
   * @nullable
   */
  scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Title Name.
   * Maximum length: 40.
   * @nullable
   */
  functionalTitleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department Name.
   * Maximum length: 40.
   * @nullable
   */
  departmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building.
   * Maximum length: 20.
   * @nullable
   */
  building?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Floor.
   * Maximum length: 10.
   * @nullable
   */
  floor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room.
   * Maximum length: 10.
   * @nullable
   */
  room?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Short Name.
   * Maximum length: 30.
   * @nullable
   */
  correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  toParent?: Address<T> | null;
  constructor(_entityApi: WorkplaceApi<T>);
}
export interface WorkplaceType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  functionalTitleName?: DeserializedType<T, 'Edm.String'> | null;
  departmentName?: DeserializedType<T, 'Edm.String'> | null;
  building?: DeserializedType<T, 'Edm.String'> | null;
  floor?: DeserializedType<T, 'Edm.String'> | null;
  room?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: AddressType<T> | null;
}
