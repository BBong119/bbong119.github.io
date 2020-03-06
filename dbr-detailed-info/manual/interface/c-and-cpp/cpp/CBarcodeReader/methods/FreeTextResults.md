
# FreeTextResults
Free memory allocated for text results.

```cpp
static void CBarcodeReader::FreeTextResults (TextResultArray** pResults)
```   

---
   
#### Parameters
`[in]	pResults` Text results.

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

