
# SetTextResultCallback
Set callback function to process text results generated during frame decoding.

```cpp
int CBarcodeReader::SetTextResultCallback (CB_TextResult cbFunction, void* pUser)	
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
void TextResultFunction(int frameId, TextResultArray *pResults, void * pUser)
{
    //TODO add your code for using text results
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
reader->SetTextResultCallback(TextResultFunction, NULL);
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
```
