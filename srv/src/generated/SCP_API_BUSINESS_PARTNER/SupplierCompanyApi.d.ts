/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierCompany } from './SupplierCompany';
import { SupplierCompanyRequestBuilder } from './SupplierCompanyRequestBuilder';
import { BusinessPartnerWhldgTaxApi } from './BusinessPartnerWhldgTaxApi';
import { SupplierApi } from './SupplierApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SupplierCompanyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SupplierCompany<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SupplierCompanyApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerWhldgTaxApi<DeSerializersT>,
      SupplierApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SupplierCompany;
  requestBuilder(): SupplierCompanyRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SupplierCompany<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SupplierCompany<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SupplierCompany, DeSerializersT>;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    COMPANY_CODE: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECONCILIATION_ACCOUNT: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_SORTING_RULE: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINORITY_GROUP: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELETION_INDICATOR: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPLIER_IS_BLOCKED_FOR_POSTING: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_BLOCKING_REASON: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DOUBLE_INVOICE: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PAYMENT_METHODS_LIST: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_BANK: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_PLANNING_GROUP: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CLERK: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CLERK_INTERNET_ADDRESS: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_CLERK_PHONE_NUMBER: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTERNATIVE_PAYEE: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APAR_TOLERANCE_GROUP: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLEAR_CUSTOMER_SUPPLIER: OrderableEdmTypeField<
      SupplierCompany<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWithholdingTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WITHHOLDING_TAX: Link<
      SupplierCompany<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerWhldgTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      SupplierCompany<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SupplierCompany<DeSerializers>>;
  };
}
