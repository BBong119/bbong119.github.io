---
layout: manual-parameter
id: parameter_format_result
sourceCodeUrl: /dbr-detailed-info/manual/parameters/formatSpecification/result-control.md
listFile: parametersList
---

# FormatSpecification Object - Result Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.MinResultConfidence`](#minresultconfidence) | The minimum confidence of the result. | 
 | [`FormatSpecification.ReturnPartialBarcodeValue`](#returnpartialbarcodevalue) | Sets whether or not to return partial barcode value(s). Not support yet. | 

---


## MinResultConfidence
The minimum confidence of the result.   

**Remark**   
0: means no limitation on the confidence. 

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MinResultConfidence | *int* | [0,100] | 0 |


**Json Parameter Example**   
```
{
    "MinResultConfidence":10
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`minResultConfidence`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#minresultconfidence) | *int* | [0, 100] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)



&nbsp;



## ReturnPartialBarcodeValue
Sets whether or not to return partial barcode value(s).   
**Not support yet.**    
&nbsp;

**Remark**   
0: do not return partial barcode value(s).   
1: return partial barcode value(s).


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | ReturnPartialBarcodeValue | *int* | [0,1] | 1 |


**Json Parameter Example**   
```
{
    "ReturnPartialBarcodeValue":0
}
```
