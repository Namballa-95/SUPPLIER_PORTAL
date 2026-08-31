/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerWithConsent } from './BusinessPartnerWithConsent';
/**
 * Type of the parameters to be passed to {@link createBusinessPartnerWithConsent}.
 */
export interface CreateBusinessPartnerWithConsentParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Data Subject Id.
   */
  dataSubjectId?: string | null;
  /**
   * Template Name.
   */
  templateName: string;
  /**
   * Language Code.
   */
  languageCode: string;
  /**
   * Data Subject Type Name.
   */
  dataSubjectTypeName: string;
  /**
   * Data Subject Description.
   */
  dataSubjectDescription?: string | null;
  /**
   * Valid From.
   */
  validFrom?: Moment | null;
  /**
   * Granted By.
   */
  grantedBy?: string | null;
  /**
   * Granted At.
   */
  grantedAt?: Moment | null;
  /**
   * Submission Site.
   */
  submissionSite?: string | null;
  /**
   * Business Partner.
   */
  businessPartner?: string | null;
  /**
   * Authorization Group.
   */
  authorizationGroup: string;
  /**
   * Category.
   */
  category: string;
  /**
   * Last Name.
   */
  lastName?: string | null;
  /**
   * Organization Name.
   */
  organizationName?: string | null;
}
/**
 * Create Business Partner With Consent.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export declare function createBusinessPartnerWithConsent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CreateBusinessPartnerWithConsentParameters<DeSerializersT>,
  deSerializers?: DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  CreateBusinessPartnerWithConsentParameters<DeSerializersT>,
  BusinessPartnerWithConsent[]
>;
export declare const operations: {
  createBusinessPartnerWithConsent: typeof createBusinessPartnerWithConsent;
};
