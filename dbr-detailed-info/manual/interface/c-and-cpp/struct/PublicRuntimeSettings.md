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
    
- **Default value**   
    When the recognition result is not desired, you can set this parameter can be set to skip certain processing stages.
    
- **See also**  
    [`TerminatePhase`]({{ site.manual_interface_enum }}TerminatePhase.html)
      

### timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (TIFF, PNG, etc.) from disk into memory.
```cpp
int tagPublicRuntimeSettings::timeout
```
- **Value range**   
    \[0, 0x7fffffff\]
      
- **Default value**   
    10000
    
- **Default value**   
    If you want to stop reading barcodes after a certain period of time, you can use this parameter to set a timeout.
    

### maxAlgorithmThreadCount


### expectedBarcodesCount


### barcodeFormatIds


### barcodeFormatIds_2


### pdfRasterDPI


### scaleDownThreshold


### binarizationModes


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


