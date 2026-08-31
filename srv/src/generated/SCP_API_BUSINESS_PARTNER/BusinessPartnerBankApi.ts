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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class BusinessPartnerBankApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartnerBank<DeSerializersT>, DeSerializersT> {
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BusinessPartnerBankApi<DeSerializersT> {
    return new BusinessPartnerBankApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      C_CountriesApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_COUNTRY_CODE: new OneToOneLink('to_CountryCode', this, linkedApis[0]),
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = BusinessPartnerBank;

  requestBuilder(): BusinessPartnerBankRequestBuilder<DeSerializersT> {
    return new BusinessPartnerBankRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartnerBank<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessPartnerBank<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessPartnerBank<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BusinessPartnerBank,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartnerBank,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'Parent_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link createdByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY_USER: fieldBuilder.buildEdmTypeField(
          'CreatedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastChangedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField(
          'LastChangedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastChangeDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField(
          'LastChangeDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link bankIdentification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'BankIdentification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankCountryKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_COUNTRY_KEY: fieldBuilder.buildEdmTypeField(
          'BankCountryKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_NUMBER: fieldBuilder.buildEdmTypeField(
          'BankNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankControlKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_CONTROL_KEY: fieldBuilder.buildEdmTypeField(
          'BankControlKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'BankAccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccountHolderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_HOLDER_NAME: fieldBuilder.buildEdmTypeField(
          'BankAccountHolderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link ibanValidityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'IBANValidityStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validityStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityStartDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validityEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField(
          'ValidityEndDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link bankAccountReferenceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_REFERENCE_TEXT: fieldBuilder.buildEdmTypeField(
          'BankAccountReferenceText',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartnerBank)
      };
    }

    return this._schema;
  }
}
