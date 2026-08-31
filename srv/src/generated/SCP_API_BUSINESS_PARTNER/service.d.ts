/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressApi } from './AddressApi';
import { AddressIndependentCommunicationApi } from './AddressIndependentCommunicationApi';
import { AddressIndependentEmailApi } from './AddressIndependentEmailApi';
import { AddressIndependentEmailAddressDummyApi } from './AddressIndependentEmailAddressDummyApi';
import { AddressIndependentFaxNumberApi } from './AddressIndependentFaxNumberApi';
import { AddressIndependentFaxNumberDummyApi } from './AddressIndependentFaxNumberDummyApi';
import { AddressIndependentPhoneNumberApi } from './AddressIndependentPhoneNumberApi';
import { AddressIndependentPhoneNumberDummyApi } from './AddressIndependentPhoneNumberDummyApi';
import { AddressIndependentWebApi } from './AddressIndependentWebApi';
import { AddressIndependentWebDummyApi } from './AddressIndependentWebDummyApi';
import { AddressInformationApi } from './AddressInformationApi';
import { AddressOrganizationNameApi } from './AddressOrganizationNameApi';
import { AddressPersonNameApi } from './AddressPersonNameApi';
import { AddressUsageApi } from './AddressUsageApi';
import { BusinessPartnerApi } from './BusinessPartnerApi';
import { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
import { BusinessPartnerRelationshipApi } from './BusinessPartnerRelationshipApi';
import { BusinessPartnerWhldgTaxApi } from './BusinessPartnerWhldgTaxApi';
import { C_CountriesApi } from './C_CountriesApi';
import { CommunicationDataTextApi } from './CommunicationDataTextApi';
import { ContactPersonApi } from './ContactPersonApi';
import { CountryTextsApi } from './CountryTextsApi';
import { CustomerApi } from './CustomerApi';
import { CustomerPartnerFunctionApi } from './CustomerPartnerFunctionApi';
import { EmailAddressApi } from './EmailAddressApi';
import { FaxNumberApi } from './FaxNumberApi';
import { GroupNameApi } from './GroupNameApi';
import { IdentificationApi } from './IdentificationApi';
import { IndustrySectorApi } from './IndustrySectorApi';
import { OrganizationNameApi } from './OrganizationNameApi';
import { PaymentCardApi } from './PaymentCardApi';
import { PersonNameApi } from './PersonNameApi';
import { PhoneNumberApi } from './PhoneNumberApi';
import { PostalAddressApi } from './PostalAddressApi';
import { RoleApi } from './RoleApi';
import { SalesAreaApi } from './SalesAreaApi';
import { SalesTaxApi } from './SalesTaxApi';
import { SubdivisionTextsApi } from './SubdivisionTextsApi';
import { SubdivisionsApi } from './SubdivisionsApi';
import { SupplierApi } from './SupplierApi';
import { SupplierCompanyApi } from './SupplierCompanyApi';
import { SupplierPartnerFunctionApi } from './SupplierPartnerFunctionApi';
import { SupplierPurchasingOrgApi } from './SupplierPurchasingOrgApi';
import { TaxNumberApi } from './TaxNumberApi';
import { WebApi } from './WebApi';
import { WorkPlaceAddressInformationApi } from './WorkPlaceAddressInformationApi';
import { WorkplaceApi } from './WorkplaceApi';
import { CreateBusinessPartnerWithConsentParameters } from './operations';
import BigNumber from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function scpApiBusinessPartner<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): ScpApiBusinessPartner<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class ScpApiBusinessPartner<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get addressApi(): AddressApi<DeSerializersT>;
  get addressIndependentCommunicationApi(): AddressIndependentCommunicationApi<DeSerializersT>;
  get addressIndependentEmailApi(): AddressIndependentEmailApi<DeSerializersT>;
  get addressIndependentEmailAddressDummyApi(): AddressIndependentEmailAddressDummyApi<DeSerializersT>;
  get addressIndependentFaxNumberApi(): AddressIndependentFaxNumberApi<DeSerializersT>;
  get addressIndependentFaxNumberDummyApi(): AddressIndependentFaxNumberDummyApi<DeSerializersT>;
  get addressIndependentPhoneNumberApi(): AddressIndependentPhoneNumberApi<DeSerializersT>;
  get addressIndependentPhoneNumberDummyApi(): AddressIndependentPhoneNumberDummyApi<DeSerializersT>;
  get addressIndependentWebApi(): AddressIndependentWebApi<DeSerializersT>;
  get addressIndependentWebDummyApi(): AddressIndependentWebDummyApi<DeSerializersT>;
  get addressInformationApi(): AddressInformationApi<DeSerializersT>;
  get addressOrganizationNameApi(): AddressOrganizationNameApi<DeSerializersT>;
  get addressPersonNameApi(): AddressPersonNameApi<DeSerializersT>;
  get addressUsageApi(): AddressUsageApi<DeSerializersT>;
  get businessPartnerApi(): BusinessPartnerApi<DeSerializersT>;
  get businessPartnerBankApi(): BusinessPartnerBankApi<DeSerializersT>;
  get businessPartnerRelationshipApi(): BusinessPartnerRelationshipApi<DeSerializersT>;
  get businessPartnerWhldgTaxApi(): BusinessPartnerWhldgTaxApi<DeSerializersT>;
  get c_CountriesApi(): C_CountriesApi<DeSerializersT>;
  get communicationDataTextApi(): CommunicationDataTextApi<DeSerializersT>;
  get contactPersonApi(): ContactPersonApi<DeSerializersT>;
  get countryTextsApi(): CountryTextsApi<DeSerializersT>;
  get customerApi(): CustomerApi<DeSerializersT>;
  get customerPartnerFunctionApi(): CustomerPartnerFunctionApi<DeSerializersT>;
  get emailAddressApi(): EmailAddressApi<DeSerializersT>;
  get faxNumberApi(): FaxNumberApi<DeSerializersT>;
  get groupNameApi(): GroupNameApi<DeSerializersT>;
  get identificationApi(): IdentificationApi<DeSerializersT>;
  get industrySectorApi(): IndustrySectorApi<DeSerializersT>;
  get organizationNameApi(): OrganizationNameApi<DeSerializersT>;
  get paymentCardApi(): PaymentCardApi<DeSerializersT>;
  get personNameApi(): PersonNameApi<DeSerializersT>;
  get phoneNumberApi(): PhoneNumberApi<DeSerializersT>;
  get postalAddressApi(): PostalAddressApi<DeSerializersT>;
  get roleApi(): RoleApi<DeSerializersT>;
  get salesAreaApi(): SalesAreaApi<DeSerializersT>;
  get salesTaxApi(): SalesTaxApi<DeSerializersT>;
  get subdivisionTextsApi(): SubdivisionTextsApi<DeSerializersT>;
  get subdivisionsApi(): SubdivisionsApi<DeSerializersT>;
  get supplierApi(): SupplierApi<DeSerializersT>;
  get supplierCompanyApi(): SupplierCompanyApi<DeSerializersT>;
  get supplierPartnerFunctionApi(): SupplierPartnerFunctionApi<DeSerializersT>;
  get supplierPurchasingOrgApi(): SupplierPurchasingOrgApi<DeSerializersT>;
  get taxNumberApi(): TaxNumberApi<DeSerializersT>;
  get webApi(): WebApi<DeSerializersT>;
  get workPlaceAddressInformationApi(): WorkPlaceAddressInformationApi<DeSerializersT>;
  get workplaceApi(): WorkplaceApi<DeSerializersT>;
  get operations(): {
    createBusinessPartnerWithConsent: (
      parameter: CreateBusinessPartnerWithConsentParameters<DeSerializersT>
    ) => import('@sap-cloud-sdk/odata-v2').OperationRequestBuilder<
      DeSerializersT,
      CreateBusinessPartnerWithConsentParameters<DeSerializersT>,
      import('./BusinessPartnerWithConsent').BusinessPartnerWithConsent<DefaultDeSerializers>[]
    >;
  };
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
