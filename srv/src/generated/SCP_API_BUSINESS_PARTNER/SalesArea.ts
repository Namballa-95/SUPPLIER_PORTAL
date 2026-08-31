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
import type { SalesAreaApi } from './SalesAreaApi';
import {
  CustomerPartnerFunction,
  CustomerPartnerFunctionType
} from './CustomerPartnerFunction';
import { Customer, CustomerType } from './Customer';

/**
 * This class represents the entity "SalesArea" of service "API_BUSINESS_PARTNER".
 */
export class SalesArea<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesAreaType<T>
{
  /**
   * Technical entity name for SalesArea.
   */
  static override _entityName = 'SalesArea';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesArea entity.
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
   * Sales Organization.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   * @nullable
   */
  declare distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  declare division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Marked For Deletion.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Order Is Blocked For Customer.
   * Maximum length: 2.
   * @nullable
   */
  declare orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Is Blocked For Customer.
   * Maximum length: 2.
   * @nullable
   */
  declare deliveryIsBlockedForCustomer?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Billing Is Blocked For Customer.
   * Maximum length: 2.
   * @nullable
   */
  declare billingIsBlockedForCustomer?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Complete Delivery Is Defined.
   * @nullable
   */
  declare completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Partial Delivery Is Allowed.
   * Maximum length: 1.
   * @nullable
   */
  declare partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
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
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Price Group.
   * Maximum length: 2.
   * @nullable
   */
  declare customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Priority.
   * Maximum length: 2.
   * @nullable
   */
  declare deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Block For Customer.
   * @nullable
   */
  declare salesBlockForCustomer?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link CustomerPartnerFunction} entity.
   */
  declare toCustomerPartnerFunction: CustomerPartnerFunction<T>[];
  /**
   * One-to-one navigation property to the {@link Customer} entity.
   */
  declare toParent?: Customer<T> | null;

  constructor(_entityApi: SalesAreaApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAreaType<T extends DeSerializers = DefaultDeSerializers> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  salesBlockForCustomer?: DeserializedType<T, 'Edm.Boolean'> | null;
  toCustomerPartnerFunction: CustomerPartnerFunctionType<T>[];
  toParent?: CustomerType<T> | null;
}
