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
export class CustomerPartnerFunctionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  CustomerPartnerFunction<DeSerializersT>,
  DeSerializersT
> {
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
  ): CustomerPartnerFunctionApi<DeSerializersT> {
    return new CustomerPartnerFunctionApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT,
      SalesAreaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [SalesAreaApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CustomerPartnerFunction;

  requestBuilder(): CustomerPartnerFunctionRequestBuilder<DeSerializersT> {
    return new CustomerPartnerFunctionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPartnerFunction<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPartnerFunction<DeSerializersT>,
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
    typeof CustomerPartnerFunction,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPartnerFunction,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link partnerFunction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField(
          'PartnerFunction',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PARTNER: fieldBuilder.buildEdmTypeField(
          'DefaultPartner',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link partnerNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartnerNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_TYPE: fieldBuilder.buildEdmTypeField(
          'PartnerType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link partnerDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PartnerDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPartnerFunction)
      };
    }

    return this._schema;
  }
}
