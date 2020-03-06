
# DBR_DecodeBase64String
Decode barcodes from an image file encoded as a base64 string.

```c
DBR_API int DBR_DecodeBase64String (void* barcodeReader, const char* pBase64String, const char* pTemplateName)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pBase64String` A base64 encoded string that represents an image.  
`[in]	pTemplateName` The template name.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
unsigned char* pBufferBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
char* strBase64String;
GetFileBase64String(pBufferBytes, &strBase64String);
int errorCode = DBR_DecodeBase64String(barcodeReader, strBase64String, "");
DBR_DestroyInstance(barcodeReader);
```

