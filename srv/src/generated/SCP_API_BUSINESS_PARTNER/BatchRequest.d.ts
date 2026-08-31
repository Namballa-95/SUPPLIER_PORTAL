/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  Address,
  AddressIndependentCommunication,
  AddressIndependentEmail,
  AddressIndependentEmailAddressDummy,
  AddressIndependentFaxNumber,
  AddressIndependentFaxNumberDummy,
  AddressIndependentPhoneNumber,
  AddressIndependentPhoneNumberDummy,
  AddressIndependentWeb,
  AddressIndependentWebDummy,
  AddressInformation,
  AddressOrganizationName,
  AddressPersonName,
  AddressUsage,
  BusinessPartner,
  BusinessPartnerBank,
  BusinessPartnerRelationship,
  BusinessPartnerWhldgTax,
  C_Countries,
  CommunicationDataText,
  ContactPerson,
  CountryTexts,
  Customer,
  CustomerPartnerFunction,
  EmailAddress,
  FaxNumber,
  GroupName,
  Identification,
  IndustrySector,
  OrganizationName,
  PaymentCard,
  PersonName,
  PhoneNumber,
  PostalAddress,
  Role,
  SalesArea,
  SalesTax,
  SubdivisionTexts,
  Subdivisions,
  Supplier,
  SupplierCompany,
  SupplierPartnerFunction,
  SupplierPurchasingOrg,
  TaxNumber,
  Web,
  WorkPlaceAddressInformation,
  Workplace,
  CreateBusinessPartnerWithConsentParameters,
  BusinessPartnerWithConsent
} from './index';
/**
 * Batch builder for operations supported on the Scp Api Business Partner.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadScpApiBusinessPartnerRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadScpApiBusinessPartnerRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Scp Api Business Partner.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteScpApiBusinessPartnerRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteScpApiBusinessPartnerRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultScpApiBusinessPartnerPath = '/';
export type ReadScpApiBusinessPartnerRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Address<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddressIndependentEmail<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddressIndependentFaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddressIndependentPhoneNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AddressIndependentWeb<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AddressInformation<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AddressPersonName<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AddressUsage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<C_Countries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CommunicationDataText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ContactPerson<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CountryTexts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmailAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FaxNumber<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<GroupName<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Identification<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IndustrySector<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<OrganizationName<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PaymentCard<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PersonName<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PhoneNumber<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PostalAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Role<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesArea<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesTax<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SubdivisionTexts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Subdivisions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SupplierPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaxNumber<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Web<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Workplace<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Address<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentEmail<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentFaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentPhoneNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentWeb<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AddressInformation<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AddressPersonName<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AddressUsage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<C_Countries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CommunicationDataText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ContactPerson<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CountryTexts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmailAddress<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FaxNumber<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<GroupName<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Identification<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IndustrySector<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<OrganizationName<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PaymentCard<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PersonName<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PhoneNumber<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PostalAddress<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Role<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesArea<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesTax<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SubdivisionTexts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Subdivisions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SupplierPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      SupplierPurchasingOrg<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TaxNumber<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Web<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Workplace<DeSerializersT>, DeSerializersT>;
export type WriteScpApiBusinessPartnerRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Address<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Address<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Address<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentCommunication<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddressIndependentEmail<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentEmail<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentEmail<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentEmailAddressDummy<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddressIndependentFaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentFaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentFaxNumber<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentFaxNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentPhoneNumber<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddressIndependentPhoneNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentPhoneNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentPhoneNumberDummy<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AddressIndependentWeb<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressIndependentWeb<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressIndependentWeb<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressIndependentWebDummy<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AddressInformation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressInformation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressInformation<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddressOrganizationName<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AddressPersonName<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressPersonName<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressPersonName<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AddressUsage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AddressUsage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AddressUsage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<C_Countries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<C_Countries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<C_Countries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CommunicationDataText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CommunicationDataText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CommunicationDataText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ContactPerson<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ContactPerson<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ContactPerson<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CountryTexts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CountryTexts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CountryTexts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Customer<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CustomerPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmailAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmailAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmailAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FaxNumber<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FaxNumber<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FaxNumber<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<GroupName<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<GroupName<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<GroupName<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Identification<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Identification<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Identification<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IndustrySector<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IndustrySector<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IndustrySector<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<OrganizationName<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<OrganizationName<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<OrganizationName<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PaymentCard<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PaymentCard<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PaymentCard<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PersonName<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PersonName<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PersonName<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PhoneNumber<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PhoneNumber<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PhoneNumber<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PostalAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PostalAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PostalAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Role<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Role<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Role<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesArea<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesArea<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesArea<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesTax<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesTax<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesTax<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SubdivisionTexts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SubdivisionTexts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SubdivisionTexts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Subdivisions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Subdivisions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Subdivisions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Supplier<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierCompany<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SupplierPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SupplierPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SupplierPartnerFunction<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SupplierPurchasingOrg<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaxNumber<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaxNumber<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaxNumber<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Web<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Web<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Web<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Workplace<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Workplace<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Workplace<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      CreateBusinessPartnerWithConsentParameters<DeSerializersT>,
      BusinessPartnerWithConsent[]
    >;
