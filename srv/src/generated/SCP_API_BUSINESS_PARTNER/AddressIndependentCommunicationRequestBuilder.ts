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
import { AddressIndependentCommunication } from './AddressIndependentCommunication';

/**
 * Request builder class for operations supported on the {@link AddressIndependentCommunication} entity.
 */
export class AddressIndependentCommunicationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentCommunication<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentCommunication` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentCommunication` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentCommunication<T>, T> {
    return new GetAllRequestBuilder<AddressIndependentCommunication<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AddressIndependentCommunication` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentCommunication`.
   */
  create(
    entity: AddressIndependentCommunication<T>
  ): CreateRequestBuilder<AddressIndependentCommunication<T>, T> {
    return new CreateRequestBuilder<AddressIndependentCommunication<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressIndependentCommunication` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentCommunication.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentCommunication` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentCommunication<T>, T> {
    return new GetByKeyRequestBuilder<AddressIndependentCommunication<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressIndependentCommunication`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentCommunication`.
   */
  update(
    entity: AddressIndependentCommunication<T>
  ): UpdateRequestBuilder<AddressIndependentCommunication<T>, T> {
    return new UpdateRequestBuilder<AddressIndependentCommunication<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentCommunication`.
   * @param id Key property. See {@link AddressIndependentCommunication.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentCommunication`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<AddressIndependentCommunication<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentCommunication`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentCommunication` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentCommunication<T>
  ): DeleteRequestBuilder<AddressIndependentCommunication<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<AddressIndependentCommunication<T>, T> {
    return new DeleteRequestBuilder<AddressIndependentCommunication<T>, T>(
      this.entityApi,
      idOrEntity instanceof AddressIndependentCommunication
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
