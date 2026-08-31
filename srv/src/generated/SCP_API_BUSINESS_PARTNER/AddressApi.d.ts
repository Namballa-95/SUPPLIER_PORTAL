/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Address } from './Address';
import { AddressRequestBuilder } from './AddressRequestBuilder';
import { WorkplaceApi } from './WorkplaceApi';
import { EmailAddressApi } from './EmailAddressApi';
import { PhoneNumberApi } from './PhoneNumberApi';
import { FaxNumberApi } from './FaxNumberApi';
import { WebApi } from './WebApi';
import { PostalAddressApi } from './PostalAddressApi';
import { AddressPersonNameApi } from './AddressPersonNameApi';
import { AddressOrganizationNameApi } from './AddressOrganizationNameApi';
import { AddressInformationApi } from './AddressInformationApi';
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
export declare class AddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Address<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): AddressApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      WorkplaceApi<DeSerializersT>,
      EmailAddressApi<DeSerializersT>,
      PhoneNumberApi<DeSerializersT>,
      PhoneNumberApi<DeSerializersT>,
      FaxNumberApi<DeSerializersT>,
      WebApi<DeSerializersT>,
      PostalAddressApi<DeSerializersT>,
      AddressPersonNameApi<DeSerializersT>,
      AddressOrganizationNameApi<DeSerializersT>,
      PostalAddressApi<DeSerializersT>,
      EmailAddressApi<DeSerializersT>,
      PhoneNumberApi<DeSerializersT>,
      PhoneNumberApi<DeSerializersT>,
      FaxNumberApi<DeSerializersT>,
      WebApi<DeSerializersT>,
      AddressPersonNameApi<DeSerializersT>,
      AddressOrganizationNameApi<DeSerializersT>,
      WorkplaceApi<DeSerializersT>,
      AddressInformationApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Address;
  requestBuilder(): AddressRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Address<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Address<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Address, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      Address<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      Address<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRFRD_COMM_MEDIUM_TYPE: OrderableEdmTypeField<
      Address<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWorkplaceAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WORKPLACE_ADDRESS: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      WorkplaceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toEmail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_EMAIL: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      EmailAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toMobilePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_MOBILE_PHONE: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      PhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toLandlinePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_LANDLINE_PHONE: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      PhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toFax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FAX: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      FaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toWeb} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WEB: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      WebApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPostalAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_POSTAL_ADDRESS: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      PostalAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PERSON: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      AddressPersonNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ORGANIZATION: Link<
      Address<DeSerializersT>,
      DeSerializersT,
      AddressOrganizationNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultPostalAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_POSTAL_ADDRESS: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      PostalAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultEmail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_EMAIL: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      EmailAddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultMobilePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_MOBILE_PHONE: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      PhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultLandlinePhone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_LANDLINE_PHONE: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      PhoneNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultFax} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_FAX: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      FaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultWeb} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_WEB: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      WebApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_PERSON: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      AddressPersonNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_ORGANIZATION: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      AddressOrganizationNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultWorkplaceAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_WORKPLACE_ADDRESS: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      WorkplaceApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      Address<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Address<DeSerializers>>;
  };
}
