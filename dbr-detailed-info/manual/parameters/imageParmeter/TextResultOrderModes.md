---
layout: manual-parameter
id: parameter_image_TextResultOrderModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/TextResultOrderModes.md
---
---
layout: manual-parameter
id: parameter_image_IntermediateResultSavingMode
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/IntermediateResultSavingMode.md
---

# ImageParameter Object - Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](result-control.md#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](IntermediateResultSavingMode.md#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](result-control.md#resultcoordinatetype) | Specifies the format for the coordinates returned. | 
 | [`ImageParameter.TextResultOrderModes`](#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
 | [`ImageParameter.ReturnBarcodeZoneClarity`](result-control.md#returnbarcodezoneclarity) | Sets whether or not to return the clarity of the barcode zone. |  

---

## TextResultOrderModes

### Mode Properties
`TextResultOrderModes` is a parameter deciding the order of the text results returned. It consisits of one or more `TextResultOrderMode` items. The array index represents the priority of the item. The smaller index is, the higher priority is.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string array* or *[`TextResultOrderMode`]({{ site.manual_interface_enum }}result-enum.html#textresultordermode) array* | "TROM_SKIP"<br>"TROM_CONFIDENCE"<br>"TROM_POSITION"<br>"TROM_FORMAT" | ["TROM_CONFIDENCE", "TROM_POSITION", "TROM_FORMAT", ""TROM_SKIP"", "TROM_SKIP", "TROM_SKIP", "TROM_SKIP", "TROM_SKIP"] |

- **See also**:   
    [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode)
    
    
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


## TextResultOrderModes
Sets the mode and priority for the order of the text results returned.

**Remark**   
The array index represents the priority of the item. The smaller index is, the higher priority is.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | TextResultOrderModes | *JSON Object Array* | {<br>&emsp;"TextResultOrderModes": [ <br>&emsp;&emsp;{"Mode":"TROM_CONFIDENCE"}, <br>&emsp;&emsp;{"Mode":"TROM_POSITION"},<br>&emsp;&emsp;{"Mode":"TROM_FORMAT"}<br>&emsp;]<br>} |

**Remark**   
`TextResultOrderModes` consists of one or more JSON object, each JSON object has several keys which can be found in [Mode Arguments](#mode-arguments).

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


&nbsp;


### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`textResultOrderModes`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#textresultordermodes) | [`TextResultOrderMode`]({{ site.manual_interface_enum }}result-enum.html#textresultordermode)[8] | Each array item can be any one of the  [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode) items.| `[TROM_CONFIDENCE,TROM_POSITION,TROM_FORMAT,TROM_SKIP,TROM_SKIP,TROM_SKIP,TROM_SKIP,TROM_SKIP]`|

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode)


&nbsp;


### Mode Arguments
- [Mode](#mode)

#### Mode  
Sets the mode for the order of the text results returned.

| Value Type | Value Range | Default Value |
| ---------- | ----------- | ------------- |
| *string* | "TROM_SKIP"<br>"TROM_CONFIDENCE"<br>"TROM_POSITION"<br>"TROM_FORMAT" | It must be a mandatory setting value. |

- **See also**:   
    [`TextResultOrderMode` Enumeration]({{ site.manual_interface_enum }}result-enum.html#textresultordermode)
