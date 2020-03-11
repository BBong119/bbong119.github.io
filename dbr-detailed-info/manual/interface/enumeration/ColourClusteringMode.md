# ColourClusteringMode Enumeration
Describes the colour clustering mode.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ColourClusteringMode` |
| .Net | `enum Dynamsoft.Barcode.EnumColourClusteringMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| CCM_SKIP  | 0x00 | Skips the colour clustering. |
| CCM_AUTO  | 0x01 | **Not supported yet.** |
| CCM_GENERAL_HSV  | 0x02 | Clusters colours using the general algorithm based on HSV. Check arguments of [`ColourClusteringModes`]({{ site.manual_interface_argument}}ColourClusteringModes.html) for available argument settings. |

