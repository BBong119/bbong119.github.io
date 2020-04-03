# IntermediateResultSavingMode
Sets the mode for saving the intermediate result.

## Mode Argument
### Mode (*mandatory*)   
    Sets the mode for saving the intermediate result.
    
    | Value Type | Value Range | 
    | ---------- | ----------- |
    | *string* | "IRSM_MEMORY"<br>"IRSM_FILESYSTEM"<br>"IRSM_BOTH" | 

    - **See also**:   
        [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)  
        
### FolderPath (*optional*)   
    Sets the path of the output folder which stores intermediate results.   
    
    | Value Type | Value Range | Default Value | Vaild Modes | 
    | ---------- | ----------- | ------------- | ----------- |
    | *string* | A string value representing the folder path with max length 480. | "" | "IRSM_FILESYSTEM"<br>"IRSM_BOTH" |         
    
    - **Remark**     
        "": The library path.    
        Please make sure the path exists and your application has the appropriate permissions for saving the results.   

### RecordsetSizeOfLatestImages (*optional*)   
    Sets the maximum count of recordset to store the latest images' intermediate results.
    
    | Value Type | Value Range | Default Value | Vaild Modes | 
    | ---------- | ----------- | ------------- | ----------- |
    | *int* | [0,0x7fffffff]  |  0 | "IRSM_MEMORY"<br>"IRSM_FILESYSTEM"<br>"IRSM_BOTH" | 
    
    - **Remark**     
        0: no limitation on the count of recordset.   
        When the count exceeds, the old recordset will be replaced by the new one.

## As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | IntermediateResultSavingMode | *JSON Object* | {<br>&emsp;"IntermediateResultSavingMode": <br>&emsp;{<br>&emsp;&emsp;Mode: "IRSM_MEMORY"<br>&emsp;}<br>} |

**Json Parameter Example**   
```
{
    "IntermediateResultSavingMode": {
            "Mode"": ""IRSM_FILESYSTEM",
            "FolderPath": "C:\"
        }
}
```

**See Also**
- [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)


### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`intermediateResultSavingMode`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#intermediateresultsavingmode) | [`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) | Any one of the [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) items.| `IRSM_MEMORY`|

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)


