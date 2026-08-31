/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTax } from './SalesTax';
import { SalesTaxRequestBuilder } from './SalesTaxRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class SalesTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTax<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): SalesTaxApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [CustomerApi<DeSerializersT>]): this;
  entityConstructor: typeof SalesTax;
  requestBuilder(): SalesTaxRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<SalesTax<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<SalesTax<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof SalesTax, DeSerializersT>;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CATEGORY: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CLASSIFICATION: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ID: OrderableEdmTypeField<
      SalesTax<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER: OneToOneLink<
      SalesTax<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesTax<DeSerializers>>;
  };
}
