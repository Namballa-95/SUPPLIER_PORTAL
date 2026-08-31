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
import { Workplace } from './Workplace';
/**
 * Request builder class for operations supported on the {@link Workplace} entity.
 */
export declare class WorkplaceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Workplace<T>, T> {
  /**
   * Returns a request builder for querying all `Workplace` entities.
   * @returns A request builder for creating requests to retrieve all `Workplace` entities.
   */
  getAll(): GetAllRequestBuilder<Workplace<T>, T>;
  /**
   * Returns a request builder for creating a `Workplace` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Workplace`.
   */
  create(entity: Workplace<T>): CreateRequestBuilder<Workplace<T>, T>;
  /**
   * Returns a request builder for retrieving one `Workplace` entity based on its keys.
   * @param id Key property. See {@link Workplace.id}.
   * @returns A request builder for creating requests to retrieve one `Workplace` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Workplace<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Workplace`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Workplace`.
   */
  update(entity: Workplace<T>): UpdateRequestBuilder<Workplace<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Workplace`.
   * @param id Key property. See {@link Workplace.id}.
   * @returns A request builder for creating requests that delete an entity of type `Workplace`.
   */
  delete(id: string): DeleteRequestBuilder<Workplace<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Workplace`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Workplace` by taking the entity as a parameter.
   */
  delete(entity: Workplace<T>): DeleteRequestBuilder<Workplace<T>, T>;
}
