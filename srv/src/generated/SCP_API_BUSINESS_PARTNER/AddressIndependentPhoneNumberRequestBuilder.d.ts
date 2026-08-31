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
import { AddressIndependentPhoneNumber } from './AddressIndependentPhoneNumber';
/**
 * Request builder class for operations supported on the {@link AddressIndependentPhoneNumber} entity.
 */
export declare class AddressIndependentPhoneNumberRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentPhoneNumber<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentPhoneNumber` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentPhoneNumber` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentPhoneNumber<T>, T>;
  /**
   * Returns a request builder for creating a `AddressIndependentPhoneNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentPhoneNumber`.
   */
  create(
    entity: AddressIndependentPhoneNumber<T>
  ): CreateRequestBuilder<AddressIndependentPhoneNumber<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressIndependentPhoneNumber` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentPhoneNumber.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentPhoneNumber` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentPhoneNumber<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressIndependentPhoneNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentPhoneNumber`.
   */
  update(
    entity: AddressIndependentPhoneNumber<T>
  ): UpdateRequestBuilder<AddressIndependentPhoneNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentPhoneNumber`.
   * @param id Key property. See {@link AddressIndependentPhoneNumber.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentPhoneNumber`.
   */
  delete(id: string): DeleteRequestBuilder<AddressIndependentPhoneNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentPhoneNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentPhoneNumber` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentPhoneNumber<T>
  ): DeleteRequestBuilder<AddressIndependentPhoneNumber<T>, T>;
}
