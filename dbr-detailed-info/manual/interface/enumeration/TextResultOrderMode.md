# TextResultOrderMode Enumeration
Describes the text result order mode.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextResultOrderMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextResultOrderMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TROM_SKIP | 0x00 | Skips the result ordering operation. |
| TROM_CONFIDENCE | 0x01 | Returns the text results in descending order by confidence. |
| TROM_POSITION | 0x02 | Returns the text results in position order, from top to bottom, then left to right. |
| TROM_FORMAT | 0x04 | Returns the text results in alphabetical and numerical order by barcode format string. |

