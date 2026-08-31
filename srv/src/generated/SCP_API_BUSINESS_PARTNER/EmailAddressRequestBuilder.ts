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
import { EmailAddress } from './EmailAddress';

/**
 * Request builder class for operations supported on the {@link EmailAddress} entity.
 */
export class EmailAddressRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmailAddress<T>, T> {
  /**
   * Returns a request builder for querying all `EmailAddress` entities.
   * @returns A request builder for creating requests to retrieve all `EmailAddress` entities.
   */
  getAll(): GetAllRequestBuilder<EmailAddress<T>, T> {
    return new GetAllRequestBuilder<EmailAddress<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmailAddress` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmailAddress`.
   */
  create(entity: EmailAddress<T>): CreateRequestBuilder<EmailAddress<T>, T> {
    return new CreateRequestBuilder<EmailAddress<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EmailAddress` entity based on its keys.
   * @param id Key property. See {@link EmailAddress.id}.
   * @returns A request builder for creating requests to retrieve one `EmailAddress` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<EmailAddress<T>, T> {
    return new GetByKeyRequestBuilder<EmailAddress<T>, T>(this.entityApi, {
      Id: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmailAddress`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmailAddress`.
   */
  update(entity: EmailAddress<T>): UpdateRequestBuilder<EmailAddress<T>, T> {
    return new UpdateRequestBuilder<EmailAddress<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmailAddress`.
   * @param id Key property. See {@link EmailAddress.id}.
   * @returns A request builder for creating requests that delete an entity of type `EmailAddress`.
   */
  delete(id: string): DeleteRequestBuilder<EmailAddress<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmailAddress`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmailAddress` by taking the entity as a parameter.
   */
  delete(entity: EmailAddress<T>): DeleteRequestBuilder<EmailAddress<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<EmailAddress<T>, T> {
    return new DeleteRequestBuilder<EmailAddress<T>, T>(
      this.entityApi,
      idOrEntity instanceof EmailAddress ? idOrEntity : { Id: idOrEntity! }
    );
  }
}
