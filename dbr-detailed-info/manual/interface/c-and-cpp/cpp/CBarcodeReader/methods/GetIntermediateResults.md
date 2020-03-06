
# GetIntermediateResults
Get intermediate results containing the original image, the colour clustered image, the binarized Image, contours, Lines, TextBlocks, etc.

```cpp
int CBarcodeReader::GetIntermediateResults (IntermediateResultArray** pResults) 
```   

---
   
#### Parameters
`[out] pResults` The intermediate results returned by the SDK.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

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

