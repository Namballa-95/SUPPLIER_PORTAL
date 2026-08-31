"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkPlaceAddressInformationApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const WorkPlaceAddressInformation_1 = require("./WorkPlaceAddressInformation");
const WorkPlaceAddressInformationRequestBuilder_1 = require("./WorkPlaceAddressInformationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class WorkPlaceAddressInformationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = WorkPlaceAddressInformation_1.WorkPlaceAddressInformation;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new WorkPlaceAddressInformationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARENT: new odata_v2_1.OneToOneLink('to_Parent', this, linkedApis[0]),
            TO_WORKPLACE_ADDRESS: new odata_v2_1.OneToOneLink('to_WorkplaceAddress', this, linkedApis[1]),
            TO_ORGANIZATION_ADDRESS: new odata_v2_1.OneToOneLink('to_OrganizationAddress', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new WorkPlaceAddressInformationRequestBuilder_1.WorkPlaceAddressInformationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(WorkPlaceAddressInformation_1.WorkPlaceAddressInformation, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link createdByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link lastChangedByUser} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastChangeDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link validityStartDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link validityEndDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
                /**
                 * Static representation of the {@link parentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_ID: fieldBuilder.buildEdmTypeField('Parent_Id', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link workplaceAddressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                WORKPLACE_ADDRESS_ID: fieldBuilder.buildEdmTypeField('WorkplaceAddress_Id', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link organizationAddressId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORGANIZATION_ADDRESS_ID: fieldBuilder.buildEdmTypeField('OrganizationAddress_Id', 'Edm.Guid', true),
                /**
                 * Static representation of the {@link isDefaultAddress} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DEFAULT_ADDRESS: fieldBuilder.buildEdmTypeField('IsDefaultAddress', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', WorkPlaceAddressInformation_1.WorkPlaceAddressInformation)
            };
        }
        return this._schema;
    }
}
exports.WorkPlaceAddressInformationApi = WorkPlaceAddressInformationApi;
//# sourceMappingURL=WorkPlaceAddressInformationApi.js.map