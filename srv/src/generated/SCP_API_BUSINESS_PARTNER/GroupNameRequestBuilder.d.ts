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
import { GroupName } from './GroupName';
/**
 * Request builder class for operations supported on the {@link GroupName} entity.
 */
export declare class GroupNameRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GroupName<T>, T> {
  /**
   * Returns a request builder for querying all `GroupName` entities.
   * @returns A request builder for creating requests to retrieve all `GroupName` entities.
   */
  getAll(): GetAllRequestBuilder<GroupName<T>, T>;
  /**
   * Returns a request builder for creating a `GroupName` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GroupName`.
   */
  create(entity: GroupName<T>): CreateRequestBuilder<GroupName<T>, T>;
  /**
   * Returns a request builder for retrieving one `GroupName` entity based on its keys.
   * @param id Key property. See {@link GroupName.id}.
   * @returns A request builder for creating requests to retrieve one `GroupName` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<GroupName<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `GroupName`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GroupName`.
   */
  update(entity: GroupName<T>): UpdateRequestBuilder<GroupName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GroupName`.
   * @param id Key property. See {@link GroupName.id}.
   * @returns A request builder for creating requests that delete an entity of type `GroupName`.
   */
  delete(id: string): DeleteRequestBuilder<GroupName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GroupName`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GroupName` by taking the entity as a parameter.
   */
  delete(entity: GroupName<T>): DeleteRequestBuilder<GroupName<T>, T>;
}
