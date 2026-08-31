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
import { AddressIndependentWeb } from './AddressIndependentWeb';

/**
 * Request builder class for operations supported on the {@link AddressIndependentWeb} entity.
 */
export class AddressIndependentWebRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressIndependentWeb<T>, T> {
  /**
   * Returns a request builder for querying all `AddressIndependentWeb` entities.
   * @returns A request builder for creating requests to retrieve all `AddressIndependentWeb` entities.
   */
  getAll(): GetAllRequestBuilder<AddressIndependentWeb<T>, T> {
    return new GetAllRequestBuilder<AddressIndependentWeb<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AddressIndependentWeb` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressIndependentWeb`.
   */
  create(
    entity: AddressIndependentWeb<T>
  ): CreateRequestBuilder<AddressIndependentWeb<T>, T> {
    return new CreateRequestBuilder<AddressIndependentWeb<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressIndependentWeb` entity based on its keys.
   * @param id Key property. See {@link AddressIndependentWeb.id}.
   * @returns A request builder for creating requests to retrieve one `AddressIndependentWeb` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressIndependentWeb<T>, T> {
    return new GetByKeyRequestBuilder<AddressIndependentWeb<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressIndependentWeb`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressIndependentWeb`.
   */
  update(
    entity: AddressIndependentWeb<T>
  ): UpdateRequestBuilder<AddressIndependentWeb<T>, T> {
    return new UpdateRequestBuilder<AddressIndependentWeb<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentWeb`.
   * @param id Key property. See {@link AddressIndependentWeb.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentWeb`.
   */
  delete(id: string): DeleteRequestBuilder<AddressIndependentWeb<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressIndependentWeb`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressIndependentWeb` by taking the entity as a parameter.
   */
  delete(
    entity: AddressIndependentWeb<T>
  ): DeleteRequestBuilder<AddressIndependentWeb<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<AddressIndependentWeb<T>, T> {
    return new DeleteRequestBuilder<AddressIndependentWeb<T>, T>(
      this.entityApi,
      idOrEntity instanceof AddressIndependentWeb
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
