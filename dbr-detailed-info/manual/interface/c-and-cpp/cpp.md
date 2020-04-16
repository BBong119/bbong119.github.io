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
  | [`CBarcodeReader`](cpp/CBarcodeReader/methods/constructor-and-destructor.md#cbarcodereader) | Default constructor of `CBarcodeReader` object.|
  | [`~CBarcodeReader`](cpp/CBarcodeReader/methods/constructor-and-destructor.md#~cbarcodereader) | Destructor of `CBarcodeReader` object.|
   
   
&nbsp; 
   
   
### Decode
   
  | Method               | Description |
  |----------------------|-------------|
  | [`DecodeFile`](cpp/CBarcodeReader/methods/decode.md#decodefile) | Decode barcodes from a specified image file. |
  | [`DecodeFileInMemory`](cpp/CBarcodeReader/methods/decode.md#decodefileinmemory) | Decode barcodes from an image file in memory. |
  | [`DecodeBuffer`](cpp/CBarcodeReader/methods/decode.md#decodebuffer) | Decode barcodes from raw buffer. |
  | [`DecodeBase64String`](cpp/CBarcodeReader/methods/decode.md#decodebase64string) | Decode barcodes from a base64 encoded string. |
  | [`DecodeDIB`](cpp/CBarcodeReader/methods/decode.md#decodedib) | Decode barcode from a handle of device-independent bitmap (DIB). |
   
   
&nbsp; 
   
   
   
### Parameter and Runtime Settings

#### Basic
   
  | Method               | Description |
  |----------------------|-------------|
  | [`SetModeArgument`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#setmodeargument) | Set argument value for the specified mode parameter. |
  | [`GetModeArgument`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#getmodeargument) | Get argument value for the specified mode parameter. |
  | [`GetRuntimeSettings`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#getruntimesettings) | Get current runtime settings. |
  | [`UpdateRuntimeSettings`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#updateruntimesettings) | Modify and update the current runtime settings. |
  | [`ResetRuntimeSettings`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-basic.md#resetruntimesettings) | Reset runtime settings to default. |

#### Advanced
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitRuntimeSettingsWithFile`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithfile)  | Initialize runtime settings with the settings in a given JSON file. |
  | [`InitRuntimeSettingsWithString`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#initruntimesettingswithstring) | Initialize runtime settings with the settings in a given JSON string. |
  | [`AppendTplFileToRuntimeSettings`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#appendtplfiletoruntimesettings) | Append a new template file to the current runtime settings. |
  | [`AppendTplStringToRuntimeSettings`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#appendtplstringtoruntimesettings) | Append a new template string to the current runtime settings. |
  | [`GetParameterTemplateCount`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#getparametertemplatecount) | Get the count of the parameter templates. |
  | [`GetParameterTemplateName`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#getparametertemplatename) | Get the parameter template name by index. |
  | [`OutputSettingsToFile`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#outputsettingstofile) | Output runtime settings to a settings file (JSON file). |
  | [`OutputSettingsToString`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#outputsettingstostring) | Output runtime settings to a string. |
  | [`OutputSettingsToStringPtr`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#outputsettingstostringptr) | Output runtime settings to a string. |
  | [`FreeSettingsString`](cpp/CBarcodeReader/methods/parameter-and-runtime-settings-advanced.md#freesettingsstring) | Free memory allocated for runtime settings string. |
   
      
&nbsp; 

   
### License
  
  | Method               | Description |
  |----------------------|-------------|
  | [`InitLicense`](cpp/CBarcodeReader/methods/license.md#initlicense) | Read product key and activate the SDK. |
  | [`InitLicenseFromServer`](cpp/CBarcodeReader/methods/license.md#initlicensefromserver) | Initialize license and connect to the specified server for online verification. |
  | [`InitLicenseFromLicenseContent`](cpp/CBarcodeReader/methods/license.md#initlicensefromlicensecontent) | Initialize license from the license content on client machine for offline verification. |
  | [`OutputLicenseToString`](cpp/CBarcodeReader/methods/license.md#outputlicensetostring) | Output the license content to a string from the license server. |
  | [`OutputLicenseToStringPtr`](cpp/CBarcodeReader/methods/license.md#outputlicensetostringptr) | Output the license content to a string from the license server. |
  | [`FreeLicenseString`](cpp/CBarcodeReader/methods/license.md#freelicensestring) | Free memory allocated for the license string. |
   
   
&nbsp; 
   
   
### Result
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetAllTextResults`](cpp/CBarcodeReader/methods/result.md#getalltextresults) | Get all recognized barcode results. |
  | [`FreeTextResults`](cpp/CBarcodeReader/methods/result.md#freetextresults) | Free memory allocated for text results. |
  | [`GetIntermediateResults`](cpp/CBarcodeReader/methods/result.md#getintermediateresults) | Get intermediate results. |
  | [`FreeIntermediateResults`](cpp/CBarcodeReader/methods/result.md#freeintermediateresults) | Free memory allocated for the intermediate results. |
   
      
&nbsp; 

   
### Status Retrieval
   
  | Method               | Description |
  |----------------------|-------------|
  | [`GetErrorString`](cpp/CBarcodeReader/methods/status-retrieval.md#geterrorstring) | Get error message by error code.|
  | [`GetVersion`](cpp/CBarcodeReader/methods/status-retrieval.md#getversion) | Get version information of SDK.|
   
      
&nbsp; 

   
### Video

#### Decode
    
   | Method               | Description |
   |----------------------|-------------|
   | [`StartFrameDecoding`](cpp/CBarcodeReader/methods/video.md#startframedecoding) | Decode barcodes from inner frame queue. |
   | [`StartFrameDecodingEx`](cpp/CBarcodeReader/methods/video.md#startframedecodingex) | Decode barcodes from inner frame queue. |
   | [`AppendFrame`](cpp/CBarcodeReader/methods/video.md#appendframe) | Append a frame image buffer to the inner frame queue. |
   | [`StopFrameDecoding`](cpp/CBarcodeReader/methods/video.md#stopframedecoding) | Stop thread used for frame decoding. |

#### Parameter
   
   | Method               | Description |
   |----------------------|-------------|
   | [`InitFrameDecodingParameters`](cpp/CBarcodeReader/methods/video.md#initframedecodingparameters) | Initialize frame decoding parameter. |

#### Callback
   
   | Method               | Description |
   |----------------------|-------------|
   | [`SetErrorCallback`](cpp/CBarcodeReader/methods/video.md#seterrorcallback) | Set callback function to process errors generated during frame decoding. |
   | [`SetTextResultCallback`](cpp/CBarcodeReader/methods/video.md#settextresultcallback) | Set callback function to process text results generated during frame decoding. |
   | [`SetIntermediateResultCallback`](cpp/CBarcodeReader/methods/video.md#setintermediateresultcallback) | Set callback function to process intermediate results generated during frame decoding. |

#### Status retrieval
   
   | Method               | Description |
   |----------------------|-------------|
   | [`GetLengthOfFrameQueue`](cpp/CBarcodeReader/methods/video.md#getlengthofframequeue) | Get length of current inner frame queue. |
 
   
&nbsp; 


## `CBarcodeReader` Protected Attribute
  
  | Attribute            | Description |
  |----------------------|-------------|
  | [`m_pBarcodeReader`](cpp/CBarcodeReader/attribute/m_pBarcodeReader.md)  | |
  
   
&nbsp; 

## Function Pointer

  | Function | Description |
  |----------|-------------|
  | [`CB_Error`](cpp/function-pointer/index.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](cpp/function-pointer/index.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](cpp/function-pointer/index.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 

&nbsp;

## [Error Code]({{ site.manual_interface_errorCode }})
		

&nbsp;


## [Structs]({{ site.manual_interface_struct }})
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
- [`Quadrilateral`]({{ site.manual_interface_struct}}Quadrilateral.md)
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

