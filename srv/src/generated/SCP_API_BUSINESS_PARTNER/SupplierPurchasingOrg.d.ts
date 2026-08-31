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
export declare class SupplierPurchasingOrg<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements SupplierPurchasingOrgType<T>
{
  /**
   * Technical entity name for SupplierPurchasingOrg.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the SupplierPurchasingOrg entity.
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
   * Purchasing Organization.
   * Maximum length: 4.
   * @nullable
   */
  purchasingOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Order Currency.
   * Maximum length: 3.
   * @nullable
   */
  purchaseOrderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Classification.
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Transfer Location.
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Schema Group Code.
   * Maximum length: 2.
   * @nullable
   */
  calculationSchemaGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   * @nullable
   */
  purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Is Blocked For Supplier.
   * @nullable
   */
  purchasingIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Pur Ord Auto Generation Is Allowed.
   * @nullable
   */
  purOrdAutoGenerationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supplier Abc Classification Code.
   * Maximum length: 1.
   * @nullable
   */
  supplierAbcClassificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplierPartnerFunction} entity.
   */
  toSupplierPartnerFunction: SupplierPartnerFunction<T>[];
  /**
   * One-to-one navigation property to the {@link Supplier} entity.
   */
  toParent?: Supplier<T> | null;
  constructor(_entityApi: SupplierPurchasingOrgApi<T>);
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
