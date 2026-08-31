/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Workplace } from './Workplace';
import { WorkplaceRequestBuilder } from './WorkplaceRequestBuilder';
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
export declare class WorkplaceApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Workplace<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): WorkplaceApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [AddressApi<DeSerializersT>]): this;
  entityConstructor: typeof Workplace;
  requestBuilder(): WorkplaceRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Workplace<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Workplace<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Workplace, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    SCRIPT_CODE: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_TITLE_NAME: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_NAME: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLOOR: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOM: OrderableEdmTypeField<
      Workplace<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_SHORT_NAME: OrderableEdmTypeField<
      Workplace<DeSerializers>,
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
      Workplace<DeSerializersT>,
      DeSerializersT,
      AddressApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Workplace<DeSerializers>>;
  };
}
