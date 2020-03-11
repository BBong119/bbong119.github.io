# TextFilterMode Enumeration
Describes the text filter mode.

## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextFilterMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextFilterMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TFM_SKIP | 0x00 | Skip the text filtering. |
| TFM_AUTO | 0x01 | **Not supported yet.** |
| TFM_GENERAL_CONTOUR | 0x02 | Filters text using the general algorithm based on contour. Check [Arguments of `TextFilterModes`]({{ site.manual_interface_argument}}TextFilterModes.html) for available argument settings. |


