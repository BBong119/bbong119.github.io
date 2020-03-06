
# InitFrameDecodingParameters

Initialize frame decoding parameters with default values.

```cpp
int CBarcodeReader::InitFrameDecodingParameters (FrameDecodingParameters* pParameters)
```   

---
   
#### Parameters
`[in,out] pParameters` The frame decoding parameters.

#### Return value
Returns error code. Possible return(s): DBR_OK.   
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*


---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
FrameDecodingParameters parameters;
int errorCode = reader->InitFrameDecodingParameters(&parameters);
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
    reader->StartFrameDecodingEx(parameters, "");
}
delete reader;
```
