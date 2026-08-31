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
export declare class WebApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Web<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): WebApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      AddressApi<DeSerializersT>,
      CommunicationDataTextApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Web;
  requestBuilder(): WebRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Web<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Web<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Web, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
