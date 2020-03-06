
# DBR_GetParameterTemplateName
Get parameter template name by index.


```c
DBR_API int DBR_GetParameterTemplateName (void* barcodeReader, const int index, char nameBuffer[], const int nameBufferLen)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	index` The index of parameter template array.   
`[in,out]	nameBuffer` The buffer is allocated by caller and the recommended length is 256. The template name will be copied to the buffer.   
`[in]	nameBufferLen` The length of allocated buffer.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

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
int templateIndex = 1;
// notice that the value of 'templateIndex' should less than currentTemplateCount.
char templateName[256];
DBR_GetParameterTemplateName(barcodeReader, templateIndex, templateName, 256);
DBR_DestroyInstance(barcodeReader);
```

