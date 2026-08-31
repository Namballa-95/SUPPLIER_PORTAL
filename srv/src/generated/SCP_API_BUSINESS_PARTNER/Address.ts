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
import type { AddressApi } from './AddressApi';
import { Workplace, WorkplaceType } from './Workplace';
import { EmailAddress, EmailAddressType } from './EmailAddress';
import { PhoneNumber, PhoneNumberType } from './PhoneNumber';
import { FaxNumber, FaxNumberType } from './FaxNumber';
import { Web, WebType } from './Web';
import { PostalAddress, PostalAddressType } from './PostalAddress';
import { AddressPersonName, AddressPersonNameType } from './AddressPersonName';
import {
  AddressOrganizationName,
  AddressOrganizationNameType
} from './AddressOrganizationName';
import {
  AddressInformation,
  AddressInformationType
} from './AddressInformation';

/**
 * This class represents the entity "Address" of service "API_BUSINESS_PARTNER".
 */
export class Address<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AddressType<T>
{
  /**
   * Technical entity name for Address.
   */
  static override _entityName = 'Address';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Address entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Address Type.
   * Maximum length: 10.
   * @nullable
   */
  declare addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prfrd Comm Medium Type.
   * Maximum length: 3.
   * @nullable
   */
  declare prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Workplace} entity.
   */
  declare toWorkplaceAddress: Workplace<T>[];
  /**
   * One-to-many navigation property to the {@link EmailAddress} entity.
   */
  declare toEmail: EmailAddress<T>[];
  /**
   * One-to-many navigation property to the {@link PhoneNumber} entity.
   */
  declare toMobilePhone: PhoneNumber<T>[];
  /**
   * One-to-many navigation property to the {@link PhoneNumber} entity.
   */
  declare toLandlinePhone: PhoneNumber<T>[];
  /**
   * One-to-many navigation property to the {@link FaxNumber} entity.
   */
  declare toFax: FaxNumber<T>[];
  /**
   * One-to-many navigation property to the {@link Web} entity.
   */
  declare toWeb: Web<T>[];
  /**
   * One-to-many navigation property to the {@link PostalAddress} entity.
   */
  declare toPostalAddress: PostalAddress<T>[];
  /**
   * One-to-many navigation property to the {@link AddressPersonName} entity.
   */
  declare toPerson: AddressPersonName<T>[];
  /**
   * One-to-many navigation property to the {@link AddressOrganizationName} entity.
   */
  declare toOrganization: AddressOrganizationName<T>[];
  /**
   * One-to-one navigation property to the {@link PostalAddress} entity.
   */
  declare toDefaultPostalAddress?: PostalAddress<T> | null;
  /**
   * One-to-one navigation property to the {@link EmailAddress} entity.
   */
  declare toDefaultEmail?: EmailAddress<T> | null;
  /**
   * One-to-one navigation property to the {@link PhoneNumber} entity.
   */
  declare toDefaultMobilePhone?: PhoneNumber<T> | null;
  /**
   * One-to-one navigation property to the {@link PhoneNumber} entity.
   */
  declare toDefaultLandlinePhone?: PhoneNumber<T> | null;
  /**
   * One-to-one navigation property to the {@link FaxNumber} entity.
   */
  declare toDefaultFax?: FaxNumber<T> | null;
  /**
   * One-to-one navigation property to the {@link Web} entity.
   */
  declare toDefaultWeb?: Web<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressPersonName} entity.
   */
  declare toDefaultPerson?: AddressPersonName<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressOrganizationName} entity.
   */
  declare toDefaultOrganization?: AddressOrganizationName<T> | null;
  /**
   * One-to-one navigation property to the {@link Workplace} entity.
   */
  declare toDefaultWorkplaceAddress?: Workplace<T> | null;
  /**
   * One-to-one navigation property to the {@link AddressInformation} entity.
   */
  declare toParent?: AddressInformation<T> | null;

  constructor(_entityApi: AddressApi<T>) {
    super(_entityApi);
  }
}

export interface AddressType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
  toWorkplaceAddress: WorkplaceType<T>[];
  toEmail: EmailAddressType<T>[];
  toMobilePhone: PhoneNumberType<T>[];
  toLandlinePhone: PhoneNumberType<T>[];
  toFax: FaxNumberType<T>[];
  toWeb: WebType<T>[];
  toPostalAddress: PostalAddressType<T>[];
  toPerson: AddressPersonNameType<T>[];
  toOrganization: AddressOrganizationNameType<T>[];
  toDefaultPostalAddress?: PostalAddressType<T> | null;
  toDefaultEmail?: EmailAddressType<T> | null;
  toDefaultMobilePhone?: PhoneNumberType<T> | null;
  toDefaultLandlinePhone?: PhoneNumberType<T> | null;
  toDefaultFax?: FaxNumberType<T> | null;
  toDefaultWeb?: WebType<T> | null;
  toDefaultPerson?: AddressPersonNameType<T> | null;
  toDefaultOrganization?: AddressOrganizationNameType<T> | null;
  toDefaultWorkplaceAddress?: WorkplaceType<T> | null;
  toParent?: AddressInformationType<T> | null;
}
