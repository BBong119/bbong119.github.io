

# GetModeArgument

Get argument value for the specified mode parameter.


```cpp
int CBarcodeReader::GetModeArgument (const char* pModesName, const int index, const char* pArgumentName, char valueBuffer[], const int valueBufferLen, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)	
```   

---
   
#### Parameters  
`[in]	pModesName` The mode parameter name to get argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to get.  
`[in,out]	valueBuffer` The buffer is allocated by caller and the recommended length is 480. The argument value would be copied to the buffer.  
`[in]	valueBufferLen` The length of allocated buffer.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_GET_MODE_ARGUMENT_ERROR.  
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
char argumentValue[480];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
reader->GetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", argumentValue, 480, errorMessage, 256);
delete pSettings;
delete reader;
```
