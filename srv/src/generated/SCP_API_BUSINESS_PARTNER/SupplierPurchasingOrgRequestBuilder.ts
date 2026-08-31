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
import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';

/**
 * Request builder class for operations supported on the {@link SupplierPurchasingOrg} entity.
 */
export class SupplierPurchasingOrgRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplierPurchasingOrg<T>, T> {
  /**
   * Returns a request builder for querying all `SupplierPurchasingOrg` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierPurchasingOrg` entities.
   */
  getAll(): GetAllRequestBuilder<SupplierPurchasingOrg<T>, T> {
    return new GetAllRequestBuilder<SupplierPurchasingOrg<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SupplierPurchasingOrg` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierPurchasingOrg`.
   */
  create(
    entity: SupplierPurchasingOrg<T>
  ): CreateRequestBuilder<SupplierPurchasingOrg<T>, T> {
    return new CreateRequestBuilder<SupplierPurchasingOrg<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SupplierPurchasingOrg` entity based on its keys.
   * @param id Key property. See {@link SupplierPurchasingOrg.id}.
   * @returns A request builder for creating requests to retrieve one `SupplierPurchasingOrg` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SupplierPurchasingOrg<T>, T> {
    return new GetByKeyRequestBuilder<SupplierPurchasingOrg<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SupplierPurchasingOrg`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierPurchasingOrg`.
   */
  update(
    entity: SupplierPurchasingOrg<T>
  ): UpdateRequestBuilder<SupplierPurchasingOrg<T>, T> {
    return new UpdateRequestBuilder<SupplierPurchasingOrg<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplierPurchasingOrg`.
   * @param id Key property. See {@link SupplierPurchasingOrg.id}.
   * @returns A request builder for creating requests that delete an entity of type `SupplierPurchasingOrg`.
   */
  delete(id: string): DeleteRequestBuilder<SupplierPurchasingOrg<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierPurchasingOrg`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierPurchasingOrg` by taking the entity as a parameter.
   */
  delete(
    entity: SupplierPurchasingOrg<T>
  ): DeleteRequestBuilder<SupplierPurchasingOrg<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<SupplierPurchasingOrg<T>, T> {
    return new DeleteRequestBuilder<SupplierPurchasingOrg<T>, T>(
      this.entityApi,
      idOrEntity instanceof SupplierPurchasingOrg
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
