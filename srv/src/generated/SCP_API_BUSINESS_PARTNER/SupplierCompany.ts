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
import type { SupplierCompanyApi } from './SupplierCompanyApi';
import {
  BusinessPartnerWhldgTax,
  BusinessPartnerWhldgTaxType
} from './BusinessPartnerWhldgTax';
import { Supplier, SupplierType } from './Supplier';

/**
 * This class represents the entity "SupplierCompany" of service "API_BUSINESS_PARTNER".
 */
export class SupplierCompany<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SupplierCompanyType<T>
{
  /**
   * Technical entity name for SupplierCompany.
   */
  static override _entityName = 'SupplierCompany';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SupplierCompany entity.
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
   * Company Code.
   * Maximum length: 4.
   * @nullable
   */
  declare companyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reconciliation Account.
   * Maximum length: 10.
   * @nullable
   */
  declare reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Layout Sorting Rule.
   * Maximum length: 3.
   * @nullable
   */
  declare layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minority Group.
   * Maximum length: 3.
   * @nullable
   */
  declare minorityGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deletion Indicator.
   * @nullable
   */
  declare deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Supplier Is Blocked For Posting.
   * @nullable
   */
  declare supplierIsBlockedForPosting?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Payment Blocking Reason.
   * Maximum length: 1.
   * @nullable
   */
  declare paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Double Invoice.
   * @nullable
   */
  declare isDoubleInvoice?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Payment Methods List.
   * Maximum length: 10.
   * @nullable
   */
  declare paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * House Bank.
   * Maximum length: 5.
   * @nullable
   */
  declare houseBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Planning Group.
   * Maximum length: 10.
   * @nullable
   */
  declare cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Clerk.
   * Maximum length: 2.
   * @nullable
   */
  declare accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Clerk Internet Address.
   * Maximum length: 130.
   * @nullable
   */
  declare accountingClerkInternetAddress?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accounting Clerk Phone Number.
   * Maximum length: 30.
   * @nullable
   */
  declare accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alternative Payee.
   * Maximum length: 10.
   * @nullable
   */
  declare alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apar Tolerance Group.
   * Maximum length: 4.
   * @nullable
   */
  declare aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clear Customer Supplier.
   * @nullable
   */
  declare clearCustomerSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link BusinessPartnerWhldgTax} entity.
   */
  declare toWithholdingTax: BusinessPartnerWhldgTax<T>[];
  /**
   * One-to-one navigation property to the {@link Supplier} entity.
   */
  declare toParent?: Supplier<T> | null;

  constructor(_entityApi: SupplierCompanyApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierCompanyType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  companyCode?: DeserializedType<T, 'Edm.String'> | null;
  reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
  layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
  minorityGroup?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplierIsBlockedForPosting?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  isDoubleInvoice?: DeserializedType<T, 'Edm.Boolean'> | null;
  paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
  houseBank?: DeserializedType<T, 'Edm.String'> | null;
  cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
  aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
  clearCustomerSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  toWithholdingTax: BusinessPartnerWhldgTaxType<T>[];
  toParent?: SupplierType<T> | null;
}
