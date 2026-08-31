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
export class Supplier<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierType<T>
{
  /**
   * Technical entity name for Supplier.
   */
  static override _entityName = 'Supplier';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Supplier entity.
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
   * Supplier.
   * Maximum length: 10.
   * @nullable
   */
  declare supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Type.
   * Maximum length: 2.
   * @nullable
   */
  declare responsibleType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  declare supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Posting Is Blocked.
   * @nullable
   */
  declare postingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Vat Liability.
   * @nullable
   */
  declare vatLiability?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Standard Supplier.
   * @nullable
   */
  declare isStandardSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Address Id.
   * @nullable
   */
  declare addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Alternative Payee.
   * Maximum length: 10.
   * @nullable
   */
  declare alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Is Blocked For Supplier.
   * @nullable
   */
  declare paymentIsBlockedForSupplier?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Purchasing Is Blocked.
   * @nullable
   */
  declare purchasingIsBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressInformation} entity.
   */
  declare toAddressInformation?: AddressInformation<T> | null;
  /**
   * One-to-many navigation property to the {@link SupplierCompany} entity.
   */
  declare toCompanyCode: SupplierCompany<T>[];
  /**
   * One-to-many navigation property to the {@link SupplierPurchasingOrg} entity.
   */
  declare toSupplierPurchasing: SupplierPurchasingOrg<T>[];

  constructor(_entityApi: SupplierApi<T>) {
    super(_entityApi);
  }
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
