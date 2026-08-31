/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressIndependentFaxNumberDummy } from './AddressIndependentFaxNumberDummy';
import { AddressIndependentFaxNumberDummyRequestBuilder } from './AddressIndependentFaxNumberDummyRequestBuilder';
import { CommunicationDataTextApi } from './CommunicationDataTextApi';
import { AddressIndependentCommunicationApi } from './AddressIndependentCommunicationApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class AddressIndependentFaxNumberDummyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentFaxNumberDummy<DeSerializersT>,
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
  ): AddressIndependentFaxNumberDummyApi<DeSerializersT> {
    return new AddressIndependentFaxNumberDummyApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toFaxNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FAX_NOTE: Link<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CommunicationDataTextApi<DeSerializersT>,
      AddressIndependentCommunicationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_FAX_NOTE: new Link('to_FaxNote', this, linkedApis[0]),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AddressIndependentFaxNumberDummy;

  requestBuilder(): AddressIndependentFaxNumberDummyRequestBuilder<DeSerializersT> {
    return new AddressIndependentFaxNumberDummyRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AddressIndependentFaxNumberDummy<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressIndependentFaxNumberDummy<DeSerializersT>,
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
    typeof AddressIndependentFaxNumberDummy,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressIndependentFaxNumberDummy,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_FAX_NUMBER: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DESTINATION_LOCATION_COUNTRY: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_EXTENSION: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      AddressIndependentFaxNumberDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toFaxNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FAX_NOTE: Link<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressIndependentFaxNumberDummy<DeSerializers>>;
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
         * Static representation of the {@link isDefaultFaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'IsDefaultFaxNumber',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link destinationLocationCountry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_LOCATION_COUNTRY: fieldBuilder.buildEdmTypeField(
          'DestinationLocationCountry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
        /**
         * Static representation of the {@link numberExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField(
          'NumberExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usageDeniedIndicator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_DENIED_INDICATOR: fieldBuilder.buildEdmTypeField(
          'UsageDeniedIndicator',
          'Edm.Boolean',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressIndependentFaxNumberDummy)
      };
    }

    return this._schema;
  }
}
