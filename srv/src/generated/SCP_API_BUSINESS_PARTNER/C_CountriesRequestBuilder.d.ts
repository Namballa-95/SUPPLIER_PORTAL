/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import BigNumber from 'bignumber.js';
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
import { C_Countries } from './C_Countries';
/**
 * Request builder class for operations supported on the {@link C_Countries} entity.
 */
export declare class C_CountriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<C_Countries<T>, T> {
  /**
   * Returns a request builder for querying all `C_Countries` entities.
   * @returns A request builder for creating requests to retrieve all `C_Countries` entities.
   */
  getAll(): GetAllRequestBuilder<C_Countries<T>, T>;
  /**
   * Returns a request builder for creating a `C_Countries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `C_Countries`.
   */
  create(entity: C_Countries<T>): CreateRequestBuilder<C_Countries<T>, T>;
  /**
   * Returns a request builder for retrieving one `C_Countries` entity based on its keys.
   * @param busConfignVersion Key property. See {@link C_Countries.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link C_Countries.countryTwoLetterIsoCode}.
   * @returns A request builder for creating requests to retrieve one `C_Countries` entity based on its keys.
   */
  getByKey(
    busConfignVersion: DeserializedType<T, 'Edm.Int64'>,
    countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<C_Countries<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `C_Countries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `C_Countries`.
   */
  update(entity: C_Countries<T>): UpdateRequestBuilder<C_Countries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `C_Countries`.
   * @param busConfignVersion Key property. See {@link C_Countries.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link C_Countries.countryTwoLetterIsoCode}.
   * @returns A request builder for creating requests that delete an entity of type `C_Countries`.
   */
  delete(
    busConfignVersion: BigNumber,
    countryTwoLetterIsoCode: string
  ): DeleteRequestBuilder<C_Countries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `C_Countries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `C_Countries` by taking the entity as a parameter.
   */
  delete(entity: C_Countries<T>): DeleteRequestBuilder<C_Countries<T>, T>;
}
