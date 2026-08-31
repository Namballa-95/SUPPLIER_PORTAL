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
import type { SupplierApi } from './SupplierApi';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
import {
  AddressInformation,
  AddressInformationType
} from './AddressInformation';
import { SupplierCompany, SupplierCompanyType } from './SupplierCompany';
import {
  SupplierPurchasingOrg,
  SupplierPurchasingOrgType
} from './SupplierPurchasingOrg';
/**
 * This class represents the entity "Supplier" of service "API_BUSINESS_PARTNER".
 */
export declare class Supplier<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierType<T>
{
  /**
   * Technical entity name for Supplier.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Supplier entity.
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
   * Supplier.
   * Maximum length: 10.
   * @nullable
   */
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Type.
   * Maximum length: 2.
   * @nullable
   */
  responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Posting Is Blocked.
   * @nullable
   */
  postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Vat Liability.
   * @nullable
   */
  vatLiability?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Standard Supplier.
   * @nullable
   */
  isStandardSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Address Id.
   * @nullable
   */
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Alternative Payee.
   * Maximum length: 10.
   * @nullable
   */
  alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Is Blocked For Supplier.
   * @nullable
   */
  paymentIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Purchasing Is Blocked.
   * @nullable
   */
  purchasingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressInformation} entity.
   */
  toAddressInformation?: AddressInformation<T> | null;
  /**
   * One-to-many navigation property to the {@link SupplierCompany} entity.
   */
  toCompanyCode: SupplierCompany<T>[];
  /**
   * One-to-many navigation property to the {@link SupplierPurchasingOrg} entity.
   */
  toSupplierPurchasing: SupplierPurchasingOrg<T>[];
  constructor(_entityApi: SupplierApi<T>);
}
export interface SupplierType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  vatLiability?: DeserializedType<T, 'Edm.Boolean'> | null;
  isStandardSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  paymentIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  purchasingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  toParent?: BusinessPartnerType<T> | null;
  toAddressInformation?: AddressInformationType<T> | null;
  toCompanyCode: SupplierCompanyType<T>[];
  toSupplierPurchasing: SupplierPurchasingOrgType<T>[];
}
