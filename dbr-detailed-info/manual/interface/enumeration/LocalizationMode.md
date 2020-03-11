# LocalizationMode Enumeration



## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum LocalizationMode` |
| .Net | `enum Dynamsoft.Barcode.EnumLocalizationMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| LM_SKIP | 0x00 | Skips localization. |
| LM_AUTO  | 0x01 | Not supported yet. |
| LM_CONNECTED_BLOCKS | 0x02 | Localizes barcodes by searching for connected blocks. This algorithm usually gives best result and it is recommended to set ConnectedBlocks to the highest priority. |
| LM_STATISTICS | 0x04 | Localizes barcodes by groups of contiguous black-white regions. This is optimized for QRCode and DataMatrix. |
| LM_LINES | 0x08 | Localizes barcodes by searching for groups of lines. This is optimized for 1D and PDF417 barcodes. |
|  LM_SCAN_DIRECTLY | 0x10 |  Localizes barcodes quickly. This mode is recommended in interactive scenario. Check [Arguments of `LocalizationModes`]({{ site.manual_interface_argument}}LocalizationModes.html) for available argument settings. |
| LM_STATISTICS_MARKS | 0x20 | Localizes barcodes by groups of marks.This is optimized for DPM codes. |
| LM_STATISTICS_POSTAL_CODE | 0x40 | Localizes barcodes by groups of connected blocks and lines.This is optimized for postal codes. |
