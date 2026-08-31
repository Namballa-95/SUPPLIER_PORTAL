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
export class Workplace<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkplaceType<T>
{
  /**
   * Technical entity name for Workplace.
   */
  static override _entityName = 'Workplace';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Workplace entity.
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
   * Script Code.
   * Maximum length: 1.
   * @nullable
   */
  declare scriptCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Functional Title Name.
   * Maximum length: 40.
   * @nullable
   */
  declare functionalTitleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department Name.
   * Maximum length: 40.
   * @nullable
   */
  declare departmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building.
   * Maximum length: 20.
   * @nullable
   */
  declare building?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Floor.
   * Maximum length: 10.
   * @nullable
   */
  declare floor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Room.
   * Maximum length: 10.
   * @nullable
   */
  declare room?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Short Name.
   * Maximum length: 30.
   * @nullable
   */
  declare correspondenceShortName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Address} entity.
   */
  declare toParent?: Address<T> | null;

  constructor(_entityApi: WorkplaceApi<T>) {
    super(_entityApi);
  }
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
