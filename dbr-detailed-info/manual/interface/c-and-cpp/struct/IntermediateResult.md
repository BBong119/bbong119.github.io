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
| [`grayscaleTransformationMode`](#grayscaletransformationmode) | [`GrayscaleTransformationMode`]({{ site.manual_interface_enum }}}GrayscaleTransformationMode .html) |
| [`gtmIndex`](#gtmindex) | *int* |
| [`colourConversionMode`](#colourconversionmode) | [`ColourConversionMode`]({{ site.manual_interface_enum }}ColourConversionMode.html) |
| [`cicmIndex`](#cicmindex) | *int* |
| [`colourClusteringMode`](#colourclusteringmode) | [`ColourClusteringMode`]({{ site.manual_interface_enum }}ColourClusteringMode.html) |
| [`ccmIndex`](#ccmindex) | *int* |
| [`scaleDownRatio`](#scaleDownratio) | *int* |
| [`frameId`](#frameid) | *int* |
| [`reserved`](#reserved) | *char\[64\]* |


### resultsCount
The total result count.
```cpp
int tagIntermediateResult::resultsCount
```

### results
One of the following types: Array of [`Contour`](Contour.md), Array of [`ImageData`](ImageData.md), Array of [`LineSegment`](LineSegment.md), Array of [`LocalizationResult`](LocalizationResult.md), Array of [`RegionOfInterest`](RegionOfInterest.md).
```cpp
const void** tagIntermediateResult::results
```

### dataType
The data type of the intermediate result
```cpp
IMResultDataType tagIntermediateResult::dataType
```

### resultType
Intermediate result type.
```cpp
IntermediateResultType tagIntermediateResult::resultType
```

### barcodeComplementMode
The [`BarcodeComplementMode`]({{ site.manual_interface_enum }}BarcodeComplementMode.html) used when generating the current intermediate result. 
```cpp
BarcodeComplementMode tagIntermediateResult::barcodeComplementMode
```

### bcmIndex
The array index of current used [`BarcodeComplementMode`]({{ site.manual_interface_enum }}BarcodeComplementMode.html) in the [`barcodeComplementModes`](FurtherModes.md#barcodecomplementmodes) setting.
```cpp
int tagIntermediateResult::bcmIndex
```

### deformationResistingMode
The [`DeformationResistingModes`]({{ site.manual_interface_enum }}DeformationResistingModes.html) used when generating the current intermediate result.
```cpp
DeformationResistingMode tagIntermediateResult::deformationResistingMode
```

### drmIndex
The array index of current used [`DeformationResistingModes`]({{ site.manual_interface_enum }}DeformationResistingModes.html) in the [`DeformationResistingModes`]({{ site.manual_interface_enum }}DeformationResistingModes.html) setting.
```cpp
int tagIntermediateResult::drmIndex
```

### dpmCodeReadingMode
The [`DPMCodeReadingMode`]({{ site.manual_interface_enum }}DPMCodeReadingMode.html) used when generating the current intermediate result.
```cpp
DPMCodeReadingMode tagIntermediateResult::dpmCodeReadingMode
```

### dpmcrmIndex
The array index of current used [`DPMCodeReadingMode`]({{ site.manual_interface_enum }}DPMCodeReadingMode.html) in the [`DPMCodeReadingMode`]({{ site.manual_interface_enum }}DPMCodeReadingMode.html) setting.
```cpp
int tagIntermediateResult::dpmcrmIndex
```

### rotationMatrix
The rotation matrix.
```cpp
double tagIntermediateResult::rotationMatrix[9]
```

### textFilterMode
The [`TextFilterModes`]({{ site.manual_interface_enum }}TextFilterModes.html) used when generating the current intermediate result.
```cpp
TextFilterMode tagIntermediateResult::textFilterMode
```

### tfmIndex
The array index of current used [`TextFilterModes`]({{ site.manual_interface_enum }}TextFilterModes.html) in the [`TextFilterModes`]({{ site.manual_interface_enum }}TextFilterModes.html) setting.
```cpp
int tagIntermediateResult::tfmIndex
```

### localizationMode
The [`LocalizationModes`]({{ site.manual_interface_enum }}LocalizationModes.html) used when generating the current intermediate result.
```cpp
LocalizationMode tagIntermediateResult::localizationMode
```

### lmIndex
The array index of current used [`LocalizationModes`]({{ site.manual_interface_enum }}LocalizationModes.html) in the [`LocalizationModes`]({{ site.manual_interface_enum }}LocalizationModes.html) setting.
```cpp
int tagIntermediateResult::lmIndex
```

### binarizationMode
The [`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html) used when generating the current intermediate resul.
```cpp
BinarizationMode tagIntermediateResult::binarizationMode
```

### bmIndex


### imagePreprocessingMode


### ipmIndex


### roiId


### regionPredetectionMode


### rpmIndex


### grayscaleTransformationMode


### gtmIndex


### colourConversionMode


### cicmIndex


### colourClusteringMode


### ccmIndex


### scaleDownRatio


### frameId


### reserved


