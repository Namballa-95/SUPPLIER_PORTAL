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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class PersonNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PersonName<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): PersonNameApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [BusinessPartnerApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof PersonName;
  requestBuilder(): PersonNameRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    PersonName<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<PersonName<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof PersonName, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
