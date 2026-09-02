namespace BpService.srv;

using {
    SCP_API_BUSINESS_PARTNER as Bp
} from './external/SCP_API_BUSINESS_PARTNER';


service BpService @(path:'/bp') {

    entity MyBp
        as projection on Bp.BusinessPartner;


    entity SupplierAddress {

        key BusinessPartner : String(10);
        key AddressID       : String(10);

        FullName            : String(81);
        StreetName          : String(60);
        HouseNumber         : String(10);
        CityName            : String(40);
        PostalCode          : String(10);
        Country             : String(3);
        Region              : String(3);
        AddressTimeZone     : String(6);
    }


    entity SupplierContact {

        key BusinessPartner : String(10);

        Email               : String(241);
        Phone               : String(30);
        Mobile              : String(30);
    }


    entity SupplierDetail {

        key BusinessPartner       : String(10);

        Supplier                  : String(10);
        Customer                  : String(10);

        BusinessPartnerFullName   : String(81);
        BusinessPartnerName       : String(81);

        BusinessPartnerCategory   : String(1);
        BusinessPartnerGrouping   : String(4);
        AuthorizationGroup        : String(4);

        SearchTerm1              : String(20);
        SearchTerm2              : String(20);

        AcademicTitle            : String(4);

        AddressID                : String(10);
        StreetName               : String(60);
        HouseNumber              : String(10);
        CityName                 : String(40);
        PostalCode               : String(10);
        Country                  : String(3);
        Region                   : String(3);
        AddressTimeZone          : String(6);

        Email                    : String(241);
        Phone                    : String(30);
        Mobile                   : String(30);
    }

    entity MyProfile {
    key BusinessPartner       : String(10);

    Supplier                  : String(10);
    Customer                  : String(10);

    BusinessPartnerFullName   : String(81);
    BusinessPartnerName       : String(81);

    BusinessPartnerCategory   : String(1);
    BusinessPartnerGrouping   : String(4);

    SearchTerm1               : String(20);
    SearchTerm2               : String(20);

    AddressID                 : String(10);

    StreetName                : String(60);
    HouseNumber               : String(10);
    CityName                  : String(40);
    PostalCode                : String(10);

    Country                   : String(3);
    Region                    : String(3);

    Email                     : String(241);
    Phone                     : String(30);
    Mobile                    : String(30);
}

entity SupplierPO {

    key PurchaseOrder : String(10);

    CompanyCode                    : String(4);
    PurchaseOrderType              : String(4);
    PurchasingProcessingStatus     : String(2);
    CreatedByUser                  : String(12);
    CreationDate                   : DateTime;

    Supplier                       : String(10);

    PaymentTerms                   : String(4);
    NetPaymentDays                 : Decimal(3,0);

    PurchasingOrganization         : String(4);
    PurchasingGroup                : String(3);

    PurchaseOrderDate              : DateTime;

    DocumentCurrency               : String(5);

    SupplierRespSalesPersonName    : String(30);
    SupplierPhoneNumber            : String(16);

    IncotermsClassification        : String(3);

    AddressName                    : String(40);
    AddressCityName                : String(40);
    AddressPostalCode              : String(10);
    AddressStreetName              : String(60);
    AddressRegion                  : String(3);
    AddressCountry                 : String(3);
}

entity MyPurchaseOrders {

    key PurchaseOrder          : String(10);

    CompanyCode                : String(4);
    PurchaseOrderType          : String(4);

    PurchasingProcessingStatus : String(2);

    CreatedByUser              : String(12);
    CreationDate               : Date;

    Supplier                   : String(10);

    PaymentTerms               : String(4);

    NetPaymentDays             : Decimal(3,0);

    PurchasingOrganization     : String(4);
    PurchasingGroup            : String(3);

    PurchaseOrderDate          : Date;

    DocumentCurrency           : String(5);

    SupplierQuotationExternalID : String(10);

    SupplierRespSalesPersonName : String(30);
    SupplierPhoneNumber         : String(16);

    IncotermsClassification     : String(3);

    IncotermsLocation1          : String(70);
    IncotermsLocation2          : String(70);

    AddressCityName             : String(40);
    AddressPostalCode           : String(10);
    AddressStreetName           : String(60);
    AddressHouseNumber          : String(10);
    AddressRegion               : String(3);
    AddressCountry              : String(3);
}

entity MyPurchaseOrderDetails {
    key BusinessPartner : String(10);
    key PurchaseOrder   : String(10);

    CompanyCode : String(4);
    PurchaseOrderType : String(4);
    PurchasingProcessingStatus : String(2);
    CreatedByUser : String(12);
    CreationDate : DateTime;

    Supplier : String(10);

    PaymentTerms : String(4);
    CashDiscount1Days : Decimal(3,0);
    CashDiscount2Days : Decimal(3,0);
    NetPaymentDays : Decimal(3,0);

    CashDiscount1Percent : Decimal(5,3);
    CashDiscount2Percent : Decimal(5,3);

    PurchasingOrganization : String(4);
    PurchasingGroup : String(3);
    PurchaseOrderDate : DateTime;
    DocumentCurrency : String(5);
    ExchangeRate : String(12);

    SupplierQuotationExternalID : String(10);
    SupplierRespSalesPersonName : String(30);
    SupplierPhoneNumber : String(16);

    IncotermsClassification : String(3);
    IncotermsLocation1 : String(70);
    IncotermsLocation2 : String(70);

    AddressCityName : String(40);
    AddressHouseNumber : String(10);
    AddressName : String(40);
    AddressPostalCode : String(10);
    AddressStreetName : String(60);
    AddressPhoneNumber : String(30);
    AddressRegion : String(3);
    AddressCountry : String(3);
    AddressCorrespondenceLanguage : String(2);
}

entity MyPurchaseOrderItems {

    key BusinessPartner : String(10);
    key PurchaseOrder   : String(10);
    key PurchaseOrderItem : String(5);

    PurchaseOrderItemText : String(40);

    Plant : String(4);
    StorageLocation : String(4);
    MaterialGroup : String(9);

    PurchasingInfoRecord : String(10);
    SupplierMaterialNumber : String(35);

    OrderQuantity : Decimal(13,3);
    PurchaseOrderQuantityUnit : String(3);

    OrderPriceUnit : String(3);

    DocumentCurrency : String(5);

    NetPriceAmount : Decimal(16,3);
    NetPriceQuantity : Decimal(13,3);

    TaxCode : String(2);

    ValuationType : String(10);

    IsCompletelyDelivered : Boolean;
    IsFinallyInvoiced : Boolean;

    PurchaseOrderItemCategory : String(1);
    AccountAssignmentCategory : String(1);

    GoodsReceiptIsExpected : Boolean;
    GoodsReceiptIsNonValuated : Boolean;

    InvoiceIsExpected : Boolean;
    InvoiceIsGoodsReceiptBased : Boolean;

    Material : String(40);
    ManufacturerMaterial : String(40);

    ProductType : String(2);

    ItemNetWeight : Decimal(15,3);
    ItemWeightUnit : String(3);

    ItemVolume : Decimal(15,3);
    ItemVolumeUnit : String(3);

    DeliveryAddressName : String(40);
    DeliveryAddressName2 : String(40);
    DeliveryAddressFullName : String(80);

    DeliveryAddressStreetName : String(60);
    DeliveryAddressHouseNumber : String(10);
    DeliveryAddressCityName : String(40);
    DeliveryAddressPostalCode : String(10);
    DeliveryAddressRegion : String(3);
    DeliveryAddressCountry : String(3);
    RequisitionerName : String(40);
    IsReturnsItem : Boolean;
}

// =========================================================
// 7. MY DASHBOARD
// =========================================================

entity MyDashboard {

    key ID                    : String(1);

    BusinessPartner           : String(10);
    Supplier                  : String(10);
    SupplierName              : String(100);

    TotalPurchaseOrders       : Integer;
    OpenPurchaseOrders        : Integer;
    CompletedPurchaseOrders   : Integer;
}

// =========================================================
// SEND PURCHASE ORDER
// =========================================================

action sendPurchaseOrderEmail(
    BusinessPartner : String(10),
    PurchaseOrder   : String(10),
    RecipientEmail  : String(241)
) returns String;

action updateMyProfile(
    BusinessPartner         : String(10),
    BusinessPartnerFullName : String(81),
    BusinessPartnerName     : String(81),
    SearchTerm1             : String(20),
    SearchTerm2             : String(20),

    AddressID               : String(10),
    StreetName              : String(60),
    HouseNumber             : String(10),
    CityName                : String(40),
    PostalCode              : String(10),
    Region                  : String(3),
    Country                 : String(3),

    Email                   : String(241),
    Phone                   : String(30),
    Mobile                  : String(30)
) returns String;

function validateSupplier(
    SupplierID    : String(20),
    SupplierEmail : String(150)
) returns Boolean;

function getMySupplier() returns String;

}