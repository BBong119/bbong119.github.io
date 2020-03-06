

# AppendTplFileToRuntimeSettings

Append a new template file to the current runtime settings.

```cpp
int CBarcodeReader::AppendTplFileToRuntimeSettings (const char* pFilePath, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   

---
   
#### Parameters
`[in]	pFilePath` The path of the settings file.  
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings with the new template.  
`[in,out] errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessage[256];
reader->AppendTplFileToRuntimeSettings("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_IGNORE, errorMessage, 256);
delete reader;
```
