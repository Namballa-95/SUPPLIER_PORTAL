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
import { IndustrySector } from './IndustrySector';
/**
 * Request builder class for operations supported on the {@link IndustrySector} entity.
 */
export declare class IndustrySectorRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IndustrySector<T>, T> {
  /**
   * Returns a request builder for querying all `IndustrySector` entities.
   * @returns A request builder for creating requests to retrieve all `IndustrySector` entities.
   */
  getAll(): GetAllRequestBuilder<IndustrySector<T>, T>;
  /**
   * Returns a request builder for creating a `IndustrySector` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IndustrySector`.
   */
  create(entity: IndustrySector<T>): CreateRequestBuilder<IndustrySector<T>, T>;
  /**
   * Returns a request builder for retrieving one `IndustrySector` entity based on its keys.
   * @param id Key property. See {@link IndustrySector.id}.
   * @returns A request builder for creating requests to retrieve one `IndustrySector` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<IndustrySector<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `IndustrySector`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IndustrySector`.
   */
  update(entity: IndustrySector<T>): UpdateRequestBuilder<IndustrySector<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IndustrySector`.
   * @param id Key property. See {@link IndustrySector.id}.
   * @returns A request builder for creating requests that delete an entity of type `IndustrySector`.
   */
  delete(id: string): DeleteRequestBuilder<IndustrySector<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IndustrySector`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IndustrySector` by taking the entity as a parameter.
   */
  delete(entity: IndustrySector<T>): DeleteRequestBuilder<IndustrySector<T>, T>;
}
