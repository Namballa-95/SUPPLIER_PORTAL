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
import { SupplierCompany } from './SupplierCompany';
/**
 * Request builder class for operations supported on the {@link SupplierCompany} entity.
 */
export declare class SupplierCompanyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplierCompany<T>, T> {
  /**
   * Returns a request builder for querying all `SupplierCompany` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierCompany` entities.
   */
  getAll(): GetAllRequestBuilder<SupplierCompany<T>, T>;
  /**
   * Returns a request builder for creating a `SupplierCompany` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierCompany`.
   */
  create(
    entity: SupplierCompany<T>
  ): CreateRequestBuilder<SupplierCompany<T>, T>;
  /**
   * Returns a request builder for retrieving one `SupplierCompany` entity based on its keys.
   * @param id Key property. See {@link SupplierCompany.id}.
   * @returns A request builder for creating requests to retrieve one `SupplierCompany` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SupplierCompany<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SupplierCompany`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierCompany`.
   */
  update(
    entity: SupplierCompany<T>
  ): UpdateRequestBuilder<SupplierCompany<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierCompany`.
   * @param id Key property. See {@link SupplierCompany.id}.
   * @returns A request builder for creating requests that delete an entity of type `SupplierCompany`.
   */
  delete(id: string): DeleteRequestBuilder<SupplierCompany<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierCompany`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierCompany` by taking the entity as a parameter.
   */
  delete(
    entity: SupplierCompany<T>
  ): DeleteRequestBuilder<SupplierCompany<T>, T>;
}
