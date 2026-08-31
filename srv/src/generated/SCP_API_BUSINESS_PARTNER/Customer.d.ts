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
import type { CustomerApi } from './CustomerApi';
import {
  AddressInformation,
  AddressInformationType
} from './AddressInformation';
import { SalesArea, SalesAreaType } from './SalesArea';
import { SalesTax, SalesTaxType } from './SalesTax';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';
/**
 * This class represents the entity "Customer" of service "API_BUSINESS_PARTNER".
 */
export declare class Customer<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerType<T>
{
  /**
   * Technical entity name for Customer.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Customer entity.
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
   * Customer.
   * Maximum length: 10.
   * @nullable
   */
  customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Corporate Group.
   * Maximum length: 10.
   * @nullable
   */
  customerCorporateGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Group.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Marked For Deletion.
   * @nullable
   */
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Order Is Blocked For Customer.
   * Maximum length: 2.
   * @nullable
   */
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Is Blocked For Customer.
   * Maximum length: 2.
   * @nullable
   */
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Classification.
   * Maximum length: 2.
   * @nullable
   */
  customerClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Is Blocked For Customer.
   * Maximum length: 2.
   * @nullable
   */
  deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nielsen Region.
   * Maximum length: 2.
   * @nullable
   */
  nielsenRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Block For Customer.
   * @nullable
   */
  salesBlockForCustomer?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Standard Customer.
   * @nullable
   */
  isStandardCustomer?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Address Id.
   * @nullable
   */
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * One-to-one navigation property to the {@link AddressInformation} entity.
   */
  toAddressInformation?: AddressInformation<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesArea} entity.
   */
  toSalesArea: SalesArea<T>[];
  /**
   * One-to-many navigation property to the {@link SalesTax} entity.
   */
  toSalesTax: SalesTax<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: CustomerApi<T>);
}
export interface CustomerType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  customerCorporateGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  customerClassification?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  nielsenRegion?: DeserializedType<T, 'Edm.String'> | null;
  salesBlockForCustomer?: DeserializedType<T, 'Edm.Boolean'> | null;
  isStandardCustomer?: DeserializedType<T, 'Edm.Boolean'> | null;
  addressId?: DeserializedType<T, 'Edm.Guid'> | null;
  toAddressInformation?: AddressInformationType<T> | null;
  toSalesArea: SalesAreaType<T>[];
  toSalesTax: SalesTaxType<T>[];
  toParent?: BusinessPartnerType<T> | null;
}
