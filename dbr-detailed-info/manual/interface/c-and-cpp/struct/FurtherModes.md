# FurtherModes
Stores the FurtherModes. 

## Typedefs

```cpp
typedef struct tagFurtherModes  FurtherModes
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`colourClusteringModes`](#colourclusteringmodes) | [`ColourClusteringMode`\[8\]]({{ site.manual_interface_enum}}ColourClusteringMode.html) |
| [`colourConversionModes`](#colourconversionmodes) | [`ColourConversionMode`\[8\]]({{ site.manual_interface_enum}}ColourConversionMode.html) |
| [`grayscaleTransformationModes`](#grayscaletransformationmodes) | [`GrayscaleTransformationMode`\[8\]]({{ site.manual_interface_enum}}GrayscaleTransformationMode.html) |
| [`regionPredetectionModes`](#regionpredetectionmodes) | [`RegionPredetectionMode`\[8\]]({{ site.manual_interface_enum}}RegionPredetectionMode.html) |
| [`imagePreprocessingModes`](#imagepreprocessingmodes) | [`ImagePreprocessingMode`\[8\]]({{ site.manual_interface_enum}}ImagePreprocessingMode.html) |
| [`textureDetectionModes`](#texturedetectionmodes) | [`TextureDetectionMode`\[8\]]({{ site.manual_interface_enum}}TextureDetectionMode.html) |
| [`textFilterModes`](#textfiltermodes) | [`TextFilterMode`\[8\]]({{ site.manual_interface_enum}}TextFilterMode.html) |
| [`textAssistedCorrectionMode`](#textassistedcorrectionmode) | [`TextAssistedCorrectionMode`]({{ site.manual_interface_enum}}TextAssistedCorrectionMode.html) |
| [`dpmCodeReadingModes`](#dpmcodereadingmodes) | [`DPMCodeReadingMode`\[8\]]({{ site.manual_interface_enum}}DPMCodeReadingMode.html) |
| [`deformationResistingModes`](#deformationresistingmodes) | [`DeformationResistingMode`\[8\]]({{ site.manual_interface_enum}}DeformationResistingMode.html) |
| [`barcodeComplementModes`](#barcodecomplementmodes) | [`BarcodeComplementMode`\[8\]]({{ site.manual_interface_enum}}BarcodeComplementMode.html) |
| [`barcodeColourModes`](#barcodecolourmodes) | [`BarcodeColourMode`\[8\]]({{ site.manual_interface_enum}}BarcodeColourMode.html) |
| [`accompanyingTextRecognitionModes`](#accompanyingtextrecognitionmodes) | [`AccompanyingTextRecognitionMode`\[8\]]({{ site.manual_interface_enum}}AccompanyingTextRecognitionMode.html) |
| [`reserved`](#reserved) | *char\[32\]* |

### colourClusteringModes
Sets the mode and priority for colour categorization. Not supported yet.  
```cpp
ColourClusteringMode tagFurtherModes::colourClusteringModes[8]
```
- **Value range**  
   Each array item can be any one of the [`ColourClusteringMode`]({{ site.manual_interface_enum}}ColourClusteringMode.html) Enumeration items.  
     
- **Default value**  
   `[CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP,CCM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. 
   
- **See also**  
   [`ColourClusteringMode`]({{ site.manual_interface_enum}}ColourClusteringMode.html)

### colourConversionModes
Sets the mode and priority for converting a colour image to a grayscale image.
```cpp
ColourConversionMode tagFurtherModes::colourConversionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`ColourConversionMode`]({{ site.manual_interface_enum}}ColourConversionMode.html) Enumeration items. 
     
- **Default value**  
   `[CICM_GENERAL,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP,CICM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`ColourConversionMode`]({{ site.manual_interface_enum}}ColourConversionMode.html)
   
### grayscaleTransformationModes

### regionPredetectionModes

### imagePreprocessingModes

### textureDetectionModes

### textFilterModes

### textAssistedCorrectionMode

### dpmCodeReadingModes

### deformationResistingModes

### barcodeComplementModes

### barcodeColourModes

### accompanyingTextRecognitionModes

### reserved
