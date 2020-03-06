
# DBR_StartFrameDecodingEx
Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting defined in [`FrameDecodingParameters`]() struct.

```c
DBR_API int DBR_StartFrameDecodingEx (void* barcodeReader, FrameDecodingParameters parameters, const char* pTemplateName)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	parameters` The frame decoding parameters.  
`[in]	pTemplateName` The template name.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID; DBRERR_NULL_POINTER.  
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
FrameDecodingParameters parameters;
int errorCode = DBR_InitFrameDecodingParameters(barcodeReader, &parameters);
if(errorCode == DBR_OK)
{
    parameters.maxQueueLength = 3;
    parameters.maxResultQueueLength = 10;
    parameters.width = 20;
    parameters.height = 30;
    parameters.stride = 10;
    parameters.imagePixelFormat = IPF_GRAYSCALED;
    parameters.region.regionMeasuredByPercentage = 1;
    parameters.region.regionTop = 0;
    parameters.region.regionBottom = 100;
    parameters.region.regionLeft = 0;
    parameters.region.regionRight = 100;
    parameters.threshold = 0.1;
    parameters.fps = 0;
    int errorCode = DBR_StartFrameDecodingEx(barcodeReader, parameters, "");
    DBR_DestroyInstance(barcodeReader);
}
```


