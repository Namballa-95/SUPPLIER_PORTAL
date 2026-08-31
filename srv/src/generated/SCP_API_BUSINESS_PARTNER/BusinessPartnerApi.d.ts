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
export declare class BusinessPartnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartner<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): BusinessPartnerApi<DeSerializersT>;
  private navigationPropertyFields;
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
  ): this;
  entityConstructor: typeof BusinessPartner;
  requestBuilder(): BusinessPartnerRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessPartner<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<BusinessPartner<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof BusinessPartner, DeSerializersT>;
  private _schema?;
  get schema(): {
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
}
