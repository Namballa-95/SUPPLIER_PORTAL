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
import { CommunicationDataText } from './CommunicationDataText';
/**
 * Request builder class for operations supported on the {@link CommunicationDataText} entity.
 */
export declare class CommunicationDataTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CommunicationDataText<T>, T> {
  /**
   * Returns a request builder for querying all `CommunicationDataText` entities.
   * @returns A request builder for creating requests to retrieve all `CommunicationDataText` entities.
   */
  getAll(): GetAllRequestBuilder<CommunicationDataText<T>, T>;
  /**
   * Returns a request builder for creating a `CommunicationDataText` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CommunicationDataText`.
   */
  create(
    entity: CommunicationDataText<T>
  ): CreateRequestBuilder<CommunicationDataText<T>, T>;
  /**
   * Returns a request builder for retrieving one `CommunicationDataText` entity based on its keys.
   * @param id Key property. See {@link CommunicationDataText.id}.
   * @returns A request builder for creating requests to retrieve one `CommunicationDataText` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CommunicationDataText<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `CommunicationDataText`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CommunicationDataText`.
   */
  update(
    entity: CommunicationDataText<T>
  ): UpdateRequestBuilder<CommunicationDataText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CommunicationDataText`.
   * @param id Key property. See {@link CommunicationDataText.id}.
   * @returns A request builder for creating requests that delete an entity of type `CommunicationDataText`.
   */
  delete(id: string): DeleteRequestBuilder<CommunicationDataText<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CommunicationDataText`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CommunicationDataText` by taking the entity as a parameter.
   */
  delete(
    entity: CommunicationDataText<T>
  ): DeleteRequestBuilder<CommunicationDataText<T>, T>;
}
