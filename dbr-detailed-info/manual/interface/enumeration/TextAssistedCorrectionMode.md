# TextAssistedCorrectionMode Enumeration
Describes the text assisted correction mode.

## Declarations
   
| Language | Declaration |
| -------- | ----------- |
| C / C++ | `enum TextAssistedCorrectionMode` |
| .Net | `enum Dynamsoft.Barcode.EnumTextAssistedCorrectionMode` |


## Members
   
| Member | Value | Description |
| ------ | ----- | ----------- |
| TACM_SKIP | 0x00 | Skips the text assisted correction. |
| TACM_AUTO | 0x01 | **Not supported yet.** |
| TACM_VERIFYING | 0x02 | Uses the accompanying text to verify the decoded barcode result. Check [Arguments of `TextAssistedCorrectionMode`]({{ site.manual_interface_argument}}TextAssistedCorrectionMode.html) for available argument settings. |
| TACM_VERIFYING_PATCHING | 0x04 | Uses the accompanying text to verify and patch the decoded barcode result. Check [Arguments of `TextAssistedCorrectionMode`]({{ site.manual_interface_argument}}TextAssistedCorrectionMode.html) for available argument settings. |



