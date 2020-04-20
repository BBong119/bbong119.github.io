---
layout: manual-parameter
id: parameter_image_IntermediateResultSavingMode
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/IntermediateResultSavingMode.md
listFile: parametersList
---

# ImageParameter Object - Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](result-control.md#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](result-control.md#resultcoordinatetype) | Specifies the format for the coordinates returned. | 
 | [`ImageParameter.TextResultOrderModes`](TextResultOrderModes.md#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](result-control.md#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. |  

---

## IntermediateResultSavingMode

### Mode Properties
`IntermediateResultSavingMode` is a parameter for setting the intermediate result saving mode. Each mode has several arguments for setting the saving options.   

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* or *[`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) enum* | "IRSM_MEMORY"<br>"IRSM_FILESYSTEM"<br>"IRSM_BOTH" | "IRSM_MEMORY" |

- **See also**:   
    [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)  
    
#### Mode Arguments
- [FolderPath](#folderpath)
- [RecordsetSizeOfLatestImages](#recordsetsizeoflatestimages)
 
##### FolderPath 
Sets the path of the output folder which stores intermediate results.   

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing the folder path with max length 480. | "" | "IRSM_FILESYSTEM"<br>"IRSM_BOTH" |         

- **Remark**     
    "": The library path.    
    Please make sure the path exists and your application has the appropriate permissions for saving the results.   

##### RecordsetSizeOfLatestImages
Sets the maximum count of recordset to store the latest images' intermediate results.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0,0x7fffffff]  |  0 | "IRSM_MEMORY"<br>"IRSM_FILESYSTEM"<br>"IRSM_BOTH" | 

- **Remark**     
    0: no limitation on the count of recordset.   
    When the count exceeds, the old recordset will be replaced by the new one.

### Setting Methods

#### As JSON Parameter
`IntermediateResultSavingMode` as a JSON parameter is a JSON Object with several keys for setting intermediate result saving mode and the value of [arguments](#mode-arguments) correspondingly. Default values will be used if there is no manual setting.

| Json Object |	Json Parameter Name | Value Type |
| ----------- | ------------------- | ---------- |
| ImageParameter | IntermediateResultSavingMode | *JSON Object* |

**Json Parameter Example**   
```
{
    "IntermediateResultSavingMode": {
            "Mode"": ""IRSM_FILESYSTEM",
            "FolderPath": "C:\",
            "RecordsetSizeOfLatestImages": 0
        }
}
```

&nbsp;


#### As `PublicRuntimeSettings` Member
`IntermediateResultSavingMode` as a member of `PublicRuntimeSettings` struct is a [`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) enum type for setting the intermediate result saving mode. Default value will be used if there is no manual setting.

| Struct |	Struct Member Name | Value Type |
| ------ | ------------------ | ---------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`intermediateResultSavingMode`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#intermediateresultsavingmode) | [`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) |

**Remark**   
[`GetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#getmodeargument) and [`SetModeArgument`]({{ site.manual_interface_cpp }}CBarcodeReader/methods/parameter-and-runtime-settings-basic.html#setmodeargument) need to be called for getting or setting the value of [arguments](#mode-arguments).

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)


&nbsp;
