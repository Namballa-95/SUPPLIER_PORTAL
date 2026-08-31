/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesArea } from './SalesArea';
import { SalesAreaRequestBuilder } from './SalesAreaRequestBuilder';
import { CustomerPartnerFunctionApi } from './CustomerPartnerFunctionApi';
import { CustomerApi } from './CustomerApi';
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
export declare class SalesAreaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesArea<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SalesAreaApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      CustomerPartnerFunctionApi<DeSerializersT>,
      CustomerApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SalesArea;
  requestBuilder(): SalesAreaRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<SalesArea<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SalesArea<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SalesArea, DeSerializersT>;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SALES_ORGANIZATION: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_CHANNEL: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ORDER_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_IS_BLOCKED_FOR_CUSTOMER: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLETE_DELIVERY_IS_DEFINED: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PARTIAL_DELIVERY_IS_ALLOWED: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_PRICE_GROUP: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_PRIORITY: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_GROUP: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_OFFICE: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_BLOCK_FOR_CUSTOMER: OrderableEdmTypeField<
      SalesArea<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCustomerPartnerFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER_PARTNER_FUNCTION: Link<
      SalesArea<DeSerializersT>,
      DeSerializersT,
      CustomerPartnerFunctionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      SalesArea<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesArea<DeSerializers>>;
  };
}
