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
import type { AddressIndependentCommunicationApi } from './AddressIndependentCommunicationApi';
import {
  AddressIndependentPhoneNumber,
  AddressIndependentPhoneNumberType
} from './AddressIndependentPhoneNumber';
import {
  AddressIndependentFaxNumber,
  AddressIndependentFaxNumberType
} from './AddressIndependentFaxNumber';
import {
  AddressIndependentEmail,
  AddressIndependentEmailType
} from './AddressIndependentEmail';
import {
  AddressIndependentWeb,
  AddressIndependentWebType
} from './AddressIndependentWeb';

/**
 * This class represents the entity "AddressIndependentCommunication" of service "API_BUSINESS_PARTNER".
 */
export class AddressIndependentCommunication<
  T extends DeSerializers = DefaultDeSerializers
>
  extends Entity
  implements AddressIndependentCommunicationType<T>
{
  /**
   * Technical entity name for AddressIndependentCommunication.
   */
  static override _entityName = 'AddressIndependentCommunication';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AddressIndependentCommunication entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Is Deleted.
   * @nullable
   */
  declare isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Validity Start Date.
   * @nullable
   */
  declare validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity End Date.
   * @nullable
   */
  declare validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Address Type.
   * Maximum length: 10.
   * @nullable
   */
  declare addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Independent.
   * @nullable
   */
  declare isIndependent?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Prfrd Comm Medium Type.
   * Maximum length: 3.
   * @nullable
   */
  declare prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AddressIndependentPhoneNumber} entity.
   */
  declare toAddressIndependentLandlinePhone: AddressIndependentPhoneNumber<T>[];
  /**
   * One-to-many navigation property to the {@link AddressIndependentPhoneNumber} entity.
   */
  declare toAddressIndependentMobilePhone: AddressIndependentPhoneNumber<T>[];
  /**
   * One-to-many navigation property to the {@link AddressIndependentFaxNumber} entity.
   */
  declare toAddressIndependentFax: AddressIndependentFaxNumber<T>[];
  /**
   * One-to-many navigation property to the {@link AddressIndependentEmail} entity.
   */
  declare toAddressIndependentEmail: AddressIndependentEmail<T>[];
  /**
   * One-to-many navigation property to the {@link AddressIndependentWeb} entity.
   */
  declare toAddressIndependentWeb: AddressIndependentWeb<T>[];

  constructor(_entityApi: AddressIndependentCommunicationApi<T>) {
    super(_entityApi);
  }
}

export interface AddressIndependentCommunicationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  isIndependent?: DeserializedType<T, 'Edm.Boolean'> | null;
  prfrdCommMediumType?: DeserializedType<T, 'Edm.String'> | null;
  toAddressIndependentLandlinePhone: AddressIndependentPhoneNumberType<T>[];
  toAddressIndependentMobilePhone: AddressIndependentPhoneNumberType<T>[];
  toAddressIndependentFax: AddressIndependentFaxNumberType<T>[];
  toAddressIndependentEmail: AddressIndependentEmailType<T>[];
  toAddressIndependentWeb: AddressIndependentWebType<T>[];
}
