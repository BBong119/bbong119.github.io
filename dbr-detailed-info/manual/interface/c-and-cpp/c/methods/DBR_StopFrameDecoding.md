
# DBR_StopFrameDecoding
Stops the frame decoding thread created by [`DBR_StartFrameDecoding`](DBR_StartFrameDecoding.md) or [`DBR_StartFrameDecodingEx`](DBR_StartFrameDecodingEx.md).

```c
DBR_API int DBR_StopFrameDecoding (void* barcodeReader)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_STOP_DECODING_THREAD_FAILED.     
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_StopFrameDecoding(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```

