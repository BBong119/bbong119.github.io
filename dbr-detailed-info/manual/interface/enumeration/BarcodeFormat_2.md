# BarcodeFormat_2 Enumeration
Describes the barcode types in BarcodeFormat group 2. Note: The barcode format our library will search for is composed of [BarcodeFormat group 1](BarcodeFormat.md) and [BarcodeFormat group 2](BarcodeFormat_2.md), so you need to specify the barcode format in group 1 and group 2 individually.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeFormat_2` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeFormat_2` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BF2_POSTALCODE | 0x01F00000 | Combined value of BF2_USPSINTELLIGENTMAIL, BF2_POSTNET, BF2_PLANET, BF2_AUSTRALIANPOST, BF2_RM4SCC. |
| BF2_NULL  | 0x00 | No barcode format in [BarcodeFormat group 2](BarcodeFormat_2.md). |
| BF2_NONSTANDARD_BARCODE | 0x01 | Nonstandard barcode |
| BF2_USPSINTELLIGENTMAIL | 0x00100000 | USPS Intelligent Mail |
| BF2_POSTNET | 0x00200000 | Postnet |
| BF2_PLANET | 0x00400000 | Planet |
| BF2_AUSTRALIANPOST | 0x00800000 | Australian Post |
| BF2_RM4SCC | 0x01000000 | Royal Mail 4-State Customer Barcode |

