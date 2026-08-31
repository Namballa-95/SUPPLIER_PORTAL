/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPartnerFunction } from './CustomerPartnerFunction';
import { CustomerPartnerFunctionRequestBuilder } from './CustomerPartnerFunctionRequestBuilder';
import { SalesAreaApi } from './SalesAreaApi';
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
export declare class CustomerPartnerFunctionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  CustomerPartnerFunction<DeSerializersT>,
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
  >(deSerializers?: DeSerializersT): CustomerPartnerFunctionApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [SalesAreaApi<DeSerializersT>]): this;
  entityConstructor: typeof CustomerPartnerFunction;
  requestBuilder(): CustomerPartnerFunctionRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CustomerPartnerFunction<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    CustomerPartnerFunction<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof CustomerPartnerFunction,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    PARTNER_FUNCTION: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PARTNER: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PARTNER_NUMBER: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_TYPE: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_DESCRIPTION: OrderableEdmTypeField<
      CustomerPartnerFunction<DeSerializers>,
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
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT,
      SalesAreaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPartnerFunction<DeSerializers>>;
  };
}
