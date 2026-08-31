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
import type { SupplierPartnerFunctionApi } from './SupplierPartnerFunctionApi';
import {
  SupplierPurchasingOrg,
  SupplierPurchasingOrgType
} from './SupplierPurchasingOrg';
/**
 * This class represents the entity "SupplierPartnerFunction" of service "API_BUSINESS_PARTNER".
 */
export declare class SupplierPartnerFunction<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SupplierPartnerFunctionType<T>
{
  /**
   * Technical entity name for SupplierPartnerFunction.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SupplierPartnerFunction entity.
   */
  static _keys: string[];
  /**
   * Created By User.
   * Maximum length: 128.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 128.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
   * Partner Function.
   * Maximum length: 2.
   * @nullable
   */
  partnerFunction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Partner.
   * @nullable
   */
  defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Partner Number.
   * Maximum length: 10.
   * @nullable
   */
  partnerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Type.
   * Maximum length: 2.
   * @nullable
   */
  partnerType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partner Description.
   * Maximum length: 30.
   * @nullable
   */
  partnerDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SupplierPurchasingOrg} entity.
   */
  toParent?: SupplierPurchasingOrg<T> | null;
  constructor(_entityApi: SupplierPartnerFunctionApi<T>);
}
export interface SupplierPartnerFunctionType<
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
  toParent?: SupplierPurchasingOrgType<T> | null;
}
