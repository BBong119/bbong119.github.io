# Dynamsoft Barcode Reader Enumeration - Other Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`ImagePixelFormat`](#imagepixelformat) | Describes the image pixel format. |
  | [`QRCodeErrorCorrectionLevel`](#qrcodeerrorcorrectionlevel) | Describes the QR Code error correction level.   |
  
---

## ImagePixelFormat Enumeration
Describes the image pixel format.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ImagePixelFormat` |
| .Net | `enum Dynamsoft.Barcode.EnumImagePixelFormat` |


### Members
   
| Member | Description |
| ------ | ----------- |
| IPF_BINARY | 0: Black, 1: White |
| IPF_BINARYINVERTED | 0: Black, 1: White |
| IPF_GRAYSCALED | 8 bit gray |
| IPF_NV21  | NV21 |
| IPF_RGB_565  | 16 bit |
| IPF_RGB_555  | 16 bit |
| IPF_RGB_888  | 24 bit |
| IPF_ARGB_8888  | 32 bit |
| IPF_RGB_161616 | 48 bit |
| IPF_ARGB_16161616 | 64 bit |



&nbsp;



## QRCodeErrorCorrectionLevel Enumeration
Describes the QR Code error correction level.  


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum QRCodeErrorCorrectionLevel` |
| .Net | `enum Dynamsoft.Barcode.EnumQRCodeErrorCorrectionLevel` |


### Members
   
| Member | Description |
| ------ | ----------- |
| QRECL_ERROR_CORRECTION_L | Error Correction Level L (low) |
| QRECL_ERROR_CORRECTION_M | Error Correction Level M (medium-low) |
| QRECL_ERROR_CORRECTION_Q | Error Correction Level Q (medium-high) |
| QRECL_ERROR_CORRECTION_H | Error Correction Level H (high) |
