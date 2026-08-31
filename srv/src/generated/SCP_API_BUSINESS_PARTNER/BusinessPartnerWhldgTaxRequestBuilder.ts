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
import { BusinessPartnerWhldgTax } from './BusinessPartnerWhldgTax';

/**
 * Request builder class for operations supported on the {@link BusinessPartnerWhldgTax} entity.
 */
export class BusinessPartnerWhldgTaxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPartnerWhldgTax<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessPartnerWhldgTax` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerWhldgTax` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerWhldgTax<T>, T> {
    return new GetAllRequestBuilder<BusinessPartnerWhldgTax<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerWhldgTax` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerWhldgTax`.
   */
  create(
    entity: BusinessPartnerWhldgTax<T>
  ): CreateRequestBuilder<BusinessPartnerWhldgTax<T>, T> {
    return new CreateRequestBuilder<BusinessPartnerWhldgTax<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessPartnerWhldgTax` entity based on its keys.
   * @param id Key property. See {@link BusinessPartnerWhldgTax.id}.
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerWhldgTax` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<BusinessPartnerWhldgTax<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPartnerWhldgTax<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerWhldgTax`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerWhldgTax`.
   */
  update(
    entity: BusinessPartnerWhldgTax<T>
  ): UpdateRequestBuilder<BusinessPartnerWhldgTax<T>, T> {
    return new UpdateRequestBuilder<BusinessPartnerWhldgTax<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerWhldgTax`.
   * @param id Key property. See {@link BusinessPartnerWhldgTax.id}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerWhldgTax`.
   */
  delete(id: string): DeleteRequestBuilder<BusinessPartnerWhldgTax<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerWhldgTax`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerWhldgTax` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessPartnerWhldgTax<T>
  ): DeleteRequestBuilder<BusinessPartnerWhldgTax<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<BusinessPartnerWhldgTax<T>, T> {
    return new DeleteRequestBuilder<BusinessPartnerWhldgTax<T>, T>(
      this.entityApi,
      idOrEntity instanceof BusinessPartnerWhldgTax
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
