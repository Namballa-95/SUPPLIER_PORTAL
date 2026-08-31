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
import { WorkPlaceAddressInformation } from './WorkPlaceAddressInformation';

/**
 * Request builder class for operations supported on the {@link WorkPlaceAddressInformation} entity.
 */
export class WorkPlaceAddressInformationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkPlaceAddressInformation<T>, T> {
  /**
   * Returns a request builder for querying all `WorkPlaceAddressInformation` entities.
   * @returns A request builder for creating requests to retrieve all `WorkPlaceAddressInformation` entities.
   */
  getAll(): GetAllRequestBuilder<WorkPlaceAddressInformation<T>, T> {
    return new GetAllRequestBuilder<WorkPlaceAddressInformation<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkPlaceAddressInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkPlaceAddressInformation`.
   */
  create(
    entity: WorkPlaceAddressInformation<T>
  ): CreateRequestBuilder<WorkPlaceAddressInformation<T>, T> {
    return new CreateRequestBuilder<WorkPlaceAddressInformation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkPlaceAddressInformation` entity based on its keys.
   * @param id Key property. See {@link WorkPlaceAddressInformation.id}.
   * @returns A request builder for creating requests to retrieve one `WorkPlaceAddressInformation` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<WorkPlaceAddressInformation<T>, T> {
    return new GetByKeyRequestBuilder<WorkPlaceAddressInformation<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkPlaceAddressInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkPlaceAddressInformation`.
   */
  update(
    entity: WorkPlaceAddressInformation<T>
  ): UpdateRequestBuilder<WorkPlaceAddressInformation<T>, T> {
    return new UpdateRequestBuilder<WorkPlaceAddressInformation<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkPlaceAddressInformation`.
   * @param id Key property. See {@link WorkPlaceAddressInformation.id}.
   * @returns A request builder for creating requests that delete an entity of type `WorkPlaceAddressInformation`.
   */
  delete(id: string): DeleteRequestBuilder<WorkPlaceAddressInformation<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkPlaceAddressInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkPlaceAddressInformation` by taking the entity as a parameter.
   */
  delete(
    entity: WorkPlaceAddressInformation<T>
  ): DeleteRequestBuilder<WorkPlaceAddressInformation<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<WorkPlaceAddressInformation<T>, T> {
    return new DeleteRequestBuilder<WorkPlaceAddressInformation<T>, T>(
      this.entityApi,
      idOrEntity instanceof WorkPlaceAddressInformation
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
