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
export class SalesAreaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesArea<DeSerializersT>, DeSerializersT> {
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
  ): SalesAreaApi<DeSerializersT> {
    return new SalesAreaApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerPartnerFunctionApi<DeSerializersT>,
      CustomerApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_CUSTOMER_PARTNER_FUNCTION: new Link(
        'to_CustomerPartnerFunction',
        this,
        linkedApis[0]
      ),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SalesArea;

  requestBuilder(): SalesAreaRequestBuilder<DeSerializersT> {
    return new SalesAreaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesArea<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesArea<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesArea<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesArea, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesArea, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link salesOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'SalesOrganization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_CHANNEL: fieldBuilder.buildEdmTypeField(
          'DistributionChannel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField(
          'Division',
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
         * Static representation of the {@link deliveryIsBlockedForCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'DeliveryIsBlockedForCustomer',
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
         * Static representation of the {@link completeDeliveryIsDefined} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLETE_DELIVERY_IS_DEFINED: fieldBuilder.buildEdmTypeField(
          'CompleteDeliveryIsDefined',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link partialDeliveryIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTIAL_DELIVERY_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'PartialDeliveryIsAllowed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'IncotermsClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsTransferLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField(
          'IncotermsTransferLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
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
         * Static representation of the {@link customerPriceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PRICE_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerPriceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField(
          'DeliveryPriority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_GROUP: fieldBuilder.buildEdmTypeField(
          'SalesGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOffice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_OFFICE: fieldBuilder.buildEdmTypeField(
          'SalesOffice',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesArea)
      };
    }

    return this._schema;
  }
}
