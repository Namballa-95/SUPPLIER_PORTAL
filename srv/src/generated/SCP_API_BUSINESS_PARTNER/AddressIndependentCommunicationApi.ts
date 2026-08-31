/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressIndependentCommunication } from './AddressIndependentCommunication';
import { AddressIndependentCommunicationRequestBuilder } from './AddressIndependentCommunicationRequestBuilder';
import { AddressIndependentPhoneNumberApi } from './AddressIndependentPhoneNumberApi';
import { AddressIndependentFaxNumberApi } from './AddressIndependentFaxNumberApi';
import { AddressIndependentEmailApi } from './AddressIndependentEmailApi';
import { AddressIndependentWebApi } from './AddressIndependentWebApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class AddressIndependentCommunicationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentCommunication<DeSerializersT>,
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
  ): AddressIndependentCommunicationApi<DeSerializersT> {
    return new AddressIndependentCommunicationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentLandlinePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_LANDLINE_PHONE: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentPhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentMobilePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_MOBILE_PHONE: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentPhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentFax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_FAX: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentFaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentEmail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_EMAIL: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentEmailApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentWeb} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_WEB: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentWebApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressIndependentPhoneNumberApi<DeSerializersT>,
      AddressIndependentPhoneNumberApi<DeSerializersT>,
      AddressIndependentFaxNumberApi<DeSerializersT>,
      AddressIndependentEmailApi<DeSerializersT>,
      AddressIndependentWebApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_ADDRESS_INDEPENDENT_LANDLINE_PHONE: new Link(
        'to_AddressIndependentLandlinePhone',
        this,
        linkedApis[0]
      ),
      TO_ADDRESS_INDEPENDENT_MOBILE_PHONE: new Link(
        'to_AddressIndependentMobilePhone',
        this,
        linkedApis[1]
      ),
      TO_ADDRESS_INDEPENDENT_FAX: new Link(
        'to_AddressIndependentFax',
        this,
        linkedApis[2]
      ),
      TO_ADDRESS_INDEPENDENT_EMAIL: new Link(
        'to_AddressIndependentEmail',
        this,
        linkedApis[3]
      ),
      TO_ADDRESS_INDEPENDENT_WEB: new Link(
        'to_AddressIndependentWeb',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = AddressIndependentCommunication;

  requestBuilder(): AddressIndependentCommunicationRequestBuilder<DeSerializersT> {
    return new AddressIndependentCommunicationRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AddressIndependentCommunication<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressIndependentCommunication<DeSerializersT>,
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
    typeof AddressIndependentCommunication,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressIndependentCommunication,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INDEPENDENT: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PRFRD_COMM_MEDIUM_TYPE: OrderableEdmTypeField<
      AddressIndependentCommunication<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentLandlinePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_LANDLINE_PHONE: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentPhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentMobilePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_MOBILE_PHONE: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentPhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentFax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_FAX: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentFaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentEmail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_EMAIL: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentEmailApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressIndependentWeb} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_WEB: Link<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT,
      AddressIndependentWebApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressIndependentCommunication<DeSerializers>>;
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
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEdmTypeField(
          'IsDeleted',
          'Edm.Boolean',
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
         * Static representation of the {@link validityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'AddressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isIndependent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INDEPENDENT: fieldBuilder.buildEdmTypeField(
          'IsIndependent',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link prfrdCommMediumType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField(
          'PrfrdCommMediumType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressIndependentCommunication)
      };
    }

    return this._schema;
  }
}
