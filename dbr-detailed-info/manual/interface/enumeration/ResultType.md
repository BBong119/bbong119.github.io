# ResultType Enumeration
Describes the extended result type.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ResultType` |
| .Net | `enum Dynamsoft.Barcode.EnumResultType` |


## Members
   
| Member | Description |
| ------ | ----------- |
| RT_STANDARD_TEXT | Specifies the standard text. This means the barcode value. |
| RT_RAW_TEXT | Specifies the raw text. This means the text that includes start/stop characters, check digits, etc. |
| RT_CANDIDATE_TEXT | Specifies all the candidate text. This means all the standard text results decoded from the barcode. |
| RT_PARTIAL_TEXT | Specifies the partial text. This means part of the text result decoded from the barcode. |


