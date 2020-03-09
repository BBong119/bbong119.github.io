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
Sets the mode and priority for the grayscale image conversion.
```cpp
GrayscaleTransformationMode tagFurtherModes::grayscaleTransformationModes[8]
```
- **Value range**  
   Each array item can be any one of the [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}GrayscaleTransformationMode.html) Enumeration items. 
     
- **Default value**  
   `[GTM_ORIGINAL,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP,GTM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`GrayscaleTransformationMode`]({{ site.manual_interface_enum}}GrayscaleTransformationMode.html)

### regionPredetectionModes
Sets the region pre-detection mode for barcodes search.
```cpp
RegionPredetectionMode tagFurtherModes::regionPredetectionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`RegionPredetectionMode`]({{ site.manual_interface_enum}}RegionPredetectionMode.html) Enumeration items.  
     
- **Default value**  
   `[RPM_GENERAL,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP,RPM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.
   
- **See also**  
   [`RegionPredetectionMode`]({{ site.manual_interface_enum}}RegionPredetectionMode.html)

### imagePreprocessingModes
Sets the mode and priority for image preprocessing algorithms.
```cpp
ImagePreprocessingMode tagFurtherModes::imagePreprocessingModes[8]
```
- **Value range**  
   Each array item can be any one of the [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}ImagePreprocessingMode.html) Enumeration items.  
     
- **Default value**  
   `[IPM_GENERAL,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP,IPM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`ImagePreprocessingMode`]({{ site.manual_interface_enum}}ImagePreprocessingMode.html)

### textureDetectionModes
Sets the mode and priority for texture detection. 
```cpp
TextureDetectionMode tagFurtherModes::textureDetectionModes[8]
```
- **Value range**  
   Each array item can be any one of the [`TextureDetectionMode`]({{ site.manual_interface_enum}}TextureDetectionMode.html) Enumeration items.  
     
- **Default value**  
   `[TDM_GENERAL_WIDTH_CONCENTRATION,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP,TDM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.
   
- **See also**  
   [`TextureDetectionMode`]({{ site.manual_interface_enum}}TextureDetectionMode.html)
   
### textFilterModes
Sets the mode and priority for text filter.
```cpp
TextFilterMode tagFurtherModes::textFilterModes[8]
```
- **Value range**  
   Each array item can be any one of the [`TextFilterMode`]({{ site.manual_interface_enum}}TextFilterMode.html) Enumeration items.  
     
- **Default value**  
   `[TFM_GENERAL_CONTOUR,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP,TFM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is. If the image contains a lot of text, you can enable text filter to speed up the localization process.
   
- **See also**  
   [`TextFilterMode`]({{ site.manual_interface_enum}}TextFilterMode.html)
   
### textAssistedCorrectionMode
Sets the mode of text assisted correction for barcode decoding. ***Not supported yet***.
```cpp
TextAssistedCorrectionMode tagFurtherModes::textAssistedCorrectionMode
```
- **Value range**  
   Any one of the [`TextAssistedCorrectionMode`]({{ site.manual_interface_enum}}TextAssistedCorrectionMode.html) Enumeration items.  
     
- **Default value**  
   `TACM_VERIFYING`  
   
- **See also**  
   [`TextAssistedCorrectionMode`]({{ site.manual_interface_enum}}TextAssistedCorrectionMode.html)
   
### dpmCodeReadingModes
Sets the mode and priority for DPM code reading.
```cpp
DPMCodeReadingMode tagFurtherModes::dpmCodeReadingModes[8]
```
- **Value range**  
   Each array item can be any one of the [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}DPMCodeReadingMode.html) Enumeration items.  
     
- **Default value**  
   `[DPMCRM_GENERAL,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP,DPMCRM_SKIP]`  
     
- **Remark**  
   The array index represents the priority of the item. The smaller index is, the higher priority is.  
   
- **See also**  
   [`DPMCodeReadingMode`]({{ site.manual_interface_enum}}DPMCodeReadingMode.html) Enumeration items.  

### deformationResistingModes

### barcodeComplementModes

### barcodeColourModes

### accompanyingTextRecognitionModes

### reserved
