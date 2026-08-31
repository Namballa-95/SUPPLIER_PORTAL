/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressIndependentEmailAddressDummy } from './AddressIndependentEmailAddressDummy';
import { AddressIndependentEmailAddressDummyRequestBuilder } from './AddressIndependentEmailAddressDummyRequestBuilder';
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
export declare class AddressIndependentEmailAddressDummyApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentEmailAddressDummy<DeSerializersT>,
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
  ): AddressIndependentEmailAddressDummyApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      CommunicationDataTextApi<DeSerializersT>,
      AddressIndependentCommunicationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof AddressIndependentEmailAddressDummy;
  requestBuilder(): AddressIndependentEmailAddressDummyRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    AddressIndependentEmailAddressDummy<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    AddressIndependentEmailAddressDummy<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof AddressIndependentEmailAddressDummy,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_EMAIL_ADDRESS: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      AddressIndependentEmailAddressDummy<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toEmailNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_EMAIL_NOTE: Link<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressIndependentEmailAddressDummy<DeSerializers>>;
  };
}
