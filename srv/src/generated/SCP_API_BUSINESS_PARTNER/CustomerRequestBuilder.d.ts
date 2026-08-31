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
import { Customer } from './Customer';
/**
 * Request builder class for operations supported on the {@link Customer} entity.
 */
export declare class CustomerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Customer<T>, T> {
  /**
   * Returns a request builder for querying all `Customer` entities.
   * @returns A request builder for creating requests to retrieve all `Customer` entities.
   */
  getAll(): GetAllRequestBuilder<Customer<T>, T>;
  /**
   * Returns a request builder for creating a `Customer` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Customer`.
   */
  create(entity: Customer<T>): CreateRequestBuilder<Customer<T>, T>;
  /**
   * Returns a request builder for retrieving one `Customer` entity based on its keys.
   * @param id Key property. See {@link Customer.id}.
   * @returns A request builder for creating requests to retrieve one `Customer` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Customer<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Customer`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Customer`.
   */
  update(entity: Customer<T>): UpdateRequestBuilder<Customer<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Customer`.
   * @param id Key property. See {@link Customer.id}.
   * @returns A request builder for creating requests that delete an entity of type `Customer`.
   */
  delete(id: string): DeleteRequestBuilder<Customer<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Customer`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Customer` by taking the entity as a parameter.
   */
  delete(entity: Customer<T>): DeleteRequestBuilder<Customer<T>, T>;
}
