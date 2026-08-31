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
import { OrganizationName } from './OrganizationName';

/**
 * Request builder class for operations supported on the {@link OrganizationName} entity.
 */
export class OrganizationNameRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OrganizationName<T>, T> {
  /**
   * Returns a request builder for querying all `OrganizationName` entities.
   * @returns A request builder for creating requests to retrieve all `OrganizationName` entities.
   */
  getAll(): GetAllRequestBuilder<OrganizationName<T>, T> {
    return new GetAllRequestBuilder<OrganizationName<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `OrganizationName` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OrganizationName`.
   */
  create(
    entity: OrganizationName<T>
  ): CreateRequestBuilder<OrganizationName<T>, T> {
    return new CreateRequestBuilder<OrganizationName<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OrganizationName` entity based on its keys.
   * @param id Key property. See {@link OrganizationName.id}.
   * @returns A request builder for creating requests to retrieve one `OrganizationName` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OrganizationName<T>, T> {
    return new GetByKeyRequestBuilder<OrganizationName<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `OrganizationName`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OrganizationName`.
   */
  update(
    entity: OrganizationName<T>
  ): UpdateRequestBuilder<OrganizationName<T>, T> {
    return new UpdateRequestBuilder<OrganizationName<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OrganizationName`.
   * @param id Key property. See {@link OrganizationName.id}.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationName`.
   */
  delete(id: string): DeleteRequestBuilder<OrganizationName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OrganizationName`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OrganizationName` by taking the entity as a parameter.
   */
  delete(
    entity: OrganizationName<T>
  ): DeleteRequestBuilder<OrganizationName<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<OrganizationName<T>, T> {
    return new DeleteRequestBuilder<OrganizationName<T>, T>(
      this.entityApi,
      idOrEntity instanceof OrganizationName ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
