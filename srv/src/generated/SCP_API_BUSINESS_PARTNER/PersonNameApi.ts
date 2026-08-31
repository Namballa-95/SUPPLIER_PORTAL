/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonName } from './PersonName';
import { PersonNameRequestBuilder } from './PersonNameRequestBuilder';
import { BusinessPartnerApi } from './BusinessPartnerApi';
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
export class PersonNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonName<DeSerializersT>, DeSerializersT> {
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
  ): PersonNameApi<DeSerializersT> {
    return new PersonNameApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      PersonName<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnerApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PersonName;

  requestBuilder(): PersonNameRequestBuilder<DeSerializersT> {
    return new PersonNameRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonName<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PersonName<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PersonName<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PersonName, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PersonName, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACADEMIC_TITLE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_ACADEMIC_TITLE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_PREFIX: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_NAME_PREFIX: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_SUPPLEMENT: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_COUNTRY: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FORMAT: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_LAST_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NICK_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MARITAL_STATUS: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATURAL_PERSON_EMPLOYER_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_OCCUPATION_GROUP: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_BIRTHPLACE_NAME: OrderableEdmTypeField<
      PersonName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_DEATH_DATE: OrderableEdmTypeField<
      PersonName<DeSerializers>,
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
      PersonName<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonName<DeSerializers>>;
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
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'Nationality',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEdmTypeField(
          'MaritalStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link naturalPersonEmployerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATURAL_PERSON_EMPLOYER_NAME: fieldBuilder.buildEdmTypeField(
          'NaturalPersonEmployerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerOccupationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_OCCUPATION_GROUP: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerOccupationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerBirthplaceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_BIRTHPLACE_NAME: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerBirthplaceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerDeathDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_DEATH_DATE: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerDeathDate',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonName)
      };
    }

    return this._schema;
  }
}
