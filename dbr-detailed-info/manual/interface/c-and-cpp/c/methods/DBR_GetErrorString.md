
# DBR_GetErrorString
Get error message by error code.

```c
DBR_API const char* DBR_GetErrorString (int errorCode)	
```   

---
   
#### Parameters
`[in]	errorCode` The error code.
 

#### Return value
The error message.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = DBR_GetErrorString(errorCode);
DBR_DestroyInstance(barcodeReader);
```

