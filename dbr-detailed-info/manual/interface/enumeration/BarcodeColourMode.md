# BarcodeColourMode Enumeration
Describes the barcode colour mode.


## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum BarcodeColourMode` |
| .Net | `enum Dynamsoft.Barcode.EnumBarcodeColourMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| BICM_SKIP | 0x00 | Skips the barcode colour operation. |
| BICM_DARK_ON_LIGHT | 0x01 | Dark items on a light background. Check arguments of [`BarcodeColourModes`]({{ site.manual_interface_argument}}BarcodeColourModes.html) for available argument settings. |
| BICM_LIGHT_ON_DARK  | 0x02 | Light items on a dark background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_interface_argument}}BarcodeColourModes.html) for available argument settings. |
| BICM_DARK_ON_DARK  | 0x04 | Dark items on a dark background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_interface_argument}}BarcodeColourModes.html) for available argument settings. |
| BICM_LIGHT_ON_LIGHT  | 0x08 | Light items on a light background. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_interface_argument}}BarcodeColourModes.html) for available argument settings. |
| BICM_DARK_LIGHT_MIXED  | 0x10 | The background is mixed by dark and light. Not supported yet. **Not supported yet**. Check arguments of [`BarcodeColourModes`]({{ site.manual_interface_argument}}BarcodeColourModes.html) for available argument settings. |
| BICM_DARK_ON_LIGHT_DARK_SURROUNDING  | 0x20 | Dark item on a light background surrounded by dark. Check arguments of [`BarcodeColourModes`]({{ site.manual_interface_argument}}BarcodeColourModes.html) for available argument settings. |
