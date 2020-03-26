---
layout: manual-interface
id: interface_c
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/c/index.md
---

# Dynamsoft Barcode Reader SDK - C API Reference

- [Methods](#methods)
- [Functon Pointer](#function-pointer)
- [Error Code](#error-code)
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

## Function Pointer
  | Function | Description |
  |----------|-------------|
  | [`CB_Error`](function-points/index.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-points/index.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-points/index.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 

&nbsp;

## Error Code

  | Erorr Code | Value | Description |
  |------------|-------|-------------|
  | `DBR_OK` | 0 | Successful. |
  | `DBRERR_UNKNOWN` | -10000 | Unknown error. |
  | `DBRERR_NO_MEMORY` | -10001 | Not enough memory to perform the operation. |
  | `DBRERR_NULL_POINTER` | -10002 | Null pointer. |
  | `DBRERR_LICENSE_INVALID` | -10003 | The license is invalid. |
  | `DBRERR_LICENSE_EXPIRED` | -10004 | The license has expired. |
  | `DBRERR_FILE_NOT_FOUND` | -10005 | The file is not found. |
  | `DBRERR_FILETYPE_NOT_SUPPORTED` | -10006 | The file type is not supported. |
  | `DBRERR_BPP_NOT_SUPPORTED` | -10007 | The BPP (Bits Per Pixel) is not supported. |
  | `DBRERR_INDEX_INVALID` | -10008 | The index is invalid. |
  | `DBRERR_BARCODE_FORMAT_INVALID` | -10009 | The barcode format is invalid. |
  | `DBRERR_CUSTOM_REGION_INVALID` | -10010 | The input region value parameter is invalid. |
  | `DBRERR_MAX_BARCODE_NUMBER_INVALID` | -10011 | The maximum barcode number is invalid. |
  | `DBRERR_IMAGE_READ_FAILED` | -10012 | Failed to read the image. |
  | `DBRERR_TIFF_READ_FAILED` | -10013 | Failed to read the TIFF image. |
  | `DBRERR_QR_LICENSE_INVALID` |	-10016 | The QR Code license is invalid. | 
  | `DBRERR_1D_LICENSE_INVALID` | -10017 | The 1D Barcode license is invalid. |
  | `DBRERR_DIB_BUFFER_INVALID` | -10018 | The DIB (Device-Independent Bitmaps) buffer is invalid. |
  | `DBRERR_PDF417_LICENSE_INVALID` | -10019 | The PDF417 license is invalid. |
  | `DBRERR_DATAMATRIX_LICENSE_INVALID` | -10020 | The DATAMATRIX license is invalid. |
  | `DBRERR_PDF_READ_FAILED` | -10021 | Failed to read the PDF file. |
  | `DBRERR_PDF_DLL_MISSING` | -10022 | The PDF DLL is missing. |
  | `DBRERR_PAGE_NUMBER_INVALID` | -10023 | The page number is invalid. |
  | `DBRERR_CUSTOM_SIZE_INVALID` | -10024 | The custom size is invalid. |
  | `DBRERR_CUSTOM_MODULESIZE_INVALID` | -10025 | The custom module size is invalid. |
  | `DBRERR_RECOGNITION_TIMEOUT` | -10026 | Recognition timeout. |
  | `DBRERR_JSON_PARSE_FAILED` | -10030 | Failed to parse JSON string. |
  | `DBRERR_JSON_TYPE_INVALID` | -10031 | The value type is invalid. |
  | `DBRERR_JSON_KEY_INVALID` | -10032 | The key is invalid. |
  | `DBRERR_JSON_VALUE_INVALID` | -10033 | The value is invalid or out of range. |
  | `DBRERR_JSON_NAME_KEY_MISSING` | -10034 | The mandatory key "Name" is missing. |
  | `DBRERR_JSON_NAME_VALUE_DUPLICATED` | -10035 | The value of the key "Name" is duplicated. |
  | `DBRERR_TEMPLATE_NAME_INVALID` | -10036 | The template name is invalid. |
  | `DBRERR_JSON_NAME_REFERENCE_INVALID` | -10037 | The name reference is invalid. |
  | `DBRERR_PARAMETER_VALUE_INVALID` | -10038 | The parameter value is invalid or out of range. |
  | `DBRERR_DOMAIN_NOT_MATCHED` | -10039 | The domain of your current site does not match the domain bound in the current product key. |
  | `DBRERR_RESERVEDINFO_NOT_MATCHED` |	-10040 | The reserved info does not match the reserved info bound in the current product key. |
  | `DBRERR_AZTEC_LICENSE_INVALID` |	-10041	 | The AZTEC license is invalid. |
  | `DBRERR_LICENSE_DLL_MISSING` | -10042 | The License DLL is missing. |
  | `DBRERR_LICENSEKEY_NOT_MATCHED` | -10043 | The license key does not match the license content. |
  | `DBRERR_REQUESTED_FAILED` | -10044 | Failed to request the license content. |
  | `DBRERR_LICENSE_INIT_FAILED` | -10045 | Failed to init the license. |
  | `DBRERR_PATCHCODE_LICENSE_INVALID` | -10046 | The Patchcode license is invalid. |
  | `DBRERR_POSTALCODE_LICENSE_INVALID` | -10047 | The Postal code license is invalid. |
  | `DBRERR_DPM_LICENSE_INVALID` | -10048 | The DPM license is invalid. |
  | `DBRERR_FRAME_DECODING_THREAD_EXISTS` | -10049 | The frame decoding thread already exists. |
  | `DBRERR_STOP_DECODING_THREAD_FAILED` | -10050 | Failed to stop the frame decoding thread. |
  | `DBRERR_SET_MODE_ARGUMENT_ERROR` | -10051 | Failed to set mode's argument. |
  | `DBRERR_LICENSE_CONTENT_INVALID` | -10052 | The license content is invalid. |
  | `DBRERR_LICENSE_KEY_INVALID` | -10053 | The license key is invalid. |
  | `DBRERR_LICENSE_DEVICE_RUNS_OUT` | -10054 | The device number in the license key runs out. |
  | `DBRERR_GET_MODE_ARGUMENT_ERROR` | -10055 | Failed to get mode's argument. |
  | `DBRERR_IRT_LICENSE_INVALID` | -10056 | The Intermediate Result Types license is invalid. |
  | `DBRERR_MAXICODE_LICENSE_INVALID` | -10057 | The Maxicode license is invalid. |
  | `DBRERR_GS1_DATABAR_LICENSE_INVALID` | -10058 | The GS1 Databar license is invalid. |
  | `DBRERR_GS1_COMPOSITE_LICENSE_INVALID` | -10059 | The GS1 Composite code license is invalid. |
		

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
