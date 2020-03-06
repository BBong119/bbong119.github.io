

# UpdateRuntimeSettings

Update runtime settings with a given [`PublicRuntimeSettings`]() struct.


```cpp
int CBarcodeReader::UpdateRuntimeSettings (PublicRuntimeSettings* pSettings, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   

---
   
#### Parameters
`[in]	pSettings`	The struct of template settings.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  
 
#### Return value
Returns error code (returns 0 if the function operates successfully).  
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*


---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deblurLevel = 9;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
delete pSettings;
delete reader;
```
