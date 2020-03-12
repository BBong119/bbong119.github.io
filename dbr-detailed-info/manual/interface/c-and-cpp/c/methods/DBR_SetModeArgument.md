
# DBR_SetModeArgument
Set argument value for the specified mode parameter.


```c
DBR_API int DBR_SetModeArgument (void* barcodeReader, const char* pModesName, const int index, const char* pArgumentName, const char* pArgumentValue, char errorMsgBuffer[], const int errorMsgBufferLen)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.   
`[in]	pModesName` The mode parameter name to set argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to set.  
`[in]	pArgumentValue` The value of the argument to set.  
`[in,out]` errorMsgBuffer	The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in] errorMsgBufferLen` The length of the allocated buffer.

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_SET_MODE_ARGUMENT_ERROR.   
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*
  
#### Remark
Check [Mode Argument List]({{ site.manual_interface_arguments }}) for available argument settings.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
PublicRuntimeSettings settings;
DBR_GetRuntimeSettings(barcodeReader, &settings);
settings.binarizationModes[0] = BM_LOCAL_BLOCK;
char errorMessage[256];
DBR_UpdateRuntimeSettings(barcodeReader, &settings, errorMessage, 256);
DBR_SetModeArgument(barcodeReader, "BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
DBR_DestroyInstance(barcodeReader);
```

