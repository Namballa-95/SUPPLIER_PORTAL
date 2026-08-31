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
import { AddressInformation } from './AddressInformation';
/**
 * Request builder class for operations supported on the {@link AddressInformation} entity.
 */
export declare class AddressInformationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressInformation<T>, T> {
  /**
   * Returns a request builder for querying all `AddressInformation` entities.
   * @returns A request builder for creating requests to retrieve all `AddressInformation` entities.
   */
  getAll(): GetAllRequestBuilder<AddressInformation<T>, T>;
  /**
   * Returns a request builder for creating a `AddressInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressInformation`.
   */
  create(
    entity: AddressInformation<T>
  ): CreateRequestBuilder<AddressInformation<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressInformation` entity based on its keys.
   * @param id Key property. See {@link AddressInformation.id}.
   * @returns A request builder for creating requests to retrieve one `AddressInformation` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressInformation<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressInformation`.
   */
  update(
    entity: AddressInformation<T>
  ): UpdateRequestBuilder<AddressInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressInformation`.
   * @param id Key property. See {@link AddressInformation.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressInformation`.
   */
  delete(id: string): DeleteRequestBuilder<AddressInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressInformation` by taking the entity as a parameter.
   */
  delete(
    entity: AddressInformation<T>
  ): DeleteRequestBuilder<AddressInformation<T>, T>;
}
