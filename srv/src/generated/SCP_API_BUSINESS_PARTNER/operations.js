"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = void 0;
exports.createBusinessPartnerWithConsent = createBusinessPartnerWithConsent;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerWithConsent_1 = require("./BusinessPartnerWithConsent");
/**
 * Create Business Partner With Consent.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function createBusinessPartnerWithConsent(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        dataSubjectId: new odata_v2_1.OperationParameter('DataSubjectId', 'Edm.String', parameters.dataSubjectId),
        templateName: new odata_v2_1.OperationParameter('TemplateName', 'Edm.String', parameters.templateName),
        languageCode: new odata_v2_1.OperationParameter('LanguageCode', 'Edm.String', parameters.languageCode),
        dataSubjectTypeName: new odata_v2_1.OperationParameter('DataSubjectTypeName', 'Edm.String', parameters.dataSubjectTypeName),
        dataSubjectDescription: new odata_v2_1.OperationParameter('DataSubjectDescription', 'Edm.String', parameters.dataSubjectDescription),
        validFrom: new odata_v2_1.OperationParameter('ValidFrom', 'Edm.DateTimeOffset', parameters.validFrom),
        grantedBy: new odata_v2_1.OperationParameter('GrantedBy', 'Edm.String', parameters.grantedBy),
        grantedAt: new odata_v2_1.OperationParameter('GrantedAt', 'Edm.DateTimeOffset', parameters.grantedAt),
        submissionSite: new odata_v2_1.OperationParameter('SubmissionSite', 'Edm.String', parameters.submissionSite),
        businessPartner: new odata_v2_1.OperationParameter('BusinessPartner', 'Edm.String', parameters.businessPartner),
        authorizationGroup: new odata_v2_1.OperationParameter('AuthorizationGroup', 'Edm.String', parameters.authorizationGroup),
        category: new odata_v2_1.OperationParameter('Category', 'Edm.String', parameters.category),
        lastName: new odata_v2_1.OperationParameter('LastName', 'Edm.String', parameters.lastName),
        organizationName: new odata_v2_1.OperationParameter('OrganizationName', 'Edm.String', parameters.organizationName)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'CreateBusinessPartnerWithConsent', data => (0, odata_v2_1.transformReturnValueForComplexTypeList)(data, data => (0, odata_v2_1.entityDeserializer)(deSerializers || odata_v2_1.defaultDeSerializers).deserializeComplexType(data, BusinessPartnerWithConsent_1.BusinessPartnerWithConsent)), params, deSerializers);
}
exports.operations = {
    createBusinessPartnerWithConsent
};
//# sourceMappingURL=operations.js.map