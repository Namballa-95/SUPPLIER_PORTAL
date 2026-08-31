/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressPersonName } from './AddressPersonName';
import { AddressPersonNameRequestBuilder } from './AddressPersonNameRequestBuilder';
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
export class AddressPersonNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressPersonName<DeSerializersT>, DeSerializersT> {
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
  ): AddressPersonNameApi<DeSerializersT> {
    return new AddressPersonNameApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressPersonName<DeSerializersT>,
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

  entityConstructor = AddressPersonName;

  requestBuilder(): AddressPersonNameRequestBuilder<DeSerializersT> {
    return new AddressPersonNameRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressPersonName<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressPersonName<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressPersonName<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AddressPersonName,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressPersonName,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACADEMIC_TITLE: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_ACADEMIC_TITLE: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_NAME_PREFIX: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SUPPLEMENT: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_COUNTRY: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FORMAT: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_LAST_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NICK_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_NAME: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      AddressPersonName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressPersonName<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressPersonName<DeSerializers>>;
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
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEdmTypeField('Gender', 'Edm.String', true),
        /**
         * Static representation of the {@link academicTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField(
          'AcademicTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalAcademicTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField(
          'AdditionalAcademicTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'LastNamePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalNamePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'AdditionalNamePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameSupplement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_SUPPLEMENT: fieldBuilder.buildEdmTypeField(
          'NameSupplement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_COUNTRY: fieldBuilder.buildEdmTypeField(
          'NameCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FORMAT: fieldBuilder.buildEdmTypeField(
          'NameFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'AdditionalLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_NAME: fieldBuilder.buildEdmTypeField(
          'BirthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nickName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NICK_NAME: fieldBuilder.buildEdmTypeField(
          'NickName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALS: fieldBuilder.buildEdmTypeField(
          'Initials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_NAME: fieldBuilder.buildEdmTypeField(
          'FullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressPersonName)
      };
    }

    return this._schema;
  }
}
