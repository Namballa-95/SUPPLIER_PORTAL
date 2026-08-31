/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SupplierPartnerFunction } from './SupplierPartnerFunction';
import { SupplierPartnerFunctionRequestBuilder } from './SupplierPartnerFunctionRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SupplierPartnerFunctionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  SupplierPartnerFunction<DeSerializersT>,
  DeSerializersT
> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SupplierPartnerFunctionApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [SupplierPurchasingOrgApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof SupplierPartnerFunction;
  requestBuilder(): SupplierPartnerFunctionRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    SupplierPartnerFunction<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    SupplierPartnerFunction<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof SupplierPartnerFunction,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    PARTNER_FUNCTION: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PARTNER: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PARTNER_NUMBER: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_TYPE: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_DESCRIPTION: OrderableEdmTypeField<
      SupplierPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      SupplierPartnerFunction<DeSerializersT>,
      DeSerializersT,
      SupplierPurchasingOrgApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SupplierPartnerFunction<DeSerializers>>;
  };
}
