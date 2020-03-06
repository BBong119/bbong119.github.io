
# DBR_ResetRuntimeSettings
Reset all parameters to default values.


```c
DBR_API int DBR_ResetRuntimeSettings (void* barcodeReader)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  

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
settings.deblurLevel = 9;
DBR_UpdateRuntimeSettings(barcodeReader, &settings);
DBR_ResetRuntimeSettings(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```

