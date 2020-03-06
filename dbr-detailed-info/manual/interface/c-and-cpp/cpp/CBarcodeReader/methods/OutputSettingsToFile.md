
# OutputSettingsToFile
Output runtime settings to a settings file (JSON file).

```cpp
int CBarcodeReader::OutputSettingsToFile (const char* pFilePath, const char* pSettingsName)	
```   

---
   
#### Parameters
`[in]	pFilePath` The output file path which stores current settings.  
`[in]	pSettingsName` A unique name for declaring current runtime settings.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
reader->OutputSettingsToFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\CurrentRuntimeSettings.json", "currentRuntimeSettings");
delete reader;
```
