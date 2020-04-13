---
layout: manual-parameter
id: parameter_image_ScaleUpModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/ScaleUpModes.md
objectName: imageParameter
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
 | [`ImageParameter.RegionPredetectionModes`](RegionPredetectionModes.md#regionpredetectionmodes) |  Sets the region pre-detection mode for barcodes search. |
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
 | [`ImageParameter.ScaleUpModes`](#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.PDFReadingMode`](image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |

---



## ScaleUpModes  

### Mode Properties
`ScaleUpModes` is a parameter for setting the mode to control the sampling methods of scale-up for linear barcodes with small module sizes. It consisits of one or more `ScaleUpMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ScaleUpMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#scaleupmode) array* | "SUM_SKIP"<br>"SUM_AUTO"<br>"SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" | ["SUM_AUTO", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP", "SUM_SKIP"] |

- **See also**:   
    [`ScaleUpMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#scaleupmode)
    
#### Mode Arguments
- [AcuteAngleWithXThreshold](#acuteanglewithxthreshold)
- [ModuleSizeThreshold](#modulesizethreshold)
- [TargetModuleSize](#targetmodulesize)

If the module size of the barcode is smaller than the [ModuleSizeThreshold](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [AcuteAngleWithXThreshold](#acuteanglewithxthreshold), the barcode will be enlarged to N times (N=1,2,3…) till N * modulesize >= [TargetModuleSize](#targetmodulesize).
 
##### AcuteAngleWithXThreshold 
Sets the acute angle threshold for scale-up.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 90] | -1 | "SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" |         

- **Remark**     
  -1 : means automatically set by the library.


##### ModuleSizeThreshold 
Sets the module size threshold for scale-up.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 0x7fffffff] | 0 | "SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" |         

- **Remark**     
  0 : means automatically set by the library.


##### TargetModuleSize 
Sets the target module size for scale-up.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 0x7fffffff] | 0 | "SUM_LINEAR_INTERPOLATION"<br>"SUM_NEAREST_NEIGHBOUR_INTERPOLATION" |         

- **Remark**     
  0 : means automatically set by the library.

### Setting Methods

#### As JSON Parameter
`ScaleUpModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode to control the sampling methods of scale-up for linear barcodes with small module sizes. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ScaleUpModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ScaleUpModes": [
        {
            "Mode": "SUM_AUTO",
            "AcuteAngleWithXThreshold": 20, 
            "ModuleSizeThreshold": 1，
            "TargetModuleSize": 5
        }
]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`ScaleUpModes` as a member of `PublicRuntimeSettings` struct is a [`ScaleUpMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#scaleupmode) array for setting the modes and the priority to control the sampling methods of scale-up for linear barcodes with small module sizes. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`scaleUpModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#scaleupmodes) | [`ScaleUpMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#scaleupmode)[8] |


**Remark**   
[`GetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`ScaleUpMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#scaleupmode)

