"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesAreaRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesArea_1 = require("./SalesArea");
/**
 * Request builder class for operations supported on the {@link SalesArea} entity.
 */
class SalesAreaRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SalesArea` entities.
     * @returns A request builder for creating requests to retrieve all `SalesArea` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SalesArea` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesArea`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SalesArea` entity based on its keys.
     * @param id Key property. See {@link SalesArea.id}.
     * @returns A request builder for creating requests to retrieve one `SalesArea` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SalesArea`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesArea`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof SalesArea_1.SalesArea ? idOrEntity : { Id: idOrEntity });
    }
}
exports.SalesAreaRequestBuilder = SalesAreaRequestBuilder;
//# sourceMappingURL=SalesAreaRequestBuilder.js.map