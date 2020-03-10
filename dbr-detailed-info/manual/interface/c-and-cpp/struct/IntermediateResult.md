# IntermediateResult
Stores the intermediate result.

## Typedefs

```cpp
typedef struct tagIntermediateResult  IntermediateResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultsCount`](#resultcount) | *int* |
| [`results`](#results) | *const void \*\** |
| [`dataType`](#datayype) | [`IMResultDataType`]({{ site.manual_interface_enum }}IMResultDataType.html) |
| [`resultType`](#resulttype) | [`IntermediateResultType`]({{ site.manual_interface_enum }}IntermediateResultType.html) |
| [`barcodeComplementMode`](#barcodecomplementmode) | [`BarcodeComplementMode`]({{ site.manual_interface_enum }}BarcodeComplementMode.html) |
| [`bcmIndex`](#bcmindex) | *int* |
| [`deformationResistingMode`](#deformationresistingmode) | [`DeformationResistingMode`]({{ site.manual_interface_enum }}DeformationResistingMode.html) |
| [`drmIndex`](#drmindex) | *int* |
| [`dpmCodeReadingMode`](#dpmcodereadingmode) | [`DPMCodeReadingMode`]({{ site.manual_interface_enum }}DPMCodeReadingMode.html) |
| [`dpmcrmIndex`](#dpmcrmindex) | *int* |
| [`rotationMatrix`](#rotationmatrix) | *double\[9\]* |
| [`textFilterMode`](#textfiltermode) | [`TextFilterMode`]({{ site.manual_interface_enum }}TextFilterMode.html) |
| [`tfmIndex`](#tfmindex) | *int* |
| [`localizationMode`](#localizationmode) | [`LocalizationMode`]({{ site.manual_interface_enum }}LocalizationMode.html) |
| [`lmIndex`](#lmindex) | *int* |
| [`binarizationMode`](#binarizationmode) | [`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html) |
| [`bmIndex`](#bmindex) | *int* |
| [`imagePreprocessingMode`](#imagepreprocessingmode) | [`ImagePreprocessingMode`]({{ site.manual_interface_enum }}ImagePreprocessingMode.html) |
| [`ipmIndex`](#ipmindex) | *int* |
| [`roiId`](#roiid) | *int* |
| [`regionPredetectionMode`](#regionpredetectionmode) | [`RegionPredetectionMode`]({{ site.manual_interface_enum }}RegionPredetectionMode.html) |
| [`rpmIndex`](#rpmindex) | *int* |
| [`grayscaleTransformationMode`](#grayscaletransformationmode) | [`GrayscaleTransformationMode `]({{ site.manual_interface_enum }}}GrayscaleTransformationMode .html) |
| [`gtmIndex`](#gtmindex) | *int* |
| [`colourConversionMode`](#colourconversionmode) | [`ColourConversionMode`]({{ site.manual_interface_enum }}ColourConversionMode.html) |
| [`cicmIndex`](#cicmindex) | *int* |
| [`colourClusteringMode`](#colourclusteringmode) | [`ColourClusteringMode`]({{ site.manual_interface_enum }}ColourClusteringMode.html) |
| [`ccmIndex`](#ccmindex) | *int* |
| [`scaleDownRatio`](#scaleDownratio) | *int* |
| [`frameId`](#frameid) | *int* |
| [`reserved`](#reserved) | *char\[64\]* |
