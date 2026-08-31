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
export declare class PaymentCard<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentCardType<T>
{
  /**
   * Technical entity name for PaymentCard.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the PaymentCard entity.
   */
  static _keys: string[];
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Parent Id.
   * @nullable
   */
  parentId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Created By User.
   * Maximum length: 128.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Changed By User.
   * Maximum length: 128.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Change Date.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity Start Date.
   * @nullable
   */
  validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Validity End Date.
   * @nullable
   */
  validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Payment Card Id.
   * Maximum length: 6.
   * @nullable
   */
  paymentCardId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Type.
   * Maximum length: 4.
   * @nullable
   */
  paymentCardType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Number.
   * Maximum length: 25.
   * @nullable
   */
  paymentCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Standard Card.
   * @nullable
   */
  isStandardCard?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Card Description.
   * Maximum length: 40.
   * @nullable
   */
  cardDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Holder.
   * Maximum length: 40.
   * @nullable
   */
  cardHolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Issuing Bank.
   * Maximum length: 40.
   * @nullable
   */
  cardIssuingBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Category.
   * Maximum length: 2.
   * @nullable
   */
  cardCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Card Lock.
   * Maximum length: 2.
   * @nullable
   */
  paymentCardLock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Issue Date.
   * @nullable
   */
  cardIssueDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartner} entity.
   */
  toParent?: BusinessPartner<T> | null;
  constructor(_entityApi: PaymentCardApi<T>);
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
