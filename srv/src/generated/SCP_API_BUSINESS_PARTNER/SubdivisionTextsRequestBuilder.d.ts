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
import { SubdivisionTexts } from './SubdivisionTexts';
/**
 * Request builder class for operations supported on the {@link SubdivisionTexts} entity.
 */
export declare class SubdivisionTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubdivisionTexts<T>, T> {
  /**
   * Returns a request builder for querying all `SubdivisionTexts` entities.
   * @returns A request builder for creating requests to retrieve all `SubdivisionTexts` entities.
   */
  getAll(): GetAllRequestBuilder<SubdivisionTexts<T>, T>;
  /**
   * Returns a request builder for creating a `SubdivisionTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubdivisionTexts`.
   */
  create(
    entity: SubdivisionTexts<T>
  ): CreateRequestBuilder<SubdivisionTexts<T>, T>;
  /**
   * Returns a request builder for retrieving one `SubdivisionTexts` entity based on its keys.
   * @param busConfignVersion Key property. See {@link SubdivisionTexts.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link SubdivisionTexts.countryTwoLetterIsoCode}.
   * @param countrySubdivision Key property. See {@link SubdivisionTexts.countrySubdivision}.
   * @param languageTwoLetterIsoCode Key property. See {@link SubdivisionTexts.languageTwoLetterIsoCode}.
   * @returns A request builder for creating requests to retrieve one `SubdivisionTexts` entity based on its keys.
   */
  getByKey(
    busConfignVersion: DeserializedType<T, 'Edm.Int64'>,
    countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>,
    countrySubdivision: DeserializedType<T, 'Edm.String'>,
    languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubdivisionTexts<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `SubdivisionTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubdivisionTexts`.
   */
  update(
    entity: SubdivisionTexts<T>
  ): UpdateRequestBuilder<SubdivisionTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubdivisionTexts`.
   * @param busConfignVersion Key property. See {@link SubdivisionTexts.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link SubdivisionTexts.countryTwoLetterIsoCode}.
   * @param countrySubdivision Key property. See {@link SubdivisionTexts.countrySubdivision}.
   * @param languageTwoLetterIsoCode Key property. See {@link SubdivisionTexts.languageTwoLetterIsoCode}.
   * @returns A request builder for creating requests that delete an entity of type `SubdivisionTexts`.
   */
  delete(
    busConfignVersion: BigNumber,
    countryTwoLetterIsoCode: string,
    countrySubdivision: string,
    languageTwoLetterIsoCode: string
  ): DeleteRequestBuilder<SubdivisionTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubdivisionTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubdivisionTexts` by taking the entity as a parameter.
   */
  delete(
    entity: SubdivisionTexts<T>
  ): DeleteRequestBuilder<SubdivisionTexts<T>, T>;
}
