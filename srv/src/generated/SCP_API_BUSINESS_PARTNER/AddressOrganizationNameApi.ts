/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressOrganizationName } from './AddressOrganizationName';
import { AddressOrganizationNameRequestBuilder } from './AddressOrganizationNameRequestBuilder';
import { AddressApi } from './AddressApi';
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
export class AddressOrganizationNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressOrganizationName<DeSerializersT>,
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
  ): AddressOrganizationNameApi<DeSerializersT> {
    return new AddressOrganizationNameApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [AddressApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AddressOrganizationName;

  requestBuilder(): AddressOrganizationNameRequestBuilder<DeSerializersT> {
    return new AddressOrganizationNameRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressOrganizationName<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressOrganizationName<DeSerializersT>,
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
    typeof AddressOrganizationName,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressOrganizationName,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_FORM: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOUNDATION_DATE: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LIQUIDATION_DATE: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ORGANIZATION_NAME_1: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_2: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_3: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_4: OrderableEdmTypeField<
      AddressOrganizationName<DeSerializers>,
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
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressOrganizationName<DeSerializers>>;
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
         * Static representation of the {@link scriptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_CODE: fieldBuilder.buildEdmTypeField(
          'ScriptCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formOfAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormOfAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_FORM: fieldBuilder.buildEdmTypeField(
          'LegalForm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link foundationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOUNDATION_DATE: fieldBuilder.buildEdmTypeField(
          'FoundationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link liquidationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIQUIDATION_DATE: fieldBuilder.buildEdmTypeField(
          'LiquidationDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link organizationName1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField(
          'OrganizationName1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationName2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField(
          'OrganizationName2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationName3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField(
          'OrganizationName3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationName4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField(
          'OrganizationName4',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressOrganizationName)
      };
    }

    return this._schema;
  }
}
