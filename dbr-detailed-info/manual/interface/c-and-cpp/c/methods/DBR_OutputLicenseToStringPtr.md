
# DBR_OutputLicenseToStringPtr
Output the license content as an encrypted string from the license server to be used for offline license verification.

```c

DBR_API int DBR_OutputLicenseToStringPtr (void* barcodeReader, char** content)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	content` The output string which stores the content of license.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

#### Remark
[`DBR_InitLicenseFromServer`](DBR_InitLicenseFromServer.md) has to be successfully called before calling this method.



