/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CommunicationDataText } from './CommunicationDataText';
import { CommunicationDataTextRequestBuilder } from './CommunicationDataTextRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class CommunicationDataTextApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CommunicationDataText<DeSerializersT>, DeSerializersT> {
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): CommunicationDataTextApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof CommunicationDataText;
  requestBuilder(): CommunicationDataTextRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CommunicationDataText<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    CommunicationDataText<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof CommunicationDataText,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      CommunicationDataText<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      CommunicationDataText<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    COMMUNICATION_LANGUAGE: OrderableEdmTypeField<
      CommunicationDataText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMARK: OrderableEdmTypeField<
      CommunicationDataText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CommunicationDataText<DeSerializers>>;
  };
}
