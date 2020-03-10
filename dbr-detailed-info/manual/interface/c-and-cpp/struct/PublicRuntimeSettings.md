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
### timeout
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
