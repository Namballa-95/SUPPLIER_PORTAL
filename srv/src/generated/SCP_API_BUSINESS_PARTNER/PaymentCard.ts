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
import type { PaymentCardApi } from './PaymentCardApi';
import { BusinessPartner, BusinessPartnerType } from './BusinessPartner';

/**
 * This class represents the entity "PaymentCard" of service "API_BUSINESS_PARTNER".
 */
export class PaymentCard<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentCardType<T>
{
  /**
   * Technical entity name for PaymentCard.
   */
  static override _entityName = 'PaymentCard';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentCard entity.
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
   * Payment Card Id.
   * Maximum length: 6.
   * @nullable
   */
  declare paymentCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Type.
   * Maximum length: 4.
   * @nullable
   */
  declare paymentCardType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Number.
   * Maximum length: 25.
   * @nullable
   */
  declare paymentCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Standard Card.
   * @nullable
   */
  declare isStandardCard?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Card Description.
   * Maximum length: 40.
   * @nullable
   */
  declare cardDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Holder.
   * Maximum length: 40.
   * @nullable
   */
  declare cardHolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Issuing Bank.
   * Maximum length: 40.
   * @nullable
   */
  declare cardIssuingBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Category.
   * Maximum length: 2.
   * @nullable
   */
  declare cardCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Lock.
   * Maximum length: 2.
   * @nullable
   */
  declare paymentCardLock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Issue Date.
   * @nullable
   */
  declare cardIssueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  declare toParent?: BusinessPartner<T> | null;

  constructor(_entityApi: PaymentCardApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentCardType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  paymentCardId?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardType?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  isStandardCard?: DeserializedType<T, 'Edm.Boolean'> | null;
  cardDescription?: DeserializedType<T, 'Edm.String'> | null;
  cardHolder?: DeserializedType<T, 'Edm.String'> | null;
  cardIssuingBank?: DeserializedType<T, 'Edm.String'> | null;
  cardCategory?: DeserializedType<T, 'Edm.String'> | null;
  paymentCardLock?: DeserializedType<T, 'Edm.String'> | null;
  cardIssueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toParent?: BusinessPartnerType<T> | null;
}
