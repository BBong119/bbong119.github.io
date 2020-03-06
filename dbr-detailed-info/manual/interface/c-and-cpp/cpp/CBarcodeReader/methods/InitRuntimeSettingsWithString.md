

# InitRuntimeSettingsWithString

Initialize runtime settings with the settings in a given JSON string.


```cpp
int CBarcodeReader::InitRuntimeSettingsWithString (const char* content, const ConflictMode conflictMode, char errorMsgBuffer[] = NULL, int errorMsgBufferLen = 0)	
```   

---
   
#### Parameters
`[in]	content` A JSON string that represents the content of the settings.   
`[in]	conflictMode` The parameter setting mode, which decides whether to inherit parameters from previous template setting or to overwrite previous settings and replace with the new template.  
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
char errorMessage[256];
reader->InitRuntimeSettingsWithString("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_OVERWRITE, errorMessage, 256);
delete reader;
```
