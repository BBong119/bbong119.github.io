
# DBR_GetParameterTemplateCount
Get count of parameter templates.



```c
DBR_API int DBR_GetParameterTemplateCount (void* barcodeReader)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  


#### Return value
Returns the count of parameter templates. Returns -1 if DBRERR_NULL_POINTER happens.   

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = DBR_GetParameterTemplateCount(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```

