"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubdivisionTextsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SubdivisionTexts_1 = require("./SubdivisionTexts");
/**
 * Request builder class for operations supported on the {@link SubdivisionTexts} entity.
 */
class SubdivisionTextsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `SubdivisionTexts` entities.
     * @returns A request builder for creating requests to retrieve all `SubdivisionTexts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `SubdivisionTexts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SubdivisionTexts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `SubdivisionTexts` entity based on its keys.
     * @param busConfignVersion Key property. See {@link SubdivisionTexts.busConfignVersion}.
     * @param countryTwoLetterIsoCode Key property. See {@link SubdivisionTexts.countryTwoLetterIsoCode}.
     * @param countrySubdivision Key property. See {@link SubdivisionTexts.countrySubdivision}.
     * @param languageTwoLetterIsoCode Key property. See {@link SubdivisionTexts.languageTwoLetterIsoCode}.
     * @returns A request builder for creating requests to retrieve one `SubdivisionTexts` entity based on its keys.
     */
    getByKey(busConfignVersion, countryTwoLetterIsoCode, countrySubdivision, languageTwoLetterIsoCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusConfignVersion: busConfignVersion,
            CountryTwoLetterISOCode: countryTwoLetterIsoCode,
            CountrySubdivision: countrySubdivision,
            LanguageTwoLetterISOCode: languageTwoLetterIsoCode
        });
    }
    /**
     * Returns a request builder for updating an entity of type `SubdivisionTexts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SubdivisionTexts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(busConfignVersionOrEntity, countryTwoLetterIsoCode, countrySubdivision, languageTwoLetterIsoCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, busConfignVersionOrEntity instanceof SubdivisionTexts_1.SubdivisionTexts
            ? busConfignVersionOrEntity
            : {
                BusConfignVersion: busConfignVersionOrEntity,
                CountryTwoLetterISOCode: countryTwoLetterIsoCode,
                CountrySubdivision: countrySubdivision,
                LanguageTwoLetterISOCode: languageTwoLetterIsoCode
            });
    }
}
exports.SubdivisionTextsRequestBuilder = SubdivisionTextsRequestBuilder;
//# sourceMappingURL=SubdivisionTextsRequestBuilder.js.map