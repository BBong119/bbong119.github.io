# IntermediateResultType Enumeration
Describes the intermediate result type.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultType` |
| .Net | `enum Dynamsoft.Barcode.EnumIntermediateResultType` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IRT_NO_RESULT | 0x00 | No intermediate result |
| IRT_ORIGINAL_IMAGE | 0x01 | Original image |
| IRT_COLOUR_CLUSTERED_IMAGE | 0x02 | Colour clustered image **(not supported yet)** |
| IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE | 0x04 | Colour image converted to grayscale |
| IRT_TRANSFORMED_GRAYSCALE_IMAGE | 0x08 | Transformed grayscale image |
| IRT_PREDETECTED_REGION | 0x10 | Predetected region |
| IRT_PREPROCESSED_IMAGE | 0x20 | Preprocessed image |
| IRT_BINARIZED_IMAGE | 0x40 | Binarized image |
| IRT_TEXT_ZONE | 0x80 | Text zone |
| IRT_CONTOUR | 0x100 | Contour |
| IRT_LINE_SEGMENT | 0x200 | Line segment |
| IRT_FORM | 0x400 | Form **(not supported yet)** |
| IRT_SEGMENTATION_BLOCK | 0x800 | Segmentation block **(not supported yet)** |
| IRT_TYPED_BARCODE_ZONE | 0x1000 | Typed barcode zone |

