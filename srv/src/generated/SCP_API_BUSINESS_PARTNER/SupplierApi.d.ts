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
export declare class SupplierApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Supplier<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SupplierApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerApi<DeSerializersT>,
      AddressInformationApi<DeSerializersT>,
      SupplierCompanyApi<DeSerializersT>,
      SupplierPurchasingOrgApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Supplier;
  requestBuilder(): SupplierRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Supplier<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Supplier<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Supplier, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
