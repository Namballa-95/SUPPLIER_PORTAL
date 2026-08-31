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
import { AddressUsage } from './AddressUsage';

/**
 * Request builder class for operations supported on the {@link AddressUsage} entity.
 */
export class AddressUsageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddressUsage<T>, T> {
  /**
   * Returns a request builder for querying all `AddressUsage` entities.
   * @returns A request builder for creating requests to retrieve all `AddressUsage` entities.
   */
  getAll(): GetAllRequestBuilder<AddressUsage<T>, T> {
    return new GetAllRequestBuilder<AddressUsage<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AddressUsage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddressUsage`.
   */
  create(entity: AddressUsage<T>): CreateRequestBuilder<AddressUsage<T>, T> {
    return new CreateRequestBuilder<AddressUsage<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AddressUsage` entity based on its keys.
   * @param id Key property. See {@link AddressUsage.id}.
   * @returns A request builder for creating requests to retrieve one `AddressUsage` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<AddressUsage<T>, T> {
    return new GetByKeyRequestBuilder<AddressUsage<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AddressUsage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddressUsage`.
   */
  update(entity: AddressUsage<T>): UpdateRequestBuilder<AddressUsage<T>, T> {
    return new UpdateRequestBuilder<AddressUsage<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AddressUsage`.
   * @param id Key property. See {@link AddressUsage.id}.
   * @returns A request builder for creating requests that delete an entity of type `AddressUsage`.
   */
  delete(id: string): DeleteRequestBuilder<AddressUsage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddressUsage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddressUsage` by taking the entity as a parameter.
   */
  delete(entity: AddressUsage<T>): DeleteRequestBuilder<AddressUsage<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<AddressUsage<T>, T> {
    return new DeleteRequestBuilder<AddressUsage<T>, T>(
      this.entityApi,
      idOrEntity instanceof AddressUsage ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
