/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OrganizationName } from './OrganizationName';
import { OrganizationNameRequestBuilder } from './OrganizationNameRequestBuilder';
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
export declare class OrganizationNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OrganizationName<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): OrganizationNameApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [BusinessPartnerApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof OrganizationName;
  requestBuilder(): OrganizationNameRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    OrganizationName<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<OrganizationName<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof OrganizationName, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORM_OF_ADDRESS: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_FORM: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOUNDATION_DATE: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LIQUIDATION_DATE: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ORGANIZATION_NAME_1: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_2: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_3: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NAME_4: OrderableEdmTypeField<
      OrganizationName<DeSerializers>,
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
      OrganizationName<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OrganizationName<DeSerializers>>;
  };
}
