---
layout: manual-interface-enum
id: interface_enum_format
sourceCodeUrl: /dbr-detailed-info/manual/interface/enumeration/format-enum.md
---


# Dynamsoft Barcode Reader Enumeration - Format Enumeration

  | Enumeration | Description |
  |-------------|-------------|
  | [`BarcodeFormat`](#barcodeformat) | Describes the barcode types in BarcodeFormat group 1. |
  | [`BarcodeFormat_2`](#barcodeformat_2) | Describes the barcode types in BarcodeFormat group 2. |
  
---



## BarcodeFormat
Describes the barcode types in BarcodeFormat group 1. All the formats can be combined, such as BF_CODE_39 | BF_CODE_128. Note: The barcode format our library will search for is composed of [BarcodeFormat group 1](#barcodeformat) and [BarcodeFormat group 2](#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.

### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat` |
| .Net | `Dynamsoft.Barcode.EnumBarcodeFormat ` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BF_ALL | -32505857 | All supported formats in [BarcodeFormat group 1](#barcodeformat). |
| BF_ONED | 0x000007FF | Combined value of BF_CODABAR, BF_CODE_128, BF_CODE_39, BF_CODE_39_Extended, BF_CODE_93, BF_EAN_13, BF_EAN_8, INDUSTRIAL_25, BF_ITF, BF_UPC_A, BF_UPC_E. |
| BF_GS1_DATABAR | 0x0003F800 | Combined value of BF_GS1_DATABAR_OMNIDIRECTIONAL, BF_GS1_DATABAR_TRUNCATED, BF_GS1_DATABAR_STACKED, BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL, BF_GS1_DATABAR_EXPANDED, BF_GS1_DATABAR_EXPANDED_STACKED, BF_GS1_DATABAR_LIMITED. | 
| BF_NULL | 0x00 | No barcode format in [BarcodeFormat group 1](#barcodeformat). |
| BF_CODE_39 | 0x01 | Code 39 |
| BF_CODE_128 | 0x02 | Code 128 |
| BF_CODE_93 | 0x04 | Code 93 |
| BF_CODABAR | 0x08 | Codabar |
| BF_ITF  | 0x10 | ITF |
| BF_EAN_13 | 0x20 | EAN-13 |
| BF_EAN_8 | 0x40 | EAN-8 |
| BF_UPC_A | 0x80 | UPC-A |
| BF_UPC_E | 0x100 | UPC-E |
| BF_INDUSTRIAL_25 | 0x200 | Industrial 2 of 5 |
| BF_CODE_39_EXTENDED | 0x400 | Code 39 Extended |
| BF_GS1_DATABAR_OMNIDIRECTIONAL | 0x800 | GS1 Databar Omnidirectional |
| BF_GS1_DATABAR_TRUNCATED | 0x1000 | GS1 Databar Truncated |
| BF_GS1_DATABAR_STACKED | 0x2000 | GS1 Databar Stacked |
| BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL | 0x4000 | GS1 Databar Stacked Omnidirectional |
| BF_GS1_DATABAR_EXPANDED | 0x8000 | GS1 Databar Expanded |
| BF_GS1_DATABAR_EXPANDED_STACKED | 0x10000 | GS1 Databar Expaned Stacked |
| BF_GS1_DATABAR_LIMITED | 0x20000 | GS1 Databar Limited |
| BF_PATCHCODE | 0x00040000 | Patch code |
| BF_MICRO_PDF417 | 0x00080000 | Micro PDF417 |
| BF_PDF417 | 0x02000000 | PDF417 |
| BF_QR_CODE | 0x04000000 | QRCode |
| BF_DATAMATRIX | 0x08000000 | DataMatrix |
| BF_AZTEC | 0x10000000 | AZTEC |
| BF_MAXICODE | 0x20000000 | MAXICODE |
| BF_MICRO_QR | 0x40000000 | Micro QR Code |
| BF_GS1_COMPOSITE | -2147483648 | GS1 Composite Code |



&nbsp;



## BarcodeFormat_2
Describes the barcode types in BarcodeFormat group 2. Note: The barcode format our library will search for is composed of [BarcodeFormat group 1](#barcodeformat) and [BarcodeFormat group 2](#barcodeformat_2), so you need to specify the barcode format in group 1 and group 2 individually.


### Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat_2` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeFormat_2` |


### Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BF2_POSTALCODE | 0x01F00000 | Combined value of BF2_USPSINTELLIGENTMAIL, BF2_POSTNET, BF2_PLANET, BF2_AUSTRALIANPOST, BF2_RM4SCC. |
| BF2_NULL  | 0x00 | No barcode format in [BarcodeFormat group 2](#barcodeformat_2). |
| BF2_NONSTANDARD_BARCODE | 0x01 | Nonstandard barcode |
| BF2_USPSINTELLIGENTMAIL | 0x00100000 | USPS Intelligent Mail |
| BF2_POSTNET | 0x00200000 | Postnet |
| BF2_PLANET | 0x00400000 | Planet |
| BF2_AUSTRALIANPOST | 0x00800000 | Australian Post |
| BF2_RM4SCC | 0x01000000 | Royal Mail 4-State Customer Barcode |

