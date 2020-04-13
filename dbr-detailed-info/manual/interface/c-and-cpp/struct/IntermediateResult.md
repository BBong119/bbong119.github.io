---
layout: manual-interface-struct
id: interface_struct_IntermediateResult
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/IntermediateResult.md
---


# IntermediateResult
Stores the intermediate result.

## Typedefs

```cpp
typedef struct tagIntermediateResult  IntermediateResult 
typedef struct tagIntermediateResult*  PIntermediateResult
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultsCount`](#resultscount) | *int* |
| [`results`](#results) | *const void \*\** |
| [`dataType`](#datatype) | [`IMResultDataType`]({{ site.manual_interface_enum}}result-enum.html#imresultdatatype) |
| [`resultType`](#resulttype) | [`IntermediateResultType`]({{ site.manual_interface_enum}}result-enum.html#intermediateresulttype) |
| [`barcodeComplementMode`](#barcodecomplementmode) | [`BarcodeComplementMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#barcodecomplementmode) |
| [`bcmIndex`](#bcmindex) | *int* |
| [`deformationResistingMode`](#deformationresistingmode) | [`DeformationResistingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#deformationresistingmode) |
| [`drmIndex`](#drmindex) | *int* |
| [`dpmCodeReadingMode`](#dpmcodereadingmode) | [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#dpmcodereadingmode) |
| [`dpmcrmIndex`](#dpmcrmindex) | *int* |
| [`rotationMatrix`](#rotationmatrix) | *double\[9\]* |
| [`textFilterMode`](#textfiltermode) | [`TextFilterMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#textfiltermode) |
| [`tfmIndex`](#tfmindex) | *int* |
| [`localizationMode`](#localizationmode) | [`LocalizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#localizationmode) |
| [`lmIndex`](#lmindex) | *int* |
| [`binarizationMode`](#binarizationmode) | [`BinarizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#binarizationmode) |
| [`bmIndex`](#bmindex) | *int* |
| [`imagePreprocessingMode`](#imagepreprocessingmode) | [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#imagepreprocessingmode) |
| [`ipmIndex`](#ipmindex) | *int* |
| [`roiId`](#roiid) | *int* |
| [`regionPredetectionMode`](#regionpredetectionmode) | [`RegionPredetectionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#regionpredetectionmode) |
| [`rpmIndex`](#rpmindex) | *int* |
| [`grayscaleTransformationMode`](#grayscaletransformationmode) | [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#grayscaletransformationmode) |
| [`gtmIndex`](#gtmindex) | *int* |
| [`colourConversionMode`](#colourconversionmode) | [`ColourConversionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourconversionmode) |
| [`cicmIndex`](#cicmindex) | *int* |
| [`colourClusteringMode`](#colourclusteringmode) | [`ColourClusteringMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourclusteringmode) |
| [`ccmIndex`](#ccmindex) | *int* |
| [`scaleDownRatio`](#scaledownratio) | *int* |
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
The [`BarcodeComplementMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#barcodecomplementmode) used when generating the current intermediate result. 
```cpp
BarcodeComplementMode tagIntermediateResult::barcodeComplementMode
```

### bcmIndex
The array index of current used [`BarcodeComplementMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#barcodecomplementmode) in the [`barcodeComplementModes`](FurtherModes.md#barcodecomplementmodes) setting.
```cpp
int tagIntermediateResult::bcmIndex
```

### deformationResistingMode
The [`DeformationResistingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#deformationresistingmode) used when generating the current intermediate result.
```cpp
DeformationResistingMode tagIntermediateResult::deformationResistingMode
```

### drmIndex
The array index of current used [`DeformationResistingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#deformationresistingmode) in the [`deformationResistingModes`](FurtherModes.md#deformationresistingmodes) setting.
```cpp
int tagIntermediateResult::drmIndex
```

### dpmCodeReadingMode
The [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#dpmcodereadingmode) used when generating the current intermediate result.
```cpp
DPMCodeReadingMode tagIntermediateResult::dpmCodeReadingMode
```

### dpmcrmIndex
The array index of current used [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#dpmcodereadingmode) in the [`dpmCodeReadingModes`](FurtherModes.md#dpmcodereadingmodes) setting.
```cpp
int tagIntermediateResult::dpmcrmIndex
```

### rotationMatrix
The rotation matrix.
```cpp
double tagIntermediateResult::rotationMatrix[9]
```

### textFilterMode
The [`TextFilterMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#textfiltermode) used when generating the current intermediate result.
```cpp
TextFilterMode tagIntermediateResult::textFilterMode
```

### tfmIndex
The array index of current used [`TextFilterMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#textfiltermode) in the [`textFilterModes`](FurtherModes.md#textfiltermodes) setting.
```cpp
int tagIntermediateResult::tfmIndex
```

### localizationMode
The [`LocalizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#localizationmode) used when generating the current intermediate result.
```cpp
LocalizationMode tagIntermediateResult::localizationMode
```

### lmIndex
The array index of current used [`LocalizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#localizationmode) in the [`localizationModes`](PublicRuntimeSettings.md#localizationmodes) setting.
```cpp
int tagIntermediateResult::lmIndex
```

### binarizationMode
The [`BinarizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#binarizationmode) used when generating the current intermediate result.
```cpp
BinarizationMode tagIntermediateResult::binarizationMode
```

### bmIndex
The array index of current used [`BinarizationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#binarizationmode) in the [`binarizationModes`](PublicRuntimeSettings.md#binarizationmodes) setting.
```cpp
int tagIntermediateResult::bmIndex
```

### imagePreprocessingMode
The [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#imagepreprocessingmode) used when generating the current intermediate result.
```cpp
ImagePreprocessingMode tagIntermediateResult::imagePreprocessingMode
```

### ipmIndex
The array index of current used [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#imagepreprocessingmode) in [`imagePreprocessingModes`](FurtherModes.md#imagepreprocessingmodes) setting.
```cpp
int tagIntermediateResult::ipmIndex
```

### roiId
The ID of the ROI (Region Of Interest) generated by the SDK. -1 means the original image.
```cpp
int tagIntermediateResult::roiId
```

### regionPredetectionMode
The [`RegionPredetectionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#regionpredetectionmode) used when generating the current intermediate result.
```cpp
RegionPredetectionMode tagIntermediateResult::regionPredetectionMode
```

### rpmIndex
The array index of current used [`RegionPredetectionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#regionpredetectionmode) in the [`regionPredetectionModes`](FurtherModes.md#regionpredetectionmodes) setting.
```cpp
int tagIntermediateResult::rpmIndex
```

### grayscaleTransformationMode
The [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#grayscaletransformationmode) used when generating the current intermediate result.
```cpp
GrayscaleTransformationMode tagIntermediateResult::grayscaleTransformationMode
```

### gtmIndex
The array index of current used [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#grayscaletransformationmode) in the [`grayscaleTransformationModes`](FurtherModes.md#grayscaletransformationmodes) setting.
```cpp
int tagIntermediateResult::gtmIndex
```

### colourConversionMode
The [`ColourConversionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourconversionmode) used when generating the current intermediate result.
```cpp
ColourConversionMode tagIntermediateResult::colourConversionMode
```

### cicmIndex
The array index of current used [`ColourConversionMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourconversionmode) in the [`colourConversionModes`](FurtherModes.md#colourconversionmodes) setting.
```cpp
int tagIntermediateResult::cicmIndex
```

### colourClusteringMode
The [`ColourClusteringMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourclusteringmode) used when generating the current intermediate result.
```cpp
ColourClusteringMode tagIntermediateResult::colourClusteringMode
```

### ccmIndex
The array index of current used [`ColourClusteringMode`]({{ site.manual_interface_enum}}parameter-mode-enum.html#colourclusteringmode) in the [`colourClusteringModes`](FurtherModes.md#colourclusteringmodes) setting.
```cpp
int tagIntermediateResult::ccmIndex
```

### scaleDownRatio
The scale down ratio.
```cpp
int tagIntermediateResult::scaleDownRatio
```

### frameId
The ID of the operated frame.
```cpp
int tagIntermediateResult::frameId
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagIntermediateResult::reserved[64]
```

