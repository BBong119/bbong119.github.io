---
layout: manual-parameter
id: parameter_image_TextFilterModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/TextFilterModes.md
objectName: imageParameter
---

# ImageParameter Object - Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.AccompanyingTextRecognitionModes`](AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.BarcodeColourModes`](BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](BinarizationModes.md#binarizationmodes) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.ColourClusteringModes`](ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](ColourConversionModes.md#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.DeblurLevel`](image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.DeformationResistingModes`](DeformationResistingModes.md#deformationresistingmodes) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.DPMCodeReadingModes`](DPMCodeReadingModes.md#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.GrayscaleTransformationModes`](GrayscaleTransformationModes.md#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.ImagePreprocessingModes`](ImagePreprocessingModes.md#imagepreprocessingmodes) | Sets the mode and priority for image preprocessing algorithms. |
 | [`ImageParameter.LocalizationModes`](LocalizationModes.md#localizationmodes) | 	Sets the mode and priority for localization algorithms. |
 | [`ImageParameter.Pages`](image-process-control.md#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](image-process-control.md#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.RegionPredetectionModes`](RegionPredetectionModes.md#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---



## TextFilterModes  

### Mode Properties
`TextFilterModes` is a parameter for setting the mode for text filter. It consisits of one or more `TextFilterMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`TextFilterMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#textfiltermode) array* | "TFM_SKIP"<br>"TFM_AUTO"<br>"TFM_GENERAL_CONTOUR" | ["TFM_GENERAL_CONTOUR", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP", "TFM_SKIP"] |

- **See also**:   
    [`TextFilterMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#textfiltermode)
    
#### Mode Arguments
- [MinImageDimension](#minimagedimension)
- [Sensitivity](#sensitivity)
 
##### MinImageDimension 
Sets the minimum image dimension (in pixels) to filter the text.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [65536, 0x7fffffff] | 65536 | "TFM_GENERAL_CONTOUR" |         

- **Remark**     
  If the image dimension is larger than the given value, the library will enable the text filtering feature. Otherwise, it will skip this step when doing barcode recognition. The feature can speed up the recognition process.

##### Sensitivity 
Sets the sensitivity used for text filtering.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 9] | 0 | "TFM_GENERAL_CONTOUR" |         

- **Remark**     
  0: automatically set by the library.   
  A larger value means the library will take more effort to filter text.


### Setting Methods

#### As JSON Parameter
`TextFilterModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode for text filter. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextFilterModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "TextFilterModes": [
        {
            "Mode": "TFM_GENERAL_CONTOUR",
            "MinImageDimension":262144,
            "Sensitivity": 5
        }
    ]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`TextFilterModes` is a [`TextFilterMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#textfiltermode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for text filter. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#furthermodes) | [`textFilterModes`]({{ site.manual_interface_struct }}FurtherModes.html#textfiltermodes) | [`TextFilterMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#textfiltermode)[8] |


**Remark**   
[`GetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.manual_interface_struct }}FurtherModes.html)
- [`TextFilterMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#textfiltermode)


