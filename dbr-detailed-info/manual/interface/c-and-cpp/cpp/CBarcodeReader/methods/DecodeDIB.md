# DecodeDIB

Decode barcode from a handle of device-independent bitmap (DIB).

```cpp
int CBarcodeReader::DecodeDIB (const HANDLE hDIB, const char* pszTemplateName = "")	
```   

---
   
#### Parameters
`[in]	hDIB` Handle of the device-independent bitmap.    
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
HANDLE pDIB;
GetDIBFromImage("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pDIB);
int errorCode = reader->DecodeDIB(pDIB "");
delete reader;
```

