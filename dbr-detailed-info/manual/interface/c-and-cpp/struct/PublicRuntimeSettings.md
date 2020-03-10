# PublicRuntimeSettings
Defines a struct to configure the barcode reading runtime settings. These settings control the barcode recognition process such as which barcode types to decode.

## Typedefs

```cpp
typedef struct tagPublicRuntimeSettings  PublicRuntimeSettings
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`terminatePhase`](#terminatephase) | [`TerminatePhase`]({{ site.manual_interface_enum }}TerminatePhase.html) |
| [`timeout`](#timeout) | *int* |
| [`maxAlgorithmThreadCount`](#maxalgorithmthreadcount) | *int* |
| [`expectedBarcodesCount`](#expectedbarcodescount) | *int* |
| [`barcodeFormatIds`](#barcodeformatids) | *int* |
| [`barcodeFormatIds_2`](#barcodeformatids_2) | *int* |
| [`pdfRasterDPI`](#pdfrasterdpi) | *int* |
| [`scaleDownThreshold`](#scaledownthreshold) | *int* |
| [`binarizationModes`](#binarizationmodes) | [`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html)\[8\] |
| [`localizationModes`](#localizationmodes) | [`LocalizationMode`]({{ site.manual_interface_enum }}LocalizationMode.html)\[8\] |
| [`furtherModes`](#furthermodes) | [`FurtherModes`](FurtherModes.md) |
| [`deblurLevel`](#deblurlevel) | *int* |
| [`intermediateResultTypes`](#intermediateresulttypes) | *int* |
| [`intermediateResultSavingMode`](#intermediateresultsavingmode) | [`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}IntermediateResultSavingMode.html) |
| [`resultCoordinateType`](#resultcoordinatetype) | [`ResultCoordinateType`]({{ site.manual_interface_enum }}ResultCoordinateType.html) |
| [`textResultOrderModes`](#textresultordermodes) | [`TextResultOrderMode`]({{ site.manual_interface_enum }}TextResultOrderMode.html)\[8\] |
| [`returnBarcodeZoneClarity`](#returnbarcodezoneclarity) | *int* |
| [`region`](#region) | [`RegionDefinition`](RegionDefinition.md) |
| [`minBarcodeTextLength`](#minbarcodetextlength) | *int* |
| [`minResultConfidence`](#minresultconfidence) | *int* |
| [`scaleUpModes`](#scaleUpmodes) | [`ScaleUpMode`]({{ site.manual_interface_enum }}ScaleUpMode.html)\[8\] |
| [`reserved`](#reserved) | *char\[84\]* |


### terminatePhase
Sets the phase to stop the barcode reading algorithm.
```cpp
TerminatePhase tagPublicRuntimeSettings::terminatePhase
```
- **Value range**   
    Any one of the [`TerminatePhase`]({{ site.manual_interface_enum }}TerminatePhase.html) Enumeration items
      
- **Default value**   
    `TP_BARCODE_RECOGNIZED`
    
- **Remark**   
    When the recognition result is not desired, you can set this parameter can be set to skip certain processing stages.
    
- **See also**  
    [`TerminatePhase`]({{ site.manual_interface_enum }}TerminatePhase.html)
      

### timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (TIFF, PNG, etc.) from disk into memory.
```cpp
int tagPublicRuntimeSettings::timeout
```
- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    10000
    
- **Remark**   
    If you want to stop reading barcodes after a certain period of time, you can use this parameter to set a timeout.
    

### maxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.
```cpp
int tagPublicRuntimeSettings::timeout
```
- **Value range**   
    [1, 4]
      
- **Default value**   
    4
    
- **Remark**   
    To keep a balance between speed and quality, the library concurrently runs four different threads for barcode decoding by default.

### expectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.
```cpp
int tagPublicRuntimeSettings::expectedBarcodesCount
```
- **Value range**   
    [0, 0x7fffffff]
      
- **Default value**   
    0
    
- **Remark**   
    0: means Unknown and it will find at least one barcode. 1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding. n: try to find n barcodes. If the library only finds m (m<n) barcode, it will try different algorithms till n barcodes are found or all algorithms are tried.

### barcodeFormatIds
Sets the formats of the barcode in BarcodeFormat group 1 to be read. Barcode formats in BarcodeFormat group 1 can be combined.
```cpp
int tagPublicRuntimeSettings::barcodeFormatIds
```
- **Value range**   
    A combined value of [`BarcodeFormat`]({{ site.manual_interface_enum }}BarcodeFormat.html) Enumeration items
      
- **Default value**   
    `BF_ALL`
    
- **Remark**   
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.manual_interface_enum }}BarcodeFormat.html) and [BarcodeFormat group 2]({{ site.manual_interface_enum }}BarcodeFormat_2.html), so you need to specify the barcode format in group 1 and group 2 individually.
    
- **See also**  
    [`BarcodeFormat`]({{ site.manual_interface_enum }}BarcodeFormat.html), [`BarcodeFormat_2`]({{ site.manual_interface_enum }}BarcodeFormat_2.html)
      
### barcodeFormatIds_2
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.
```cpp
int tagPublicRuntimeSettings::barcodeFormatIds_2
```
- **Value range**   
    A combined value of [`BarcodeFormat_2 `]({{ site.manual_interface_enum }}BarcodeFormat_2 .html) Enumeration items
      
- **Default value**   
    `BF2_NULL`
    
- **Remark**   
    If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process. The barcode format our library will search for is composed of [BarcodeFormat group 1]({{ site.manual_interface_enum }}BarcodeFormat.html) and [BarcodeFormat group 2]({{ site.manual_interface_enum }}BarcodeFormat_2.html), so you need to specify the barcode format in group 1 and group 2 individually.
    
- **See also**  
    [`BarcodeFormat`]({{ site.manual_interface_enum }}BarcodeFormat.html), [`BarcodeFormat_2`]({{ site.manual_interface_enum }}BarcodeFormat_2.html)

### pdfRasterDPI
Sets the output image resolution.
```cpp
int tagPublicRuntimeSettings::pdfRasterDPI
```
- **Value range**   
    [100, 600]
      
- **Default value**   
    300
    
- **Remark**   
    When decoding barcodes from a PDF file using the DecodeFile method, the library will convert the PDF file to image(s) first, then perform barcode recognition.

### scaleDownThreshold
Sets the threshold for the image shrinking.
```cpp
int tagPublicRuntimeSettings::scaleDownThreshold
```
- **Value range**   
    [512, 0x7fffffff]
      
- **Default value**   
    2300
    
- **Remark**   
    If the shorter edge size is larger than the given threshold value, the library will calculate the required height and width of the barcode image and shrink the image to that size before localization. Otherwise, the library will perform barcode localization on the original image.

### binarizationModes
Sets the mode and priority for binarization.
```cpp
BinarizationMode tagPublicRuntimeSettings::binarizationModes[8]
```
- **Value range**   
    Each array item can be any one of the [`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html) Enumeration items.
      
- **Default value**   
    `[BM_LOCAL_BLOCK,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP,BM_SKIP]`
    
- **Remark**   
    The array index represents the priority of the item. The smaller index is, the higher priority is.
    
- **Remark** 
    [`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html)


### localizationModes


### furtherModes


### deblurLevel


### intermediateResultTypes


### intermediateResultSavingMode


### resultCoordinateType


### textResultOrderModes


### returnBarcodeZoneClarity


### region


### minBarcodeTextLength


### minResultConfidence


### scaleUpModes


### reserved


