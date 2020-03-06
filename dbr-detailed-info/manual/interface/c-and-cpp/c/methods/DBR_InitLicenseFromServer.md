
# DBR_InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```c
DBR_API int DBR_InitLicenseFromServer (void* barcodeReader, const char* pLicenseServer, const char* pLicenseKey)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicenseServer` The name/IP of the license server.  
`[in]	pLicenseKey` The license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*


