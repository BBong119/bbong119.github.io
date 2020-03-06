
# DBR_FreeSettingsString
Free memory allocated for runtime settings string.

```c
DBR_API void DBR_FreeSettingsString (char** content)
```   

---
   
#### Parameters
`[in]	content` The runtime settings string.  

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
DBR_InitRuntimeSettingsWithFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
DBR_AppendTplStringToRuntimeSettings(barcodeReader, "{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
char* pContent = NULL;
DBR_OutputSettingsToString(barcodeReader, &pContent, "currentRuntimeSettings");
DBR_FreeSettingsString(&pContent);
DBR_DestroyInstance(barcodeReader);
```

