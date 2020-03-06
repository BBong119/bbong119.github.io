
# DBR_FreeTextResults
Free memory allocated for text results.

```c
DBR_API void DBR_FreeTextResults (TextResultArray** pResults)	
```   

---
   
#### Parameters
`[in]	pResults` Text results.

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

