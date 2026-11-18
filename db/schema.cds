namespace BpService.db;

entity SupplierMapping {
    key PortalSupplierID : String(20);
    S4SupplierID         : String(10);
}

entity SupplierLoginHistory {
    key ID             : UUID;
        PortalSupplierID : String(20);
        LoginTimestamp   : Timestamp;
}