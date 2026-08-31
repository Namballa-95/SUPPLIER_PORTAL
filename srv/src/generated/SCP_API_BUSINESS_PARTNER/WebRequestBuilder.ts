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
import { Web } from './Web';

/**
 * Request builder class for operations supported on the {@link Web} entity.
 */
export class WebRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Web<T>, T> {
  /**
   * Returns a request builder for querying all `Web` entities.
   * @returns A request builder for creating requests to retrieve all `Web` entities.
   */
  getAll(): GetAllRequestBuilder<Web<T>, T> {
    return new GetAllRequestBuilder<Web<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Web` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Web`.
   */
  create(entity: Web<T>): CreateRequestBuilder<Web<T>, T> {
    return new CreateRequestBuilder<Web<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Web` entity based on its keys.
   * @param id Key property. See {@link Web.id}.
   * @returns A request builder for creating requests to retrieve one `Web` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Web<T>, T> {
    return new GetByKeyRequestBuilder<Web<T>, T>(this.entityApi, { Id: id });
  }

  /**
   * Returns a request builder for updating an entity of type `Web`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Web`.
   */
  update(entity: Web<T>): UpdateRequestBuilder<Web<T>, T> {
    return new UpdateRequestBuilder<Web<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Web`.
   * @param id Key property. See {@link Web.id}.
   * @returns A request builder for creating requests that delete an entity of type `Web`.
   */
  delete(id: string): DeleteRequestBuilder<Web<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Web`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Web` by taking the entity as a parameter.
   */
  delete(entity: Web<T>): DeleteRequestBuilder<Web<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Web<T>, T> {
    return new DeleteRequestBuilder<Web<T>, T>(
      this.entityApi,
      idOrEntity instanceof Web ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
