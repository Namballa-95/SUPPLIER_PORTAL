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
import { SalesArea } from './SalesArea';
/**
 * Request builder class for operations supported on the {@link SalesArea} entity.
 */
export declare class SalesAreaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesArea<T>, T> {
  /**
   * Returns a request builder for querying all `SalesArea` entities.
   * @returns A request builder for creating requests to retrieve all `SalesArea` entities.
   */
  getAll(): GetAllRequestBuilder<SalesArea<T>, T>;
  /**
   * Returns a request builder for creating a `SalesArea` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesArea`.
   */
  create(entity: SalesArea<T>): CreateRequestBuilder<SalesArea<T>, T>;
  /**
   * Returns a request builder for retrieving one `SalesArea` entity based on its keys.
   * @param id Key property. See {@link SalesArea.id}.
   * @returns A request builder for creating requests to retrieve one `SalesArea` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesArea<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SalesArea`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesArea`.
   */
  update(entity: SalesArea<T>): UpdateRequestBuilder<SalesArea<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesArea`.
   * @param id Key property. See {@link SalesArea.id}.
   * @returns A request builder for creating requests that delete an entity of type `SalesArea`.
   */
  delete(id: string): DeleteRequestBuilder<SalesArea<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesArea`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesArea` by taking the entity as a parameter.
   */
  delete(entity: SalesArea<T>): DeleteRequestBuilder<SalesArea<T>, T>;
}
