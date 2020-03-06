
# SetIntermediateResultCallback
Set callback function to process intermediate results generated during frame decoding.

```cpp
int CBarcodeReader::SetIntermediateResultCallback (CB_IntermediateResult cbFunction, void* pUser)		
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
void IntermediateResultFunction(int frameId, IntermediateResultArray *pResults, void * pUser)
{
    //TODO add your code for using intermediate results
}
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->intermediateResultTypes = IRT_ORIGINAL_IMAGE | IRT_COLOUR_CLUSTERED_IMAGE | IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->SetIntermediateResultCallback(IntermediateResultFunction, NULL);
reader->StartFrameDecoding(2, 10, 1024, 720, 720, IPF_BINARY, "");
```
