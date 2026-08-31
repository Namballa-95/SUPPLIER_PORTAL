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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class CustomerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Customer<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): CustomerApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      AddressInformationApi<DeSerializersT>,
      SalesAreaApi<DeSerializersT>,
      SalesTaxApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Customer;
  requestBuilder(): CustomerRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Customer<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Customer<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Customer, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
