---
layout: manual-parameter
id: parameter_image_ColourConversionModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/ColourConversionModes.md
---


# ImageParameter Object - Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Pages`](image-process-control.md#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](image-process-control.md#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.ScaleDownThreshold`](image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ColourClusteringModes`](ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.GrayscaleTransformationModes`](GrayscaleTransformationModes.md#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.RegionPredetectionModes`](RegionPredetectionModes.md#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
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


## ColourConversionModes

### Mode Properties
`ColourConversionModes` is a parameter for setting the mode for converting a colour image to a grayscale image. It consisits of one or more `ColourConversionMode` items and each item has its own arguments. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`ColourConversionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#colourconversionmode) array* | "CICM_SKIP"<br>"CICM_GENERAL" | ["CICM_GENERAL", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP", "CICM_SKIP"] |

- **See also**:   
    [`ColourConversionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#colourconversionmode)
    
#### Mode Arguments
- [BlueChannelWeight](#bluechannelweight)
- [GreenChannelWeight](#greenchannelweight)
- [RedChannelWeight](#redchannelweight)
 
##### BlueChannelWeight 
Sets the weight value of Blue Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 1000] | -1 | "CICM_GENERAL" |         

- **Remark**     
  -1: The weight value will be set automatically by the SDK. 
  

##### GreenChannelWeight 
Sets the weight value of Green Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 1000] | -1 | "CICM_GENERAL" |         

- **Remark**     
  -1: The weight value will be set automatically by the SDK. 


##### RedChannelWeight 
Sets the weight value of Red Colour Channel used for converting a colour image to a grayscale image.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [-1, 1000] | -1 | "CICM_GENERAL" |         

- **Remark**     
  -1: The weight value will be set automatically by the SDK. 

### Setting Methods

#### As JSON Parameter
`ColourConversionModes` as a JSON parameter is a JSON Object array. Each JSON Object has several keys for setting the mode and the value of arguments. The array index decides the priority of the mode for converting a colour image to a grayscale image. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | ColourConversionModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "ColourConversionModes": [
        {
            "Mode": "CICM_GENERAL"
        }
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`ColourConversionModes` is a [`ColourConversionMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for converting a colour image to a grayscale image. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#furthermodes) | [`colourConversionModes`]({{ site.manual_interface_struct }}FurtherModes.html#colourconversionmodes)) | [`ColourConversionMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#colourconversionmode)[8] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`FurtherModes`]({{ site.manual_interface_struct }}FurtherModes.html)
- [`ColourConversionMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#colourconversionmode)
