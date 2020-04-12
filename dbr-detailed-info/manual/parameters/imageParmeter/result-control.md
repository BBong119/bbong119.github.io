---
layout: manual-parameter
id: parameter_image_result
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/result-control.md
objectName: imageParmeter
---

# ImageParameter Object - Result Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.IntermediateResultTypes`](#intermediateresulttypes) | Sets which types of intermediate result to be kept for further reference. Intermediate result types can be combined. | 
 | [`ImageParameter.IntermediateResultSavingMode`](IntermediateResultSavingMode.md#intermediateresultsavingmode) | Sets the mode for saving the intermediate result. | 
 | [`ImageParameter.ResultCoordinateType`](#resultcoordinatetype) | Specifies the format for the coordinates returned. | 
 | [`ImageParameter.TextResultOrderModes`](TextResultOrderModes.md#textresultordermodes) | Sets the mode and priority for the order of the text results returned. | 
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
