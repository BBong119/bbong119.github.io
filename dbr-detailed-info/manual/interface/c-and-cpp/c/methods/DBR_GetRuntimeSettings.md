
# DBR_GetRuntimeSettings
Get current settings and save them into a [`PublicRuntimeSettings`]() struct.

```c
DBR_API int DBR_GetRuntimeSettings (void* barcodeReader, PublicRuntimeSettings* pSettings)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in,out]	pSettings` The struct of template settings.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
int errorCode = DBR_GetRuntimeSettings(barcodeReader, &settings);
DBR_DestroyInstance(barcodeReader);
```

