/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { AddressIndependentPhoneNumberDummy } from './AddressIndependentPhoneNumberDummy';
/**
 * Request builder class for operations supported on the {@link AddressIndependentPhoneNumberDummy} entity.
 */
export declare class AddressIndependentPhoneNumberDummyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentPhoneNumberDummy<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentPhoneNumberDummy` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentPhoneNumberDummy` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentPhoneNumberDummy<T>, T>;
  /**
   * Returns a request builder for creating a `AddressIndependentPhoneNumberDummy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentPhoneNumberDummy`.
   */
  create(
    entity: AddressIndependentPhoneNumberDummy<T>
  ): CreateRequestBuilder<AddressIndependentPhoneNumberDummy<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressIndependentPhoneNumberDummy` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentPhoneNumberDummy.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentPhoneNumberDummy` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentPhoneNumberDummy<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressIndependentPhoneNumberDummy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentPhoneNumberDummy`.
   */
  update(
    entity: AddressIndependentPhoneNumberDummy<T>
  ): UpdateRequestBuilder<AddressIndependentPhoneNumberDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentPhoneNumberDummy`.
   * @param id Key property. See {@link AddressIndependentPhoneNumberDummy.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentPhoneNumberDummy`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<AddressIndependentPhoneNumberDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentPhoneNumberDummy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentPhoneNumberDummy` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentPhoneNumberDummy<T>
  ): DeleteRequestBuilder<AddressIndependentPhoneNumberDummy<T>, T>;
}
