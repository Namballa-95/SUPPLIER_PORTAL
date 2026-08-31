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
import { AddressIndependentWebDummy } from './AddressIndependentWebDummy';
/**
 * Request builder class for operations supported on the {@link AddressIndependentWebDummy} entity.
 */
export declare class AddressIndependentWebDummyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentWebDummy<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentWebDummy` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentWebDummy` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentWebDummy<T>, T>;
  /**
   * Returns a request builder for creating a `AddressIndependentWebDummy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentWebDummy`.
   */
  create(
    entity: AddressIndependentWebDummy<T>
  ): CreateRequestBuilder<AddressIndependentWebDummy<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressIndependentWebDummy` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentWebDummy.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentWebDummy` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentWebDummy<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressIndependentWebDummy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentWebDummy`.
   */
  update(
    entity: AddressIndependentWebDummy<T>
  ): UpdateRequestBuilder<AddressIndependentWebDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentWebDummy`.
   * @param id Key property. See {@link AddressIndependentWebDummy.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentWebDummy`.
   */
  delete(id: string): DeleteRequestBuilder<AddressIndependentWebDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentWebDummy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentWebDummy` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentWebDummy<T>
  ): DeleteRequestBuilder<AddressIndependentWebDummy<T>, T>;
}
