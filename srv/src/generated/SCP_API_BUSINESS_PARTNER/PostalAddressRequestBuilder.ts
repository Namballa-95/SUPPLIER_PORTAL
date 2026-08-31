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
import { PostalAddress } from './PostalAddress';

/**
 * Request builder class for operations supported on the {@link PostalAddress} entity.
 */
export class PostalAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostalAddress<T>, T> {
  /**
   * Returns a request builder for querying all `PostalAddress` entities.
   * @returns A request builder for creating requests to retrieve all `PostalAddress` entities.
   */
  getAll(): GetAllRequestBuilder<PostalAddress<T>, T> {
    return new GetAllRequestBuilder<PostalAddress<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PostalAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostalAddress`.
   */
  create(entity: PostalAddress<T>): CreateRequestBuilder<PostalAddress<T>, T> {
    return new CreateRequestBuilder<PostalAddress<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostalAddress` entity based on its keys.
   * @param id Key property. See {@link PostalAddress.id}.
   * @returns A request builder for creating requests to retrieve one `PostalAddress` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<PostalAddress<T>, T> {
    return new GetByKeyRequestBuilder<PostalAddress<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PostalAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostalAddress`.
   */
  update(entity: PostalAddress<T>): UpdateRequestBuilder<PostalAddress<T>, T> {
    return new UpdateRequestBuilder<PostalAddress<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostalAddress`.
   * @param id Key property. See {@link PostalAddress.id}.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddress`.
   */
  delete(id: string): DeleteRequestBuilder<PostalAddress<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostalAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostalAddress` by taking the entity as a parameter.
   */
  delete(entity: PostalAddress<T>): DeleteRequestBuilder<PostalAddress<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<PostalAddress<T>, T> {
    return new DeleteRequestBuilder<PostalAddress<T>, T>(
      this.entityApi,
      idOrEntity instanceof PostalAddress ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
