# TerminatePhase Enumeration
Describes the terminate phase.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TerminatePhase` |
| .Net | `enum Dynamsoft.Barcode.EnumTerminatePhase` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TP_REGION_PREDETECTED | 0x01 | Exits the barcode reading algorithm after the region predetection is done. |
| TP_IMAGE_PREPROCESSED | 0x02 | Exits the barcode reading algorithm after the region predetection and image pre-processing is done. |
| TP_IMAGE_BINARIZED | 0x04 | Exits the barcode reading algorithm after the region predetection, image pre-processing, and image binarization are done. |
| TP_BARCODE_LOCALIZED | 0x08 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, and barcode localization are done. |
| TP_BARCODE_TYPE_DETERMINED | 0x10 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, and barcode type determining are done. |
| TP_BARCODE_RECOGNIZED | 0x20 | Exits the barcode reading algorithm after the region predetection, image pre-processing, image binarization, barcode localization, barcode type determining, and barcode recognition are done. |
