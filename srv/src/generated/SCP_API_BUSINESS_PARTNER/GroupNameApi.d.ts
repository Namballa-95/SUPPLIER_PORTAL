/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GroupName } from './GroupName';
import { GroupNameRequestBuilder } from './GroupNameRequestBuilder';
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
export declare class GroupNameApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GroupName<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): GroupNameApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [BusinessPartnerApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof GroupName;
  requestBuilder(): GroupNameRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<GroupName<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<GroupName<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof GroupName, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CREATED_BY_USER: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_GROUP_NAME_1: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_GROUP_NAME_2: OrderableEdmTypeField<
      GroupName<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_PARTNER_GROUP_TYPE: OrderableEdmTypeField<
      GroupName<DeSerializers>,
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
      GroupName<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GroupName<DeSerializers>>;
  };
}
