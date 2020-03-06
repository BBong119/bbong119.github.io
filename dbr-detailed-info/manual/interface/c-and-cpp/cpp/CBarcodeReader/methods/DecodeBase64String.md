# DecodeBase64String

Decode barcode from an image file encoded as a base64 string.

```cpp
int CBarcodeReader::DecodeBase64String (const char* pBase64String, const char* pTemplateName = "")	
```   

---
   
#### Parameters
`[in]	pBase64String`	A base64 encoded string that represents an image.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

#### Remark
If no template name is specified, current runtime settings will be used.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
unsigned char* pFileBytes;
int nFileSize = 0;
GetFileStream("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pFileBytes, &nFileSize);
char* strBase64String;
GetFileBase64String(pBufferBytes, &strBase64String);
int errorCode = reader->DecodeBase64String(strBase64String, "");
delete reader;
```

