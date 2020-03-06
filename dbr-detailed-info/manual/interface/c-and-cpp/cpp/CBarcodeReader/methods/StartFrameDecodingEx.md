
# StartFrameDecodingEx

Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting defined in `FrameDecodingParameters` struct.

```cpp
int CBarcodeReader::StartFrameDecodingEx (FrameDecodingParameters parameters, const char* pTemplateName = "")	
```   

---
   
#### Parameters
`[in] parameters` The frame decoding parameters.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID.   
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*  
   
#### Remark
If no template name is specified, current runtime settings will be used.

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

