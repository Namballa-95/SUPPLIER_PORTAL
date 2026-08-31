/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartner } from './BusinessPartner';
import { BusinessPartnerRequestBuilder } from './BusinessPartnerRequestBuilder';
import { CustomerApi } from './CustomerApi';
import { AddressInformationApi } from './AddressInformationApi';
import { PersonNameApi } from './PersonNameApi';
import { OrganizationNameApi } from './OrganizationNameApi';
import { GroupNameApi } from './GroupNameApi';
import { IdentificationApi } from './IdentificationApi';
import { IndustrySectorApi } from './IndustrySectorApi';
import { RoleApi } from './RoleApi';
import { AddressUsageApi } from './AddressUsageApi';
import { TaxNumberApi } from './TaxNumberApi';
import { BusinessPartnerRelationshipApi } from './BusinessPartnerRelationshipApi';
import { SupplierApi } from './SupplierApi';
import { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
import { PaymentCardApi } from './PaymentCardApi';
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
export class BusinessPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartner<DeSerializersT>, DeSerializersT> {
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
  ): BusinessPartnerApi<DeSerializersT> {
    return new BusinessPartnerApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INFORMATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PERSON: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      PersonNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ORGANIZATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      OrganizationNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_GROUP: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      GroupNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toIdentification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_IDENTIFICATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      IdentificationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toIndustrySector} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_INDUSTRY_SECTOR: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      IndustrySectorApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ROLE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      RoleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_USAGE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressUsageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toTaxNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_TAX_NUMBER: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      TaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultIndustrySector} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_INDUSTRY_SECTOR: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      IndustrySectorApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_PERSON: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      PersonNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_ORGANIZATION: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      OrganizationNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_GROUP: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      GroupNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCurrentAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_ADDRESS_INFORMATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCurrentDefaultAddressUsageCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_ADDRESS_USAGE_CODE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressUsageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCurrentDefaultAddressUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_ADDRESS_USAGE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressUsageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_RELATIONSHIP: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toHasContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_HAS_CONTACT_PERSON: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCurrentHasContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_HAS_CONTACT_PERSON: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCurrentDefaultHasContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_HAS_CONTACT_PERSON: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSupplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BANK: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerBankApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPaymentCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PAYMENT_CARD: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      PaymentCardApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toAddressIndependentCommunication} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_COMMUNICATION: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerApi<DeSerializersT>,
      AddressInformationApi<DeSerializersT>,
      PersonNameApi<DeSerializersT>,
      OrganizationNameApi<DeSerializersT>,
      GroupNameApi<DeSerializersT>,
      IdentificationApi<DeSerializersT>,
      IndustrySectorApi<DeSerializersT>,
      RoleApi<DeSerializersT>,
      AddressUsageApi<DeSerializersT>,
      TaxNumberApi<DeSerializersT>,
      IndustrySectorApi<DeSerializersT>,
      PersonNameApi<DeSerializersT>,
      OrganizationNameApi<DeSerializersT>,
      GroupNameApi<DeSerializersT>,
      AddressInformationApi<DeSerializersT>,
      AddressUsageApi<DeSerializersT>,
      AddressUsageApi<DeSerializersT>,
      BusinessPartnerRelationshipApi<DeSerializersT>,
      BusinessPartnerRelationshipApi<DeSerializersT>,
      BusinessPartnerRelationshipApi<DeSerializersT>,
      BusinessPartnerRelationshipApi<DeSerializersT>,
      SupplierApi<DeSerializersT>,
      BusinessPartnerBankApi<DeSerializersT>,
      PaymentCardApi<DeSerializersT>,
      AddressIndependentCommunicationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_CUSTOMER: new Link('to_Customer', this, linkedApis[0]),
      TO_ADDRESS_INFORMATION: new Link(
        'to_AddressInformation',
        this,
        linkedApis[1]
      ),
      TO_PERSON: new Link('to_Person', this, linkedApis[2]),
      TO_ORGANIZATION: new Link('to_Organization', this, linkedApis[3]),
      TO_GROUP: new Link('to_Group', this, linkedApis[4]),
      TO_IDENTIFICATION: new Link('to_Identification', this, linkedApis[5]),
      TO_INDUSTRY_SECTOR: new Link('to_IndustrySector', this, linkedApis[6]),
      TO_ROLE: new Link('to_Role', this, linkedApis[7]),
      TO_ADDRESS_USAGE: new Link('to_AddressUsage', this, linkedApis[8]),
      TO_TAX_NUMBER: new Link('to_TaxNumber', this, linkedApis[9]),
      TO_DEFAULT_INDUSTRY_SECTOR: new OneToOneLink(
        'to_DefaultIndustrySector',
        this,
        linkedApis[10]
      ),
      TO_DEFAULT_PERSON: new OneToOneLink(
        'to_DefaultPerson',
        this,
        linkedApis[11]
      ),
      TO_DEFAULT_ORGANIZATION: new OneToOneLink(
        'to_DefaultOrganization',
        this,
        linkedApis[12]
      ),
      TO_DEFAULT_GROUP: new OneToOneLink(
        'to_DefaultGroup',
        this,
        linkedApis[13]
      ),
      TO_CURRENT_ADDRESS_INFORMATION: new Link(
        'to_CurrentAddressInformation',
        this,
        linkedApis[14]
      ),
      TO_CURRENT_DEFAULT_ADDRESS_USAGE_CODE: new Link(
        'to_CurrentDefaultAddressUsageCode',
        this,
        linkedApis[15]
      ),
      TO_CURRENT_DEFAULT_ADDRESS_USAGE: new Link(
        'to_CurrentDefaultAddressUsage',
        this,
        linkedApis[16]
      ),
      TO_BUSINESS_PARTNER_RELATIONSHIP: new Link(
        'to_BusinessPartnerRelationship',
        this,
        linkedApis[17]
      ),
      TO_HAS_CONTACT_PERSON: new Link(
        'to_HasContactPerson',
        this,
        linkedApis[18]
      ),
      TO_CURRENT_HAS_CONTACT_PERSON: new OneToOneLink(
        'to_CurrentHasContactPerson',
        this,
        linkedApis[19]
      ),
      TO_CURRENT_DEFAULT_HAS_CONTACT_PERSON: new OneToOneLink(
        'to_CurrentDefaultHasContactPerson',
        this,
        linkedApis[20]
      ),
      TO_SUPPLIER: new Link('to_Supplier', this, linkedApis[21]),
      TO_BANK: new Link('to_Bank', this, linkedApis[22]),
      TO_PAYMENT_CARD: new Link('to_PaymentCard', this, linkedApis[23]),
      TO_ADDRESS_INDEPENDENT_COMMUNICATION: new OneToOneLink(
        'to_AddressIndependentCommunication',
        this,
        linkedApis[24]
      )
    };
    return this;
  }

  entityConstructor = BusinessPartner;

  requestBuilder(): BusinessPartnerRequestBuilder<DeSerializersT> {
    return new BusinessPartnerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartner<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BusinessPartner<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BusinessPartner, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartner,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    BUSINESS_PARTNER: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FULL_NAME: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_GROUP: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_TERM_1: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEARCH_TERM_2: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BLOCKED: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_MARKED_FOR_DELETION: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_RELEASED: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_BUSINESS_PURPOSE_COMPLETED: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_LANGUAGE: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_NATURAL_PERSON: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BUSINESS_PARTNER_GROUPING: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IAM_ID: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERMISSION: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_PRINT_FORMAT: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_CONSENT_GRANTED: OrderableEdmTypeField<
      BusinessPartner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCustomer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CUSTOMER: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      CustomerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INFORMATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PERSON: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      PersonNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ORGANIZATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      OrganizationNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_GROUP: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      GroupNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toIdentification} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_IDENTIFICATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      IdentificationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toIndustrySector} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_INDUSTRY_SECTOR: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      IndustrySectorApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ROLE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      RoleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toAddressUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_USAGE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressUsageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toTaxNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_TAX_NUMBER: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      TaxNumberApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultIndustrySector} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_INDUSTRY_SECTOR: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      IndustrySectorApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_PERSON: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      PersonNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultOrganization} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_ORGANIZATION: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      OrganizationNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toDefaultGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_DEFAULT_GROUP: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      GroupNameApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCurrentAddressInformation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_ADDRESS_INFORMATION: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressInformationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCurrentDefaultAddressUsageCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_ADDRESS_USAGE_CODE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressUsageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toCurrentDefaultAddressUsage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_ADDRESS_USAGE: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressUsageApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBusinessPartnerRelationship} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER_RELATIONSHIP: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toHasContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_HAS_CONTACT_PERSON: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCurrentHasContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_HAS_CONTACT_PERSON: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCurrentDefaultHasContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CURRENT_DEFAULT_HAS_CONTACT_PERSON: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerRelationshipApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSupplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      SupplierApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toBank} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BANK: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerBankApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPaymentCard} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PAYMENT_CARD: Link<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      PaymentCardApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toAddressIndependentCommunication} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ADDRESS_INDEPENDENT_COMMUNICATION: OneToOneLink<
      BusinessPartner<DeSerializersT>,
      DeSerializersT,
      AddressIndependentCommunicationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartner<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link businessPartner} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField(
          'BusinessPartner',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULL_NAME: fieldBuilder.buildEdmTypeField(
          'FullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField(
          'AuthorizationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchTerm1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_TERM_1: fieldBuilder.buildEdmTypeField(
          'SearchTerm1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link searchTerm2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_TERM_2: fieldBuilder.buildEdmTypeField(
          'SearchTerm2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBlocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BLOCKED: fieldBuilder.buildEdmTypeField(
          'IsBlocked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isMarkedForDeletion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MARKED_FOR_DELETION: fieldBuilder.buildEdmTypeField(
          'IsMarkedForDeletion',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RELEASED: fieldBuilder.buildEdmTypeField(
          'IsReleased',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isBusinessPurposeCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BUSINESS_PURPOSE_COMPLETED: fieldBuilder.buildEdmTypeField(
          'IsBusinessPurposeCompleted',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link correspondenceLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'CorrespondenceLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link isNaturalPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField(
          'IsNaturalPerson',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerGrouping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_GROUPING: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerGrouping',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iamId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IAM_ID: fieldBuilder.buildEdmTypeField('IAMId', 'Edm.String', true),
        /**
         * Static representation of the {@link contactPermission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERMISSION: fieldBuilder.buildEdmTypeField(
          'ContactPermission',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessPartnerPrintFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_PRINT_FORMAT: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerPrintFormat',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isConsentGranted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSENT_GRANTED: fieldBuilder.buildEdmTypeField(
          'IsConsentGranted',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartner)
      };
    }

    return this._schema;
  }
}
