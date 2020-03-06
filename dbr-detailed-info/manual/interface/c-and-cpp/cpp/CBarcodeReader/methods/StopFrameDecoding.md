
# StopFrameDecoding

Stop the frame decoding thread created by [`StartFrameDecoding`](StartFrameDecoding.md) or [`StartFrameDecodingEx`](StartFrameDecodingEx.md).

```cpp
int CBarcodeReader::AppendFrame (unsigned char* pBufferBytes) 
```   

---
   
#### Parameters
`[in]	pBufferBytes` The array of bytes which contain the image data.

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS; DBRERR_PARAMETER_VALUE_INVALID.   
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
int errorCode = reader->StopFrameDecoding();
delete reader;
```

