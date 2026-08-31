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
export class SupplierPartnerFunction<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SupplierPartnerFunctionType<T>
{
  /**
   * Technical entity name for SupplierPartnerFunction.
   */
  static override _entityName = 'SupplierPartnerFunction';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SupplierPartnerFunction entity.
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
   * One-to-one navigation property to the {@link SupplierPurchasingOrg} entity.
   */
  declare toParent?: SupplierPurchasingOrg<T> | null;

  constructor(_entityApi: SupplierPartnerFunctionApi<T>) {
    super(_entityApi);
  }
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
