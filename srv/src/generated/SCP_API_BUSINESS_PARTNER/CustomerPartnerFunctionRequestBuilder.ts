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
import { CustomerPartnerFunction } from './CustomerPartnerFunction';

/**
 * Request builder class for operations supported on the {@link CustomerPartnerFunction} entity.
 */
export class CustomerPartnerFunctionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPartnerFunction<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPartnerFunction` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPartnerFunction` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPartnerFunction<T>, T> {
    return new GetAllRequestBuilder<CustomerPartnerFunction<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPartnerFunction` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPartnerFunction`.
   */
  create(
    entity: CustomerPartnerFunction<T>
  ): CreateRequestBuilder<CustomerPartnerFunction<T>, T> {
    return new CreateRequestBuilder<CustomerPartnerFunction<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPartnerFunction` entity based on its keys.
   * @param id Key property. See {@link CustomerPartnerFunction.id}.
   * @returns A request builder for creating requests to retrieve one `CustomerPartnerFunction` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CustomerPartnerFunction<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPartnerFunction<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPartnerFunction`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPartnerFunction`.
   */
  update(
    entity: CustomerPartnerFunction<T>
  ): UpdateRequestBuilder<CustomerPartnerFunction<T>, T> {
    return new UpdateRequestBuilder<CustomerPartnerFunction<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPartnerFunction`.
   * @param id Key property. See {@link CustomerPartnerFunction.id}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPartnerFunction`.
   */
  delete(id: string): DeleteRequestBuilder<CustomerPartnerFunction<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPartnerFunction`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPartnerFunction` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPartnerFunction<T>
  ): DeleteRequestBuilder<CustomerPartnerFunction<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<CustomerPartnerFunction<T>, T> {
    return new DeleteRequestBuilder<CustomerPartnerFunction<T>, T>(
      this.entityApi,
      idOrEntity instanceof CustomerPartnerFunction
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
