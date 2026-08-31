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
import { BusinessPartnerRelationship } from './BusinessPartnerRelationship';

/**
 * Request builder class for operations supported on the {@link BusinessPartnerRelationship} entity.
 */
export class BusinessPartnerRelationshipRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPartnerRelationship<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessPartnerRelationship` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerRelationship` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerRelationship<T>, T> {
    return new GetAllRequestBuilder<BusinessPartnerRelationship<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerRelationship` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerRelationship`.
   */
  create(
    entity: BusinessPartnerRelationship<T>
  ): CreateRequestBuilder<BusinessPartnerRelationship<T>, T> {
    return new CreateRequestBuilder<BusinessPartnerRelationship<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessPartnerRelationship` entity based on its keys.
   * @param id Key property. See {@link BusinessPartnerRelationship.id}.
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerRelationship` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<BusinessPartnerRelationship<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPartnerRelationship<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerRelationship`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerRelationship`.
   */
  update(
    entity: BusinessPartnerRelationship<T>
  ): UpdateRequestBuilder<BusinessPartnerRelationship<T>, T> {
    return new UpdateRequestBuilder<BusinessPartnerRelationship<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerRelationship`.
   * @param id Key property. See {@link BusinessPartnerRelationship.id}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerRelationship`.
   */
  delete(id: string): DeleteRequestBuilder<BusinessPartnerRelationship<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerRelationship`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerRelationship` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessPartnerRelationship<T>
  ): DeleteRequestBuilder<BusinessPartnerRelationship<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<BusinessPartnerRelationship<T>, T> {
    return new DeleteRequestBuilder<BusinessPartnerRelationship<T>, T>(
      this.entityApi,
      idOrEntity instanceof BusinessPartnerRelationship
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
