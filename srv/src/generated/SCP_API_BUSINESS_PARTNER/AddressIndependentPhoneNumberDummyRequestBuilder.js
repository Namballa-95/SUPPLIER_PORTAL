"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressIndependentPhoneNumberDummyRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddressIndependentPhoneNumberDummy_1 = require("./AddressIndependentPhoneNumberDummy");
/**
 * Request builder class for operations supported on the {@link AddressIndependentPhoneNumberDummy} entity.
 */
class AddressIndependentPhoneNumberDummyRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `AddressIndependentPhoneNumberDummy` entities.
     * @returns A request builder for creating requests to retrieve all `AddressIndependentPhoneNumberDummy` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `AddressIndependentPhoneNumberDummy` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddressIndependentPhoneNumberDummy`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `AddressIndependentPhoneNumberDummy` entity based on its keys.
     * @param id Key property. See {@link AddressIndependentPhoneNumberDummy.id}.
     * @returns A request builder for creating requests to retrieve one `AddressIndependentPhoneNumberDummy` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Id: id });
    }
    /**
     * Returns a request builder for updating an entity of type `AddressIndependentPhoneNumberDummy`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddressIndependentPhoneNumberDummy`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof AddressIndependentPhoneNumberDummy_1.AddressIndependentPhoneNumberDummy
            ? idOrEntity
            : { Id: idOrEntity });
    }
}
exports.AddressIndependentPhoneNumberDummyRequestBuilder = AddressIndependentPhoneNumberDummyRequestBuilder;
//# sourceMappingURL=AddressIndependentPhoneNumberDummyRequestBuilder.js.map