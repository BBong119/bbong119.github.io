
# DBR_DecodeFile
Decode barcodes from a specified image file.

```c
DBR_API int DBR_DecodeFile (void* barcodeReader, const char* pFileName, const char* pTemplateName)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFileName` A string defining the file name.  
`[in]	pTemplateName` The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
DBR_DestroyInstance(barcodeReader);
```

