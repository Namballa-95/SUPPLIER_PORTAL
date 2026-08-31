"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubdivisionsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Subdivisions_1 = require("./Subdivisions");
/**
 * Request builder class for operations supported on the {@link Subdivisions} entity.
 */
class SubdivisionsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Subdivisions` entities.
     * @returns A request builder for creating requests to retrieve all `Subdivisions` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Subdivisions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Subdivisions`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Subdivisions` entity based on its keys.
     * @param busConfignVersion Key property. See {@link Subdivisions.busConfignVersion}.
     * @param countryTwoLetterIsoCode Key property. See {@link Subdivisions.countryTwoLetterIsoCode}.
     * @param countrySubdivision Key property. See {@link Subdivisions.countrySubdivision}.
     * @returns A request builder for creating requests to retrieve one `Subdivisions` entity based on its keys.
     */
    getByKey(busConfignVersion, countryTwoLetterIsoCode, countrySubdivision) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusConfignVersion: busConfignVersion,
            CountryTwoLetterISOCode: countryTwoLetterIsoCode,
            CountrySubdivision: countrySubdivision
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Subdivisions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Subdivisions`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(busConfignVersionOrEntity, countryTwoLetterIsoCode, countrySubdivision) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, busConfignVersionOrEntity instanceof Subdivisions_1.Subdivisions
            ? busConfignVersionOrEntity
            : {
                BusConfignVersion: busConfignVersionOrEntity,
                CountryTwoLetterISOCode: countryTwoLetterIsoCode,
                CountrySubdivision: countrySubdivision
            });
    }
}
exports.SubdivisionsRequestBuilder = SubdivisionsRequestBuilder;
//# sourceMappingURL=SubdivisionsRequestBuilder.js.map