/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Web } from './Web';
import { WebRequestBuilder } from './WebRequestBuilder';
import { AddressApi } from './AddressApi';
import { CommunicationDataTextApi } from './CommunicationDataTextApi';
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
export class WebApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Web<DeSerializersT>, DeSerializersT> {
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
  ): WebApi<DeSerializersT> {
    return new WebApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Web<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWebNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WEB_NOTE: Link<
      Web<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AddressApi<DeSerializersT>,
      CommunicationDataTextApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0]),
      TO_WEB_NOTE: new Link('to_WebNote', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Web;

  requestBuilder(): WebRequestBuilder<DeSerializersT> {
    return new WebRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Web<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Web<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Web<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Web, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Web, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_URI: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    URI_TYPE: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URI: OrderableEdmTypeField<
      Web<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      Web<DeSerializers>,
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
      Web<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWebNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WEB_NOTE: Link<
      Web<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Web<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Web)
      };
    }

    return this._schema;
  }
}
