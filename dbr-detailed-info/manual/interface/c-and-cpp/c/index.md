---
layout: manual-interface
id: interface_c
sourceCodeUrl: https://github.com/BBong119/bbong119.github.io/blob/master/dbr-detailed-info/manual/interface/c-and-cpp/c/index.md
---

# Dynamsoft Barcode Reader SDK - C API Reference

## Methods  

### Initialize and Destroy   
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_CreateInstance`](methods/DBR_CreateInstance.md) | Create an instance of Dynamsoft Barcode Reader. |
  | [`DBR_DestroyInstance`](methods/DBR_DestroyInstance.md) | Destroy the instance of Dynamsoft Barcode Reader. |


### Decode   

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_DecodeFile`](methods/DBR_DecodeFile.md) | Decode barcodes from a specified image file. |
  | [`DBR_DecodeFileInMemory`](methods/DBR_DecodeFileInMemory.md) | Decode barcodes from an image file in memory. |
  | [`DBR_DecodeBuffer`](methods/DBR_DecodeBuffer.md) | Decode barcodes from raw buffer. |
  | [`DBR_DecodeBase64String`](methods/DBR_DecodeBase64String.md) | Decode barcodes from a base64 encoded string. |
  | [`DBR_DecodeDIB`](methods/DBR_DecodeDIB.md) | Decode barcode from a handle of device-independent bitmap (DIB). | 

### Parameter and Runtime Settings

#### Basic  
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_SetModeArgument`](methods/DBR_SetModeArgument.md) | Set argument value for the specified mode parameter. |
  | [`DBR_GetModeArgument`](methods/DBR_GetModeArgument.md) | Get argument value for the specified mode parameter. |
  | [`DBR_GetRuntimeSettings`](methods/DBR_GetRuntimeSettings.md) | Get current runtime settings. |
  | [`DBR_UpdateRuntimeSettings`](methods/DBR_UpdateRuntimeSettings.md) | Modify and update the current runtime settings. |
  | [`DBR_ResetRuntimeSettings`](methods/DBR_ResetRuntimeSettings.md) | Reset runtime settings to default. |

#### Advanced   
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitRuntimeSettingsWithFile`](methods/DBR_InitRuntimeSettingsWithFile.md) | Initialize runtime settings with the settings in a given JSON file. |
  | [`DBR_InitRuntimeSettingsWithString`](methods/DBR_InitRuntimeSettingsWithString.md) | Initialize runtime settings with the settings in a given JSON string. |
  | [`DBR_AppendTplFileToRuntimeSettings`](methods/DBR_AppendTplFileToRuntimeSettings.md) | Append a new template file to the current runtime settings. |
  | [`DBR_AppendTplStringToRuntimeSettings`](methods/DBR_AppendTplStringToRuntimeSettings.md) | Append a new template string to the current runtime settings. |
  | [`DBR_GetParameterTemplateCount`](methods/DBR_GetParameterTemplateCount.md) | Get the count of the parameter templates. |
  | [`DBR_GetParameterTemplateName`](methods/DBR_GetParameterTemplateName.md) | Get the parameter template name by index. |
  | [`DBR_OutputSettingsToFile`](methods/DBR_OutputSettingsToFile.md) | Output runtime settings to a settings file (JSON file). |
  | [`DBR_OutputSettingsToString`](methods/DBR_OutputSettingsToString.md) | Output runtime settings to a string. |
  | [`DBR_OutputSettingsToStringPtr`](methods/DBR_OutputSettingsToStringPtr.md) | Output runtime settings to a string. |
  | [`DBR_FreeSettingsString`](methods/DBR_FreeSettingsString.md) | Free memory allocated for runtime settings string. |



### License   
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](methods/DBR_InitLicense.md) | Read product key and activate the SDK. |
  | [`DBR_InitLicenseFromServer`](methods/DBR_InitLicenseFromServer.md) | Initialize license and connect to the specified server for online verification. |
  | [`DBR_InitLicenseFromLicenseContent`](methods/DBR_InitLicenseFromLicenseContent.md) | Initialize license from the license content on client machine for offline verification. |
  | [`DBR_OutputLicenseToString`](methods/DBR_OutputLicenseToString.md) | Output the license content to a string from the license server. |
  | [`DBR_OutputLicenseToStringPtr`](methods/DBR_OutputLicenseToStringPtr.md) | Output the license content to a string from the license server. |
  | [`DBR_FreeLicenseString`](methods/DBR_FreeLicenseString.md) | Free memory allocated for the license string. |

### Result   
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetAllTextResults`](methods/DBR_GetAllTextResults.md) | Get all recognized barcode results.  |
  | [`DBR_FreeTextResults`](methods/DBR_FreeTextResults.md) | Free memory allocated for text results. |
  | [`DBR_GetIntermediateResults`](methods/DBR_GetIntermediateResults.md) | Get intermediate results. |
  | [`DBR_FreeIntermediateResults`](methods/DBR_FreeIntermediateResults.md) | Free memory allocated for the intermediate results. |


### Status Retrieval   
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](methods/DBR_GetErrorString.md) | Get error message by error code. |
  | [`DBR_GetVersion`](methods/DBR_GetVersion.md) | Get version information of SDK. |


### Video
#### Decode  
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_StartFrameDecoding`](methods/DBR_StartFrameDecoding.md) | Decode barcodes from inner frame queue. |
  | [`DBR_StartFrameDecodingEx`](methods/DBR_StartFrameDecodingEx.md) | Decode barcodes from inner frame queue. |
  | [`DBR_AppendFrame`](methods/DBR_AppendFrame.md) | Append a frame image buffer to the inner frame queue. |
  | [`DBR_StopFrameDecoding`](methods/DBR_StopFrameDecoding.md) | Stop thread used for frame decoding. |

#### Parameter   
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitFrameDecodingParameters`](methods/DBR_InitFrameDecodingParameters.md) | Initialize frame decoding parameter. |

#### Callback   
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_SetErrorCallback`](methods/DBR_SetErrorCallback.md) | Set callback function to process errors generated during frame decoding. |
  | [`DBR_SetTextResultCallback`](methods/DBR_SetTextResultCallback.md) | Set callback function to process text results generated during frame decoding. |
  | [`DBR_SetIntermediateResultCallback`](methods/DBR_SetIntermediateResultCallback.md) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval   
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetLengthOfFrameQueue`](methods/DBR_GetLengthOfFrameQueue.md) | Get length of current inner frame queue. |
