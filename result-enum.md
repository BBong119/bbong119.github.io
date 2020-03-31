# Dynamsoft Barcode Reader Enumeration - Format Enumeration

  | Method               | Description |
  |----------------------|-------------|
  | [`IMResultDataType`](#imresultdatatype) | Describes the intermediate result data type. |
  | [`IntermediateResultSavingMode`](#intermediateresultsavingmode) | Describes the intermediate result saving mode. |
  | [`IntermediateResultType`](#intermediateresulttype) | Describes the intermediate result type. |
  | [`ResultCoordinateType`](#resultcoordinatetype) | Describes the result coordinate type. |
  | [`ResultType`](#resulttype) | Describes the extended result type. |
  | [`TextResultOrderMode`](#textresultordermode) | Describes the text result order mode. |
  
---


## IMResultDataType Enumeration
Describes the intermediate result data type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IMResultDataType` |
| .Net | `enum Dynamsoft.Barcode.EnumIMResultDataType` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IMRDT_IMAGE | 0x01 | Specifies the `ImageData`. |
| IMRDT_CONTOUR | 0x02 | Specifies the `Contour`. |
| IMRDT_LINESEGMENT | 0x04 | Specifies the `LineSegment`. |
| IMRDT_LOCALIZATIONRESULT | 0x08 | Specifies the `LocalizationResult`. |
| IMRDT_REGIONOFINTEREST  | 0x10 | Specifies the `RegionOfInterest`. |

**See also**
- C / C++: [`ImageData`]({{ site.manual_interface_c_and_cpp }}struct/ImageData.html), [`Contour`]({{ site.manual_interface_c_and_cpp }}struct/Contour.html), [`LineSegment`]({{ site.manual_interface_c_and_cpp }}struct/LineSegment.html), [`LocalizationResult`]({{ site.manual_interface_c_and_cpp }}struct/LocalizationResult.html), [`RegionOfInterest`]({{ site.manual_interface_c_and_cpp }}struct/RegionOfInterest.html).   
- .Net: 



&nbsp;



## IntermediateResultSavingMode Enumeration
Describes the intermediate result saving mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultSavingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumIntermediateResultSavingMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IRSM_MEMORY | 0x01 | Saves intermediate results in memory. |
| IRSM_FILESYSTEM | 0x02 | Saves intermediate results in file system. Check arguments of [`IntermediateResultSavingMode`]({{ site.manual_interface_argument}}IntermediateResultSavingMode.html) for available argument settings. |
| IRSM_BOTH | 0x04 | Saves intermediate results in both memory and file system. Check arguments of [`IntermediateResultSavingMode`]({{ site.manual_interface_argument}}IntermediateResultSavingMode.html) for available argument settings. |



&nbsp;



## IntermediateResultType Enumeration
Describes the intermediate result type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultType` |
| .Net | `enum Dynamsoft.Barcode.EnumIntermediateResultType` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IRT_NO_RESULT | 0x00 | No intermediate result |
| IRT_ORIGINAL_IMAGE | 0x01 | Original image |
| IRT_COLOUR_CLUSTERED_IMAGE | 0x02 | Colour clustered image **(not supported yet)** |
| IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE | 0x04 | Colour image converted to grayscale |
| IRT_TRANSFORMED_GRAYSCALE_IMAGE | 0x08 | Transformed grayscale image |
| IRT_PREDETECTED_REGION | 0x10 | Predetected region |
| IRT_PREPROCESSED_IMAGE | 0x20 | Preprocessed image |
| IRT_BINARIZED_IMAGE | 0x40 | Binarized image |
| IRT_TEXT_ZONE | 0x80 | Text zone |
| IRT_CONTOUR | 0x100 | Contour |
| IRT_LINE_SEGMENT | 0x200 | Line segment |
| IRT_FORM | 0x400 | Form **(not supported yet)** |
| IRT_SEGMENTATION_BLOCK | 0x800 | Segmentation block **(not supported yet)** |
| IRT_TYPED_BARCODE_ZONE | 0x1000 | Typed barcode zone |



&nbsp;



## ResultCoordinateType Enumeration
Describes the result coordinate type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultCoordinateType` |
| .Net | `enum Dynamsoft.Barcode.EnumResultCoordinateType` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| RCT_PIXEL | 0x01 | Returns the coordinate in pixel value. |
| RCT_PERCENTAGE | 0x02 | Returns the coordinate as a percentage. |



&nbsp;



## ResultType Enumeration
Describes the extended result type.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultType` |
| .Net | `enum Dynamsoft.Barcode.EnumResultType` |


### Members
   
| Member | Description |
| ------ | ----------- |
| RT_STANDARD_TEXT | Specifies the standard text. This means the barcode value. |
| RT_RAW_TEXT | Specifies the raw text. This means the text that includes start/stop characters, check digits, etc. |
| RT_CANDIDATE_TEXT | Specifies all the candidate text. This means all the standard text results decoded from the barcode. |
| RT_PARTIAL_TEXT | Specifies the partial text. This means part of the text result decoded from the barcode. |



&nbsp;



## TextResultOrderMode Enumeration
Describes the text result order mode.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextResultOrderMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextResultOrderMode` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TROM_SKIP | 0x00 | Skips the result ordering operation. |
| TROM_CONFIDENCE | 0x01 | Returns the text results in descending order by confidence. |
| TROM_POSITION | 0x02 | Returns the text results in position order, from top to bottom, then left to right. |
| TROM_FORMAT | 0x04 | Returns the text results in alphabetical and numerical order by barcode format string. |
