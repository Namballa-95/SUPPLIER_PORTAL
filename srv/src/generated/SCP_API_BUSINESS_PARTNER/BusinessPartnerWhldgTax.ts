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
export class BusinessPartnerWhldgTax<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements BusinessPartnerWhldgTaxType<T>
{
  /**
   * Technical entity name for BusinessPartnerWhldgTax.
   */
  static override _entityName = 'BusinessPartnerWhldgTax';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartnerWhldgTax entity.
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
   * Withholding Tax Type.
   * Maximum length: 2.
   * @nullable
   */
  declare withholdingTaxType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Code.
   * Maximum length: 2.
   * @nullable
   */
  declare withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Number.
   * Maximum length: 16.
   * @nullable
   */
  declare withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Certificate.
   * Maximum length: 25.
   * @nullable
   */
  declare withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Tax Exmpt Percent.
   * @nullable
   */
  declare withholdingTaxExmptPercent?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Exemption Reason.
   * Maximum length: 2.
   * @nullable
   */
  declare exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption Date Begin.
   * @nullable
   */
  declare exemptionDateBegin?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Exemption Date End.
   * @nullable
   */
  declare exemptionDateEnd?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Recipient Type.
   * Maximum length: 2.
   * @nullable
   */
  declare recipientType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SupplierCompany} entity.
   */
  declare toParent?: SupplierCompany<T> | null;

  constructor(_entityApi: BusinessPartnerWhldgTaxApi<T>) {
    super(_entityApi);
  }
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
