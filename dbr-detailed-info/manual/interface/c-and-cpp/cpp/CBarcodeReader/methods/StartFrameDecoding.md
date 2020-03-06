

# StartFrameDecoding

Start a new thread to decode barcodes from the inner frame queue with specific frame decoding setting passed in.

```cpp
int CBarcodeReader::StartFrameDecoding (const int maxQueueLength, const int maxResultQueueLength, const int width, const int height, const int stride, const ImagePixelFormat format, const char* pTemplateName = "") 
```   

---
   
#### Parameters
`[in]	maxQueueLength` The max number of frames waiting for decoding.  
`[in]	maxResultQueueLength` The max number of frames whose results (text result/localization result) will be kept.  
`[in]	width` The width of the frame image in pixels.  
`[in]	height` The height of the frame image in pixels.  
`[in]	stride` The stride (or scan width) of the frame image.  
`[in]	format` The image pixel format used in the image byte array.  
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
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
delete reader;
```

