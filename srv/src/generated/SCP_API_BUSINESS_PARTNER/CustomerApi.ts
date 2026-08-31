/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Customer } from './Customer';
import { CustomerRequestBuilder } from './CustomerRequestBuilder';
import { AddressInformationApi } from './AddressInformationApi';
import { SalesAreaApi } from './SalesAreaApi';
import { SalesTaxApi } from './SalesTaxApi';
import { BusinessPartnerApi } from './BusinessPartnerApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class CustomerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Customer<DeSerializersT>, DeSerializersT> {
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
  ): CustomerApi<DeSerializersT> {
    return new CustomerApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INFORMATION: OneToOneLink<
      Customer<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_AREA: Link<
      Customer<DeSerializersT>,
      DeSerializersT,
      SalesAreaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_TAX: Link<
      Customer<DeSerializersT>,
      DeSerializersT,
      SalesTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Customer<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressInformationApi<DeSerializersT>,
      SalesAreaApi<DeSerializersT>,
      SalesTaxApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_ADDRESS_INFORMATION: new OneToOneLink(
        'to_AddressInformation',
        this,
        linkedApis[0]
      ),
      TO_SALES_AREA: new Link('to_SalesArea', this, linkedApis[1]),
      TO_SALES_TAX: new Link('to_SalesTax', this, linkedApis[2]),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = Customer;

  requestBuilder(): CustomerRequestBuilder<DeSerializersT> {
    return new CustomerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Customer<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Customer<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Customer<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Customer, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Customer, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CORPORATE_GROUP: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ACCOUNT_GROUP: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ORDER_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CLASSIFICATION: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NIELSEN_REGION: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_BLOCK_FOR_CUSTOMER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_STANDARD_CUSTOMER: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADDRESS_ID: OrderableEdmTypeField<
      Customer<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INFORMATION: OneToOneLink<
      Customer<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesArea} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_AREA: Link<
      Customer<DeSerializersT>,
      DeSerializersT,
      SalesAreaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesTax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_TAX: Link<
      Customer<DeSerializersT>,
      DeSerializersT,
      SalesTaxApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Customer<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Customer<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link customer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER: fieldBuilder.buildEdmTypeField(
          'Customer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerCorporateGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CORPORATE_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerCorporateGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerAccountGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link orderIsBlockedForCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'OrderIsBlockedForCustomer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingIsBlockedForCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'BillingIsBlockedForCustomer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'CustomerClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryIsBlockedForCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'DeliveryIsBlockedForCustomer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nielsenRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NIELSEN_REGION: fieldBuilder.buildEdmTypeField(
          'NielsenRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesBlockForCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_BLOCK_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'SalesBlockForCustomer',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isStandardCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STANDARD_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'IsStandardCustomer',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link addressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'Address_Id',
          'Edm.Guid',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Customer)
      };
    }

    return this._schema;
  }
}
