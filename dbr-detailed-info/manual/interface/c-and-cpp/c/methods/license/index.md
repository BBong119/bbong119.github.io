# C API Reference - License Methods
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](#dbr_initlicense) | Read product key and activate the SDK. |
  | [`DBR_InitLicenseFromServer`](#dbr_initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`DBR_InitLicenseFromLicenseContent`](#dbr_initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`DBR_OutputLicenseToString`](#dbr_outputlicensetostring) | Output the license content to a string from the license server. |
  | [`DBR_OutputLicenseToStringPtr`](#dbr_outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`DBR_FreeLicenseString`](#dbr_freelicensestring) | Free memory allocated for the license string. |
  
  
  ---
  
  
  
  
  
## DBR_InitLicense
Read product key and activate the SDK.

```c
DBR_API int DBR_InitLicense (void* barcodeReader, const char* pLicense)
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicense` The product keys.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





## DBR_InitLicenseFromServer
Initialize the license and connect to the specified server for online verification.

```c
DBR_API int DBR_InitLicenseFromServer (void* barcodeReader, const char* pLicenseServer, const char* pLicenseKey)
```   

#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicenseServer` The name/IP of the license server.  
`[in]	pLicenseKey` The license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

&nbsp;





## DBR_InitLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```c
DBR_API int DBR_InitLicenseFromLicenseContent (void* barcodeReader, const char* pLicenseKey, const char* pLicenseContent)	
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pLicenseKey`	The license key.  
`[in]	pLicenseContent`	An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`DBR_OutputLicenseToString`](DBR_OutputLicenseToString.md).

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

&nbsp;







