
# GetRuntimeSettings

Get current settings and save them into a [`PublicRuntimeSettings`]() struct.


```cpp
int CBarcodeReader::GetRuntimeSettings (PublicRuntimeSettings* psettings)	
```   

---
   
#### Parameters
`[in,out]	psettings`	The struct of template settings.
 
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
delete pSettings;
delete reader;
```
