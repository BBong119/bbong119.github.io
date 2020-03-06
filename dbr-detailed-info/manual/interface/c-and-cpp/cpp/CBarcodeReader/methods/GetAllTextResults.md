
# GetAllTextResults
Get all recognized barcode results.

```cpp
int CBarcodeReader::GetAllTextResults (TextResultArray** pResults)	
```   

---
   
#### Parameters
`[out] pResults` Barcode text results returned by the last called function [`DecodeFile`](DecodeFile.md) / [`DecodeFileInMemory`](DecodeFileInMemory.md) / [`DecodeBuffer`](DecodeBuffer.md) / [`DecodeBase64String`](DecodeBase64String.md) / [`DecodeDIB`](DecodeDIB.md). The `pResults` is allocated by the SDK and should be freed by calling the function [`FreeTextResults`](FreeTextResults.md).

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
TextResultArray* pResults;
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
reader->GetAllTextResults(&pResults);
CBarcodeReader::FreeTextResults(&pResults);
delete reader;
```

