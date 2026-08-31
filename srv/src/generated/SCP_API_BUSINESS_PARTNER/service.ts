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
import {
  createBusinessPartnerWithConsent,
  CreateBusinessPartnerWithConsentParameters
} from './operations';
import BigNumber from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function scpApiBusinessPartner<
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
  deSerializers: Partial<
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
  > = defaultDeSerializers as any
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
> {
  return new ScpApiBusinessPartner(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class ScpApiBusinessPartner<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get addressApi(): AddressApi<DeSerializersT> {
    const api = this.initApi('addressApi', AddressApi);
    const linkedApis = [
      this.initApi('workplaceApi', WorkplaceApi),
      this.initApi('emailAddressApi', EmailAddressApi),
      this.initApi('phoneNumberApi', PhoneNumberApi),
      this.initApi('phoneNumberApi', PhoneNumberApi),
      this.initApi('faxNumberApi', FaxNumberApi),
      this.initApi('webApi', WebApi),
      this.initApi('postalAddressApi', PostalAddressApi),
      this.initApi('addressPersonNameApi', AddressPersonNameApi),
      this.initApi('addressOrganizationNameApi', AddressOrganizationNameApi),
      this.initApi('postalAddressApi', PostalAddressApi),
      this.initApi('emailAddressApi', EmailAddressApi),
      this.initApi('phoneNumberApi', PhoneNumberApi),
      this.initApi('phoneNumberApi', PhoneNumberApi),
      this.initApi('faxNumberApi', FaxNumberApi),
      this.initApi('webApi', WebApi),
      this.initApi('addressPersonNameApi', AddressPersonNameApi),
      this.initApi('addressOrganizationNameApi', AddressOrganizationNameApi),
      this.initApi('workplaceApi', WorkplaceApi),
      this.initApi('addressInformationApi', AddressInformationApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentCommunicationApi(): AddressIndependentCommunicationApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentCommunicationApi',
      AddressIndependentCommunicationApi
    );
    const linkedApis = [
      this.initApi(
        'addressIndependentPhoneNumberApi',
        AddressIndependentPhoneNumberApi
      ),
      this.initApi(
        'addressIndependentPhoneNumberApi',
        AddressIndependentPhoneNumberApi
      ),
      this.initApi(
        'addressIndependentFaxNumberApi',
        AddressIndependentFaxNumberApi
      ),
      this.initApi('addressIndependentEmailApi', AddressIndependentEmailApi),
      this.initApi('addressIndependentWebApi', AddressIndependentWebApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentEmailApi(): AddressIndependentEmailApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentEmailApi',
      AddressIndependentEmailApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentEmailAddressDummyApi(): AddressIndependentEmailAddressDummyApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentEmailAddressDummyApi',
      AddressIndependentEmailAddressDummyApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentFaxNumberApi(): AddressIndependentFaxNumberApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentFaxNumberApi',
      AddressIndependentFaxNumberApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentFaxNumberDummyApi(): AddressIndependentFaxNumberDummyApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentFaxNumberDummyApi',
      AddressIndependentFaxNumberDummyApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentPhoneNumberApi(): AddressIndependentPhoneNumberApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentPhoneNumberApi',
      AddressIndependentPhoneNumberApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentPhoneNumberDummyApi(): AddressIndependentPhoneNumberDummyApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentPhoneNumberDummyApi',
      AddressIndependentPhoneNumberDummyApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentWebApi(): AddressIndependentWebApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentWebApi',
      AddressIndependentWebApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressIndependentWebDummyApi(): AddressIndependentWebDummyApi<DeSerializersT> {
    const api = this.initApi(
      'addressIndependentWebDummyApi',
      AddressIndependentWebDummyApi
    );
    const linkedApis = [
      this.initApi('communicationDataTextApi', CommunicationDataTextApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressInformationApi(): AddressInformationApi<DeSerializersT> {
    const api = this.initApi('addressInformationApi', AddressInformationApi);
    const linkedApis = [
      this.initApi('addressUsageApi', AddressUsageApi),
      this.initApi('addressApi', AddressApi),
      this.initApi('businessPartnerApi', BusinessPartnerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressOrganizationNameApi(): AddressOrganizationNameApi<DeSerializersT> {
    const api = this.initApi(
      'addressOrganizationNameApi',
      AddressOrganizationNameApi
    );
    const linkedApis = [this.initApi('addressApi', AddressApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressPersonNameApi(): AddressPersonNameApi<DeSerializersT> {
    const api = this.initApi('addressPersonNameApi', AddressPersonNameApi);
    const linkedApis = [this.initApi('addressApi', AddressApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addressUsageApi(): AddressUsageApi<DeSerializersT> {
    const api = this.initApi('addressUsageApi', AddressUsageApi);
    const linkedApis = [
      this.initApi('addressApi', AddressApi),
      this.initApi('addressInformationApi', AddressInformationApi),
      this.initApi('businessPartnerApi', BusinessPartnerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get businessPartnerApi(): BusinessPartnerApi<DeSerializersT> {
    const api = this.initApi('businessPartnerApi', BusinessPartnerApi);
    const linkedApis = [
      this.initApi('customerApi', CustomerApi),
      this.initApi('addressInformationApi', AddressInformationApi),
      this.initApi('personNameApi', PersonNameApi),
      this.initApi('organizationNameApi', OrganizationNameApi),
      this.initApi('groupNameApi', GroupNameApi),
      this.initApi('identificationApi', IdentificationApi),
      this.initApi('industrySectorApi', IndustrySectorApi),
      this.initApi('roleApi', RoleApi),
      this.initApi('addressUsageApi', AddressUsageApi),
      this.initApi('taxNumberApi', TaxNumberApi),
      this.initApi('industrySectorApi', IndustrySectorApi),
      this.initApi('personNameApi', PersonNameApi),
      this.initApi('organizationNameApi', OrganizationNameApi),
      this.initApi('groupNameApi', GroupNameApi),
      this.initApi('addressInformationApi', AddressInformationApi),
      this.initApi('addressUsageApi', AddressUsageApi),
      this.initApi('addressUsageApi', AddressUsageApi),
      this.initApi(
        'businessPartnerRelationshipApi',
        BusinessPartnerRelationshipApi
      ),
      this.initApi(
        'businessPartnerRelationshipApi',
        BusinessPartnerRelationshipApi
      ),
      this.initApi(
        'businessPartnerRelationshipApi',
        BusinessPartnerRelationshipApi
      ),
      this.initApi(
        'businessPartnerRelationshipApi',
        BusinessPartnerRelationshipApi
      ),
      this.initApi('supplierApi', SupplierApi),
      this.initApi('businessPartnerBankApi', BusinessPartnerBankApi),
      this.initApi('paymentCardApi', PaymentCardApi),
      this.initApi(
        'addressIndependentCommunicationApi',
        AddressIndependentCommunicationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get businessPartnerBankApi(): BusinessPartnerBankApi<DeSerializersT> {
    const api = this.initApi('businessPartnerBankApi', BusinessPartnerBankApi);
    const linkedApis = [
      this.initApi('c_CountriesApi', C_CountriesApi),
      this.initApi('businessPartnerApi', BusinessPartnerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get businessPartnerRelationshipApi(): BusinessPartnerRelationshipApi<DeSerializersT> {
    const api = this.initApi(
      'businessPartnerRelationshipApi',
      BusinessPartnerRelationshipApi
    );
    const linkedApis = [
      this.initApi('contactPersonApi', ContactPersonApi),
      this.initApi('businessPartnerApi', BusinessPartnerApi),
      this.initApi('businessPartnerApi', BusinessPartnerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get businessPartnerWhldgTaxApi(): BusinessPartnerWhldgTaxApi<DeSerializersT> {
    const api = this.initApi(
      'businessPartnerWhldgTaxApi',
      BusinessPartnerWhldgTaxApi
    );
    const linkedApis = [this.initApi('supplierCompanyApi', SupplierCompanyApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get c_CountriesApi(): C_CountriesApi<DeSerializersT> {
    const api = this.initApi('c_CountriesApi', C_CountriesApi);
    const linkedApis = [
      this.initApi('countryTextsApi', CountryTextsApi),
      this.initApi('subdivisionsApi', SubdivisionsApi),
      this.initApi('countryTextsApi', CountryTextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get communicationDataTextApi(): CommunicationDataTextApi<DeSerializersT> {
    return this.initApi('communicationDataTextApi', CommunicationDataTextApi);
  }

  get contactPersonApi(): ContactPersonApi<DeSerializersT> {
    const api = this.initApi('contactPersonApi', ContactPersonApi);
    const linkedApis = [
      this.initApi(
        'businessPartnerRelationshipApi',
        BusinessPartnerRelationshipApi
      ),
      this.initApi(
        'workPlaceAddressInformationApi',
        WorkPlaceAddressInformationApi
      ),
      this.initApi(
        'workPlaceAddressInformationApi',
        WorkPlaceAddressInformationApi
      ),
      this.initApi(
        'workPlaceAddressInformationApi',
        WorkPlaceAddressInformationApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get countryTextsApi(): CountryTextsApi<DeSerializersT> {
    return this.initApi('countryTextsApi', CountryTextsApi);
  }

  get customerApi(): CustomerApi<DeSerializersT> {
    const api = this.initApi('customerApi', CustomerApi);
    const linkedApis = [
      this.initApi('addressInformationApi', AddressInformationApi),
      this.initApi('salesAreaApi', SalesAreaApi),
      this.initApi('salesTaxApi', SalesTaxApi),
      this.initApi('businessPartnerApi', BusinessPartnerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get customerPartnerFunctionApi(): CustomerPartnerFunctionApi<DeSerializersT> {
    const api = this.initApi(
      'customerPartnerFunctionApi',
      CustomerPartnerFunctionApi
    );
    const linkedApis = [this.initApi('salesAreaApi', SalesAreaApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get emailAddressApi(): EmailAddressApi<DeSerializersT> {
    const api = this.initApi('emailAddressApi', EmailAddressApi);
    const linkedApis = [
      this.initApi('addressApi', AddressApi),
      this.initApi('communicationDataTextApi', CommunicationDataTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get faxNumberApi(): FaxNumberApi<DeSerializersT> {
    const api = this.initApi('faxNumberApi', FaxNumberApi);
    const linkedApis = [
      this.initApi('addressApi', AddressApi),
      this.initApi('communicationDataTextApi', CommunicationDataTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get groupNameApi(): GroupNameApi<DeSerializersT> {
    const api = this.initApi('groupNameApi', GroupNameApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get identificationApi(): IdentificationApi<DeSerializersT> {
    const api = this.initApi('identificationApi', IdentificationApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get industrySectorApi(): IndustrySectorApi<DeSerializersT> {
    const api = this.initApi('industrySectorApi', IndustrySectorApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get organizationNameApi(): OrganizationNameApi<DeSerializersT> {
    const api = this.initApi('organizationNameApi', OrganizationNameApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get paymentCardApi(): PaymentCardApi<DeSerializersT> {
    const api = this.initApi('paymentCardApi', PaymentCardApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get personNameApi(): PersonNameApi<DeSerializersT> {
    const api = this.initApi('personNameApi', PersonNameApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get phoneNumberApi(): PhoneNumberApi<DeSerializersT> {
    const api = this.initApi('phoneNumberApi', PhoneNumberApi);
    const linkedApis = [
      this.initApi('addressApi', AddressApi),
      this.initApi('communicationDataTextApi', CommunicationDataTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get postalAddressApi(): PostalAddressApi<DeSerializersT> {
    const api = this.initApi('postalAddressApi', PostalAddressApi);
    const linkedApis = [this.initApi('addressApi', AddressApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get roleApi(): RoleApi<DeSerializersT> {
    const api = this.initApi('roleApi', RoleApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesAreaApi(): SalesAreaApi<DeSerializersT> {
    const api = this.initApi('salesAreaApi', SalesAreaApi);
    const linkedApis = [
      this.initApi('customerPartnerFunctionApi', CustomerPartnerFunctionApi),
      this.initApi('customerApi', CustomerApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesTaxApi(): SalesTaxApi<DeSerializersT> {
    const api = this.initApi('salesTaxApi', SalesTaxApi);
    const linkedApis = [this.initApi('customerApi', CustomerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get subdivisionTextsApi(): SubdivisionTextsApi<DeSerializersT> {
    return this.initApi('subdivisionTextsApi', SubdivisionTextsApi);
  }

  get subdivisionsApi(): SubdivisionsApi<DeSerializersT> {
    const api = this.initApi('subdivisionsApi', SubdivisionsApi);
    const linkedApis = [
      this.initApi('subdivisionTextsApi', SubdivisionTextsApi),
      this.initApi('subdivisionTextsApi', SubdivisionTextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get supplierApi(): SupplierApi<DeSerializersT> {
    const api = this.initApi('supplierApi', SupplierApi);
    const linkedApis = [
      this.initApi('businessPartnerApi', BusinessPartnerApi),
      this.initApi('addressInformationApi', AddressInformationApi),
      this.initApi('supplierCompanyApi', SupplierCompanyApi),
      this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get supplierCompanyApi(): SupplierCompanyApi<DeSerializersT> {
    const api = this.initApi('supplierCompanyApi', SupplierCompanyApi);
    const linkedApis = [
      this.initApi('businessPartnerWhldgTaxApi', BusinessPartnerWhldgTaxApi),
      this.initApi('supplierApi', SupplierApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get supplierPartnerFunctionApi(): SupplierPartnerFunctionApi<DeSerializersT> {
    const api = this.initApi(
      'supplierPartnerFunctionApi',
      SupplierPartnerFunctionApi
    );
    const linkedApis = [
      this.initApi('supplierPurchasingOrgApi', SupplierPurchasingOrgApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get supplierPurchasingOrgApi(): SupplierPurchasingOrgApi<DeSerializersT> {
    const api = this.initApi(
      'supplierPurchasingOrgApi',
      SupplierPurchasingOrgApi
    );
    const linkedApis = [
      this.initApi('supplierPartnerFunctionApi', SupplierPartnerFunctionApi),
      this.initApi('supplierApi', SupplierApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get taxNumberApi(): TaxNumberApi<DeSerializersT> {
    const api = this.initApi('taxNumberApi', TaxNumberApi);
    const linkedApis = [this.initApi('businessPartnerApi', BusinessPartnerApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get webApi(): WebApi<DeSerializersT> {
    const api = this.initApi('webApi', WebApi);
    const linkedApis = [
      this.initApi('addressApi', AddressApi),
      this.initApi('communicationDataTextApi', CommunicationDataTextApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workPlaceAddressInformationApi(): WorkPlaceAddressInformationApi<DeSerializersT> {
    const api = this.initApi(
      'workPlaceAddressInformationApi',
      WorkPlaceAddressInformationApi
    );
    const linkedApis = [
      this.initApi('contactPersonApi', ContactPersonApi),
      this.initApi('addressApi', AddressApi),
      this.initApi('addressApi', AddressApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workplaceApi(): WorkplaceApi<DeSerializersT> {
    const api = this.initApi('workplaceApi', WorkplaceApi);
    const linkedApis = [this.initApi('addressApi', AddressApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get operations() {
    return {
      createBusinessPartnerWithConsent: (
        parameter: CreateBusinessPartnerWithConsentParameters<DeSerializersT>
      ) => createBusinessPartnerWithConsent(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
