/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressIndependentWebDummy } from './AddressIndependentWebDummy';
import { AddressIndependentWebDummyRequestBuilder } from './AddressIndependentWebDummyRequestBuilder';
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
export class AddressIndependentWebDummyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentWebDummy<DeSerializersT>,
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
  ): AddressIndependentWebDummyApi<DeSerializersT> {
    return new AddressIndependentWebDummyApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toWebNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WEB_NOTE: Link<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressIndependentWebDummy<DeSerializersT>,
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
      TO_WEB_NOTE: new Link('to_WebNote', this, linkedApis[0]),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = AddressIndependentWebDummy;

  requestBuilder(): AddressIndependentWebDummyRequestBuilder<DeSerializersT> {
    return new AddressIndependentWebDummyRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressIndependentWebDummy<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressIndependentWebDummy<DeSerializersT>,
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
    typeof AddressIndependentWebDummy,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressIndependentWebDummy,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_URI: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    URI_TYPE: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URI: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      AddressIndependentWebDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWebNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WEB_NOTE: Link<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressIndependentWebDummy<DeSerializers>>;
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
         * Static representation of the {@link isDefaultUri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_URI: fieldBuilder.buildEdmTypeField(
          'IsDefaultUri',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link uriType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URI_TYPE: fieldBuilder.buildEdmTypeField('UriType', 'Edm.String', true),
        /**
         * Static representation of the {@link uri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URI: fieldBuilder.buildEdmTypeField('Uri', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', AddressIndependentWebDummy)
      };
    }

    return this._schema;
  }
}
