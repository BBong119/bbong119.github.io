---
layout: manual-parameter
id: parameter_image_result
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/result-control.md
---

# ImageParameter Object - Result Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](#resultcoordinatetype) | Specifies the format for the coordinates returned. | 
 | [`ImageParameter.TextResultOrderModes`](#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. |  
 
---

## IntermediateResultTypes
Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined.  

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | IntermediateResultTypes | *string Aarry* | An array item can be any one of the [`IntermediateResultTypes` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresulttype) items | `null` |

**Json Parameter Example**   
```
{
    "IntermediateResultTypes": [
        "IRT_BINARIZED_IMAGE",
        "IRT_ORIGINAL_IMAGE"
    ]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`intermediateResultTypes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#intermediateresulttypes) | *int* | A combined value of [`IntermediateResultType` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresulttype) items. | `IRT_NO_RESULT` (0) |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`IntermediateResultType` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresulttype)



&nbsp;




## IntermediateResultSavingMode
Sets the mode for saving the intermediate result.


### As Json Parameter

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
- [Arguments of `IntermediateResultSavingMode`](#intermediateresultsavingmode-json-object-arguments)



### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`intermediateResultSavingMode`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#intermediateresultsavingmode) | [`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) | Any one of the [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) items.| `IRSM_MEMORY`|

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode)


### IntermediateResultSavingMode Json Object Arguments
- **Mode** (*mandatory*)   
    Sets the mode for saving the intermediate result.
    - **Value type**:    
        *string*

    - **Value range**:   
        Any one of the [`IntermediateResultSavingMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#intermediateresultsavingmode) items.   
        
- **FolderPath** (*optional*)   
    Sets the path of the output folder which stores intermediate results.   
    - **Valid modes**   
        `IRSM_FILESYSTEM`, `IRSM_BOTH`

    - **Value type**   
        *string*

    - **Value range**   
        A string value representing the folder path with max length 480.   
    
    - **Default value**   
        ""  
    
    - **Remark**     
        "": The library path.    
        Please make sure the path exists and your application has the appropriate permissions for saving the results.   

- **RecordsetSizeOfLatestImages** (*optional*)   
    Sets the maximum count of recordset to store the latest images' intermediate results.
    - **Valid modes**   
        `IRSM_MEMORY`, `IRSM_FILESYSTEM`, `IRSM_BOTH`

    - **Value type**   
        *int*

    - **Value range**   
        [0,0x7fffffff]   
    
    - **Default value**   
        0  
    
    - **Remark**     
        0: no limitation on the count of recordset.   
        When the count exceeds, the old recordset will be replaced by the new one.



&nbsp;





## ResultCoordinateType
Specifies the format for the coordinates returned.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | ResultCoordinateType | *string* | Any one of the [`ResultCoordinateType` Enumeration]({{ site.manual_interface_enum }}result-enum.html#resultcoordinatetype) items | "RCT_PIXEL" |

**Json Parameter Example**   
```
{
    "ResultCoordinateType":"RCT_PIXEL"
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`resultCoordinateType`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#resultcoordinatetype) | [`ResultCoordinateType`]({{ site.manual_interface_enum }}result-enum.html#resultcoordinatetype) | Any one of the [`ResultCoordinateType` Enumeration]({{ site.manual_interface_enum }}result-enum.html#resultcoordinatetype) items.| `IRSM_MEMORY`|

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`ResultCoordinateType` Enumeration]({{ site.manual_interface_enum }}result-enum.html#resultcoordinatetype)



&nbsp;




## TextResultOrderModes
Sets the mode and priority for the order of the text results returned.

**Remark**   
The array index represents the priority of the item. The smaller index is, the higher priority is.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | TextResultOrderModes | *JSON Object Array* | {<br>&emsp;"TextResultOrderModes": [ <br>&emsp;&emsp;{"Mode":"TROM_CONFIDENCE"}, <br>&emsp;&emsp;{"Mode":"TROM_POSITION"},<br>&emsp;&emsp;{"Mode":"TROM_FORMAT"}<br>&emsp;]<br>} |

**Remark**   
`TextResultOrderModes` Consists of one or more JSON objects.

**Json Parameter Example**   
```
{
    "TextResultOrderModes": [
        {"Mode"":"TROM_CONFIDENCE"},
        {"Mode":"TROM_POSITION"},
        {"Mode":"TROM_FORMAT"}
    ]
}
```

**See also**   
- [Arguments of `TextResultOrderModes`](#textresultordermodes-json-object-arguments)

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`textResultOrderModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#textresultordermodes) | [`TextResultOrderMode`]({{ site.manual_interface_enum }}result-enum.html#textresultordermode)[8] | Each array item can be any one of the  [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode) items.| `[TROM_CONFIDENCE,TROM_POSITION,TROM_FORMAT,TROM_SKIP,TROM_SKIP,TROM_SKIP,TROM_SKIP,TROM_SKIP]`|

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode)


### TextResultOrderModes Json Object Arguments
- **Mode** (*mandatory*)  
    Sets the mode for the order of the text results returned.
    - **Value type**:    
        *string*

    - **Value range**:   
        Any one of the [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode) items.   

&nbsp;



## ReturnBarcodeZoneClarity
Sets whether or not to return the clarity of the barcode zone.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | ReturnBarcodeZoneClarity | *int* | [0, 1] | 0 |

**Json Parameter Example**   
```
{
    "ReturnBarcodeZoneClarity": 1
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`returnBarcodeZoneClarity`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#returnbarcodezoneclarity) | *int* | [0, 1] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
