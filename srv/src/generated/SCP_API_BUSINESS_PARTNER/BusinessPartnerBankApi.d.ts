/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerBank } from './BusinessPartnerBank';
import { BusinessPartnerBankRequestBuilder } from './BusinessPartnerBankRequestBuilder';
import { C_CountriesApi } from './C_CountriesApi';
import { BusinessPartnerApi } from './BusinessPartnerApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class BusinessPartnerBankApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartnerBank<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): BusinessPartnerBankApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      C_CountriesApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof BusinessPartnerBank;
  requestBuilder(): BusinessPartnerBankRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    BusinessPartnerBank<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    BusinessPartnerBank<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof BusinessPartnerBank, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BANK_IDENTIFICATION: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_COUNTRY_KEY: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_NUMBER: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_CONTROL_KEY: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_NAME: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT_HOLDER_NAME: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN_VALIDITY_START_DATE: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    BANK_ACCOUNT_REFERENCE_TEXT: OrderableEdmTypeField<
      BusinessPartnerBank<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toCountryCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_COUNTRY_CODE: OneToOneLink<
      BusinessPartnerBank<DeSerializersT>,
      DeSerializersT,
      C_CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      BusinessPartnerBank<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerBank<DeSerializers>>;
  };
}
