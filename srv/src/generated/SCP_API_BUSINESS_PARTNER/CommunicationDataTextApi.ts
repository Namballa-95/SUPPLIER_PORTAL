/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CommunicationDataText } from './CommunicationDataText';
import { CommunicationDataTextRequestBuilder } from './CommunicationDataTextRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class CommunicationDataTextApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CommunicationDataText<DeSerializersT>, DeSerializersT> {
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
  ): CommunicationDataTextApi<DeSerializersT> {
    return new CommunicationDataTextApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CommunicationDataText;

  requestBuilder(): CommunicationDataTextRequestBuilder<DeSerializersT> {
    return new CommunicationDataTextRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CommunicationDataText<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CommunicationDataText<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CommunicationDataText<DeSerializersT>,
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
    typeof CommunicationDataText,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CommunicationDataText,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
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
         * Static representation of the {@link communicationLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMUNICATION_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'CommunicationLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARK: fieldBuilder.buildEdmTypeField('remark', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CommunicationDataText)
      };
    }

    return this._schema;
  }
}
