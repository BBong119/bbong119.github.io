---
layout: manual-parameter
id: parameter_main
sourceCodeUrl: /dbr-detailed-info/manual/parameters.md
listFile: parametersList
---


# Dynamsoft Barcode Reader SDK - Parameters

- [ImageParameter Object](#imageparameter-object)
- [RegionDefinition Object](#regiondefinition-object)
- [FormatSpecification Object](#formatspecification-object)



## ImageParameter Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Name`](parameters/imageParameter/content-organization-control.md#name) | The name of the ImageParameter object. |
 | [`ImageParameter.Description`](parameters/imageParameter/content-organization-control.md#description) | The description of the ImageParameter object. |
 | [`ImageParameter.FormatSpecificationNameArray`](parameters/imageParameter/content-organization-control.md#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |
 | [`ImageParameter.RegionDefinitionNameArray`](parameters/imageParameter/content-organization-control.md#regiondefinitionnamearray) | The names of the referenced RegionDefinition object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](parameters/imageParameter/cost-control.md#terminatephase) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](parameters/imageParameter/cost-control.md#timeout) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](parameters/imageParameter/cost-control.md#maxalgorithmthreadcount) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](parameters/imageParameter/cost-control.md#expectedbarcodescount) | Sets the number of barcodes expected to be detected for each image. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeFormatIds`](parameters/imageParameter/format-control.md#barcodeformatids) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`ImageParameter.BarcodeFormatIds_2`](parameters/imageParameter/format-control.md#barcodeformatids_2) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |
 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.AccompanyingTextRecognitionModes`](parameters/imageParameter/AccompanyingTextRecognitionModes.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text. |
 | [`ImageParameter.BarcodeColourModes`](parameters/imageParameter/BarcodeColourModes.md#barcodecolourmodes) | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | [`ImageParameter.BarcodeComplementModes`](parameters/imageParameter/BarcodeComplementModes.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode. |
 | [`ImageParameter.BinarizationModes`](parameters/imageParameter/BinarizationModes.md#binarizationmodes) | 	Sets the mode and priority for binarization. |
 | [`ImageParameter.ColourClusteringModes`](parameters/imageParameter/ColourClusteringModes.md#colourclusteringmodes) | Sets the mode and priority for colour categorization. Not supported yet. |
 | [`ImageParameter.ColourConversionModes`](parameters/imageParameter/ColourConversionModes.md#colourconversionmodes) | Sets the mode and priority for converting a colour image to a grayscale image. |
 | [`ImageParameter.DeblurLevel`](parameters/imageParameter/image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode. |
 | [`ImageParameter.DeformationResistingModes`](parameters/imageParameter/DeformationResistingModes.md#deformationresistingmodes) | Sets the mode and priority for deformation resisting. |
 | [`ImageParameter.DPMCodeReadingModes`](parameters/imageParameter/DPMCodeReadingModes.md#dpmcodereadingmodes) | Sets the mode and priority for DPM code reading. Not support yet. |
 | [`ImageParameter.GrayscaleTransformationModes`](parameters/imageParameter/GrayscaleTransformationModes.md#grayscaletransformationmodes) | Sets the mode and priority for the grayscale image conversion. |
 | [`ImageParameter.ImagePreprocessingModes`](parameters/imageParameter/ImagePreprocessingModes.md#imagepreprocessingmodes) | Sets the mode and priority for image preprocessing algorithms. |
 | [`ImageParameter.LocalizationModes`](parameters/imageParameter/LocalizationModes.md#localizationmodes) | 	Sets the mode and priority for localization algorithms. |
 | [`ImageParameter.Pages`](parameters/imageParameter/image-process-control.md#pages) | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | [`ImageParameter.PDFRasterDPI`](parameters/imageParameter/image-process-control.md#pdfrasterdpi) | Sets the output image resolution. |
 | [`ImageParameter.PDFReadingMode`](parameters/imageParameter/image-process-control.md#pdfreadingmode) | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |
 | [`ImageParameter.RegionPredetectionModes`](parameters/imageParameter/RegionPredetectionModes.md#regionpredetectionmodes) | Sets the region pre-detection mode for barcodes search. |
 | [`ImageParameter.ScaleDownThreshold`](parameters/imageParameter/image-process-control.md#scaledownthreshold) | Sets the threshold for the image shrinking. |
 | [`ImageParameter.ScaleUpModes`](parameters/imageParameter/ScaleUpModes.md#scaleupmodes) | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | [`ImageParameter.TextAssistedCorrectionMode`](parameters/imageParameter/TextAssistedCorrectionMode.md#textassistedcorrectionmode) | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | [`ImageParameter.TextFilterModes`](parameters/imageParameter/TextFilterModes.md#textfiltermodes) | 	Sets the mode and priority for text filter. |
 | [`ImageParameter.TextureDetectionModes`](parameters/imageParameter/TextureDetectionModes.md#texturedetectionmodes) | 	Sets the mode and priority for texture detection. |



### Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](parameters/imageParameter/result-control.md#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](parameters/imageParameter/result-control.md#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](parameters/imageParameter/result-control.md#resultcoordinatetype) | Specifies the format for the coordinates returned | 
 | [`ImageParameter.TextResultOrderModes`](parameters/imageParameter/result-control.md#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](parameters/imageParameter/result-control.md#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. | 



## RegionDefinition Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Name`](parameters/regionDefinition/content-organization-control.md#name) | The name of the RegionDefinition object. |
 | [`RegionDefinition.FormatSpecificationNameArray`](parameters/regionDefinition/content-organization-control.md#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.ExpectedBarcodesCount`](parameters/regionDefinition/cost-control.md#expectedbarcodescount) | Sets the expected number of barcodes to be decoded for the current region. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition..BarcodeFormatIds`](parameters/regionDefinition/format-control.md#barcodeformatids) | Sets which types of barcode(s) in BarcodeFormat group 1 to be read in this region. |
 | [`RegionDefinition.BarcodeFormatIds_2`](parameters/regionDefinition/format-control.md#barcodeformatids_2) | Sets which types of barcode(s) in BarcodeFormat group 2 to be read in this region. |
 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Top`](parameters/regionDefinition/image-process-control.md#top) | 	The top-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Left`](parameters/regionDefinition/image-process-control.md#left) | 	The left-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Right`](parameters/regionDefinition/image-process-control.md#right) | 	The right-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Bottom`](parameters/regionDefinition/image-process-control.md#bottom) | 	The bottom-most coordinate or percentage of the region. | 
 | [`RegionDefinition.MeasuredByPercentage`](parameters/regionDefinition/image-process-control.md#measuredbypercentage) | 	Sets whether or not to use percentages to measure the Region size. | 



## FormatSpecification Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.Name`](parameters/formatSpecification/content-organization-control.md#name) | The name of the FormatSpecification object. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.AllModuleDeviation`](parameters/formatSpecification/format-control.md#allmoduledeviation) | Set the module size deviation from the standard barcode module size. |
 | [`FormatSpecification.AustralianPostEncodingTable`](parameters/formatSpecification/format-control.md#australianpostencodingtable) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 
 | [`FormatSpecification.BarcodeAngleRangeArray`](parameters/formatSpecification/format-control.md#barcodeanglerangearray) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesLengthRangeArray`](parameters/formatSpecification/format-control.md#barcodebyteslengthrangearray) | Sets the range of barcode bytes length for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesRegExPattern`](parameters/formatSpecification/format-control.md#barcodebytesregexpattern) | Specifies the regular express pattern of barcode byte characters. | 
 | [`FormatSpecification.BarcodeFormatIds`](parameters/formatSpecification/format-control.md#barcodeformatids) | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | [`FormatSpecification.BarcodeFormatIds_2`](parameters/formatSpecification/format-control.md#barcodeformatids_2) | Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to. |
 | [`FormatSpecification.BarcodeHeightRangeArray`](parameters/formatSpecification/format-control.md#barcodeheightrangearray) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`FormatSpecification.BarcodeTextLengthRangeArray`](parameters/formatSpecification/format-control.md#barcodetextlengthrangearray) |	Sets the range of barcode text length for barcodes search. | 
 | [`FormatSpecification.BarcodeTextRegExPattern`](parameters/formatSpecification/format-control.md#barcodetextregexpattern) | Specifies the regular express pattern of barcode characters. | 
 | [`FormatSpecification.BarcodeWidthRangeArray`](parameters/formatSpecification/format-control.md#barcodewidthrangearray) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`FormatSpecification.Code128Subset`](parameters/formatSpecification/format-control.md#code128subset) | Set the code 128 subset. | 
 | [`FormatSpecification.FindUnevenModuleBarcode`](parameters/formatSpecification/format-control.md#findunevenmodulebarcode) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`FormatSpecification.HeadModuleRatio`](parameters/formatSpecification/format-control.md#headmoduleratio) | Set the module count and module size ratio of the barcode head part. | 
 | [`FormatSpecification.MinQuietZoneWidth`](parameters/formatSpecification/format-control.md#minquietzonewidth) | The minimum width of the barcode quiet zone. | 
 | [`FormatSpecification.MirrorMode`](parameters/formatSpecification/format-control.md#mirrormode) | Sets whether to decode mirrored barcodes. | 
 | [`FormatSpecification.ModuleSizeRangeArray`](parameters/formatSpecification/format-control.md#modulesizerangearray) | Sets the range of module size (in pixels) for barcodes search. (Hint). |
 | [`FormatSpecification.RequireStartStopChars`](parameters/formatSpecification/format-control.md#requirestartstopchars) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. |
 | [`FormatSpecification.StanardFormat`](parameters/formatSpecification/format-control.md#stanardformat) | Set the standard barcode format. | 
 | [`FormatSpecification.TailModuleRatio`](parameters/formatSpecification/format-control.md#tailmoduleratio) |	Set the module count and module size ratio of the barcode tail part. | 


 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.DeblurLevel`](parameters/formatSpecification/image-process-control.md#deblurlevel) | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | [`FormatSpecification.DeformationResistingModes`](parameters/formatSpecification/image-process-control.md#deformationresistingmodes)  | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | [`FormatSpecification.BarcodeComplementModes`](parameters/formatSpecification/image-process-control.md#barcodecomplementmodes) | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |
 | [`FormatSpecification.AccompanyingTextRecognitionModes`](parameters/formatSpecification/image-process-control.md#accompanyingtextrecognitionmodes) | Sets the mode and priority to recognize accompanying text for the current specified barcode format. | 



### Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.MinResultConfidence`](parameters/formatSpecification/result-control.md#minresultconfidence) | The minimum confidence of the result. | 
 | [`FormatSpecification.ReturnPartialBarcodeValue`](parameters/formatSpecification/result-control.md#returnpartialbarcodevalue) | Sets whether or not to return partial barcode value(s). Not support yet. | 
