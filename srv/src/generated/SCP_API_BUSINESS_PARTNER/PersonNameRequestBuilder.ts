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
import { PersonName } from './PersonName';

/**
 * Request builder class for operations supported on the {@link PersonName} entity.
 */
export class PersonNameRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonName<T>, T> {
  /**
   * Returns a request builder for querying all `PersonName` entities.
   * @returns A request builder for creating requests to retrieve all `PersonName` entities.
   */
  getAll(): GetAllRequestBuilder<PersonName<T>, T> {
    return new GetAllRequestBuilder<PersonName<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonName` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonName`.
   */
  create(entity: PersonName<T>): CreateRequestBuilder<PersonName<T>, T> {
    return new CreateRequestBuilder<PersonName<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PersonName` entity based on its keys.
   * @param id Key property. See {@link PersonName.id}.
   * @returns A request builder for creating requests to retrieve one `PersonName` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PersonName<T>, T> {
    return new GetByKeyRequestBuilder<PersonName<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonName`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonName`.
   */
  update(entity: PersonName<T>): UpdateRequestBuilder<PersonName<T>, T> {
    return new UpdateRequestBuilder<PersonName<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonName`.
   * @param id Key property. See {@link PersonName.id}.
   * @returns A request builder for creating requests that delete an entity of type `PersonName`.
   */
  delete(id: string): DeleteRequestBuilder<PersonName<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonName`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonName` by taking the entity as a parameter.
   */
  delete(entity: PersonName<T>): DeleteRequestBuilder<PersonName<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<PersonName<T>, T> {
    return new DeleteRequestBuilder<PersonName<T>, T>(
      this.entityApi,
      idOrEntity instanceof PersonName ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
