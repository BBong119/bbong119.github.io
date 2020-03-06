
# DBR_SetTextResultCallback
Set callback function to process text results generated during frame decoding.

```c
DBR_API int DBR_SetTextResultCallback (void* barcodeReader, CB_TextResult cbFunction, void* pUser)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	cbFunction` Callback function.  
`[in]	pUser`Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.  
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void TextResultFunction(int frameId, TextResultArray *pResults, void * pUser)
{
    //TODO add your code for using test results
}
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_SetTextResultCallback(barcodeReader, TextResultFunction, NULL);
DBR_StartFrameDecoding(barcodeReader, 2, 10, 1024, 720, 720, IPF_BINARY, "");
```

