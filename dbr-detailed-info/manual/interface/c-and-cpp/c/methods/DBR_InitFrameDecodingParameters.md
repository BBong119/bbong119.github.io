
# DBR_InitFrameDecodingParameters
Initialize frame decoding parameters with default values.

```c
DBR_API int DBR_InitFrameDecodingParameters (void* barcodeReader, FrameDecodingParameters* pParameters)	
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in,out]	pParameters` The frame decoding parameters.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_NULL_POINTER.  
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
}
DBR_DestroyInstance(barcodeReader);
```
