"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustrySectorRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const IndustrySector_1 = require("./IndustrySector");
/**
 * Request builder class for operations supported on the {@link IndustrySector} entity.
 */
class IndustrySectorRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `IndustrySector` entities.
     * @returns A request builder for creating requests to retrieve all `IndustrySector` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `IndustrySector` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IndustrySector`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `IndustrySector` entity based on its keys.
     * @param id Key property. See {@link IndustrySector.id}.
     * @returns A request builder for creating requests to retrieve one `IndustrySector` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id
        });
    }
    /**
     * Returns a request builder for updating an entity of type `IndustrySector`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IndustrySector`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof IndustrySector_1.IndustrySector ? idOrEntity : { Id: idOrEntity });
    }
}
exports.IndustrySectorRequestBuilder = IndustrySectorRequestBuilder;
//# sourceMappingURL=IndustrySectorRequestBuilder.js.map