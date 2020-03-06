
# DBR_AppendTplFileToRuntimeSettings
Append a new template file to the current runtime settings.

```c
DBR_API int DBR_AppendTplFileToRuntimeSettings (void* barcodeReader, const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[], const int errorMsgBufferLen)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFilePath` The settings file path.     
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template settings or to overwrite previous settings with the new template.     
`[in,out]	errorMsgBuffer` The buffer is allocated by caller and the recommending length is 256. The error message will be copied to the buffer.     
`[in] errorMsgBufferLen` The length of allocated buffer.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
char errorMessage[256];
DBR_AppendTplFileToRuntimeSettings(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_IGNORE, errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```

