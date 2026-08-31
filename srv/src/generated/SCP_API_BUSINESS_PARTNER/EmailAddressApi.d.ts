/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmailAddress } from './EmailAddress';
import { EmailAddressRequestBuilder } from './EmailAddressRequestBuilder';
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
export declare class EmailAddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmailAddress<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): EmailAddressApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      AddressApi<DeSerializersT>,
      CommunicationDataTextApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof EmailAddress;
  requestBuilder(): EmailAddressRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    EmailAddress<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<EmailAddress<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof EmailAddress, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    IS_DEFAULT_EMAIL_ADDRESS: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USAGE_DENIED_INDICATOR: OrderableEdmTypeField<
      EmailAddress<DeSerializers>,
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
      EmailAddress<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toEmailNote} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_EMAIL_NOTE: Link<
      EmailAddress<DeSerializersT>,
      DeSerializersT,
      CommunicationDataTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmailAddress<DeSerializers>>;
  };
}
