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
import { CountryTexts } from './CountryTexts';

/**
 * Request builder class for operations supported on the {@link CountryTexts} entity.
 */
export class CountryTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CountryTexts<T>, T> {
  /**
   * Returns a request builder for querying all `CountryTexts` entities.
   * @returns A request builder for creating requests to retrieve all `CountryTexts` entities.
   */
  getAll(): GetAllRequestBuilder<CountryTexts<T>, T> {
    return new GetAllRequestBuilder<CountryTexts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CountryTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CountryTexts`.
   */
  create(entity: CountryTexts<T>): CreateRequestBuilder<CountryTexts<T>, T> {
    return new CreateRequestBuilder<CountryTexts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CountryTexts` entity based on its keys.
   * @param busConfignVersion Key property. See {@link CountryTexts.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link CountryTexts.countryTwoLetterIsoCode}.
   * @param languageTwoLetterIsoCode Key property. See {@link CountryTexts.languageTwoLetterIsoCode}.
   * @returns A request builder for creating requests to retrieve one `CountryTexts` entity based on its keys.
   */
  getByKey(
    busConfignVersion: DeserializedType<T, 'Edm.Int64'>,
    countryTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>,
    languageTwoLetterIsoCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CountryTexts<T>, T> {
    return new GetByKeyRequestBuilder<CountryTexts<T>, T>(this.entityApi, {
      BusConfignVersion: busConfignVersion,
      CountryTwoLetterISOCode: countryTwoLetterIsoCode,
      LanguageTwoLetterISOCode: languageTwoLetterIsoCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CountryTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CountryTexts`.
   */
  update(entity: CountryTexts<T>): UpdateRequestBuilder<CountryTexts<T>, T> {
    return new UpdateRequestBuilder<CountryTexts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CountryTexts`.
   * @param busConfignVersion Key property. See {@link CountryTexts.busConfignVersion}.
   * @param countryTwoLetterIsoCode Key property. See {@link CountryTexts.countryTwoLetterIsoCode}.
   * @param languageTwoLetterIsoCode Key property. See {@link CountryTexts.languageTwoLetterIsoCode}.
   * @returns A request builder for creating requests that delete an entity of type `CountryTexts`.
   */
  delete(
    busConfignVersion: BigNumber,
    countryTwoLetterIsoCode: string,
    languageTwoLetterIsoCode: string
  ): DeleteRequestBuilder<CountryTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CountryTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CountryTexts` by taking the entity as a parameter.
   */
  delete(entity: CountryTexts<T>): DeleteRequestBuilder<CountryTexts<T>, T>;
  delete(
    busConfignVersionOrEntity: any,
    countryTwoLetterIsoCode?: string,
    languageTwoLetterIsoCode?: string
  ): DeleteRequestBuilder<CountryTexts<T>, T> {
    return new DeleteRequestBuilder<CountryTexts<T>, T>(
      this.entityApi,
      busConfignVersionOrEntity instanceof CountryTexts
        ? busConfignVersionOrEntity
        : {
            BusConfignVersion: busConfignVersionOrEntity!,
            CountryTwoLetterISOCode: countryTwoLetterIsoCode!,
            LanguageTwoLetterISOCode: languageTwoLetterIsoCode!
          }
    );
  }
}
