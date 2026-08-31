"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C_CountriesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const C_Countries_1 = require("./C_Countries");
/**
 * Request builder class for operations supported on the {@link C_Countries} entity.
 */
class C_CountriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `C_Countries` entities.
     * @returns A request builder for creating requests to retrieve all `C_Countries` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `C_Countries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `C_Countries`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `C_Countries` entity based on its keys.
     * @param busConfignVersion Key property. See {@link C_Countries.busConfignVersion}.
     * @param countryTwoLetterIsoCode Key property. See {@link C_Countries.countryTwoLetterIsoCode}.
     * @returns A request builder for creating requests to retrieve one `C_Countries` entity based on its keys.
     */
    getByKey(busConfignVersion, countryTwoLetterIsoCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusConfignVersion: busConfignVersion,
            CountryTwoLetterISOCode: countryTwoLetterIsoCode
        });
    }
    /**
     * Returns a request builder for updating an entity of type `C_Countries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `C_Countries`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(busConfignVersionOrEntity, countryTwoLetterIsoCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, busConfignVersionOrEntity instanceof C_Countries_1.C_Countries
            ? busConfignVersionOrEntity
            : {
                BusConfignVersion: busConfignVersionOrEntity,
                CountryTwoLetterISOCode: countryTwoLetterIsoCode
            });
    }
}
exports.C_CountriesRequestBuilder = C_CountriesRequestBuilder;
//# sourceMappingURL=C_CountriesRequestBuilder.js.map