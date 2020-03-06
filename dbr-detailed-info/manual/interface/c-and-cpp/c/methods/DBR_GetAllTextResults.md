
# DBR_GetAllTextResults
Get all recognized barcode results.

```c
DBR_API int DBR_GetAllTextResults (void* barcodeReader, TextResultArray** pResults)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[out] pResults`	Barcode text results returned by last calling function [`DBR_DecodeFile`](DBR_DecodeFile.md) / [`DBR_DecodeFileInMemory`](DBR_DecodeFileInMemory.md) / [`DBR_DecodeBuffer`](DBR_DecodeBuffer.md) / [`DBR_DecodeBase64String`](DBR_DecodeBase64String.md) / [`DBR_DecodeDIB`](DBR_DecodeDIB.md). The results is allocated by SDK and should be freed by calling function [`DBR_FreeTextResults`](DBR_FreeTextResults.md).

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
TextResultArray* pResults;
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
DBR_GetAllTextResults(barcodeReader, &pResults);
DBR_FreeTextResults(&pResults);
DBR_DestroyInstance(barcodeReader);
```

