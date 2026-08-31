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
import { SalesTax } from './SalesTax';

/**
 * Request builder class for operations supported on the {@link SalesTax} entity.
 */
export class SalesTaxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTax<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTax` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTax` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTax<T>, T> {
    return new GetAllRequestBuilder<SalesTax<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTax`.
   */
  create(entity: SalesTax<T>): CreateRequestBuilder<SalesTax<T>, T> {
    return new CreateRequestBuilder<SalesTax<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesTax` entity based on its keys.
   * @param id Key property. See {@link SalesTax.id}.
   * @returns A request builder for creating requests to retrieve one `SalesTax` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SalesTax<T>, T> {
    return new GetByKeyRequestBuilder<SalesTax<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTax`.
   */
  update(entity: SalesTax<T>): UpdateRequestBuilder<SalesTax<T>, T> {
    return new UpdateRequestBuilder<SalesTax<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTax`.
   * @param id Key property. See {@link SalesTax.id}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTax`.
   */
  delete(id: string): DeleteRequestBuilder<SalesTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTax` by taking the entity as a parameter.
   */
  delete(entity: SalesTax<T>): DeleteRequestBuilder<SalesTax<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<SalesTax<T>, T> {
    return new DeleteRequestBuilder<SalesTax<T>, T>(
      this.entityApi,
      idOrEntity instanceof SalesTax ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
