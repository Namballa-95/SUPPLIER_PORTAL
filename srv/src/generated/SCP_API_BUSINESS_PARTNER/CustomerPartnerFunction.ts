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
import type { CustomerPartnerFunctionApi } from './CustomerPartnerFunctionApi';
import { SalesArea, SalesAreaType } from './SalesArea';

/**
 * This class represents the entity "CustomerPartnerFunction" of service "API_BUSINESS_PARTNER".
 */
export class CustomerPartnerFunction<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements CustomerPartnerFunctionType<T>
{
  /**
   * Technical entity name for CustomerPartnerFunction.
   */
  static override _entityName = 'CustomerPartnerFunction';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPartnerFunction entity.
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
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Partner Function.
   * Maximum length: 2.
   * @nullable
   */
  declare partnerFunction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Partner.
   * @nullable
   */
  declare defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  declare partnerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Type.
   * Maximum length: 2.
   * @nullable
   */
  declare partnerType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Description.
   * Maximum length: 30.
   * @nullable
   */
  declare partnerDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesArea} entity.
   */
  declare toParent?: SalesArea<T> | null;

  constructor(_entityApi: CustomerPartnerFunctionApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPartnerFunctionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  partnerFunction?: DeserializedType<T, 'Edm.String'> | null;
  defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  partnerNumber?: DeserializedType<T, 'Edm.String'> | null;
  partnerType?: DeserializedType<T, 'Edm.String'> | null;
  partnerDescription?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: SalesAreaType<T> | null;
}
