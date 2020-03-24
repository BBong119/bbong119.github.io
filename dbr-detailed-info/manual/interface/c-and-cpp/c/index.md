---
layout: manual-interface
id: interface_c
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/c/index.md
---

# Dynamsoft Barcode Reader SDK - C API Reference

- [Methods](#methods)
- [Structs](#structs)
- [Enumerations](#enumerations)  


&nbsp; 


## Methods

### Initialize and Destroy
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_CreateInstance`](methods/initialize-and-destroy.md#dbr_createinstance) | Create an instance of Dynamsoft Barcode Reader. |
  | [`DBR_DestroyInstance`](methods/initialize-and-destroy.md#dbr_destroyinstance) | Destroy the instance of Dynamsoft Barcode Reader. |


&nbsp; 


### Decode

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_DecodeFile`](methods/decode.md#dbr_decodefile) | Decode barcodes from a specified image file. |
  | [`DBR_DecodeFileInMemory`](methods/decode.md#dbr_decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DBR_DecodeBuffer`](methods/decode.md#dbr_decodebuffer) | Decode barcodes from raw buffer. |
  | [`DBR_DecodeBase64String`](methods/decode.md#dbr_decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DBR_DecodeDIB`](methods/decode.md#dbr_decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). | 


&nbsp; 


### Parameter and Runtime Settings

#### Basic
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_SetModeArgument`](methods/parameter-and-runtime-settings-basic.md#dbr_setmodeargument) | Set argument value for the specified mode parameter. |
  | [`DBR_GetModeArgument`](methods/parameter-and-runtime-settings-basic.md#dbr_getmodeargument) | Get argument value for the specified mode parameter. |
  | [`DBR_GetRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#dbr_getruntimesettings) | Get current runtime settings. |
  | [`DBR_UpdateRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#dbr_updateruntimesettings) | Modify and update the current runtime settings. |
  | [`DBR_ResetRuntimeSettings`](methods/parameter-and-runtime-settings-basic.md#dbr_resetruntimesettings) | Reset runtime settings to default. |

#### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitRuntimeSettingsWithFile`](methods/parameter-and-runtime-settings-advanced.md#dbr_initruntimesettingswithfile) | Initialize runtime settings with the settings in a given JSON file. |
  | [`DBR_InitRuntimeSettingsWithString`](methods/parameter-and-runtime-settings-advanced.md#dbr_initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`DBR_AppendTplFileToRuntimeSettings`](methods/parameter-and-runtime-settings-advanced.md#dbr_appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`DBR_AppendTplStringToRuntimeSettings`](methods/parameter-and-runtime-settings-advanced.md#dbr_appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`DBR_GetParameterTemplateCount`](methods/parameter-and-runtime-settings-advanced.md#dbr_getparametertemplatecount) | Get the count of the parameter templates. |
  | [`DBR_GetParameterTemplateName`](methods/parameter-and-runtime-settings-advanced.md#dbr_getparametertemplatename) | Get the parameter template name by index. |
  | [`DBR_OutputSettingsToFile`](methods/parameter-and-runtime-settings-advanced.md#dbr_outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`DBR_OutputSettingsToString`](methods/parameter-and-runtime-settings-advanced.md#dbr_outputsettingstostring) | Output runtime settings to a string. |
  | [`DBR_OutputSettingsToStringPtr`](methods/parameter-and-runtime-settings-advanced.md#dbr_outputsettingstostringptr) | Output runtime settings to a string. |
  | [`DBR_FreeSettingsString`](methods/parameter-and-runtime-settings-advanced.md#dbr_freesettingsstring) | Free memory allocated for runtime settings string. |


&nbsp; 


### License
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitLicense`](methods/license.md#dbr_initlicense) | Read product key and activate the SDK. |
  | [`DBR_InitLicenseFromServer`](methods/license.md#dbr_initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`DBR_InitLicenseFromLicenseContent`](methods/license.md#dbr_initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`DBR_OutputLicenseToString`](methods/license.md#dbr_outputlicensetostring) | Output the license content to a string from the license server. |
  | [`DBR_OutputLicenseToStringPtr`](methods/license.md#dbr_outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`DBR_FreeLicenseString`](methods/license.md#dbr_freelicensestring) | Free memory allocated for the license string. |

&nbsp; 


### Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetAllTextResults`](methods/result.md#dbr_getalltextresults) | Get all recognized barcode results.  |
  | [`DBR_FreeTextResults`](methods/result.md#dbr_freetextresults) | Free memory allocated for text results. |
  | [`DBR_GetIntermediateResults`](methods/result.md#dbr_getintermediateresults) | Get intermediate results. |
  | [`DBR_FreeIntermediateResults`](methods/result.md#dbr_freeintermediateresults) | Free memory allocated for the intermediate results. |


&nbsp; 


### Status Retrieval
  
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetErrorString`](methods/status-retrieval.md#dbr_geterrorstring) | Get error message by error code. |
  | [`DBR_GetVersion`](methods/status-retrieval.md#dbr_getversion) | Get version information of SDK. |


&nbsp; 


### Video
#### Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_StartFrameDecoding`](methods/video.md#dbr_startframedecoding) | Decode barcodes from inner frame queue. |
  | [`DBR_StartFrameDecodingEx`](methods/video.md#dbr_startframedecodingex) | Decode barcodes from inner frame queue. |
  | [`DBR_AppendFrame`](methods/video.md#dbr_appendframe) | Append a frame image buffer to the inner frame queue. |
  | [`DBR_StopFrameDecoding`](methods/video.md#dbr_stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_InitFrameDecodingParameters`](methods/video.md#dbr_initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_SetErrorCallback`](methods/video.md#dbr_seterrorcallback) | Set callback function to process errors generated during frame decoding. |
  | [`DBR_SetTextResultCallback`](methods/video.md#dbr_settextresultcallback) | Set callback function to process text results generated during frame decoding. |
  | [`DBR_SetIntermediateResultCallback`](methods/video.md#dbr_setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_GetLengthOfFrameQueue`](methods/video.md#dbr_getlengthofframequeue) | Get length of current inner frame queue. |
  

&nbsp; 

  
## [Structs]({{ site.manual_interface_struct}})
- [`AztecDetails`]({{ site.manual_interface_struct}}AztecDetails.html)	
- [`Contour`]({{ site.manual_interface_struct}}Contour.html)	
- [`DBRPoint`]({{ site.manual_interface_struct}}DBRPoint.html)	
- [`DataMatrixDetails`]({{ site.manual_interface_struct}}DataMatrixDetails.html)		
- [`ExtendedResult`]({{ site.manual_interface_struct}}ExtendedResult.html)		
- [`FrameDecodingParameters`]({{ site.manual_interface_struct}}FrameDecodingParameters.html)	
- [`FurtherModes`]({{ site.manual_interface_struct}}FurtherModes.html)		
- [`ImageData`]({{ site.manual_interface_struct}}ImageData.html)		
- [`IntermediateResult`]({{ site.manual_interface_struct}}IntermediateResult.html)		
- [`IntermediateResultArray`]({{ site.manual_interface_struct}}IntermediateResultArray.html)		
- [`LineSegment`]({{ site.manual_interface_struct}}LineSegment.html)		
- [`LocalizationResult`]({{ site.manual_interface_struct}}LocalizationResult.html)		
- [`OneDCodeDetails`]({{ site.manual_interface_struct}}OneDCodeDetails.html)		
- [`PDF417Details`]({{ site.manual_interface_struct}}PDF417Details.html)		
- [`PublicRuntimeSettings`]({{ site.manual_interface_struct}}PublicRuntimeSettings.html)		
- [`QRCodeDetails`]({{ site.manual_interface_struct}}QRCodeDetails.html)		
- [`RegionDefinition`]({{ site.manual_interface_struct}}RegionDefinition.html)		
- [`RegionOfInterest`]({{ site.manual_interface_struct}}RegionOfInterest.html)		
- [`SamplingImageData`]({{ site.manual_interface_struct}}SamplingImageData.html)		
- [`TextResult`]({{ site.manual_interface_struct}}TextResult.html)		
- [`TextResultArray`]({{ site.manual_interface_struct}}TextResultArray.html)	


&nbsp; 


## [Enumerations]({{ site.manual_interface_enum}})
- [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum}}AccompanyingTextRecognitionMode.html)	
- [`BarcodeColourMode`]({{ site.manual_interface_enum}}BarcodeColourMode.html)	
- [`BarcodeComplementMode`]({{ site.manual_interface_enum}}BarcodeComplementMode.html)	
- [`BarcodeFormat`]({{ site.manual_interface_enum}}BarcodeFormat.html)	
- [`BarcodeFormat_2`]({{ site.manual_interface_enum}}BarcodeFormat_2.html)	
- [`BinarizationMode`]({{ site.manual_interface_enum}}BinarizationMode.html)	
- [`ColourClusteringMode`]({{ site.manual_interface_enum}}ColourClusteringMode.html)	
- [`ColourConversionMode`]({{ site.manual_interface_enum}}ColourConversionMode.html)	
- [`ConflictMode`]({{ site.manual_interface_enum}}ConflictMode.html)	
- [`DeformationResistingMode`]({{ site.manual_interface_enum}}DeformationResistingMode.html)	
- [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}DPMCodeReadingMode.html)	
- [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}GrayscaleTransformationMode.html)	
- [`ImagePixelFormat`]({{ site.manual_interface_enum}}ImagePixelFormat.html)	
- [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}ImagePreprocessingMode.html)	
- [`IMResultDataType`]({{ site.manual_interface_enum}}IMResultDataType.html)	
- [`IntermediateResultSavingMode`]({{ site.manual_interface_enum}}IntermediateResultSavingMode.html)	
- [`IntermediateResultType`]({{ site.manual_interface_enum}}IntermediateResultType.html)	
- [`LocalizationMode`]({{ site.manual_interface_enum}}LocalizationMode.html)	
- [`QRCodeErrorCorrectionLevel`]({{ site.manual_interface_enum}}QRCodeErrorCorrectionLevel.html)	
- [`RegionPredetectionMode`]({{ site.manual_interface_enum}}RegionPredetectionMode.html)	
- [`ResultCoordinateType`]({{ site.manual_interface_enum}}ResultCoordinateType.html)	
- [`ResultType`]({{ site.manual_interface_enum}}ResultType.html)	
- [`ScaleUpMode`]({{ site.manual_interface_enum}}ScaleUpMode.html)	
- [`TerminatePhase`]({{ site.manual_interface_enum}}TerminatePhase.html)	
- [`TextAssistedCorrectionMode`]({{ site.manual_interface_enum}}TextAssistedCorrectionMode.html)	
- [`TextFilterMode`]({{ site.manual_interface_enum}}TextFilterMode.html)	
- [`TextResultOrderMode`]({{ site.manual_interface_enum}}TextResultOrderMode.html)	
- [`TextureDetectionMode`]({{ site.manual_interface_enum}}TextureDetectionMode.html)	
