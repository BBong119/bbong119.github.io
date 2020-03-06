
# DBR_InitLicense
Read product key and activate the SDK.

```c
DBR_API int DBR_InitLicense (void* barcodeReader, const char* pLicense)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pLicense` The product keys.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```

