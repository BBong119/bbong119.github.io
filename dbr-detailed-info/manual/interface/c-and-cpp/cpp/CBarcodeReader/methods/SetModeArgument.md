
# SetModeArgument

Set argument value for the specified mode parameter.


```cpp
int CBarcodeReader::SetModeArgument (const char* pModesName, const int index, const char* pArgumentName, const char* pArgumentValue, char errorMsgBuffer[] = NULL,  onst int errorMsgBufferLen = 0)	
```   

---
   
#### Parameters
`[in]	pModesName` The mode parameter name to set argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to set.  
`[in]	pArgumentValue` The value of the argument to set.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_SET_MODE_ARGUMENT_ERROR.  
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

#### Remark
Check [Mode Argument List]() for available argument settings.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->binarizationModes[0] = BM_LOCAL_BLOCK;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
delete pSettings;
delete reader;
```
