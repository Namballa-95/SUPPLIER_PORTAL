/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  entityDeserializer,
  transformReturnValueForComplexTypeList,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { scpApiBusinessPartner } from './service';
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
export function createBusinessPartnerWithConsent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CreateBusinessPartnerWithConsentParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  CreateBusinessPartnerWithConsentParameters<DeSerializersT>,
  BusinessPartnerWithConsent[]
> {
  const params = {
    dataSubjectId: new OperationParameter(
      'DataSubjectId',
      'Edm.String',
      parameters.dataSubjectId
    ),
    templateName: new OperationParameter(
      'TemplateName',
      'Edm.String',
      parameters.templateName
    ),
    languageCode: new OperationParameter(
      'LanguageCode',
      'Edm.String',
      parameters.languageCode
    ),
    dataSubjectTypeName: new OperationParameter(
      'DataSubjectTypeName',
      'Edm.String',
      parameters.dataSubjectTypeName
    ),
    dataSubjectDescription: new OperationParameter(
      'DataSubjectDescription',
      'Edm.String',
      parameters.dataSubjectDescription
    ),
    validFrom: new OperationParameter(
      'ValidFrom',
      'Edm.DateTimeOffset',
      parameters.validFrom
    ),
    grantedBy: new OperationParameter(
      'GrantedBy',
      'Edm.String',
      parameters.grantedBy
    ),
    grantedAt: new OperationParameter(
      'GrantedAt',
      'Edm.DateTimeOffset',
      parameters.grantedAt
    ),
    submissionSite: new OperationParameter(
      'SubmissionSite',
      'Edm.String',
      parameters.submissionSite
    ),
    businessPartner: new OperationParameter(
      'BusinessPartner',
      'Edm.String',
      parameters.businessPartner
    ),
    authorizationGroup: new OperationParameter(
      'AuthorizationGroup',
      'Edm.String',
      parameters.authorizationGroup
    ),
    category: new OperationParameter(
      'Category',
      'Edm.String',
      parameters.category
    ),
    lastName: new OperationParameter(
      'LastName',
      'Edm.String',
      parameters.lastName
    ),
    organizationName: new OperationParameter(
      'OrganizationName',
      'Edm.String',
      parameters.organizationName
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'CreateBusinessPartnerWithConsent',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BusinessPartnerWithConsent)
      ),
    params,
    deSerializers
  );
}

export const operations = {
  createBusinessPartnerWithConsent
};
