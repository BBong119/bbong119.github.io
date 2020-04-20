---
layout: manual-parameter
id: parameter_image_AccompanyingTextRecognitionModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/AccompanyingTextRecognitionModes.md
listFile: parametersList
---


# ImageParameter Object - Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.AccompanyingTextRecognitionModes`](#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
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
 | [`ImageParameter.TextFilterModes`](TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |

---



## AccompanyingTextRecognitionModes  

### Mode Properties
`AccompanyingTextRecognitionModes` is a parameter for setting the mode to recognize accompanying text. It consisits of one or more `AccompanyingTextRecognitionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#accompanyingtextrecognitionmode) array* | "ATRM_SKIP"<br>"ATRM_GENERAL" | ["ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP", "ATRM_SKIP"] |

- **See also**:   
    [`AccompanyingTextRecognitionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#accompanyingtextrecognitionmode)
    
#### Mode Arguments
- [RegionBottom](#regionbottom)
- [RegionLeft](#regionleft)
- [RegionRight](#regionright)
- [RegionTop](#regiontop)

If [RegionBottom](#regionbottom), [RegionLeft](#regionleft), [RegionRight](#regionright) and [RegionTop](#regiontop) are all equal to 0, the accompanying text zone will be detected automatically by the SDK. 
 
##### RegionBottom 
Specifies the y-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |         


##### RegionLeft 
Specifies the x-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

##### RegionRight 
Specifies the x-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

##### RegionTop 
Specifies the y-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.


| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-255, 255] | 0 | "ATRM_GENERAL" |  

### Setting Methods

#### As JSON Parameter
`AccompanyingTextRecognitionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority the mode to recognize accompanying text. Default values will be used if there is no manual setting.   


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | AccompanyingTextRecognitionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "AccompanyingTextRecognitionModes": [
        {
            "Mode": "ATRM_GENERAL",
            "RegionBottom": 50, 
            "RegionLeft": 50,
            "RegionRight": 50, 
            "RegionTop": 50
        }
]
}
```


&nbsp;



#### As `PublicRuntimeSettings` Member
`AccompanyingTextRecognitionModes` is a [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#accompanyingtextrecognitionmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority to recognize accompanying text. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#furthermodes) | [`accompanyingTextRecognitionModes`]({{ site.manual_interface_struct }}FurtherModes.html#accompanyingtextrecognitionmodes) | [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#accompanyingtextrecognitionmode)[8] |

**Remark**   
[`GetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).


**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.manual_interface_struct }}FurtherModes.html)
- [`AccompanyingTextRecognitionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#accompanyingtextrecognitionmode)

