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
import type { BusinessPartnerWhldgTaxApi } from './BusinessPartnerWhldgTaxApi';
import { SupplierCompany, SupplierCompanyType } from './SupplierCompany';
/**
 * This class represents the entity "BusinessPartnerWhldgTax" of service "API_BUSINESS_PARTNER".
 */
export declare class BusinessPartnerWhldgTax<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements BusinessPartnerWhldgTaxType<T>
{
  /**
   * Technical entity name for BusinessPartnerWhldgTax.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessPartnerWhldgTax entity.
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
   * Withholding Tax Type.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Number.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Certificate.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Exmpt Percent.
   * @nullable
   */
  withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Exemption Reason.
   * Maximum length: 2.
   * @nullable
   */
  exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Date Begin.
   * @nullable
   */
  exemptionDateBegin?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Exemption Date End.
   * @nullable
   */
  exemptionDateEnd?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Recipient Type.
   * Maximum length: 2.
   * @nullable
   */
  recipientType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SupplierCompany} entity.
   */
  toParent?: SupplierCompany<T> | null;
  constructor(_entityApi: BusinessPartnerWhldgTaxApi<T>);
}
export interface BusinessPartnerWhldgTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  withholdingTaxType?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  exemptionDateBegin?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  exemptionDateEnd?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  recipientType?: DeserializedType<T, 'Edm.String'> | null;
  toParent?: SupplierCompanyType<T> | null;
}
