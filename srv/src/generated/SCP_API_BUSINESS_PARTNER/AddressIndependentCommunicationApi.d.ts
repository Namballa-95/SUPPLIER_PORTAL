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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class AddressIndependentCommunicationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  AddressIndependentCommunication<DeSerializersT>,
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
  ): AddressIndependentCommunicationApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      AddressIndependentPhoneNumberApi<DeSerializersT>,
      AddressIndependentPhoneNumberApi<DeSerializersT>,
      AddressIndependentFaxNumberApi<DeSerializersT>,
      AddressIndependentEmailApi<DeSerializersT>,
      AddressIndependentWebApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof AddressIndependentCommunication;
  requestBuilder(): AddressIndependentCommunicationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    AddressIndependentCommunication<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    AddressIndependentCommunication<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof AddressIndependentCommunication,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
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
}
