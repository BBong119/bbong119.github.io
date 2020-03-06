

# ResetRuntimeSettings

Reset all parameters to default values.


```cpp
int CBarcodeReader::ResetRuntimeSettings ()
```   

---

 
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
reader->ResetRuntimeSettings();
delete pSettings;
delete reader;
```
