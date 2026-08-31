/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressIndependentPhoneNumber } from './AddressIndependentPhoneNumber';
import { AddressIndependentPhoneNumberRequestBuilder } from './AddressIndependentPhoneNumberRequestBuilder';
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
export declare class AddressIndependentPhoneNumberApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentPhoneNumber<DeSerializersT>,
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
  ): AddressIndependentPhoneNumberApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      CommunicationDataTextApi<DeSerializersT>,
      AddressIndependentCommunicationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof AddressIndependentPhoneNumber;
  requestBuilder(): AddressIndependentPhoneNumberRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    AddressIndependentPhoneNumber<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    AddressIndependentPhoneNumber<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof AddressIndependentPhoneNumber,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_PHONE_NUMBER: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DESTINATION_LOCATION_COUNTRY: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_TYPE: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_EXTENSION: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SMS_ENABLED_INDICATOR: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      AddressIndependentPhoneNumber<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPhoneNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PHONE_NOTE: Link<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressIndependentPhoneNumber<DeSerializers>>;
  };
}
