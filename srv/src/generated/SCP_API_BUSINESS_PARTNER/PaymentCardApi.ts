/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentCard } from './PaymentCard';
import { PaymentCardRequestBuilder } from './PaymentCardRequestBuilder';
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
export class PaymentCardApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentCard<DeSerializersT>, DeSerializersT> {
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
  ): PaymentCardApi<DeSerializersT> {
    return new PaymentCardApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      PaymentCard<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnerApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_PARENT: new OneToOneLink('to_Parent', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PaymentCard;

  requestBuilder(): PaymentCardRequestBuilder<DeSerializersT> {
    return new PaymentCardRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentCard<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentCard<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymentCard<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymentCard, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PaymentCard, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PAYMENT_CARD_ID: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_TYPE: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_NUMBER: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_STANDARD_CARD: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CARD_DESCRIPTION: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_HOLDER: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_ISSUING_BANK: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_CATEGORY: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYMENT_CARD_LOCK: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_ISSUE_DATE: OrderableEdmTypeField<
      PaymentCard<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      PaymentCard<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PaymentCard<DeSerializers>>;
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
         * Static representation of the {@link paymentCardId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_ID: fieldBuilder.buildEdmTypeField(
          'PaymentCardID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentCardType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'PaymentCardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isStandardCard} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STANDARD_CARD: fieldBuilder.buildEdmTypeField(
          'IsStandardCard',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link cardDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'CardDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_HOLDER: fieldBuilder.buildEdmTypeField(
          'CardHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardIssuingBank} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_ISSUING_BANK: fieldBuilder.buildEdmTypeField(
          'CardIssuingBank',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_CATEGORY: fieldBuilder.buildEdmTypeField(
          'CardCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link paymentCardLock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_CARD_LOCK: fieldBuilder.buildEdmTypeField(
          'PaymentCardLock',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'CardIssueDate',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentCard)
      };
    }

    return this._schema;
  }
}
