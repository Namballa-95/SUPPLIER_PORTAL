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
import { AddressOrganizationName } from './AddressOrganizationName';

/**
 * Request builder class for operations supported on the {@link AddressOrganizationName} entity.
 */
export class AddressOrganizationNameRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressOrganizationName<T>, T> {
  /**
   * Returns a request builder for querying all `AddressOrganizationName` entities.
   * @returns A request builder for creating requests to retrieve all `AddressOrganizationName` entities.
   */
  getAll(): GetAllRequestBuilder<AddressOrganizationName<T>, T> {
    return new GetAllRequestBuilder<AddressOrganizationName<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AddressOrganizationName` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressOrganizationName`.
   */
  create(
    entity: AddressOrganizationName<T>
  ): CreateRequestBuilder<AddressOrganizationName<T>, T> {
    return new CreateRequestBuilder<AddressOrganizationName<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AddressOrganizationName` entity based on its keys.
   * @param id Key property. See {@link AddressOrganizationName.id}.
   * @returns A request builder for creating requests to retrieve one `AddressOrganizationName` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressOrganizationName<T>, T> {
    return new GetByKeyRequestBuilder<AddressOrganizationName<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AddressOrganizationName`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressOrganizationName`.
   */
  update(
    entity: AddressOrganizationName<T>
  ): UpdateRequestBuilder<AddressOrganizationName<T>, T> {
    return new UpdateRequestBuilder<AddressOrganizationName<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressOrganizationName`.
   * @param id Key property. See {@link AddressOrganizationName.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressOrganizationName`.
   */
  delete(id: string): DeleteRequestBuilder<AddressOrganizationName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressOrganizationName`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressOrganizationName` by taking the entity as a parameter.
   */
  delete(
    entity: AddressOrganizationName<T>
  ): DeleteRequestBuilder<AddressOrganizationName<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<AddressOrganizationName<T>, T> {
    return new DeleteRequestBuilder<AddressOrganizationName<T>, T>(
      this.entityApi,
      idOrEntity instanceof AddressOrganizationName
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
