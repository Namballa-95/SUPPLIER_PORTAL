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
import { Supplier } from './Supplier';
/**
 * Request builder class for operations supported on the {@link Supplier} entity.
 */
export declare class SupplierRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Supplier<T>, T> {
  /**
   * Returns a request builder for querying all `Supplier` entities.
   * @returns A request builder for creating requests to retrieve all `Supplier` entities.
   */
  getAll(): GetAllRequestBuilder<Supplier<T>, T>;
  /**
   * Returns a request builder for creating a `Supplier` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Supplier`.
   */
  create(entity: Supplier<T>): CreateRequestBuilder<Supplier<T>, T>;
  /**
   * Returns a request builder for retrieving one `Supplier` entity based on its keys.
   * @param id Key property. See {@link Supplier.id}.
   * @returns A request builder for creating requests to retrieve one `Supplier` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Supplier<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Supplier`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Supplier`.
   */
  update(entity: Supplier<T>): UpdateRequestBuilder<Supplier<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Supplier`.
   * @param id Key property. See {@link Supplier.id}.
   * @returns A request builder for creating requests that delete an entity of type `Supplier`.
   */
  delete(id: string): DeleteRequestBuilder<Supplier<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Supplier`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Supplier` by taking the entity as a parameter.
   */
  delete(entity: Supplier<T>): DeleteRequestBuilder<Supplier<T>, T>;
}
