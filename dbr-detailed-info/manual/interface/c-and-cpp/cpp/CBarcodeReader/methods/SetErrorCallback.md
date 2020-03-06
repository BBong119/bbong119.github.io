
# SetErrorCallback
Set callback function to process errors generated during frame decoding.

```cpp
int CBarcodeReader::SetErrorCallback (CB_Error cbFunction, void* pUser)	
```   

---
   
#### Parameters
`[in]	cbFunction`	Callback function.   
`[in]	pUser` Customized arguments passed to your function.


#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_FRAME_DECODING_THREAD_EXISTS.     
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```cpp
void ErrorFunction(int frameId, int errorCode, void * pUser)
{
    //TODO add your code for using error code
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->SetErrorCallback(ErrorFunction, NULL);
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
```
