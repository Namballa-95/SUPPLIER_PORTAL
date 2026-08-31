"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryTextsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CountryTexts_1 = require("./CountryTexts");
/**
 * Request builder class for operations supported on the {@link CountryTexts} entity.
 */
class CountryTextsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `CountryTexts` entities.
     * @returns A request builder for creating requests to retrieve all `CountryTexts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CountryTexts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CountryTexts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `CountryTexts` entity based on its keys.
     * @param busConfignVersion Key property. See {@link CountryTexts.busConfignVersion}.
     * @param countryTwoLetterIsoCode Key property. See {@link CountryTexts.countryTwoLetterIsoCode}.
     * @param languageTwoLetterIsoCode Key property. See {@link CountryTexts.languageTwoLetterIsoCode}.
     * @returns A request builder for creating requests to retrieve one `CountryTexts` entity based on its keys.
     */
    getByKey(busConfignVersion, countryTwoLetterIsoCode, languageTwoLetterIsoCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
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
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(busConfignVersionOrEntity, countryTwoLetterIsoCode, languageTwoLetterIsoCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, busConfignVersionOrEntity instanceof CountryTexts_1.CountryTexts
            ? busConfignVersionOrEntity
            : {
                BusConfignVersion: busConfignVersionOrEntity,
                CountryTwoLetterISOCode: countryTwoLetterIsoCode,
                LanguageTwoLetterISOCode: languageTwoLetterIsoCode
            });
    }
}
exports.CountryTextsRequestBuilder = CountryTextsRequestBuilder;
//# sourceMappingURL=CountryTextsRequestBuilder.js.map