---
layout: manual-parameter
id: parameter_image_TextAssistedCorrectionMode
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/TextAssistedCorrectionMode.md
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
 | [`ImageParameter.TextAssistedCorrectionMode`](#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.DPMCodeReadingModes`](DPMCodeReadingModes.md#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.DeformationResistingModes`](DeformationResistingModes.md#deformationresistingmodes) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.BarcodeComplementModes`](BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BarcodeColourModes`](BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.DeblurLevel`](image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.AccompanyingTextRecognitionModes`](AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.ScaleUpModes`](ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.PDFReadingMode`](image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |

---



## TextAssistedCorrectionMode  

**Not support yet.**   



### Mode Properties
`TextAssistedCorrectionMode` is a parameter for setting the mode of text assisted correction for barcode decoding. Each mode has several arguments for setting the correction options.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* or *[`TextAssistedCorrectionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#textassistedcorrectionmode) enum* | "TACM_SKIP"<br>"TACM_AUTO"<br>"TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" | "TACM_VERIFYING" |

- **See also**:   
    [`TextAssistedCorrectionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#textassistedcorrectionmode)
    
#### Mode Arguments
- [BottomTextPercentageSize](#bottomtextpercentagesize)
- [LeftTextPercentageSize](#lefttextpercentagesize)
- [RightTextPercentageSize](#righttextpercentagesize)
- [TopTextPercentageSize](#toptextpercentagesize)
 
##### BottomTextPercentageSize 
Sets the percentage of the bottom accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remark**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### LeftTextPercentageSize 
Sets the percentage of the left accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remark**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### RightTextPercentageSize 
Sets the percentage of the right accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remark**     
  255: The accompanying text zone will be detected automatically by the SDK.


##### TopTextPercentageSize 
Sets the percentage of the top accompanying text zone comparing to the barcode zone.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0, 255] | 0 | "TACM_VERIFYING"<br>"TACM_VERIFYING_PATCHING" |         

- **Remark**     
  255: The accompanying text zone will be detected automatically by the SDK.


### Setting Methods

#### As JSON Parameter
`TextAssistedCorrectionMode` as a JSON parameter is a JSON Object with several keys for setting text assisted correction mode and the value of [arguments](#mode-arguments) correspondingly. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | TextAssistedCorrectionMode | *JSON Object* | 

**Json Parameter Example**   
```
{
    "TextAssistedCorrectionMode": {
            "Mode": "TACM_VERIFYING",
            "BottomTextPercentageSize": 50, 
            "LeftTextPercentageSize": 50,
            "RightTextPercentageSize": 50, 
            "TopTextPercentageSize": 50
        }
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`TextAssistedCorrectionMode` is a [`TextAssistedCorrectionMode`]({{ site.manual_interface_enum }}result-enum.html#textassistedcorrectionmode) enum type defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the mode of text assisted correction for barcode decoding. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#furthermodes) | [`textAssistedCorrectionMode`]({{ site.manual_interface_struct }}FurtherModes.html#textassistedcorrectionmode) | [`textAssistedCorrectionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#textassistedcorrectionmode) |


**Remark**   
[`GetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.manual_interface_struct }}FurtherModes.html)
- [`textAssistedCorrectionMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textassistedcorrectionmode)

