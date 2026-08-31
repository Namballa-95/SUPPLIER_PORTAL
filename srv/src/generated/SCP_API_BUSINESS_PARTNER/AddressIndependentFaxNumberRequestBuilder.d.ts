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
import { AddressIndependentFaxNumber } from './AddressIndependentFaxNumber';
/**
 * Request builder class for operations supported on the {@link AddressIndependentFaxNumber} entity.
 */
export declare class AddressIndependentFaxNumberRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentFaxNumber<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentFaxNumber` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentFaxNumber` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentFaxNumber<T>, T>;
  /**
   * Returns a request builder for creating a `AddressIndependentFaxNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentFaxNumber`.
   */
  create(
    entity: AddressIndependentFaxNumber<T>
  ): CreateRequestBuilder<AddressIndependentFaxNumber<T>, T>;
  /**
   * Returns a request builder for retrieving one `AddressIndependentFaxNumber` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentFaxNumber.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentFaxNumber` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentFaxNumber<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddressIndependentFaxNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentFaxNumber`.
   */
  update(
    entity: AddressIndependentFaxNumber<T>
  ): UpdateRequestBuilder<AddressIndependentFaxNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentFaxNumber`.
   * @param id Key property. See {@link AddressIndependentFaxNumber.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentFaxNumber`.
   */
  delete(id: string): DeleteRequestBuilder<AddressIndependentFaxNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentFaxNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentFaxNumber` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentFaxNumber<T>
  ): DeleteRequestBuilder<AddressIndependentFaxNumber<T>, T>;
}
