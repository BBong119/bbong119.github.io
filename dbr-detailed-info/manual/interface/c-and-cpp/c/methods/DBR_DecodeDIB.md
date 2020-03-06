
# DBR_DecodeDIB
Decode barcodes from a handle of device-independent bitmap (DIB).


```c
DBR_API int DBR_DecodeDIB (void* barcodeReader, const HANDLE hDIB, const char* pTemplateName)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	hDIB` Handle of the device-independent bitmap.  
`[in]	pTemplateName` The template name.  

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
HANDLE pDIB;
GetDIBFromImage("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pDIB);
int errorCode = DBR_DecodeDIB(barcodeReader, pDIB, "");
DBR_DestroyInstance(barcodeReader);
```

