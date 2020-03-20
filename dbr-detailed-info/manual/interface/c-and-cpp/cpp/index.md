---
layout: manual-interface
id: interface_cpp
sourceCodeUrl: https://github.com/BBong119/bbong119.github.io/blob/master/dbr-detailed-info/manual/interface/c-and-cpp/cpp/index.md
---

# Dynamsoft Barcode Reader SDK - C++ API Reference

- [`CBarcodeReader` Methods](#cbarcodereader-methods) 
- [`CBarcodeReader` Attributes](#cbarcodereader-protected-attribute) 
- [Struct](#struct)  
- [Enumeration](#enumeration)

     
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

