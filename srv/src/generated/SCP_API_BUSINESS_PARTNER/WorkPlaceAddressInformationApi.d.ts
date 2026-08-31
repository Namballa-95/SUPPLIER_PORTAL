/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkPlaceAddressInformation } from './WorkPlaceAddressInformation';
import { WorkPlaceAddressInformationRequestBuilder } from './WorkPlaceAddressInformationRequestBuilder';
import { ContactPersonApi } from './ContactPersonApi';
import { AddressApi } from './AddressApi';
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
export declare class WorkPlaceAddressInformationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<
  WorkPlaceAddressInformation<DeSerializersT>,
  DeSerializersT
> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): WorkPlaceAddressInformationApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ContactPersonApi<DeSerializersT>,
      AddressApi<DeSerializersT>,
      AddressApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof WorkPlaceAddressInformation;
  requestBuilder(): WorkPlaceAddressInformationRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    WorkPlaceAddressInformation<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    WorkPlaceAddressInformation<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof WorkPlaceAddressInformation,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    CREATED_BY_USER: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_CHANGED_BY_USER: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CHANGE_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_START_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALIDITY_END_DATE: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    WORKPLACE_ADDRESS_ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    ORGANIZATION_ADDRESS_ID: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    IS_DEFAULT_ADDRESS: OrderableEdmTypeField<
      WorkPlaceAddressInformation<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARENT: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      ContactPersonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toWorkplaceAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_WORKPLACE_ADDRESS: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toOrganizationAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_ORGANIZATION_ADDRESS: OneToOneLink<
      WorkPlaceAddressInformation<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkPlaceAddressInformation<DeSerializers>>;
  };
}
