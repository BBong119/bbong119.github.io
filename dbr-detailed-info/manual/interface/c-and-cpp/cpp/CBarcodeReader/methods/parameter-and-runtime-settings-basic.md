---
layout: manual-interface-cpp
id: interface_cpp_parameter_basic_methods
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/cpp/CBarcodeReader/methods/parameter-and-runtime-settings-basic.md
---


# C++ API Reference - CBarcodeReader Parameter and Runtime Settings Basic Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`GetModeArgument`](#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`GetRuntimeSettings`](#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`ResetRuntimeSettings`](#resetruntimesettings) | Reset runtime settings to default. |

  ---



  
## SetModeArgument

Set argument value for the specified mode parameter.


```cpp
int CBarcodeReader::SetModeArgument (const char* pModesName, const int index, const char* pArgumentName, const char* pArgumentValue, char errorMsgBuffer[] = NULL,  onst int errorMsgBufferLen = 0)	
```   
#### Parameters
`[in]	pModesName` The mode parameter name to set argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to set.  
`[in]	pArgumentValue` The value of the argument to set.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_SET_MODE_ARGUMENT_ERROR.  
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
Check [Mode Argument List]({{ site.manual_interface_argument }}) for available argument settings.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->binarizationModes[0] = BM_LOCAL_BLOCK;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
delete pSettings;
delete reader;
```

&nbsp;





## GetModeArgument

Get argument value for the specified mode parameter.

```cpp
int CBarcodeReader::GetModeArgument (const char* pModesName, const int index, const char* pArgumentName, char valueBuffer[], const int valueBufferLen, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)	
```   
   
#### Parameters  
`[in]	pModesName` The mode parameter name to get argument.  
`[in]	index` The array index of mode parameter to indicate a specific mode.  
`[in]	pArgumentName` The name of the argument to get.  
`[in,out]	valueBuffer` The buffer is allocated by caller and the recommended length is 480. The argument value would be copied to the buffer.  
`[in]	valueBufferLen` The length of allocated buffer.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by the caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  

#### Return value
Returns error code. Possible return(s): DBR_OK; DBRERR_GET_MODE_ARGUMENT_ERROR.  
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Remark
Check [Mode Argument List]({{ site.manual_interface_argument }}) for available argument settings.

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
reader->GetRuntimeSettings(pSettings);
pSettings->binarizationModes[0] = BM_LOCAL_BLOCK;
char errorMessage[256];
char argumentValue[480];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->SetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", "1", errorMessage, 256);
reader->GetModeArgument("BinarizationModes", 0, "EnableFillBinaryVacancy", argumentValue, 480, errorMessage, 256);
delete pSettings;
delete reader;
```

&nbsp;





## GetRuntimeSettings

Get current settings and save them into a [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) struct.

```cpp
int CBarcodeReader::GetRuntimeSettings (PublicRuntimeSettings* psettings)	
```   

#### Parameters
`[in,out]	psettings`	The struct of template settings.
 
#### Return value
Returns error code (returns 0 if the function operates successfully).  
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
delete pSettings;
delete reader;
```

&nbsp;





## UpdateRuntimeSettings

Update runtime settings with a given [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) struct.

```cpp
int CBarcodeReader::UpdateRuntimeSettings (PublicRuntimeSettings* pSettings, char errorMsgBuffer[] = NULL, const int errorMsgBufferLen = 0)
```   
   
#### Parameters
`[in]	pSettings`	The struct of template settings.  
`[in,out]	errorMsgBuffer`<sub>Optional</sub> The buffer is allocated by caller and the recommended length is 256. The error message will be copied to the buffer.  
`[in]	errorMsgBufferLen`<sub>Optional</sub> The length of the allocated buffer.  
 
#### Return value
Returns error code (returns 0 if the function operates successfully).  
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deblurLevel = 9;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
delete pSettings;
delete reader;
```

&nbsp;





## ResetRuntimeSettings

Reset all parameters to default values.

```cpp
int CBarcodeReader::ResetRuntimeSettings ()
```   

#### Return value
Returns error code (returns 0 if the function operates successfully).  
*You can call [`GetErrorString`](status-retrieval.md#geterrorstring) to get detailed error message.*

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
PublicRuntimeSettings* pSettings = new PublicRuntimeSettings;
int errorCode = reader->GetRuntimeSettings(pSettings);
pSettings->deblurLevel = 9;
char errorMessage[256];
reader->UpdateRuntimeSettings(pSettings, errorMessage, 256);
reader->ResetRuntimeSettings();
delete pSettings;
delete reader;
```
