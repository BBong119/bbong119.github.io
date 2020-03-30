
# Dynamsoft Barcode Reader SDK - Parameters

- [ImageParameter Object](#imageparameter-object)
- [RegionDefinition Object](#regiondefinition-object)
- [FormatSpecification Object](#formatspecification-object)



## ImageParameter Object

### Content Organization Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | ImageParameter.Name | The name of the ImageParameter object. |
 | ImageParameter.Description | The description of the ImageParameter object. |
 | ImageParameter.FormatSpecificationNameArray | The names of the referenced FormatSpecification object(s). |
 | ImageParameter.RegionDefinitionNameArray | The names of the referenced RegionDefinition object(s). |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | ImageParameter.TerminatePhase | Sets the phase where the algorithm stops. |
 | ImageParameter.Timeout | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.|
 | ImageParameter.MaxAlgorithmThreadCount | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | ImageParameter.ExpectedBarcodesCount | Sets the number of barcodes expected to be detected for each image. |


### Cost Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | ImageParameter.TerminatePhase | Sets the phase where the algorithm stops. |
 | ImageParameter.Timeout | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.|
 | ImageParameter.MaxAlgorithmThreadCount | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | ImageParameter.ExpectedBarcodesCount | Sets the number of barcodes expected to be detected for each image. |



### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | ImageParameter..BarcodeFormatIds | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | ImageParameter.BarcodeFormatIds_2 | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode.|
 
 
 
### Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | ImageParameter.Pages | Sets the specific pages or the range of pages of a file (.tiff or .pdf) for barcode searching. |
 | ImageParameter.PDFRasterDPI | Sets the output image resolution. |
 | ImageParameter.ScaleDownThreshold | Sets the threshold for the image shrinking. |
 | ImageParameter.ColourClusteringModes | Sets the mode and priority for colour categorization. Not supported yet. |
 | ImageParameter.ColourConversionModes | Sets the mode and priority for converting a colour image to a grayscale image. |
 | ImageParameter.GrayscaleTransformationModes | Sets the mode and priority for the grayscale image conversion. |
 | ImageParameter.RegionPredetectionModes | Sets the region pre-detection mode for barcodes search. |
 | ImageParameter.ImagePreprocessingModes | Sets the mode and priority for image preprocessing algorithms. |
 | ImageParameter.BinarizationModes | 	Sets the mode and priority for binarization. |
 | ImageParameter.TextureDetectionModes | 	Sets the mode and priority for texture detection. |
 | ImageParameter.LocalizationModes | 	Sets the mode and priority for localization algorithms. |
 | ImageParameter.TextFilterModes | 	Sets the mode and priority for text filter. |
 | ImageParameter.TextAssistedCorrectionMode | Sets the mode of text assisted correction for barcode decoding. 
 Not support yet. |
 | ImageParameter.DPMCodeReadingModes | Sets the mode and priority for DPM code reading. |
 Not support yet."
 | ImageParameter.DeformationResistingModes | Sets the mode and priority for deformation resisting. |
 | ImageParameter.BarcodeComplementModes | Sets the mode and priority to complement the missing parts in the barcode. |
 | ImageParameter.BarcodeColourModes | Sets the mode and priority for the barcode colour mode used to process the barcode zone. |
 | ImageParameter.DeblurLevel | Sets the degree of blurriness of the barcode. |
 | ImageParameter.AccompanyingTextRecognitionModes | Sets the mode and priority to recognize accompanying text. |
 | ImageParameter.ScaleUpModes | Sets the mode and priority to control the sampling methods of scale-up for linear barcodes with small module sizes. | 
 | ImageParameter.PDFReadingMode | Sets the way to detect barcodes from a PDF file when using the DecodeFile method. |




### Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | ImageParameter.IntermediateResultTypes | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | ImageParameter.IntermediateResultSavingMode | Sets the mode for saving the intermediate result. | 
 | ImageParameter.ResultCoordinateType | Specifies the format for the coordinates returned | 
 | ImageParameter.TextResultOrderModes | Sets the mode and priority for the order of the text results returned. | 
 | ImageParameter.ReturnBarcodeZoneClarity | Sets whether or not to return the clarity of the barcode zone. | 


