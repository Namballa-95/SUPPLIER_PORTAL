/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerWhldgTax } from './BusinessPartnerWhldgTax';
import { BusinessPartnerWhldgTaxRequestBuilder } from './BusinessPartnerWhldgTaxRequestBuilder';
import { SupplierCompanyApi } from './SupplierCompanyApi';
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
export class BusinessPartnerWhldgTaxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  BusinessPartnerWhldgTax<DeSerializersT>,
  DeSerializersT
> {
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
  ): BusinessPartnerWhldgTaxApi<DeSerializersT> {
    return new BusinessPartnerWhldgTaxApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT,
      SupplierCompanyApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SupplierCompanyApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BusinessPartnerWhldgTax;

  requestBuilder(): BusinessPartnerWhldgTaxRequestBuilder<DeSerializersT> {
    return new BusinessPartnerWhldgTaxRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartnerWhldgTax<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessPartnerWhldgTax<DeSerializersT>,
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
    typeof BusinessPartnerWhldgTax,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartnerWhldgTax,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    WITHHOLDING_TAX_TYPE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CODE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_NUMBER: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_CERTIFICATE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITHHOLDING_TAX_EXMPT_PERCENT: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    EXEMPTION_REASON: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPTION_DATE_BEGIN: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXEMPTION_DATE_END: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RECIPIENT_TYPE: OrderableEdmTypeField<
      BusinessPartnerWhldgTax<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      BusinessPartnerWhldgTax<DeSerializersT>,
      DeSerializersT,
      SupplierCompanyApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerWhldgTax<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link withholdingTaxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_TYPE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CERTIFICATE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCertificate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxExmptPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_EXMPT_PERCENT: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxExmptPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link exemptionReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_REASON: fieldBuilder.buildEdmTypeField(
          'ExemptionReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptionDateBegin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_DATE_BEGIN: fieldBuilder.buildEdmTypeField(
          'ExemptionDateBegin',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link exemptionDateEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPTION_DATE_END: fieldBuilder.buildEdmTypeField(
          'ExemptionDateEnd',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link recipientType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECIPIENT_TYPE: fieldBuilder.buildEdmTypeField(
          'RecipientType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartnerWhldgTax)
      };
    }

    return this._schema;
  }
}
