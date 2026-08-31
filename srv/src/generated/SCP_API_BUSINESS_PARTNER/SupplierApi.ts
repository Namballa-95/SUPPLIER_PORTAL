/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Supplier } from './Supplier';
import { SupplierRequestBuilder } from './SupplierRequestBuilder';
import { BusinessPartnerApi } from './BusinessPartnerApi';
import { AddressInformationApi } from './AddressInformationApi';
import { SupplierCompanyApi } from './SupplierCompanyApi';
import { SupplierPurchasingOrgApi } from './SupplierPurchasingOrgApi';
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
export class SupplierApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Supplier<DeSerializersT>, DeSerializersT> {
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
  ): SupplierApi<DeSerializersT> {
    return new SupplierApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Supplier<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INFORMATION: OneToOneLink<
      Supplier<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCompanyCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_COMPANY_CODE: Link<
      Supplier<DeSerializersT>,
      DeSerializersT,
      SupplierCompanyApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSupplierPurchasing} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER_PURCHASING: Link<
      Supplier<DeSerializersT>,
      DeSerializersT,
      SupplierPurchasingOrgApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerApi<DeSerializersT>,
      AddressInformationApi<DeSerializersT>,
      SupplierCompanyApi<DeSerializersT>,
      SupplierPurchasingOrgApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0]),
      TO_ADDRESS_INFORMATION: new OneToOneLink(
        'to_AddressInformation',
        this,
        linkedApis[1]
      ),
      TO_COMPANY_CODE: new Link('to_CompanyCode', this, linkedApis[2]),
      TO_SUPPLIER_PURCHASING: new Link(
        'to_SupplierPurchasing',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = Supplier;

  requestBuilder(): SupplierRequestBuilder<DeSerializersT> {
    return new SupplierRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Supplier<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Supplier<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Supplier<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Supplier, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Supplier, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SUPPLIER: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESPONSIBLE_TYPE: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_ACCOUNT_GROUP: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELETION_INDICATOR: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    POSTING_IS_BLOCKED: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VAT_LIABILITY: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_STANDARD_SUPPLIER: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADDRESS_ID: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    ALTERNATIVE_PAYEE: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_IS_BLOCKED_FOR_SUPPLIER: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PURCHASING_IS_BLOCKED: OrderableEdmTypeField<
      Supplier<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Supplier<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INFORMATION: OneToOneLink<
      Supplier<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCompanyCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_COMPANY_CODE: Link<
      Supplier<DeSerializersT>,
      DeSerializersT,
      SupplierCompanyApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSupplierPurchasing} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER_PURCHASING: Link<
      Supplier<DeSerializersT>,
      DeSerializersT,
      SupplierPurchasingOrgApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Supplier<DeSerializers>>;
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
         * Static representation of the {@link supplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER: fieldBuilder.buildEdmTypeField(
          'Supplier',
          'Edm.String',
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
         * Static representation of the {@link responsibleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSIBLE_TYPE: fieldBuilder.buildEdmTypeField(
          'ResponsibleType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierAccountGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField(
          'SupplierAccountGroup',
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
         * Static representation of the {@link postingIsBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_IS_BLOCKED: fieldBuilder.buildEdmTypeField(
          'PostingIsBlocked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link vatLiability} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_LIABILITY: fieldBuilder.buildEdmTypeField(
          'VATLiability',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isStandardSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STANDARD_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'IsStandardSupplier',
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
         * Static representation of the {@link paymentIsBlockedForSupplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField(
          'PaymentIsBlockedForSupplier',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link purchasingIsBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASING_IS_BLOCKED: fieldBuilder.buildEdmTypeField(
          'PurchasingIsBlocked',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Supplier)
      };
    }

    return this._schema;
  }
}
