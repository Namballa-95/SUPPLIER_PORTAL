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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SupplierCompanyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SupplierCompany<DeSerializersT>, DeSerializersT> {
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): SupplierCompanyApi<DeSerializersT> {
    return new SupplierCompanyApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerWhldgTaxApi<DeSerializersT>,
      SupplierApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_WITHHOLDING_TAX: new Link('to_WithholdingTax', this, linkedApis[0]),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SupplierCompany;

  requestBuilder(): SupplierCompanyRequestBuilder<DeSerializersT> {
    return new SupplierCompanyRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SupplierCompany<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SupplierCompany<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SupplierCompany, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SupplierCompany,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'Parent_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link companyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_CODE: fieldBuilder.buildEdmTypeField(
          'CompanyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reconciliationAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECONCILIATION_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ReconciliationAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layoutSortingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_SORTING_RULE: fieldBuilder.buildEdmTypeField(
          'LayoutSortingRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minorityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINORITY_GROUP: fieldBuilder.buildEdmTypeField(
          'MinorityGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deletionIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETION_INDICATOR: fieldBuilder.buildEdmTypeField(
          'DeletionIndicator',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supplierIsBlockedForPosting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_IS_BLOCKED_FOR_POSTING: fieldBuilder.buildEdmTypeField(
          'SupplierIsBlockedForPosting',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link paymentBlockingReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_BLOCKING_REASON: fieldBuilder.buildEdmTypeField(
          'PaymentBlockingReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'PaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDoubleInvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DOUBLE_INVOICE: fieldBuilder.buildEdmTypeField(
          'IsDoubleInvoice',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link paymentMethodsList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_METHODS_LIST: fieldBuilder.buildEdmTypeField(
          'PaymentMethodsList',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_BANK: fieldBuilder.buildEdmTypeField(
          'HouseBank',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashPlanningGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_PLANNING_GROUP: fieldBuilder.buildEdmTypeField(
          'CashPlanningGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingClerk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CLERK: fieldBuilder.buildEdmTypeField(
          'AccountingClerk',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingClerkInternetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CLERK_INTERNET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'AccountingClerkInternetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingClerkPhoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_CLERK_PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountingClerkPhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link alternativePayee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTERNATIVE_PAYEE: fieldBuilder.buildEdmTypeField(
          'AlternativePayee',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aparToleranceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APAR_TOLERANCE_GROUP: fieldBuilder.buildEdmTypeField(
          'APARToleranceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clearCustomerSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLEAR_CUSTOMER_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'ClearCustomerSupplier',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SupplierCompany)
      };
    }

    return this._schema;
  }
}
