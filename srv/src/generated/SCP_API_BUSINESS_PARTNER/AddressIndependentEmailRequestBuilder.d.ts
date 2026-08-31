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
import { AddressIndependentEmail } from './AddressIndependentEmail';
/**
 * Request builder class for operations supported on the {@link AddressIndependentEmail} entity.
 */
export declare class AddressIndependentEmailRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentEmail<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentEmail` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentEmail` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentEmail<T>, T>;
  /**
   * Returns a request builder for creating a `AddressIndependentEmail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentEmail`.
   */
  create(
    entity: AddressIndependentEmail<T>
  ): CreateRequestBuilder<AddressIndependentEmail<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressIndependentEmail` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentEmail.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentEmail` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentEmail<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressIndependentEmail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentEmail`.
   */
  update(
    entity: AddressIndependentEmail<T>
  ): UpdateRequestBuilder<AddressIndependentEmail<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentEmail`.
   * @param id Key property. See {@link AddressIndependentEmail.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentEmail`.
   */
  delete(id: string): DeleteRequestBuilder<AddressIndependentEmail<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentEmail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentEmail` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentEmail<T>
  ): DeleteRequestBuilder<AddressIndependentEmail<T>, T>;
}
