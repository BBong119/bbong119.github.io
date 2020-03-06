
# GetParameterTemplateName
Gets the parameter template name by index.

```cpp
int CBarcodeReader::GetParameterTemplateName (const int index, char nameBuffer[], int nameBufferLen)	
```  

---
   
#### Parameters
`[in]	index` The index of the parameter template array.  
`[in,out]` nameBuffer	The buffer is allocated by caller and the recommended nameBufferLen is 256. The template name will be copied to the buffer.  
`[in]	nameBufferLen` The length of allocated buffer.  

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
int currentTemplateCount = reader->GetParameterTemplateCount();
int templateIndex = 1;
// notice that the value of 'templateIndex' should less than currentTemplateCount.
char templateName[256];
reader->GetParameterTemplateName(templateIndex, templateName, 256);
delete reader;
```
