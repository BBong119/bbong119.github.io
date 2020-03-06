
# DBR_GetIntermediateResults
Return intermediate results containing the original image, the colour clustered image, the binarized image, contours, lines, text blocks, etc.

```c
DBR_API int DBR_GetIntermediateResults (void* barcodeReader, IntermediateResultArray** pResult)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[out]	pResult` The intermediate results returned by the SDK.

#### Return value
Returns error code. Possible return(s): DBR_OK.     
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

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

