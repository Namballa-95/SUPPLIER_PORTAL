/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContactPerson } from './ContactPerson';
import { ContactPersonRequestBuilder } from './ContactPersonRequestBuilder';
import { BusinessPartnerRelationshipApi } from './BusinessPartnerRelationshipApi';
import { WorkPlaceAddressInformationApi } from './WorkPlaceAddressInformationApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class ContactPersonApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContactPerson<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): ContactPersonApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerRelationshipApi<DeSerializersT>,
      WorkPlaceAddressInformationApi<DeSerializersT>,
      WorkPlaceAddressInformationApi<DeSerializersT>,
      WorkPlaceAddressInformationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ContactPerson;
  requestBuilder(): ContactPersonRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ContactPerson<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ContactPerson<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ContactPerson, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VIP_PARTNER: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_FUNCTION: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARTNER_AUTHORITY: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_CONTACT_PERSON: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_CONTACT_PERSON: OrderableEdmTypeField<
      ContactPerson<DeSerializers>,
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
      ContactPerson<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWorkPlaceAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WORK_PLACE_ADDRESS_INFORMATION: Link<
      ContactPerson<DeSerializersT>,
      DeSerializersT,
      WorkPlaceAddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCurrentDefaultWorkPlaceAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_WORK_PLACE_ADDRESS_INFORMATION: OneToOneLink<
      ContactPerson<DeSerializersT>,
      DeSerializersT,
      WorkPlaceAddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCwai} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CWAI: OneToOneLink<
      ContactPerson<DeSerializersT>,
      DeSerializersT,
      WorkPlaceAddressInformationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ContactPerson<DeSerializers>>;
  };
}
