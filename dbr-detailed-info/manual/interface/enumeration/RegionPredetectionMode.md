# RegionPredetectionMode Enumeration
Describes the region predetection mode.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum RegionPredetectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumRegionPredetectionMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| RPM_SKIP | 0x00 | Skips region detection. |
| RPM_AUTO | 0x01 | Lets the library choose an algorithm automatically to detect region. |
| RPM_GENERAL | 0x02 | Takes the whole image as a region. |
| RPM_GENERAL_RGB_CONTRAST | 0x04 | Detects region using the general algorithm based on RGB colour contrast. Check [Arguments of `RegionPredetectionModes`]({{ site.manual_interface_argument}}RegionPredetectionModes.html) for available argument settings. |
| RPM_GENERAL_GRAY_CONTRAST | 0x08 | Detects region using the general algorithm based on gray contrast. Check [Arguments of `RegionPredetectionModes`]({{ site.manual_interface_argument}}RegionPredetectionModes.html) for available argument settings. |
| RPM_GENERAL_HSV_CONTRAST | 0x10 | Detects region using the general algorithm based on HSV colour contrast. Check [Arguments of `RegionPredetectionModes`]({{ site.manual_interface_argument}}RegionPredetectionModes.html) for available argument settings. |


