---
layout: manual-parameter
id: parameter_image_GrayscaleTransformationModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/GrayscaleTransformationModes.md
listFile: parametersList
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
 | [`ImageParameter.GrayscaleTransformationModes`](#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
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


## GrayscaleTransformationModes

### Mode Properties
`GrayscaleTransformationModes` is a parameter for setting the mode for the grayscale image conversion. It consisits of one or more `GrayscaleTransformationMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`GrayscaleTransformationMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#grayscaletransformationmode) array* | "GTM_SKIP"<br>"GTM_INVERTED"<br>"GTM_ORIGINAL" | ["GTM_ORIGINAL", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP", "GTM_SKIP"] |

- **See also**:   
    [`GrayscaleTransformationMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#grayscaletransformationmode)
    

### Setting Methods

#### As JSON Parameter
`GrayscaleTransformationModes` as a JSON parameter is a JSON Object array. ach JSON Object has a key `Mode` for setting the mode, and the array index decides the priority of the mode for the grayscale image conversion. Default values will be used if there is no manual setting.


| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | GrayscaleTransformationModes | *JSON Object Array* | 

**Json Parameter Example**   
```
{
    "GrayscaleTransformationModes": [
        {
            "Mode": "GTM_INVERTED"
        },
        {
            "Mode": "GTM_ORIGINAL"
        }
    ]
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`GrayscaleTransformationModes` is a [`GrayscaleTransformationMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#grayscaletransformationmode) array defines in `furtherModes` which is a struct member of `PublicRuntimeSettings`. It is used for setting the modes and the priority for the grayscale image conversion. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`furtherModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#furthermodes) | [`grayscaleTransformationModes`]({{ site.manual_interface_struct }}FurtherModes.html#grayscaletransformationmodes) | [`GrayscaleTransformationMode`]({{ site.manual_interface_enum }}parameter-mode-enum.html#grayscaletransformationmode)[8] |

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`FurtherModes` Struct]({{ site.manual_interface_struct }}FurtherModes.html)
- [`GrayscaleTransformationMode` Enumeration]({{ site.manual_interface_enum }}parameter-mode-enum.html#grayscaletransformationmode)
