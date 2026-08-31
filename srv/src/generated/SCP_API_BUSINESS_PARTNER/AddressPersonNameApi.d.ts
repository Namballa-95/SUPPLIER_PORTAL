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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class AddressPersonNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressPersonName<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): AddressPersonNameApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [AddressApi<DeSerializersT>]): this;
  entityConstructor: typeof AddressPersonName;
  requestBuilder(): AddressPersonNameRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    AddressPersonName<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<AddressPersonName<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof AddressPersonName, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
