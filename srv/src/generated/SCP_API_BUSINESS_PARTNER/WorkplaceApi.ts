/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Workplace } from './Workplace';
import { WorkplaceRequestBuilder } from './WorkplaceRequestBuilder';
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
export class WorkplaceApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Workplace<DeSerializersT>, DeSerializersT> {
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
  ): WorkplaceApi<DeSerializersT> {
    return new WorkplaceApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Workplace<DeSerializersT>,
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

  entityConstructor = Workplace;

  requestBuilder(): WorkplaceRequestBuilder<DeSerializersT> {
    return new WorkplaceRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Workplace<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Workplace<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Workplace<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Workplace, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Workplace, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_TITLE_NAME: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_NAME: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLOOR: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_SHORT_NAME: OrderableEdmTypeField<
      Workplace<DeSerializers>,
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
      Workplace<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Workplace<DeSerializers>>;
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
         * Static representation of the {@link scriptCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_CODE: fieldBuilder.buildEdmTypeField(
          'ScriptCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalTitleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_TITLE_NAME: fieldBuilder.buildEdmTypeField(
          'FunctionalTitleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link departmentName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NAME: fieldBuilder.buildEdmTypeField(
          'DepartmentName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link building} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING: fieldBuilder.buildEdmTypeField(
          'Building',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link floor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true),
        /**
         * Static representation of the {@link room} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM: fieldBuilder.buildEdmTypeField('Room', 'Edm.String', true),
        /**
         * Static representation of the {@link correspondenceShortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'CorrespondenceShortName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Workplace)
      };
    }

    return this._schema;
  }
}
