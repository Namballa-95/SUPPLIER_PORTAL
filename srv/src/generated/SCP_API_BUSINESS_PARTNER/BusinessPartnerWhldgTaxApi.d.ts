/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerWhldgTax } from './BusinessPartnerWhldgTax';
import { BusinessPartnerWhldgTaxRequestBuilder } from './BusinessPartnerWhldgTaxRequestBuilder';
import { SupplierCompanyApi } from './SupplierCompanyApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class BusinessPartnerWhldgTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  BusinessPartnerWhldgTax<DeSerializersT>,
  DeSerializersT
> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): BusinessPartnerWhldgTaxApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [SupplierCompanyApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof BusinessPartnerWhldgTax;
  requestBuilder(): BusinessPartnerWhldgTaxRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessPartnerWhldgTax<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessPartnerWhldgTax<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof BusinessPartnerWhldgTax,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    WITHHOLDING_TAX_TYPE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CODE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_NUMBER: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CERTIFICATE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_EXMPT_PERCENT: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    EXEMPTION_REASON: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTION_DATE_BEGIN: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXEMPTION_DATE_END: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RECIPIENT_TYPE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT,
      SupplierCompanyApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerWhldgTax<DeSerializers>>;
  };
}
