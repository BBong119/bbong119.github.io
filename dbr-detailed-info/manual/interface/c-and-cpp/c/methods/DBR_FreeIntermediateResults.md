

# DBR_FreeIntermediateResults
Frees memory allocated for the intermediate results.


```c
DBR_API void DBR_FreeIntermediateResults (IntermediateResultArray** pResults)
```   

---
   
#### Parameters
`[in] pResults` The intermediate results.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
IntermediateResultArray* pResults = NULL;
DBR_GetIntermediateResults(barcodeReader, &pResults);
DBR_FreeIntermediateResults(&pResults);
DBR_DestroyInstance(barcodeReader);
```
