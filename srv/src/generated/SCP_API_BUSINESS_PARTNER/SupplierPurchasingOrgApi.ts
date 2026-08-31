/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';
import { SupplierPurchasingOrgRequestBuilder } from './SupplierPurchasingOrgRequestBuilder';
import { SupplierPartnerFunctionApi } from './SupplierPartnerFunctionApi';
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
export class SupplierPurchasingOrgApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT> {
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
  ): SupplierPurchasingOrgApi<DeSerializersT> {
    return new SupplierPurchasingOrgApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toSupplierPartnerFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER_PARTNER_FUNCTION: Link<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierPartnerFunctionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplierPartnerFunctionApi<DeSerializersT>,
      SupplierApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_SUPPLIER_PARTNER_FUNCTION: new Link(
        'to_SupplierPartnerFunction',
        this,
        linkedApis[0]
      ),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SupplierPurchasingOrg;

  requestBuilder(): SupplierPurchasingOrgRequestBuilder<DeSerializersT> {
    return new SupplierPurchasingOrgRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SupplierPurchasingOrg<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SupplierPurchasingOrg<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SupplierPurchasingOrg,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SupplierPurchasingOrg,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY_USER: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    PURCHASING_ORGANIZATION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_CURRENCY: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_TERMS: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_SCHEMA_GROUP_CODE: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_GROUP: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASING_IS_BLOCKED_FOR_SUPPLIER: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELETION_INDICATOR: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PUR_ORD_AUTO_GENERATION_IS_ALLOWED: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUPPLIER_ABC_CLASSIFICATION_CODE: OrderableEdmTypeField<
      SupplierPurchasingOrg<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSupplierPartnerFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER_PARTNER_FUNCTION: Link<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierPartnerFunctionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SupplierPurchasingOrg<DeSerializers>>;
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
         * Static representation of the {@link purchasingOrganization} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_ORGANIZATION: fieldBuilder.buildEdmTypeField(
          'PurchasingOrganization',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_CURRENCY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderCurrency',
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
         * Static representation of the {@link calculationSchemaGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_SCHEMA_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'CalculationSchemaGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_GROUP: fieldBuilder.buildEdmTypeField(
          'PurchasingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchasingIsBlockedForSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'PurchasingIsBlockedForSupplier',
          'Edm.Boolean',
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
         * Static representation of the {@link purOrdAutoGenerationIsAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUR_ORD_AUTO_GENERATION_IS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'PurOrdAutoGenerationIsAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link supplierAbcClassificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ABC_CLASSIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'SupplierABCClassificationCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SupplierPurchasingOrg)
      };
    }

    return this._schema;
  }
}
