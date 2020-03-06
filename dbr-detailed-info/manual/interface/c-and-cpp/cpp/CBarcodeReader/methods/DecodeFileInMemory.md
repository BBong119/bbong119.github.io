# DecodeFileInMemory

Decode barcodes from an image file in memory.   

```cpp
int CBarcodeReader::DecodeFileInMemory (const unsigned char* pFileBytes, int fileSize, const char* pTemplateName = "")	
```   

---
   
#### Parameters
`[in]	pFileBytes` The image file bytes in memory.   
`[in]	fileSize` The length of the file bytes in memory.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [GetErrorString()](GetErrorString.md) to get detailed error message.*   

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
int errorCode = reader->DecodeFileInMemory(pFileBytes, nFileSize, "");
delete reader;
```

