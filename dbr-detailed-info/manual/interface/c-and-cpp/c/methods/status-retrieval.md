---
layout: manual-interface-c
id: interface_c_status_retrieval_methods
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/c/methods/status-retrieval.md
---

# C API Reference - Status Retrieval Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](#dbr_geterrorstring) | Get error message by error code. |
  | [`DBR_GetVersion`](#dbr_getversion) | Get version information of SDK. |
  
---





# DBR_GetErrorString
Get error message by error code.

```c
DBR_API const char* DBR_GetErrorString (int errorCode)	
```   
   
#### Parameters
`[in]	errorCode` The error code.
 

#### Return value
The error message.

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = DBR_GetErrorString(errorCode);
DBR_DestroyInstance(barcodeReader);
```

&nbsp;





# DBR_GetVersion
Get version information of SDK.

```c
DBR_API const char* DBR_GetVersion ()
```   

#### Return value
The version information string.

#### Code Snippet
```c
const char* versionInfo = DBR_GetVersion();
```

