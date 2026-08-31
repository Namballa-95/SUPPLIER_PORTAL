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
import { AddressIndependentEmailAddressDummy } from './AddressIndependentEmailAddressDummy';
/**
 * Request builder class for operations supported on the {@link AddressIndependentEmailAddressDummy} entity.
 */
export declare class AddressIndependentEmailAddressDummyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentEmailAddressDummy<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentEmailAddressDummy` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentEmailAddressDummy` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentEmailAddressDummy<T>, T>;
  /**
   * Returns a request builder for creating a `AddressIndependentEmailAddressDummy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentEmailAddressDummy`.
   */
  create(
    entity: AddressIndependentEmailAddressDummy<T>
  ): CreateRequestBuilder<AddressIndependentEmailAddressDummy<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressIndependentEmailAddressDummy` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentEmailAddressDummy.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentEmailAddressDummy` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentEmailAddressDummy<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressIndependentEmailAddressDummy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentEmailAddressDummy`.
   */
  update(
    entity: AddressIndependentEmailAddressDummy<T>
  ): UpdateRequestBuilder<AddressIndependentEmailAddressDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentEmailAddressDummy`.
   * @param id Key property. See {@link AddressIndependentEmailAddressDummy.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentEmailAddressDummy`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<AddressIndependentEmailAddressDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentEmailAddressDummy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentEmailAddressDummy` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentEmailAddressDummy<T>
  ): DeleteRequestBuilder<AddressIndependentEmailAddressDummy<T>, T>;
}
