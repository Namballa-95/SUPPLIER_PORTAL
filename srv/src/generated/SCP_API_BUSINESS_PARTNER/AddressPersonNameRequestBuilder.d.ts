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
import { AddressPersonName } from './AddressPersonName';
/**
 * Request builder class for operations supported on the {@link AddressPersonName} entity.
 */
export declare class AddressPersonNameRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressPersonName<T>, T> {
  /**
   * Returns a request builder for querying all `AddressPersonName` entities.
   * @returns A request builder for creating requests to retrieve all `AddressPersonName` entities.
   */
  getAll(): GetAllRequestBuilder<AddressPersonName<T>, T>;
  /**
   * Returns a request builder for creating a `AddressPersonName` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressPersonName`.
   */
  create(
    entity: AddressPersonName<T>
  ): CreateRequestBuilder<AddressPersonName<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressPersonName` entity based on its keys.
   * @param id Key property. See {@link AddressPersonName.id}.
   * @returns A request builder for creating requests to retrieve one `AddressPersonName` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressPersonName<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressPersonName`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressPersonName`.
   */
  update(
    entity: AddressPersonName<T>
  ): UpdateRequestBuilder<AddressPersonName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressPersonName`.
   * @param id Key property. See {@link AddressPersonName.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressPersonName`.
   */
  delete(id: string): DeleteRequestBuilder<AddressPersonName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressPersonName`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressPersonName` by taking the entity as a parameter.
   */
  delete(
    entity: AddressPersonName<T>
  ): DeleteRequestBuilder<AddressPersonName<T>, T>;
}
