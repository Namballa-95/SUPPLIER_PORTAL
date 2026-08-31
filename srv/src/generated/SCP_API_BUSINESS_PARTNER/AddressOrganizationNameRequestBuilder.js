"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrganizationNameRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddressOrganizationName_1 = require("./AddressOrganizationName");
/**
 * Request builder class for operations supported on the {@link AddressOrganizationName} entity.
 */
class AddressOrganizationNameRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `AddressOrganizationName` entities.
     * @returns A request builder for creating requests to retrieve all `AddressOrganizationName` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `AddressOrganizationName` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressOrganizationName`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `AddressOrganizationName` entity based on its keys.
     * @param id Key property. See {@link AddressOrganizationName.id}.
     * @returns A request builder for creating requests to retrieve one `AddressOrganizationName` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Id: id });
    }
    /**
     * Returns a request builder for updating an entity of type `AddressOrganizationName`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressOrganizationName`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof AddressOrganizationName_1.AddressOrganizationName
            ? idOrEntity
            : { Id: idOrEntity });
    }
}
exports.AddressOrganizationNameRequestBuilder = AddressOrganizationNameRequestBuilder;
//# sourceMappingURL=AddressOrganizationNameRequestBuilder.js.map