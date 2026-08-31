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
import { Address } from './Address';
/**
 * Request builder class for operations supported on the {@link Address} entity.
 */
export declare class AddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Address<T>, T> {
  /**
   * Returns a request builder for querying all `Address` entities.
   * @returns A request builder for creating requests to retrieve all `Address` entities.
   */
  getAll(): GetAllRequestBuilder<Address<T>, T>;
  /**
   * Returns a request builder for creating a `Address` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Address`.
   */
  create(entity: Address<T>): CreateRequestBuilder<Address<T>, T>;
  /**
   * Returns a request builder for retrieving one `Address` entity based on its keys.
   * @param id Key property. See {@link Address.id}.
   * @returns A request builder for creating requests to retrieve one `Address` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Address<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Address`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Address`.
   */
  update(entity: Address<T>): UpdateRequestBuilder<Address<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Address`.
   * @param id Key property. See {@link Address.id}.
   * @returns A request builder for creating requests that delete an entity of type `Address`.
   */
  delete(id: string): DeleteRequestBuilder<Address<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Address`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Address` by taking the entity as a parameter.
   */
  delete(entity: Address<T>): DeleteRequestBuilder<Address<T>, T>;
}
