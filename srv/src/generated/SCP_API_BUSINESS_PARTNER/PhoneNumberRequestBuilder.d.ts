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
import { PhoneNumber } from './PhoneNumber';
/**
 * Request builder class for operations supported on the {@link PhoneNumber} entity.
 */
export declare class PhoneNumberRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PhoneNumber<T>, T> {
  /**
   * Returns a request builder for querying all `PhoneNumber` entities.
   * @returns A request builder for creating requests to retrieve all `PhoneNumber` entities.
   */
  getAll(): GetAllRequestBuilder<PhoneNumber<T>, T>;
  /**
   * Returns a request builder for creating a `PhoneNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PhoneNumber`.
   */
  create(entity: PhoneNumber<T>): CreateRequestBuilder<PhoneNumber<T>, T>;
  /**
   * Returns a request builder for retrieving one `PhoneNumber` entity based on its keys.
   * @param id Key property. See {@link PhoneNumber.id}.
   * @returns A request builder for creating requests to retrieve one `PhoneNumber` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PhoneNumber<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `PhoneNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PhoneNumber`.
   */
  update(entity: PhoneNumber<T>): UpdateRequestBuilder<PhoneNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PhoneNumber`.
   * @param id Key property. See {@link PhoneNumber.id}.
   * @returns A request builder for creating requests that delete an entity of type `PhoneNumber`.
   */
  delete(id: string): DeleteRequestBuilder<PhoneNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PhoneNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PhoneNumber` by taking the entity as a parameter.
   */
  delete(entity: PhoneNumber<T>): DeleteRequestBuilder<PhoneNumber<T>, T>;
}
