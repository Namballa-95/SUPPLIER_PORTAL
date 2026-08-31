"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Address_1 = require("./Address");
/**
 * Request builder class for operations supported on the {@link Address} entity.
 */
class AddressRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Address` entities.
     * @returns A request builder for creating requests to retrieve all `Address` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Address` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Address`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Address` entity based on its keys.
     * @param id Key property. See {@link Address.id}.
     * @returns A request builder for creating requests to retrieve one `Address` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Address`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Address`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof Address_1.Address ? idOrEntity : { Id: idOrEntity });
    }
}
exports.AddressRequestBuilder = AddressRequestBuilder;
//# sourceMappingURL=AddressRequestBuilder.js.map