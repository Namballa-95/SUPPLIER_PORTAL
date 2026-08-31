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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class AddressIndependentFaxNumberDummyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentFaxNumberDummy<DeSerializersT>,
  DeSerializersT
> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): AddressIndependentFaxNumberDummyApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      CommunicationDataTextApi<DeSerializersT>,
      AddressIndependentCommunicationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof AddressIndependentFaxNumberDummy;
  requestBuilder(): AddressIndependentFaxNumberDummyRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    AddressIndependentFaxNumberDummy<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    AddressIndependentFaxNumberDummy<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof AddressIndependentFaxNumberDummy,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
