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
import { AddressIndependentFaxNumberDummy } from './AddressIndependentFaxNumberDummy';

/**
 * Request builder class for operations supported on the {@link AddressIndependentFaxNumberDummy} entity.
 */
export class AddressIndependentFaxNumberDummyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentFaxNumberDummy<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentFaxNumberDummy` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentFaxNumberDummy` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentFaxNumberDummy<T>, T> {
    return new GetAllRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AddressIndependentFaxNumberDummy` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentFaxNumberDummy`.
   */
  create(
    entity: AddressIndependentFaxNumberDummy<T>
  ): CreateRequestBuilder<AddressIndependentFaxNumberDummy<T>, T> {
    return new CreateRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressIndependentFaxNumberDummy` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentFaxNumberDummy.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentFaxNumberDummy` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentFaxNumberDummy<T>, T> {
    return new GetByKeyRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressIndependentFaxNumberDummy`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentFaxNumberDummy`.
   */
  update(
    entity: AddressIndependentFaxNumberDummy<T>
  ): UpdateRequestBuilder<AddressIndependentFaxNumberDummy<T>, T> {
    return new UpdateRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentFaxNumberDummy`.
   * @param id Key property. See {@link AddressIndependentFaxNumberDummy.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentFaxNumberDummy`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentFaxNumberDummy`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentFaxNumberDummy` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentFaxNumberDummy<T>
  ): DeleteRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<AddressIndependentFaxNumberDummy<T>, T> {
    return new DeleteRequestBuilder<AddressIndependentFaxNumberDummy<T>, T>(
      this.entityApi,
      idOrEntity instanceof AddressIndependentFaxNumberDummy
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
