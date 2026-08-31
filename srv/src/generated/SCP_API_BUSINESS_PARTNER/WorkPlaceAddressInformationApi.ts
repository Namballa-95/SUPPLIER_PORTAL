/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkPlaceAddressInformation } from './WorkPlaceAddressInformation';
import { WorkPlaceAddressInformationRequestBuilder } from './WorkPlaceAddressInformationRequestBuilder';
import { ContactPersonApi } from './ContactPersonApi';
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
export class WorkPlaceAddressInformationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  WorkPlaceAddressInformation<DeSerializersT>,
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
  ): WorkPlaceAddressInformationApi<DeSerializersT> {
    return new WorkPlaceAddressInformationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      ContactPersonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toWorkplaceAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WORKPLACE_ADDRESS: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toOrganizationAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ORGANIZATION_ADDRESS: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ContactPersonApi<DeSerializersT>,
      AddressApi<DeSerializersT>,
      AddressApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0]),
      TO_WORKPLACE_ADDRESS: new OneToOneLink(
        'to_WorkplaceAddress',
        this,
        linkedApis[1]
      ),
      TO_ORGANIZATION_ADDRESS: new OneToOneLink(
        'to_OrganizationAddress',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = WorkPlaceAddressInformation;

  requestBuilder(): WorkPlaceAddressInformationRequestBuilder<DeSerializersT> {
    return new WorkPlaceAddressInformationRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkPlaceAddressInformation<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkPlaceAddressInformation<DeSerializersT>,
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
    typeof WorkPlaceAddressInformation,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkPlaceAddressInformation,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY_USER: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    WORKPLACE_ADDRESS_ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    ORGANIZATION_ADDRESS_ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    IS_DEFAULT_ADDRESS: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      ContactPersonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toWorkplaceAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WORKPLACE_ADDRESS: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toOrganizationAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ORGANIZATION_ADDRESS: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkPlaceAddressInformation<DeSerializers>>;
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
         * Static representation of the {@link workplaceAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKPLACE_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'WorkplaceAddress_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link organizationAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'OrganizationAddress_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link isDefaultAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_ADDRESS: fieldBuilder.buildEdmTypeField(
          'IsDefaultAddress',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkPlaceAddressInformation)
      };
    }

    return this._schema;
  }
}
