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
export class AddressApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Address<DeSerializersT>, DeSerializersT> {
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
  ): AddressApi<DeSerializersT> {
    return new AddressApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

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
  ): this {
    this.navigationPropertyFields = {
      TO_WORKPLACE_ADDRESS: new Link(
        'to_WorkplaceAddress',
        this,
        linkedApis[0]
      ),
      TO_EMAIL: new Link('to_Email', this, linkedApis[1]),
      TO_MOBILE_PHONE: new Link('to_MobilePhone', this, linkedApis[2]),
      TO_LANDLINE_PHONE: new Link('to_LandlinePhone', this, linkedApis[3]),
      TO_FAX: new Link('to_Fax', this, linkedApis[4]),
      TO_WEB: new Link('to_Web', this, linkedApis[5]),
      TO_POSTAL_ADDRESS: new Link('to_PostalAddress', this, linkedApis[6]),
      TO_PERSON: new Link('to_Person', this, linkedApis[7]),
      TO_ORGANIZATION: new Link('to_Organization', this, linkedApis[8]),
      TO_DEFAULT_POSTAL_ADDRESS: new OneToOneLink(
        'to_DefaultPostalAddress',
        this,
        linkedApis[9]
      ),
      TO_DEFAULT_EMAIL: new OneToOneLink(
        'to_DefaultEmail',
        this,
        linkedApis[10]
      ),
      TO_DEFAULT_MOBILE_PHONE: new OneToOneLink(
        'to_DefaultMobilePhone',
        this,
        linkedApis[11]
      ),
      TO_DEFAULT_LANDLINE_PHONE: new OneToOneLink(
        'to_DefaultLandlinePhone',
        this,
        linkedApis[12]
      ),
      TO_DEFAULT_FAX: new OneToOneLink('to_DefaultFax', this, linkedApis[13]),
      TO_DEFAULT_WEB: new OneToOneLink('to_DefaultWeb', this, linkedApis[14]),
      TO_DEFAULT_PERSON: new OneToOneLink(
        'to_DefaultPerson',
        this,
        linkedApis[15]
      ),
      TO_DEFAULT_ORGANIZATION: new OneToOneLink(
        'to_DefaultOrganization',
        this,
        linkedApis[16]
      ),
      TO_DEFAULT_WORKPLACE_ADDRESS: new OneToOneLink(
        'to_DefaultWorkplaceAddress',
        this,
        linkedApis[17]
      ),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[18])
    };
    return this;
  }

  entityConstructor = Address;

  requestBuilder(): AddressRequestBuilder<DeSerializersT> {
    return new AddressRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Address<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Address<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Address<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Address, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Address, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'AddressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prfrdCommMediumType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField(
          'PrfrdCommMediumType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Address)
      };
    }

    return this._schema;
  }
}
