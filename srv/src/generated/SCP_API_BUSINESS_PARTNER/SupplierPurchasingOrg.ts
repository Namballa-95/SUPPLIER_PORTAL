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
import type { SupplierPurchasingOrgApi } from './SupplierPurchasingOrgApi';
import {
  SupplierPartnerFunction,
  SupplierPartnerFunctionType
} from './SupplierPartnerFunction';
import { Supplier, SupplierType } from './Supplier';

/**
 * This class represents the entity "SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPurchasingOrg<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SupplierPurchasingOrgType<T>
{
  /**
   * Technical entity name for SupplierPurchasingOrg.
   */
  static override _entityName = 'SupplierPurchasingOrg';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SupplierPurchasingOrg entity.
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
   * Purchasing Organization.
   * Maximum length: 4.
   * @nullable
   */
  declare purchasingOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Currency.
   * Maximum length: 3.
   * @nullable
   */
  declare purchaseOrderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Classification.
   * Maximum length: 3.
   * @nullable
   */
  declare incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Transfer Location.
   * Maximum length: 28.
   * @nullable
   */
  declare incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Schema Group Code.
   * Maximum length: 2.
   * @nullable
   */
  declare calculationSchemaGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   * @nullable
   */
  declare purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Is Blocked For Supplier.
   * @nullable
   */
  declare purchasingIsBlockedForSupplier?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Pur Ord Auto Generation Is Allowed.
   * @nullable
   */
  declare purOrdAutoGenerationIsAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Supplier Abc Classification Code.
   * Maximum length: 1.
   * @nullable
   */
  declare supplierAbcClassificationCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-many navigation property to the {@link SupplierPartnerFunction} entity.
   */
  declare toSupplierPartnerFunction: SupplierPartnerFunction<T>[];
  /**
   * One-to-one navigation property to the {@link Supplier} entity.
   */
  declare toParent?: Supplier<T> | null;

  constructor(_entityApi: SupplierPurchasingOrgApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierPurchasingOrgType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  purchasingOrganization?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  calculationSchemaGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  purchasingIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  purOrdAutoGenerationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplierAbcClassificationCode?: DeserializedType<T, 'Edm.String'> | null;
  toSupplierPartnerFunction: SupplierPartnerFunctionType<T>[];
  toParent?: SupplierType<T> | null;
}
