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
import { TaxNumber } from './TaxNumber';

/**
 * Request builder class for operations supported on the {@link TaxNumber} entity.
 */
export class TaxNumberRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxNumber<T>, T> {
  /**
   * Returns a request builder for querying all `TaxNumber` entities.
   * @returns A request builder for creating requests to retrieve all `TaxNumber` entities.
   */
  getAll(): GetAllRequestBuilder<TaxNumber<T>, T> {
    return new GetAllRequestBuilder<TaxNumber<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxNumber` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxNumber`.
   */
  create(entity: TaxNumber<T>): CreateRequestBuilder<TaxNumber<T>, T> {
    return new CreateRequestBuilder<TaxNumber<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxNumber` entity based on its keys.
   * @param id Key property. See {@link TaxNumber.id}.
   * @returns A request builder for creating requests to retrieve one `TaxNumber` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<TaxNumber<T>, T> {
    return new GetByKeyRequestBuilder<TaxNumber<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxNumber`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxNumber`.
   */
  update(entity: TaxNumber<T>): UpdateRequestBuilder<TaxNumber<T>, T> {
    return new UpdateRequestBuilder<TaxNumber<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxNumber`.
   * @param id Key property. See {@link TaxNumber.id}.
   * @returns A request builder for creating requests that delete an entity of type `TaxNumber`.
   */
  delete(id: string): DeleteRequestBuilder<TaxNumber<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxNumber`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxNumber` by taking the entity as a parameter.
   */
  delete(entity: TaxNumber<T>): DeleteRequestBuilder<TaxNumber<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<TaxNumber<T>, T> {
    return new DeleteRequestBuilder<TaxNumber<T>, T>(
      this.entityApi,
      idOrEntity instanceof TaxNumber ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
