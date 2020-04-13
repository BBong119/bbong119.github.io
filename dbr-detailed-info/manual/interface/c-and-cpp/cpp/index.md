---
layout: manual-interface
id: interface_cpp
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/cpp/index.md
---

# Dynamsoft Barcode Reader SDK - C++ API Reference

- [`CBarcodeReader` Methods](#cbarcodereader-methods) 
- [`CBarcodeReader` Attributes](#cbarcodereader-protected-attribute) 
- [Function Pointer](#function-pointer)
- [Error Code](#error-code)
- [Structs](#structs)  
- [Enumerations](#enumerations)

     
&nbsp; 


## CBarcodeReader Methods

### Constructor and Destructor
   
  | Method               | Description |
  |----------------------|-------------|
  | [`CBarcodeReader`](CBarcodeReader/methods/constructor-and-destructor.md#cbarcodereader) | Default constructor of `CBarcodeReader` object.|
  | [`~CBarcodeReader`](CBarcodeReader/methods/constructor-and-destructor.md#~cbarcodereader) | Destructor of `CBarcodeReader` object.|
   
   
&nbsp; 
   
   
### Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](CBarcodeReader/methods/decode.md#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](CBarcodeReader/methods/decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](CBarcodeReader/methods/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](CBarcodeReader/methods/decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeDIB`](CBarcodeReader/methods/decode.md#decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). |
   
   
&nbsp; 
   
   
   
### Parameter and Runtime Settings

#### Basic
   
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`GetModeArgument`](CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`GetRuntimeSettings`](CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`ResetRuntimeSettings`](CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

#### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`GetParameterTemplateCount`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#getparametertemplatecount) | Get the count of the parameter templates. |
  | [`GetParameterTemplateName`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#getparametertemplatename) | Get the parameter template name by index. |
  | [`OutputSettingsToFile`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |
  | [`OutputSettingsToStringPtr`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#outputsettingstostringptr) | Output runtime settings to a string. |
  | [`FreeSettingsString`](CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#freesettingsstring) | Free memory allocated for runtime settings string. |
   
      
&nbsp; 

   
### License
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](CBarcodeReader/methods/license.md#initlicense) | Read product key and activate the SDK. |
  | [`InitLicenseFromServer`](CBarcodeReader/methods/license.md#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](CBarcodeReader/methods/license.md#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](CBarcodeReader/methods/license.md#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`OutputLicenseToStringPtr`](CBarcodeReader/methods/license.md#outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`FreeLicenseString`](CBarcodeReader/methods/license.md#freelicensestring) | Free memory allocated for the license string. |
   
   
&nbsp; 
   
   
### Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetAllTextResults`](CBarcodeReader/methods/result.md#getalltextresults) | Get all recognized barcode results. |
  | [`FreeTextResults`](CBarcodeReader/methods/result.md#freetextresults) | Free memory allocated for text results. |
  | [`GetIntermediateResults`](CBarcodeReader/methods/result.md#getintermediateresults) | Get intermediate results. |
  | [`FreeIntermediateResults`](CBarcodeReader/methods/result.md#freeintermediateresults) | Free memory allocated for the intermediate results. |
   
      
&nbsp; 

   
### Status Retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetErrorString`](CBarcodeReader/methods/status-retrieval.md#geterrorstring) | Get error message by error code.|
  | [`GetVersion`](CBarcodeReader/methods/status-retrieval.md#getversion) | Get version information of SDK.|
   
      
&nbsp; 

   
### Video

#### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](CBarcodeReader/methods/video.md#startframedecoding) | Decode barcodes from inner frame queue. |
   | [`StartFrameDecodingEx`](CBarcodeReader/methods/video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
   | [`AppendFrame`](CBarcodeReader/methods/video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](CBarcodeReader/methods/video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](CBarcodeReader/methods/video.md#initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](CBarcodeReader/methods/video.md#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](CBarcodeReader/methods/video.md#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](CBarcodeReader/methods/video.md#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](CBarcodeReader/methods/video.md#getlengthofframequeue) | Get length of current inner frame queue. |
 
   
&nbsp; 


## `CBarcodeReader` Protected Attribute
  
  | Attribute            | Description |
  |----------------------|-------------|
  | [`m_pBarcodeReader`](CBarcodeReader/attribute/m_pBarcodeReader.md)  | |
  
   
&nbsp; 

## Function Pointer

  | Function | Description |
  |----------|-------------|
  | [`CB_Error`](function-pointer/index.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-pointer/index.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-pointer/index.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 

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
- [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#accompanyingtextrecognitionmode)	
- [`BarcodeColourMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#barcodecolourmode)	
- [`BarcodeComplementMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#barcodecomplementmode)	
- [`BarcodeFormat`]({{ site.manual_interface_enum}}format-enum.html#barcodeformat)	
- [`BarcodeFormat_2`]({{ site.manual_interface_enum}}format-enum.html#barcodeformat_2)	
- [`BinarizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#binarizationmode)
- [`ClarityCalculationMethod`]({{ site.manual_interface_enum }}frame-decoding.html#claritycalculationmethod) 
- [`ClarityFilterMode`]({{ site.manual_interface_enum }}frame-decoding.html#clarityfiltermode) 
- [`ColourClusteringMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourclusteringmode)	
- [`ColourConversionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourconversionmode)	
- [`ConflictMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#conflictmode)	
- [`DeformationResistingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#deformationresistingmode)	
- [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#dpmcodereadingmode)	
- [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#grayscaletransformationmode)	
- [`ImagePixelFormat`]({{ site.manual_interface_enum}}other-enum.html#imagepixelformat)	
- [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#imagepreprocessingmode)	
- [`IMResultDataType`]({{ site.manual_interface_enum}}result-enum.html#imresultdatatype)	
- [`IntermediateResultSavingMode`]({{ site.manual_interface_enum}}result-enum.html#intermediateresultsavingmode)	
- [`IntermediateResultType`]({{ site.manual_interface_enum}}result-enum.html#intermediateresulttype)	
- [`LocalizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#localizationmode)	
- [`PDFReadingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#pdfreadingmode)   
- [`QRCodeErrorCorrectionLevel`]({{ site.manual_interface_enum}}other-enum.html#qrcodeerrorcorrectionlevel)	
- [`RegionPredetectionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#regionpredetectionmode)	
- [`ResultCoordinateType`]({{ site.manual_interface_enum}}result-enum.html#resultcoordinatetype)	
- [`ResultType`]({{ site.manual_interface_enum}}result-enum.html#resulttype)	
- [`ScaleUpMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#scaleupmode)	
- [`TerminatePhase`]({{ site.manual_interface_enum}}parameter-mode-enum.html#terminatephase)	
- [`TextAssistedCorrectionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#textassistedcorrectionmode)	
- [`TextFilterMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#textfiltermode)	
- [`TextResultOrderMode`]({{ site.manual_interface_enum}}result-enum.html#textresultordermode)	
- [`TextureDetectionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#texturedetectionmode)

