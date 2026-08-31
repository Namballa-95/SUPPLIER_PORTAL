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
export declare class SupplierPurchasingOrgApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SupplierPurchasingOrgApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      SupplierPartnerFunctionApi<DeSerializersT>,
      SupplierApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof SupplierPurchasingOrg;
  requestBuilder(): SupplierPurchasingOrgRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SupplierPurchasingOrg<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SupplierPurchasingOrg<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SupplierPurchasingOrg,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
