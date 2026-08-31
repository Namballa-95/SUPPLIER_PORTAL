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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesTax<DeSerializersT>, DeSerializersT> {
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
  ): SalesTaxApi<DeSerializersT> {
    return new SalesTaxApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER: OneToOneLink<
      SalesTax<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CustomerApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_CUSTOMER: new OneToOneLink('to_Customer', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SalesTax;

  requestBuilder(): SalesTaxRequestBuilder<DeSerializersT> {
    return new SalesTaxRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<SalesTax<DeSerializersT>, DeSerializersT> {
    return entityBuilder<SalesTax<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesTax<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesTax, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesTax, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link taxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'TaxCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'TaxClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ID: fieldBuilder.buildEdmTypeField(
          'Customer_Id',
          'Edm.Guid',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTax)
      };
    }

    return this._schema;
  }
}
