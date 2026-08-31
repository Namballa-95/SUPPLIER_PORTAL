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
import { Subdivisions } from './Subdivisions';
/**
 * Request builder class for operations supported on the {@link Subdivisions} entity.
 */
export declare class SubdivisionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Subdivisions<T>, T> {
  /**
   * Returns a request builder for querying all `Subdivisions` entities.
   * @returns A request builder for creating requests to retrieve all `Subdivisions` entities.
   */
  getAll(): GetAllRequestBuilder<Subdivisions<T>, T>;
  /**
   * Returns a request builder for creating a `Subdivisions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Subdivisions`.
   */
  create(entity: Subdivisions<T>): CreateRequestBuilder<Subdivisions<T>, T>;
  /**
   * Returns a request builder for retrieving one `Subdivisions` entity based on its keys.
   * @param busConfignVersion Key property. See {@link Subdivisions.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link Subdivisions.countryTwoLetterIsoCode}.
   * @param countrySubdivision Key property. See {@link Subdivisions.countrySubdivision}.
   * @returns A request builder for creating requests to retrieve one `Subdivisions` entity based on its keys.
   */
  getByKey(
    busConfignVersion: DeserializedType<T, 'Edm.Int64'>,
    countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>,
    countrySubdivision: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Subdivisions<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Subdivisions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Subdivisions`.
   */
  update(entity: Subdivisions<T>): UpdateRequestBuilder<Subdivisions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Subdivisions`.
   * @param busConfignVersion Key property. See {@link Subdivisions.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link Subdivisions.countryTwoLetterIsoCode}.
   * @param countrySubdivision Key property. See {@link Subdivisions.countrySubdivision}.
   * @returns A request builder for creating requests that delete an entity of type `Subdivisions`.
   */
  delete(
    busConfignVersion: BigNumber,
    countryTwoLetterIsoCode: string,
    countrySubdivision: string
  ): DeleteRequestBuilder<Subdivisions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Subdivisions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Subdivisions` by taking the entity as a parameter.
   */
  delete(entity: Subdivisions<T>): DeleteRequestBuilder<Subdivisions<T>, T>;
}
