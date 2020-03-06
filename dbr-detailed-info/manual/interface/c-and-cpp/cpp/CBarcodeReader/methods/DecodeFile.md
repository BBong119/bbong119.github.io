# DecodeFile

Decode barcodes from a specified image file.

```cpp
int CBarcodeReader::DecodeFile (const char* pFileName, const char* pTemplateName = "")	
```   

---
   
#### Parameters
`[in] pFileName`	A string defining the file name.   
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
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
delete reader;
```
