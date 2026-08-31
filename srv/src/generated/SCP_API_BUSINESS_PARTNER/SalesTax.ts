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
import type { SalesTaxApi } from './SalesTaxApi';
import { Customer, CustomerType } from './Customer';

/**
 * This class represents the entity "SalesTax" of service "API_BUSINESS_PARTNER".
 */
export class SalesTax<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesTaxType<T>
{
  /**
   * Technical entity name for SalesTax.
   */
  static override _entityName = 'SalesTax';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTax entity.
   */
  static _keys = ['Id'];
  /**
   * Created By User.
   * Maximum length: 128.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 128.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Country.
   * Maximum length: 3.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Category.
   * Maximum length: 4.
   * @nullable
   */
  declare taxCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Classification.
   * Maximum length: 1.
   * @nullable
   */
  declare taxClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Id.
   * @nullable
   */
  declare customerId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * One-to-one navigation property to the {@link Customer} entity.
   */
  declare toCustomer?: Customer<T> | null;

  constructor(_entityApi: SalesTaxApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxType<T extends DeSerializers = DefaultDeSerializers> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  country?: DeserializedType<T, 'Edm.String'> | null;
  taxCategory?: DeserializedType<T, 'Edm.String'> | null;
  taxClassification?: DeserializedType<T, 'Edm.String'> | null;
  customerId?: DeserializedType<T, 'Edm.Guid'> | null;
  toCustomer?: CustomerType<T> | null;
}
