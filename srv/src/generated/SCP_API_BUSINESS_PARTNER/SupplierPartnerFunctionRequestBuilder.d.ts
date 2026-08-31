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
import { SupplierPartnerFunction } from './SupplierPartnerFunction';
/**
 * Request builder class for operations supported on the {@link SupplierPartnerFunction} entity.
 */
export declare class SupplierPartnerFunctionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplierPartnerFunction<T>, T> {
  /**
   * Returns a request builder for querying all `SupplierPartnerFunction` entities.
   * @returns A request builder for creating requests to retrieve all `SupplierPartnerFunction` entities.
   */
  getAll(): GetAllRequestBuilder<SupplierPartnerFunction<T>, T>;
  /**
   * Returns a request builder for creating a `SupplierPartnerFunction` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplierPartnerFunction`.
   */
  create(
    entity: SupplierPartnerFunction<T>
  ): CreateRequestBuilder<SupplierPartnerFunction<T>, T>;
  /**
   * Returns a request builder for retrieving one `SupplierPartnerFunction` entity based on its keys.
   * @param id Key property. See {@link SupplierPartnerFunction.id}.
   * @returns A request builder for creating requests to retrieve one `SupplierPartnerFunction` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<SupplierPartnerFunction<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SupplierPartnerFunction`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplierPartnerFunction`.
   */
  update(
    entity: SupplierPartnerFunction<T>
  ): UpdateRequestBuilder<SupplierPartnerFunction<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierPartnerFunction`.
   * @param id Key property. See {@link SupplierPartnerFunction.id}.
   * @returns A request builder for creating requests that delete an entity of type `SupplierPartnerFunction`.
   */
  delete(id: string): DeleteRequestBuilder<SupplierPartnerFunction<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplierPartnerFunction`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplierPartnerFunction` by taking the entity as a parameter.
   */
  delete(
    entity: SupplierPartnerFunction<T>
  ): DeleteRequestBuilder<SupplierPartnerFunction<T>, T>;
}
