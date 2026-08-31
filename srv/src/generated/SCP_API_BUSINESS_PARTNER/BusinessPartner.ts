/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerApi } from './BusinessPartnerApi';
import { Customer, CustomerType } from './Customer';
import {
  AddressInformation,
  AddressInformationType
} from './AddressInformation';
import { PersonName, PersonNameType } from './PersonName';
import { OrganizationName, OrganizationNameType } from './OrganizationName';
import { GroupName, GroupNameType } from './GroupName';
import { Identification, IdentificationType } from './Identification';
import { IndustrySector, IndustrySectorType } from './IndustrySector';
import { Role, RoleType } from './Role';
import { AddressUsage, AddressUsageType } from './AddressUsage';
import { TaxNumber, TaxNumberType } from './TaxNumber';
import {
  BusinessPartnerRelationship,
  BusinessPartnerRelationshipType
} from './BusinessPartnerRelationship';
import { Supplier, SupplierType } from './Supplier';
import {
  BusinessPartnerBank,
  BusinessPartnerBankType
} from './BusinessPartnerBank';
import { PaymentCard, PaymentCardType } from './PaymentCard';
import {
  AddressIndependentCommunication,
  AddressIndependentCommunicationType
} from './AddressIndependentCommunication';

/**
 * This class represents the entity "BusinessPartner" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartner<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPartnerType<T>
{
  /**
   * Technical entity name for BusinessPartner.
   */
  static override _entityName = 'BusinessPartner';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BusinessPartner entity.
   */
  static _keys = ['Id'];
  /**
   * Created By User.
   * Maximum length: 128.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 128.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Business Partner.
   * Maximum length: 10.
   * @nullable
   */
  declare businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * Maximum length: 1.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Name.
   * Maximum length: 80.
   * @nullable
   */
  declare fullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  declare authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Term 1.
   * Maximum length: 20.
   * @nullable
   */
  declare searchTerm1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Search Term 2.
   * Maximum length: 20.
   * @nullable
   */
  declare searchTerm2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Blocked.
   * @nullable
   */
  declare isBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Marked For Deletion.
   * @nullable
   */
  declare isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Released.
   * @nullable
   */
  declare isReleased?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Business Purpose Completed.
   * @nullable
   */
  declare isBusinessPurposeCompleted?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Language.
   * Maximum length: 2.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Language.
   * Maximum length: 2.
   * @nullable
   */
  declare correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * Maximum length: 2.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Natural Person.
   * @nullable
   */
  declare isNaturalPerson?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Business Partner Grouping.
   * Maximum length: 4.
   * @nullable
   */
  declare businessPartnerGrouping?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iam Id.
   * Maximum length: 100.
   * @nullable
   */
  declare iamId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Permission.
   * Maximum length: 1.
   * @nullable
   */
  declare contactPermission?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Partner Print Format.
   * @nullable
   */
  declare businessPartnerPrintFormat?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Is Consent Granted.
   * @nullable
   */
  declare isConsentGranted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-many navigation property to the {@link Customer} entity.
   */
  declare toCustomer: Customer<T>[];
  /**
   * One-to-many navigation property to the {@link AddressInformation} entity.
   */
  declare toAddressInformation: AddressInformation<T>[];
  /**
   * One-to-many navigation property to the {@link PersonName} entity.
   */
  declare toPerson: PersonName<T>[];
  /**
   * One-to-many navigation property to the {@link OrganizationName} entity.
   */
  declare toOrganization: OrganizationName<T>[];
  /**
   * One-to-many navigation property to the {@link GroupName} entity.
   */
  declare toGroup: GroupName<T>[];
  /**
   * One-to-many navigation property to the {@link Identification} entity.
   */
  declare toIdentification: Identification<T>[];
  /**
   * One-to-many navigation property to the {@link IndustrySector} entity.
   */
  declare toIndustrySector: IndustrySector<T>[];
  /**
   * One-to-many navigation property to the {@link Role} entity.
   */
  declare toRole: Role<T>[];
  /**
   * One-to-many navigation property to the {@link AddressUsage} entity.
   */
  declare toAddressUsage: AddressUsage<T>[];
  /**
   * One-to-many navigation property to the {@link TaxNumber} entity.
   */
  declare toTaxNumber: TaxNumber<T>[];
  /**
   * One-to-one navigation property to the {@link IndustrySector} entity.
   */
  declare toDefaultIndustrySector?: IndustrySector<T> | null;
  /**
   * One-to-one navigation property to the {@link PersonName} entity.
   */
  declare toDefaultPerson?: PersonName<T> | null;
  /**
   * One-to-one navigation property to the {@link OrganizationName} entity.
   */
  declare toDefaultOrganization?: OrganizationName<T> | null;
  /**
   * One-to-one navigation property to the {@link GroupName} entity.
   */
  declare toDefaultGroup?: GroupName<T> | null;
  /**
   * One-to-many navigation property to the {@link AddressInformation} entity.
   */
  declare toCurrentAddressInformation: AddressInformation<T>[];
  /**
   * One-to-many navigation property to the {@link AddressUsage} entity.
   */
  declare toCurrentDefaultAddressUsageCode: AddressUsage<T>[];
  /**
   * One-to-many navigation property to the {@link AddressUsage} entity.
   */
  declare toCurrentDefaultAddressUsage: AddressUsage<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerRelationship} entity.
   */
  declare toBusinessPartnerRelationship: BusinessPartnerRelationship<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerRelationship} entity.
   */
  declare toHasContactPerson: BusinessPartnerRelationship<T>[];
  /**
   * One-to-one navigation property to the {@link BusinessPartnerRelationship} entity.
   */
  declare toCurrentHasContactPerson?: BusinessPartnerRelationship<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartnerRelationship} entity.
   */
  declare toCurrentDefaultHasContactPerson?: BusinessPartnerRelationship<T> | null;
  /**
   * One-to-many navigation property to the {@link Supplier} entity.
   */
  declare toSupplier: Supplier<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessPartnerBank} entity.
   */
  declare toBank: BusinessPartnerBank<T>[];
  /**
   * One-to-many navigation property to the {@link PaymentCard} entity.
   */
  declare toPaymentCard: PaymentCard<T>[];
  /**
   * One-to-one navigation property to the {@link AddressIndependentCommunication} entity.
   */
  declare toAddressIndependentCommunication?: AddressIndependentCommunication<T> | null;

  constructor(_entityApi: BusinessPartnerApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  id: DeserializedType<T, 'Edm.Guid'>;
  businessPartner?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  fullName?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  searchTerm1?: DeserializedType<T, 'Edm.String'> | null;
  searchTerm2?: DeserializedType<T, 'Edm.String'> | null;
  isBlocked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isMarkedForDeletion?: DeserializedType<T, 'Edm.Boolean'> | null;
  isReleased?: DeserializedType<T, 'Edm.Boolean'> | null;
  isBusinessPurposeCompleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceLanguage?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  isNaturalPerson?: DeserializedType<T, 'Edm.Boolean'> | null;
  businessPartnerGrouping?: DeserializedType<T, 'Edm.String'> | null;
  iamId?: DeserializedType<T, 'Edm.String'> | null;
  contactPermission?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerPrintFormat?: DeserializedType<T, 'Edm.Boolean'> | null;
  isConsentGranted?: DeserializedType<T, 'Edm.Boolean'> | null;
  toCustomer: CustomerType<T>[];
  toAddressInformation: AddressInformationType<T>[];
  toPerson: PersonNameType<T>[];
  toOrganization: OrganizationNameType<T>[];
  toGroup: GroupNameType<T>[];
  toIdentification: IdentificationType<T>[];
  toIndustrySector: IndustrySectorType<T>[];
  toRole: RoleType<T>[];
  toAddressUsage: AddressUsageType<T>[];
  toTaxNumber: TaxNumberType<T>[];
  toDefaultIndustrySector?: IndustrySectorType<T> | null;
  toDefaultPerson?: PersonNameType<T> | null;
  toDefaultOrganization?: OrganizationNameType<T> | null;
  toDefaultGroup?: GroupNameType<T> | null;
  toCurrentAddressInformation: AddressInformationType<T>[];
  toCurrentDefaultAddressUsageCode: AddressUsageType<T>[];
  toCurrentDefaultAddressUsage: AddressUsageType<T>[];
  toBusinessPartnerRelationship: BusinessPartnerRelationshipType<T>[];
  toHasContactPerson: BusinessPartnerRelationshipType<T>[];
  toCurrentHasContactPerson?: BusinessPartnerRelationshipType<T> | null;
  toCurrentDefaultHasContactPerson?: BusinessPartnerRelationshipType<T> | null;
  toSupplier: SupplierType<T>[];
  toBank: BusinessPartnerBankType<T>[];
  toPaymentCard: PaymentCardType<T>[];
  toAddressIndependentCommunication?: AddressIndependentCommunicationType<T> | null;
}
