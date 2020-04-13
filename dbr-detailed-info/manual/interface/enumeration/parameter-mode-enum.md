---
layout: manual-interface-enum
id: interface_enum_parameter_mode
sourceCodeUrl: /dbr-detailed-info/manual/interface/enumeration/parameter-mode-enum.md
---

# Dynamsoft Barcode Reader Enumeration - Parameter Mode Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`AccompanyingTextRecognitionMode`](#accompanyingtextrecognitionmode) | Describes the accompanying text recognition mode. |
  | [`BarcodeColourMode`](#barcodecolourmode) | Describes the barcode colour mode. |
  | [`BarcodeComplementMode`](#barcodecomplementmode) | Describes the barcode complement mode. |
  | [`BinarizationMode`](#binarizationmode) | Describes the binarization mode. |
  | [`ColourClusteringMode`](#colourclusteringmode) | Describes the colour clustering mode. |
  | [`ColourConversionMode`](#colourconversionmode) | Describes the colour conversion mode. |
  | [`ConflictMode`](#conflictmode) | Describes the conflict mode. |
  | [`DeformationResistingMode`](#deformationresistingmode) | Describes the deformation resisting mode. |
  | [`DPMCodeReadingMode`](#dpmcodereadingmode) | Describes the DPM code reading mode. |
  | [`GrayscaleTransformationMode`](#grayscaletransformationmode) | Describes the grayscale transformation mode. |
  | [`ImagePreprocessingMode`](#imagepreprocessingmode) | Describes the image preprocessing mode. |
  | [`LocalizationMode`](#localizationmode) | Describes the localization mode. | 
  | [`PDFReadingMode`](#pdfreadingmode) | Describes the PDF reading mode.  |
  | [`RegionPredetectionMode`](#regionpredetectionmode) | Describes the region predetection mode. |
  | [`ScaleUpMode`](#scaleupmode) | Describes the scale up mode. |
  | [`TerminatePhase`](#terminatephase) | Describes the terminate phase. |
  | [`TextAssistedCorrectionMode`](#textassistedcorrectionmode) | Describes the text assisted correction mode. |
  | [`TextFilterMode`](#textfiltermode) | Describes the text filter mode. |
  | [`TextureDetectionMode`](#texturedetectionmode) | Describes the texture detection mode. | 

  
---


## AccompanyingTextRecognitionMode
Describes the accompanying text recognition mode.   


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum AccompanyingTextRecognitionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumAccompanyingTextRecognitionMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| ATRM_SKIP | 0x00 | Skips the accompanying text recognition. |
| ATRM_GENERAL  | 0x01 | Recognizes accompanying texts using the general algorithm. Check arguments of [`AccompanyingTextRecognitionModes`]({{ site.manual_parameter }}imageParmeter/AccompanyingTextRecognitionModes.html#mode-arguments) for available argument settings. |



&nbsp;



## BarcodeColourMode
Describes the barcode colour mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeColourMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeColourMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BICM_SKIP | 0x00 | Skips the barcode colour operation. |
| BICM_DARK_ON_LIGHT | 0x01 | Dark items on a light background. Check arguments of [`BarcodeColourModes`]({{ site.manual_parameter }}imageParameter/BarcodeColourModes.html#mode-arguments) for available argument settings. |
| BICM_LIGHT_ON_DARK  | 0x02 | Light items on a dark background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_parameter }}imageParameter/BarcodeColourModes.html#mode-arguments) for available argument settings. |
| BICM_DARK_ON_DARK  | 0x04 | Dark items on a dark background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_parameter }}imageParameter/BarcodeColourModes.html#mode-arguments) for available argument settings. |
| BICM_LIGHT_ON_LIGHT  | 0x08 | Light items on a light background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_parameter }}imageParameter/BarcodeColourModes.html#mode-arguments) for available argument settings. |
| BICM_DARK_LIGHT_MIXED  | 0x10 | The background is mixed by dark and light. Not supported yet. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_parameter }}imageParameter/BarcodeColourModes.html#mode-arguments) for available argument settings. |
| BICM_DARK_ON_LIGHT_DARK_SURROUNDING  | 0x20 | Dark item on a light background surrounded by dark. Check arguments of [`BarcodeColourModes`]({{ site.manual_parameter }}imageParameter/BarcodeColourModes.html#mode-arguments) for available argument settings. |



&nbsp;



## BarcodeComplementMode
Describes the barcode complement mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeComplementMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeComplementMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BCM_SKIP  | 0x00 | Skips the barcode complement. |
| BCM_AUTO | 0x01 | **Not supported yet.** |
| BCM_GENERAL | 0x02 | Complements the barcode using the general algorithm. |



&nbsp;



## BinarizationMode
Describes the binarization mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BinarizationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBinarizationMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BM_SKIP | 0x00 | Skips the binarization. |
| BM_AUTO | 0x01 | **Not supported yet.** |
| BM_LOCAL_BLOCK | 0x02 | Binarizes the image based on the local block. Check arguments of [`BinarizationModes`]({{ site.manual_parameter }}imageParameter/BinarizationModes.html#mode-arguments) for available argument settings. |



&nbsp;



## ColourClusteringMode
Describes the colour clustering mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourClusteringMode` |
| .Net | `enum Dynamsoft.Barcode.EnumColourClusteringMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| CCM_SKIP  | 0x00 | Skips the colour clustering. |
| CCM_AUTO  | 0x01 | **Not supported yet.** |
| CCM_GENERAL_HSV  | 0x02 | Clusters colours using the general algorithm based on HSV. Check arguments of [`ColourClusteringModes`]({{ site.manual_parameter }}imageParameter/ColourClusteringModes.html#mode-arguments) for available argument settings. |



&nbsp;



## ColourConversionMode
Describes the colour conversion mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourConversionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumColourConversionMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| CICM_SKIP  | 0x00 |  |
| CICM_GENERAL  | 0x01 | Converts a colour image to a grayscale image using the general algorithm. Check arguments of [`ColourConversionModes`]({{ site.manual_parameter }}imageParameter/ColourConversionModes.html#mode-arguments) for available argument settings. |



&nbsp;



## ConflictMode
Describes the conflict mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ConflictMode` |
| .Net | `enum Dynamsoft.Barcode.EnumConflictMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| CM_IGNORE  | 0x01 | Ignores new settings and inherits the previous settings. |
| CM_OVERWRITE  | 0x02 | Overwrites the old settings with new settings. |



&nbsp;



## DeformationResistingMode
Describes the deformation resisting mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DeformationResistingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumDeformationResistingMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| DRM_SKIP | 0x00 | Skip the deformation resisting. |
| DRM_AUTO  | 0x01 | **Not supported yet.** |
| DRM_GENERAL | 0x02 | Resists deformation using the general algorithm. Check arguments of [`DeformationResistingModes`]({{ site.manual_parameter }}imageParameter/DeformationResistingModes.html#mode-arguments) for available argument settings.|



&nbsp;



## DPMCodeReadingMode
Describes the DPM code reading mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum DPMCodeReadingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumDPMCodeReadingMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| DPMCRM_SKIP | 0x00 | Skip the DPM code reading. |
| DPMCRM_AUTO  | 0x01 | **Not supported yet.** |
| DPMCRM_GENERAL | 0x02 | Reads DPM code using the general algorithm. |



&nbsp;



## GrayscaleTransformationMode
Describes the grayscale transformation mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum GrayscaleTransformationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumGrayscaleTransformationMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| GTM_SKIP  | 0x00 | Skips grayscale transformation. |
| GTM_INVERTED  | 0x01 | Transforms to inverted grayscale. Recommended for light on dark images. |
| GTM_ORIGINAL | 0x02 | Keeps the original grayscale. Recommended for dark on light images. |



&nbsp;



## ImagePreprocessingMode
Describes the image preprocessing mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePreprocessingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumImagePreprocessingMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IPM_SKIP | 0x00 | Skips image preprocessing. |
| IPM_AUTO | 0x01 | **Not supported yet.** |
| IPM_GENERAL | 0x02 | Takes the unpreprocessed image for following operations. |
| IPM_GRAY_EQUALIZE | 0x04 | Preprocesses the image using the gray equalization algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.manual_parameter }}imageParameter/ImagePreprocessingModes.html#mode-arguments) for available argument settings. |
| IPM_GRAY_SMOOTH | 0x08 | Preprocesses the image using the gray smoothing algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.manual_parameter }}imageParameter/ImagePreprocessingModes.html#mode-arguments) for available argument settings. |
| IPM_SHARPEN_SMOOTH | 0x10 | Preprocesses the image using the sharpening and smoothing algorithm. Check arguments of [`ImagePreprocessingModes`]({{ site.manual_parameter }}imageParameter/ImagePreprocessingModes.html#mode-arguments) for available argument settings. |



&nbsp;



## LocalizationMode
Describes the localization mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum LocalizationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumLocalizationMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| LM_SKIP | 0x00 | Skips localization. |
| LM_AUTO  | 0x01 | Not supported yet. |
| LM_CONNECTED_BLOCKS | 0x02 | Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. |
| LM_STATISTICS | 0x04 | Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. |
| LM_LINES | 0x08 | Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. |
|  LM_SCAN_DIRECTLY | 0x10 |  Localizes barcodes quickly. This mode is recommended in interactive scenario. Check arguments of [`LocalizationModes`]({{ site.manual_parameter }}imageParameter/LocalizationModes.html#mode-arguments) for available argument settings. |
| LM_STATISTICS_MARKS | 0x20 | Localizes barcodes by groups of marks.This is optimized for DPM codes. |
| LM_STATISTICS_POSTAL_CODE | 0x40 | Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. |



&nbsp;



## PDFReadingMode
Describes the PDF reading mode. 


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum PDFReadingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumPDFReadingMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| PDFRM_AUTO | 0x01 | Lets the library choose the reading mode automatically. |
| PDFRM_VECTOR | 0x02 | Detects barcode from vector data in PDF file. |
| PDFRM_RASTER | 0x04 | Converts the PDF file to image(s) first, then perform barcode recognition. |



&nbsp;


## RegionPredetectionMode
Describes the region predetection mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum RegionPredetectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumRegionPredetectionMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| RPM_SKIP | 0x00 | Skips region detection. |
| RPM_AUTO | 0x01 | Lets the library choose an algorithm automatically to detect region. |
| RPM_GENERAL | 0x02 | Takes the whole image as a region. |
| RPM_GENERAL_RGB_CONTRAST | 0x04 | Detects region using the general algorithm based on RGB colour contrast. Check arguments of [`RegionPredetectionModes`]({{ site.manual_parameter }}imageParameter/RegionPredetectionModes.html#mode-arguments) for available argument settings. |
| RPM_GENERAL_GRAY_CONTRAST | 0x08 | Detects region using the general algorithm based on gray contrast. Check arguments of [`RegionPredetectionModes`]({{ site.manual_parameter }}imageParameter/RegionPredetectionModes.html#mode-arguments) for available argument settings. |
| RPM_GENERAL_HSV_CONTRAST | 0x10 | Detects region using the general algorithm based on HSV colour contrast. Check arguments of [`RegionPredetectionModes`]({{ site.manual_parameter }}imageParameter/RegionPredetectionModes.html#mode-arguments) for available argument settings. |



&nbsp;



## ScaleUpMode
Describes the scale up mode. 


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ScaleUpMode` |
| .Net | `enum Dynamsoft.Barcode.EnumScaleUpMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| SUM_SKIP | 0x00 | Skip the scale-up process. |
| SUM_AUTO | 0x01 | The library chooses an interpolation method automatically to scale up. |
| SUM_LINEAR_INTERPOLATION | 0x02 | Scales up using the linear interpolation method. Check arguments of [`ScaleUpModes`]({{ site.manual_parameter }}imageParameter/ScaleUpModes.html#mode-arguments) for available argument settings. |
| SUM_NEAREST_NEIGHBOUR_INTERPOLATION | 0x04 | Scales up using the nearest-neighbour interpolation method. Check arguments of [`ScaleUpModes`]({{ site.manual_parameter }}imageParameter/ScaleUpModes.html#mode-arguments) for available argument settings. |



&nbsp;



## TerminatePhase
Describes the terminate phase.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TerminatePhase` |
| .Net | `enum Dynamsoft.Barcode.EnumTerminatePhase` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TP_REGION_PREDETECTED | 0x01 | Exits the barcode reading algorithm after the region predetection is done. |
| TP_IMAGE_PREPROCESSED | 0x02 | Exits the barcode reading algorithm after the region predetection and image pre-processing is done. |
| TP_IMAGE_BINARIZED | 0x04 | Exits the barcode reading algorithm after the region predetection, image pre-processing, and image binarization are done. |
| TP_BARCODE_LOCALIZED | 0x08 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, and barcode localization are done. |
| TP_BARCODE_TYPE_DETERMINED | 0x10 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, and barcode type determining are done. |
| TP_BARCODE_RECOGNIZED | 0x20 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, barcode type determining, and barcode recognition are done. |



&nbsp;



## TextAssistedCorrectionMode
Describes the text assisted correction mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextAssistedCorrectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextAssistedCorrectionMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TACM_SKIP | 0x00 | Skips the text assisted correction. |
| TACM_AUTO | 0x01 | **Not supported yet.** |
| TACM_VERIFYING | 0x02 | Uses the accompanying text to verify the decoded barcode result. Check arguments of [`TextAssistedCorrectionMode`]({{ site.manual_parameter }}imageParameter/TextAssistedCorrectionMode.html#mode-arguments) for available argument settings. |
| TACM_VERIFYING_PATCHING | 0x04 | Uses the accompanying text to verify and patch the decoded barcode result. Check arguments of [`TextAssistedCorrectionMode`]({{ site.manual_parameter }}imageParameter/TextAssistedCorrectionMode.html#mode-arguments) for available argument settings. |



&nbsp;



## TextFilterMode
Describes the text filter mode.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextFilterMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextFilterMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TFM_SKIP | 0x00 | Skip the text filtering. |
| TFM_AUTO | 0x01 | **Not supported yet.** |
| TFM_GENERAL_CONTOUR | 0x02 | Filters text using the general algorithm based on contour. Check arguments of [`TextFilterModes`]({{ site.manual_parameter }}imageParameter/TextFilterModes.html#mode-arguments) for available argument settings. |



&nbsp;



## TextureDetectionMode
Describes the texture detection mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextureDetectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextureDetectionMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TDM_SKIP  | 0x00 | Skips texture detection. |
| TDM_AUTO  | 0x01 | Not supported yet. |
| TDM_GENERAL_WIDTH_CONCENTRATION  | 0x02 | Detects texture using the general algorithm. Check arguments of [`TextureDetectionModes`]({{ site.manual_parameter }}imageParameter/TextureDetectionModes.html#mode-arguments) for available argument settings. |


