"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationNameRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const OrganizationName_1 = require("./OrganizationName");
/**
 * Request builder class for operations supported on the {@link OrganizationName} entity.
 */
class OrganizationNameRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `OrganizationName` entities.
     * @returns A request builder for creating requests to retrieve all `OrganizationName` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `OrganizationName` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OrganizationName`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `OrganizationName` entity based on its keys.
     * @param id Key property. See {@link OrganizationName.id}.
     * @returns A request builder for creating requests to retrieve one `OrganizationName` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id
        });
    }
    /**
     * Returns a request builder for updating an entity of type `OrganizationName`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OrganizationName`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof OrganizationName_1.OrganizationName ? idOrEntity : { Id: idOrEntity });
    }
}
exports.OrganizationNameRequestBuilder = OrganizationNameRequestBuilder;
//# sourceMappingURL=OrganizationNameRequestBuilder.js.map