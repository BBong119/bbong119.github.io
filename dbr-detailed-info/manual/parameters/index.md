
# Dynamsoft Barcode Reader SDK - Parameters

- [ImageParameter Object](#imageparameter-object)
- [RegionDefinition Object](#regiondefinition-object)
- [FormatSpecification Object](#formatspecification-object)



## ImageParameter Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `ImageParameter.Name` | The name of the ImageParameter object. |
 | `ImageParameter.Description` | The description of the ImageParameter object. |
 | `ImageParameter.FormatSpecificationNameArray` | The names of the referenced FormatSpecification object(s). |
 | `ImageParameter.RegionDefinitionNameArray` | The names of the referenced RegionDefinition object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `ImageParameter.TerminatePhase` | Sets the phase where the algorithm stops. |
 | `ImageParameter.Timeout` | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.|
 | `ImageParameter.MaxAlgorithmThreadCount` | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | `ImageParameter.ExpectedBarcodesCount` | Sets the number of barcodes expected to be detected for each image. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `ImageParameter..BarcodeFormatIds` | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | `ImageParameter.BarcodeFormatIds_2` | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |
 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `ImageParameter.Pages` | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | `ImageParameter.PDFRasterDPI` | Sets the output image resolution. |
 | `ImageParameter.ScaleDownThreshold` | Sets the threshold for the image shrinking. |
 | `ImageParameter.ColourClusteringModes` | Sets the mode and priority for colour categorization. Not supported yet. |
 | `ImageParameter.ColourConversionModes` | Sets the mode and priority for converting a colour image to a grayscale image. |
 | `ImageParameter.GrayscaleTransformationModes` | Sets the mode and priority for the grayscale image conversion. |
 | `ImageParameter.RegionPredetectionModes` | Sets the region pre-detection mode for barcodes search. |
 | `ImageParameter.ImagePreprocessingModes` | Sets the mode and priority for image preprocessing algorithms. |
 | `ImageParameter.BinarizationModes` | 	Sets the mode and priority for binarization. |
 | `ImageParameter.TextureDetectionModes` | 	Sets the mode and priority for texture detection. |
 | `ImageParameter.LocalizationModes` | 	Sets the mode and priority for localization algorithms. |
 | `ImageParameter.TextFilterModes` | 	Sets the mode and priority for text filter. |
 | `ImageParameter.TextAssistedCorrectionMode` | Sets the mode of text assisted correction for barcode decoding. Not support yet. |
 | `ImageParameter.DPMCodeReadingModes` | Sets the mode and priority for DPM code reading. Not support yet. |
 | `ImageParameter.DeformationResistingModes` | Sets the mode and priority for deformation resisting. |
 | `ImageParameter.BarcodeComplementModes` | Sets the mode and priority to complement the missing parts in the barcode. |
 | `ImageParameter.BarcodeColourModes` | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | `ImageParameter.DeblurLevel` | Sets the degree of blurriness of the barcode. |
 | `ImageParameter.AccompanyingTextRecognitionModes` | Sets the mode and priority to recognize accompanying text. |
 | `ImageParameter.ScaleUpModes` | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | `ImageParameter.PDFReadingMode` | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |


### Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `ImageParameter.IntermediateResultTypes` | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | `ImageParameter.IntermediateResultSavingMode` | Sets the mode for saving the intermediate result. | 
 | `ImageParameter.ResultCoordinateType` | Specifies the format for the coordinates returned | 
 | `ImageParameter.TextResultOrderModes` | Sets the mode and priority for the order of the text results returned. | 
 | `ImageParameter.ReturnBarcodeZoneClarity` | Sets whether or not to return the clarity of the barcode zone. | 



## RegionDefinition Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `RegionDefinition.Name` | The name of the RegionDefinition object. |
 | `RegionDefinition.FormatSpecificationNameArray` | The names of the referenced FormatSpecification object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `RegionDefinition.ExpectedBarcodesCount` | Sets the expected number of barcodes to be decoded for the current region. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `RegionDefinition..BarcodeFormatIds` | Sets which types of barcode(s) in BarcodeFormat group 1 to be read in this region. |
 | `RegionDefinition.BarcodeFormatIds_2` | Sets which types of barcode(s) in BarcodeFormat group 2 to be read in this region. |
 
 
### Image Process Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `RegionDefinition.Top` | 	The top-most coordinate or percentage of the region. | 
 | `RegionDefinition.Left` | 	The left-most coordinate or percentage of the region. | 
 | `RegionDefinition.Right` | 	The right-most coordinate or percentage of the region. | 
 | `RegionDefinition.Bottom` | 	The bottom-most coordinate or percentage of the region. | 
 | `RegionDefinition.MeasuredByPercentage` | 	Sets whether or not to use percentages to measure the Region size. | 



## FormatSpecification Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `FormatSpecification.Name` | The name of the FormatSpecification object. |


### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | `FormatSpecification.BarcodeAngleRangeArray` | Sets the range of angles (in degrees) for barcodes search. | 
 | `FormatSpecification.BarcodeBytesLengthRangeArray` | Sets the range of barcode bytes length for barcodes search. | 
 | `FormatSpecification.BarcodeBytesRegExPattern` | Specifies the regular express pattern of barcode byte characters. | 
 | `FormatSpecification.BarcodeHeightRangeArray` | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | `FormatSpecification.BarcodeTextLengthRangeArray` |	Sets the range of barcode text length for barcodes search. | 
 | `FormatSpecification.BarcodeTextRegExPattern` | Specifies the regular express pattern of barcode characters. | 
 | `FormatSpecification.BarcodeWidthRangeArray` | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | `FormatSpecification.MinQuietZoneWidth` | The minimum width of the barcode quiet zone. | 
 | `FormatSpecification.ModuleSizeRangeArray` | Sets the range of module size (in pixels) for barcodes search. (Hint). | 
 | `FormatSpecification.BarcodeFormatIds` | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | `FormatSpecification.MirrorMode` | Sets whether to decode mirrored barcodes. | 
 | `FormatSpecification.RequireStartStopChars` |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. | 
 | `FormatSpecification.FindUnevenModuleBarcode` | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | `FormatSpecification.AllModuleDeviation` | Set the module size deviation from the standard barcode module size. | 
 | `FormatSpecification.HeadModuleRatio` | Set the module count and module size ratio of the barcode head part. | 
 | `FormatSpecification.TailModuleRatio` |	Set the module count and module size ratio of the barcode tail part. | 
 | `FormatSpecification.StanardFormat` | Set the standard barcode format. | 
 | `FormatSpecification.Code128Subset` | Set the code 128 subset. | 
 | `FormatSpecification.AustralianPostEncodingTable` | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 

 
 
### Image Process Control

 | `FormatSpecification.DeblurLevel` | Sets the degree of blurriness of the barcode for the current specified barcode format. | 
 | `FormatSpecification.DeformationResistingModes` | Sets the mode and priority for deformation resisting for the current specified barcode format. Not support yet. |
 | `FormatSpecification.BarcodeComplementModes` | Sets the mode and priority to complement the missing parts in the barcode for current specified barcode format. Not support yet. |
 | `FormatSpecification.AccompanyingTextRecognitionModes` | Sets the mode and priority to recognize accompanying text for the current specified barcode format. | 



### Result Control

 | `FormatSpecification.MinResultConfidence` | The minimum confidence of the result. | 
 | `FormatSpecification.ReturnPartialBarcodeValue` | Sets whether or not to return partial barcode value(s). Not support yet. | 
