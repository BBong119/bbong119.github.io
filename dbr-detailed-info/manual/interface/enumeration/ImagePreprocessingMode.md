# ImagePreprocessingMode Enumeration
Describes the image preprocessing mode.

## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePreprocessingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumImagePreprocessingMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IPM_SKIP | 0x00 | Skips image preprocessing. |
| IPM_AUTO | 0x01 | **Not supported yet.** |
| IPM_GENERAL | 0x02 | Takes the unpreprocessed image for following operations. |
| IPM_GRAY_EQUALIZE | 0x04 | Preprocesses the image using the gray equalization algorithm. Check [Arguments of `ImagePreprocessingModes`]({{ site.manual_interface_argument}}ImagePreprocessingModes.html) for available argument settings. |
| IPM_GRAY_SMOOTH | 0x08 | Preprocesses the image using the gray smoothing algorithm. Check [Arguments of `ImagePreprocessingModes`]({{ site.manual_interface_argument}}ImagePreprocessingModes.html) for available argument settings. |
| IPM_SHARPEN_SMOOTH | 0x10 | Preprocesses the image using the sharpening and smoothing algorithm. Check [Arguments of `ImagePreprocessingModes`]({{ site.manual_interface_argument}}ImagePreprocessingModes.html) for available argument settings. |
