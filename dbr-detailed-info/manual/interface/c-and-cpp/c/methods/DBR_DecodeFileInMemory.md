
# DBR_DecodeFileInMemory
Decode barcodes from an image file in memory.

```c
DBR_API int DBR_DecodeFileInMemory (void* barcodeReader, const unsigned char* pFileBytes, const int fileSize, const char* pTemplateName)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFileBytes` The image file bytes in memory.  
`[in]	fileSize`	The length of the file bytes in memory.  
`[in]	pTemplateName` The template name.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
unsigned char* pFileBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
int errorCode = DBR_DecodeFileInMemory(barcodeReader, pFileBytes, nFileSize, "");
DBR_DestroyInstance(barcodeReader);
```

