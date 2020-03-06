# Dynamsoft Barcode Reader SDK - C++ API Reference

`CBarcodeReader` -- Decode barcodes.
- [Methods](#CBarcodeReader-Methods)
- [Attributes](#CBarcodeReader-Protected-Attribute)
  
## `CBarcodeReader` Methods  

### Constructor and Destructor
  | Method               | Description |
  |----------------------|-------------|
  | [`CBarcodeReader`](CBarcodeReader/methods/CBarcodeReader.md) | Default constructor of `CBarcodeReader` object.|
  | [`~CBarcodeReader`](CBarcodeReader/methods/~CBarcodeReader.md) | Destructor of `CBarcodeReader` object.|
   
   
   
### Decode 
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](CBarcodeReader/methods/DecodeFile.md) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](CBarcodeReader/methods/DecodeFileInMemory.md) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](CBarcodeReader/methods/DecodeBuffer.md) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](CBarcodeReader/methods/DecodeBase64String.md) | Decode barcodes from a base64 encoded string. |
  | [`DecodeDIB`](CBarcodeReader/methods/DecodeDIB.md) | Decode barcode from a handle of device-independent bitmap (DIB). |
   
   
   
   
### Parameter and Runtime Settings

#### Basic
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](CBarcodeReader/methods/SetModeArgument.md) | Set argument value for the specified mode parameter. |
  | [`GetModeArgument`](CBarcodeReader/methods/GetModeArgument.md) | Get argument value for the specified mode parameter. |
  | [`GetRuntimeSettings`](CBarcodeReader/methods/GetRuntimeSettings.md) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](CBarcodeReader/methods/UpdateRuntimeSettings.md) | Modify and update the current runtime settings. |
  | [`ResetRuntimeSettings`](CBarcodeReader/methods/ResetRuntimeSettings.md) | Reset runtime settings to default. |

#### Advanced
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](CBarcodeReader/methods/InitRuntimeSettingsWithFile.md)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](CBarcodeReader/methods/InitRuntimeSettingsWithString.md) | Initialize runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](CBarcodeReader/methods/AppendTplFileToRuntimeSettings.md) | Append a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](CBarcodeReader/methods/AppendTplStringToRuntimeSettings.md) | Append a new template string to the current runtime settings. |
  | [`GetParameterTemplateCount`](CBarcodeReader/methods/GetParameterTemplateCount.md) | Get the count of the parameter templates. |
  | [`GetParameterTemplateName`](CBarcodeReader/methods/GetParameterTemplateName.md) | Get the parameter template name by index. |
  | [`OutputSettingsToFile`](CBarcodeReader/methods/OutputSettingsToFile.md) | Output runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](CBarcodeReader/methods/OutputSettingsToString.md) | Output runtime settings to a string. |
  | [`OutputSettingsToStringPtr`](CBarcodeReader/methods/OutputSettingsToStringPtr.md) | Output runtime settings to a string. |
  | [`FreeSettingsString`](CBarcodeReader/methods/FreeSettingsString.md) | Free memory allocated for runtime settings string. |
   
   
   
### License
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](CBarcodeReader/methods/InitLicense.md) | Read product key and activate the SDK. |
  | [`InitLicenseFromServer`](CBarcodeReader/methods/InitLicenseFromServer.md) | Initialize license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](CBarcodeReader/methods/InitLicenseFromLicenseContent.md) | Initialize license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](CBarcodeReader/methods/OutputLicenseToString.md) | Output the license content to a string from the license server. |
  | [`OutputLicenseToStringPtr`](CBarcodeReader/methods/OutputLicenseToStringPtr.md) | Output the license content to a string from the license server. |
  | [`FreeLicenseString`](CBarcodeReader/methods/FreeLicenseString.md) | Free memory allocated for the license string. |
   
   
   
### Result
  | Method               | Description |
  |----------------------|-------------|
  | [`GetAllTextResults`](CBarcodeReader/methods/GetAllTextResults.md) | Get all recognized barcode results. |
  | [`FreeTextResults`](CBarcodeReader/methods/FreeTextResults.md) | Free memory allocated for text results. |
  | [`GetIntermediateResults`](CBarcodeReader/methods/GetIntermediateResults.md) | Get intermediate results. |
  | [`FreeIntermediateResults`](CBarcodeReader/methods/FreeIntermediateResults.md) | Free memory allocated for the intermediate results. |
   
   
   
### Status Retrieval
  | Method               | Description |
  |----------------------|-------------|
  | [`GetErrorString`](CBarcodeReader/methods/GetErrorString.md) | Get error message by error code.|
  | [`GetVersion`](CBarcodeReader/methods/GetVersion.md) | Get version information of SDK.|
   
   
   
### Video

#### Decode   
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](CBarcodeReader/methods/StartFrameDecoding.md) | Decode barcodes from inner frame queue. |
   | [`StartFrameDecodingEx`](CBarcodeReader/methods/StartFrameDecodingEx.md) | Decode barcodes from inner frame queue. |
   | [`AppendFrame`](CBarcodeReader/methods/AppendFrame.md) | Append a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](CBarcodeReader/methods/StopFrameDecoding.md) | Stop thread used for frame decoding. |

#### Parameter   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](CBarcodeReader/methods/InitFrameDecodingParameters.md) | Initialize frame decoding parameter. |

#### Callback   
   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](CBarcodeReader/methods/SetErrorCallback.md) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](CBarcodeReader/methods/SetTextResultCallback.md) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](CBarcodeReader/methods/SetIntermediateResultCallback.md) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](CBarcodeReader/methods/GetLengthOfFrameQueue.md) | Get length of current inner frame queue. |
 


## `CBarcodeReader` Protected Attribute
  | Attribute            | Description |
  |----------------------|-------------|
  | [`m_pBarcodeReader`](CBarcodeReader/attribute/m_pBarcodeReader.md)  | |

