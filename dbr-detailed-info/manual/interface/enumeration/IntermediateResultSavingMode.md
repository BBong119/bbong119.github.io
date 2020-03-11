# IntermediateResultSavingMode Enumeration
Describes the intermediate result saving mode.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum IntermediateResultSavingMode` |
| .Net | `enum Dynamsoft.Barcode.EnumIntermediateResultSavingMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| IRSM_MEMORY | 0x01 | Saves intermediate results in memory. |
| IRSM_FILESYSTEM | 0x02 | Saves intermediate results in file system. Check arguments of [`IntermediateResultSavingMode`]({{ site.manual_interface_argument}}IntermediateResultSavingMode.html) for available argument settings. |
| IRSM_BOTH | 0x04 | Saves intermediate results in both memory and file system. Check arguments of [`IntermediateResultSavingMode`]({{ site.manual_interface_argument}}IntermediateResultSavingMode.html) for available argument settings. |

