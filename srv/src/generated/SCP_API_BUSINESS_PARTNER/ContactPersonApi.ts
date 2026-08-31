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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ContactPersonApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContactPerson<DeSerializersT>, DeSerializersT> {
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
  ): ContactPersonApi<DeSerializersT> {
    return new ContactPersonApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerRelationshipApi<DeSerializersT>,
      WorkPlaceAddressInformationApi<DeSerializersT>,
      WorkPlaceAddressInformationApi<DeSerializersT>,
      WorkPlaceAddressInformationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0]),
      TO_WORK_PLACE_ADDRESS_INFORMATION: new Link(
        'to_WorkPlaceAddressInformation',
        this,
        linkedApis[1]
      ),
      TO_CURRENT_DEFAULT_WORK_PLACE_ADDRESS_INFORMATION: new OneToOneLink(
        'to_CurrentDefaultWorkPlaceAddressInformation',
        this,
        linkedApis[2]
      ),
      TO_CWAI: new OneToOneLink('to_Cwai', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ContactPerson;

  requestBuilder(): ContactPersonRequestBuilder<DeSerializersT> {
    return new ContactPersonRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContactPerson<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ContactPerson<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ContactPerson<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ContactPerson, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ContactPerson, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link vipPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIP_PARTNER: fieldBuilder.buildEdmTypeField(
          'VipPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.String',
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
         * Static representation of the {@link partnerAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTNER_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'PartnerAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link customerContactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'CustomerContactPerson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierContactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'SupplierContactPerson',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ContactPerson)
      };
    }

    return this._schema;
  }
}
