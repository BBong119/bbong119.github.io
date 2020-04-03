# ImageParameter Object - Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](result-control.md#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](result-control.md#resultcoordinatetype) | Specifies the format for the coordinates returned. | 
 | [`ImageParameter.TextResultOrderModes`](result-control.md#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](result-control.md#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. |  

---

## IntermediateResultSavingMode
Sets the mode for saving the intermediate result.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | IntermediateResultSavingMode | *JSON Object* | {<br>&emsp;"IntermediateResultSavingMode": <br>&emsp;{<br>&emsp;&emsp;Mode: "IRSM_MEMORY"<br>&emsp;}<br>} |

**Remark**   
IntermediateResultSavingMode is a JSON Object with several keys which can be found in [Mode Argument](#mode-argument).

**Json Parameter Example**   
```
{
    "IntermediateResultSavingMode": {
            "Mode"": ""IRSM_FILESYSTEM",
            "FolderPath": "C:\"
        }
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`intermediateResultSavingMode`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#intermediateresultsavingmode) | [`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) | Any one of the [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) items.| `IRSM_MEMORY`|

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)


### Mode Argument

- [Mode](#mode)
- [FolderPath](#folderpath)
- [RecordsetSizeOfLatestImages](recordsetsizeoflatestimages)

#### Mode 
Sets the mode for saving the intermediate result.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* | "IRSM_MEMORY"<br>"IRSM_FILESYSTEM"<br>"IRSM_BOTH" | It must be a mandatory setting value. |

- **See also**:   
    [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)  
        
#### FolderPath 
Sets the path of the output folder which stores intermediate results.   

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *string* | A string value representing the folder path with max length 480. | "" | "IRSM_FILESYSTEM"<br>"IRSM_BOTH" |         

- **Remark**     
    "": The library path.    
    Please make sure the path exists and your application has the appropriate permissions for saving the results.   

#### RecordsetSizeOfLatestImages
Sets the maximum count of recordset to store the latest images' intermediate results.

| Value Type | Value Range | Default Value | Vaild Modes | 
| ---------- | ----------- | ------------- | ----------- |
| *int* | [0,0x7fffffff]  |  0 | "IRSM_MEMORY"<br>"IRSM_FILESYSTEM"<br>"IRSM_BOTH" | 

- **Remark**     
    0: no limitation on the count of recordset.   
    When the count exceeds, the old recordset will be replaced by the new one.
