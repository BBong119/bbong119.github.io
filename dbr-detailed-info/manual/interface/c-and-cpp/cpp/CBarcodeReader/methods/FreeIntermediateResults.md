
# FreeIntermediateResults
Free memory allocated for the intermediate results.

```cpp
static void CBarcodeReader::FreeIntermediateResults (IntermediateResultArray** pResults)
```   

---
   
#### Parameters
`[in]	pResults` The intermediate results.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
IntermediateResultArray* pResults = NULL;
reader->GetIntermediateResults(&pResults);
CBarcodeReader::FreeIntermediateResults(&pResults);
delete pSettings;
delete reader;
```

