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
import { ContactPerson } from './ContactPerson';

/**
 * Request builder class for operations supported on the {@link ContactPerson} entity.
 */
export class ContactPersonRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContactPerson<T>, T> {
  /**
   * Returns a request builder for querying all `ContactPerson` entities.
   * @returns A request builder for creating requests to retrieve all `ContactPerson` entities.
   */
  getAll(): GetAllRequestBuilder<ContactPerson<T>, T> {
    return new GetAllRequestBuilder<ContactPerson<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContactPerson` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContactPerson`.
   */
  create(entity: ContactPerson<T>): CreateRequestBuilder<ContactPerson<T>, T> {
    return new CreateRequestBuilder<ContactPerson<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ContactPerson` entity based on its keys.
   * @param id Key property. See {@link ContactPerson.id}.
   * @returns A request builder for creating requests to retrieve one `ContactPerson` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ContactPerson<T>, T> {
    return new GetByKeyRequestBuilder<ContactPerson<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ContactPerson`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContactPerson`.
   */
  update(entity: ContactPerson<T>): UpdateRequestBuilder<ContactPerson<T>, T> {
    return new UpdateRequestBuilder<ContactPerson<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContactPerson`.
   * @param id Key property. See {@link ContactPerson.id}.
   * @returns A request builder for creating requests that delete an entity of type `ContactPerson`.
   */
  delete(id: string): DeleteRequestBuilder<ContactPerson<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContactPerson`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContactPerson` by taking the entity as a parameter.
   */
  delete(entity: ContactPerson<T>): DeleteRequestBuilder<ContactPerson<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<ContactPerson<T>, T> {
    return new DeleteRequestBuilder<ContactPerson<T>, T>(
      this.entityApi,
      idOrEntity instanceof ContactPerson ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
