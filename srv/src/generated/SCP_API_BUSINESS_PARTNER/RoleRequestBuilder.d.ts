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
import { Role } from './Role';
/**
 * Request builder class for operations supported on the {@link Role} entity.
 */
export declare class RoleRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Role<T>, T> {
  /**
   * Returns a request builder for querying all `Role` entities.
   * @returns A request builder for creating requests to retrieve all `Role` entities.
   */
  getAll(): GetAllRequestBuilder<Role<T>, T>;
  /**
   * Returns a request builder for creating a `Role` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Role`.
   */
  create(entity: Role<T>): CreateRequestBuilder<Role<T>, T>;
  /**
   * Returns a request builder for retrieving one `Role` entity based on its keys.
   * @param id Key property. See {@link Role.id}.
   * @returns A request builder for creating requests to retrieve one `Role` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Role<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Role`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Role`.
   */
  update(entity: Role<T>): UpdateRequestBuilder<Role<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Role`.
   * @param id Key property. See {@link Role.id}.
   * @returns A request builder for creating requests that delete an entity of type `Role`.
   */
  delete(id: string): DeleteRequestBuilder<Role<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Role`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Role` by taking the entity as a parameter.
   */
  delete(entity: Role<T>): DeleteRequestBuilder<Role<T>, T>;
}
