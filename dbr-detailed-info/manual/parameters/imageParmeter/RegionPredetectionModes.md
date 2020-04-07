---
layout: manual-parameter
id: parameter_image_RegionPredetectionModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/RegionPredetectionModes.md
---


# ImageParameter Object - Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Pages`](image-process-control.md#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](image-process-control.md#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.ScaleDownThreshold`](image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ColourClusteringModes`](ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](ColourConversionModes.md#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.GrayscaleTransformationModes`](GrayscaleTransformationModes.md#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.RegionPredetectionModes`](#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ImagePreprocessingModes`](ImagePreprocessingModes.md#imagepreprocessingmodes) | Sets the mode and priority for image preprocessing algorithms. |
 | [`ImageParameter.BinarizationModes`](BinarizationModes.md#binarizationmodes) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |
 | [`ImageParameter.LocalizationModes`](LocalizationModes.md#localizationmodes) | 	Sets the mode and priority for localization algorithms. |
 | [`ImageParameter.TextFilterModes`](TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextAssistedCorrectionMode`](TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.DPMCodeReadingModes`](DPMCodeReadingModes.md#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.DeformationResistingModes`](DeformationResistingModes.md#deformationresistingmodes) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.BarcodeComplementModes`](BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BarcodeColourModes`](BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.DeblurLevel`](image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.AccompanyingTextRecognitionModes`](AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.ScaleUpModes`](ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.PDFReadingMode`](image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |

---


## RegionPredetectionModes

**Remark**   
If the image is large and the barcode on the image is very small, it is recommended to enable region predetection to speed up the localization process and recognition accuracy.   

### Mode Properties
`RegionPredetectionModes` is a parameter for setting the mode for region pre-detection. It consisits of one or more `RegionPredetectionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`RegionPredetectionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#regionpredetectionmode) array* | "RPM_SKIP"<br>"RPM_AUTO"<br>"RPM_GENERAL"<br>"RPM_GENERAL_RGB_CONTRAST"<br>"RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST" | ["RPM_GENERAL", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP", "RPM_SKIP"] |

- **See also**:   
    [`RegionPredetectionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#regionpredetectionmode)
    
#### Mode Arguments
- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
 
##### MinImageDimension 
Sets the minimum image dimension (in pixels) to pre-detect barcode regions.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [16384, 0x7fffffff] | 262144 | "RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST"<br>"RPM_GENERAL_RGB_CONTRAST" |         

- **Remark**     
  If the image dimension is larger than the given value, the library will enable the feature of pre-detecting barcode regions. Otherwise, it will skip this step when searching for barcodes.  


##### Sensitivity 
Sets the sensitivity used for region predetection algorithm.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [1, 9] | 1 | "RPM_GENERAL_GRAY_CONTRAST"<br>"RPM_GENERAL_HSV_CONTRAST"<br>"RPM_GENERAL_RGB_CONTRAST" |         

- **Remark**     
  A larger value means the library will take more effort to detect regions.   
  

### Setting Methods

#### As JSON Parameter
`RegionPredetectionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the region pre-detection mode for barcodes search. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | RegionPredetectionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "RegionPredetectionModes": [
        {
            "Mode": "RPM_GENERAL_GRAY_CONTRAST",
            "Sensitivity": 5,
            "MinImageDimension":262144
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`RegionPredetectionModes` is a [`RegionPredetectionMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) array defines in [`furtherModes`] which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for region pre-detection. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->furtherModes({{ site.manual_interface_struct }}PublicRuntimeSettings.html#furthermodes) | [`regionPredetectionModes`]({{ site.manual_interface_struct }}FurtherModes.html#regionpredetectionmodes)) | [`RegionPredetectionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#regionpredetectionmode)[8] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`RegionPredetectionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#regionpredetectionmode)
