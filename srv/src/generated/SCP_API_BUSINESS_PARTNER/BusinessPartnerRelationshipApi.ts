/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerRelationship } from './BusinessPartnerRelationship';
import { BusinessPartnerRelationshipRequestBuilder } from './BusinessPartnerRelationshipRequestBuilder';
import { ContactPersonApi } from './ContactPersonApi';
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
export class BusinessPartnerRelationshipApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  BusinessPartnerRelationship<DeSerializersT>,
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
  ): BusinessPartnerRelationshipApi<DeSerializersT> {
    return new BusinessPartnerRelationshipApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACT_PERSON: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      ContactPersonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toFirstBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FIRST_BUSINESS_PARTNER: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSecondBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SECOND_BUSINESS_PARTNER: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ContactPersonApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>,
      BusinessPartnerApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_CONTACT_PERSON: new OneToOneLink(
        'to_ContactPerson',
        this,
        linkedApis[0]
      ),
      TO_FIRST_BUSINESS_PARTNER: new OneToOneLink(
        'to_FirstBusinessPartner',
        this,
        linkedApis[1]
      ),
      TO_SECOND_BUSINESS_PARTNER: new OneToOneLink(
        'to_SecondBusinessPartner',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BusinessPartnerRelationship;

  requestBuilder(): BusinessPartnerRelationshipRequestBuilder<DeSerializersT> {
    return new BusinessPartnerRelationshipRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartnerRelationship<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessPartnerRelationship<DeSerializersT>,
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
    typeof BusinessPartnerRelationship,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartnerRelationship,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    RELATIONSHIP_CATEGORY: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_BUSINESS_PARTNER_ID: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SECOND_BUSINESS_PARTNER_ID: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      BusinessPartnerRelationship<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toContactPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACT_PERSON: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      ContactPersonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toFirstBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_FIRST_BUSINESS_PARTNER: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSecondBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SECOND_BUSINESS_PARTNER: OneToOneLink<
      BusinessPartnerRelationship<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerRelationship<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link relationshipCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIONSHIP_CATEGORY: fieldBuilder.buildEdmTypeField(
          'RelationshipCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEdmTypeField(
          'IsDefault',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
        /**
         * Static representation of the {@link firstBusinessPartnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_BUSINESS_PARTNER_ID: fieldBuilder.buildEdmTypeField(
          'FirstBusinessPartner_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link secondBusinessPartnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_BUSINESS_PARTNER_ID: fieldBuilder.buildEdmTypeField(
          'SecondBusinessPartner_Id',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEdmTypeField(
          'IsDeleted',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartnerRelationship)
      };
    }

    return this._schema;
  }
}
