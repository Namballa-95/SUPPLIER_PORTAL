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
import { Identification } from './Identification';
/**
 * Request builder class for operations supported on the {@link Identification} entity.
 */
export declare class IdentificationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Identification<T>, T> {
  /**
   * Returns a request builder for querying all `Identification` entities.
   * @returns A request builder for creating requests to retrieve all `Identification` entities.
   */
  getAll(): GetAllRequestBuilder<Identification<T>, T>;
  /**
   * Returns a request builder for creating a `Identification` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Identification`.
   */
  create(entity: Identification<T>): CreateRequestBuilder<Identification<T>, T>;
  /**
   * Returns a request builder for retrieving one `Identification` entity based on its keys.
   * @param id Key property. See {@link Identification.id}.
   * @returns A request builder for creating requests to retrieve one `Identification` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Identification<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Identification`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Identification`.
   */
  update(entity: Identification<T>): UpdateRequestBuilder<Identification<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Identification`.
   * @param id Key property. See {@link Identification.id}.
   * @returns A request builder for creating requests that delete an entity of type `Identification`.
   */
  delete(id: string): DeleteRequestBuilder<Identification<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Identification`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Identification` by taking the entity as a parameter.
   */
  delete(entity: Identification<T>): DeleteRequestBuilder<Identification<T>, T>;
}
