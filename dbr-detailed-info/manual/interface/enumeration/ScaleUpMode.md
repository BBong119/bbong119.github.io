# ScaleUpMode Enumeration
Describes the scale up mode. 


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum ScaleUpMode` |
| .Net | `enum Dynamsoft.Barcode.EnumScaleUpMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| SUM_SKIP | 0x00 | Skip the scale-up process. |
| SUM_AUTO | 0x01 | The library chooses an interpolation method automatically to scale up. |
| SUM_LINEAR_INTERPOLATION | 0x02 | Scales up using the linear interpolation method. Check arguments of [`ScaleUpModes`]({{ site.manual_interface_argument}}ScaleUpModes.html) for available argument settings. |
| SUM_NEAREST_NEIGHBOUR_INTERPOLATION | 0x04 | Scales up using the nearest-neighbour interpolation method. Check arguments of [`ScaleUpModes`]({{ site.manual_interface_argument}}ScaleUpModes.html) for available argument settings. |

