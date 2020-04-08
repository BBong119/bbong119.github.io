---
layout: manual-parameter
id: parameter_region_image_process
sourceCodeUrl: /dbr-detailed-info/manual/parameters/regionDefinition/image-process-control.md
---


# RegionDefinition Object - Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.Top`](#top) | The top-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Left`](#left) | The left-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Right`](#right) | The right-most coordinate or percentage of the region. | 
 | [`RegionDefinition.Bottom`](#bottom) | The bottom-most coordinate or percentage of the region. | 
 | [`RegionDefinition.MeasuredByPercentage`](#measuredbypercentage) | Sets whether or not to use percentages to measure the Region size. | 


---

## Top
The top-most coordinate or percentage of the region.  


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | Top | *int* | [`MeasuredByPercentage`](#measuredbypercentage)=0: [0, 0x7fffffff]<br>[`MeasuredByPercentage`](#measuredbypercentage)=1: [0, 100] | 0 |


**Json Parameter Example**   
```
{
    "Top":0
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`region`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#region) | [`regionTop`]({{ site.manual_interface_struct }}RegionDefinition.html#regiontop) | *int* | [`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage)=0: [0, 0x7fffffff]<br>[`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage) = 1: [0, 100] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`RegionDefinition` Struct]({{ site.manual_interface_struct }}RegionDefinition.html)



&nbsp;


## Left
The left-most coordinate or percentage of the region.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | Left | *int* | [`MeasuredByPercentage`](#measuredbypercentage)=0: [0, 0x7fffffff]<br>[`MeasuredByPercentage`](#measuredbypercentage)=1: [0, 100] | 0 |


**Json Parameter Example**   
```
{
    "Left":0
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`region`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#region) | [`regionLeft`]({{ site.manual_interface_struct }}RegionDefinition.html#regionleft) | *int* | [`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage)=0: [0, 0x7fffffff]<br>[`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage) = 1: [0, 100] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`RegionDefinition` Struct]({{ site.manual_interface_struct }}RegionDefinition.html)



&nbsp;


## Right
The right-most coordinate or percentage of the region.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | Right | *int* | [`MeasuredByPercentage`](#measuredbypercentage)=0: [0, 0x7fffffff]<br>[`MeasuredByPercentage`](#measuredbypercentage)=1: [0, 100] | 0 |


**Json Parameter Example**   
```
{
    "Right":0
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`region`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#region) | [`regionRight`]({{ site.manual_interface_struct }}RegionDefinition.html#regionright) | *int* | [`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage)=0: [0, 0x7fffffff]<br>[`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage) = 1: [0, 100] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`RegionDefinition` Struct]({{ site.manual_interface_struct }}RegionDefinition.html)



&nbsp;


## Bottom
The bottom-most coordinate or percentage of the region.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | Bottom | *int* | [`MeasuredByPercentage`](#measuredbypercentage)=0: [0, 0x7fffffff]<br>[`MeasuredByPercentage`](#measuredbypercentage)=1: [0, 100] | 0 |


**Json Parameter Example**   
```
{
    "Bottom":0
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`region`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#region) | [`regionBottom`]({{ site.manual_interface_struct }}RegionDefinition.html#regionbottom) | *int* | [`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage)=0: [0, 0x7fffffff]<br>[`regionMeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#regionmeasuredbypercentage) = 1: [0, 100] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`RegionDefinition` Struct]({{ site.manual_interface_struct }}RegionDefinition.html)



&nbsp;



## MeasuredByPercentage
Sets whether or not to use percentages to measure the Region size

**Remark**   
When it’s set to 1, the values of [Top](#top), [Left](#left), [Right](#right), [Bottom](#bottom) indicates the percentage (from 0 to 100). Otherwise, they refer to the coordinates.   
- 0: not by percentage
- 1: by percentage


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | MeasuredByPercentage | *int* | [0, 1] | 0 |


**Json Parameter Example**   
```
{
    "MeasuredByPercentage":0
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)->[`region`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#region) | [`MeasuredByPercentage`]({{ site.manual_interface_struct }}RegionDefinition.html#measuredbypercentage) | *int* | [0, 1] | 0 |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`RegionDefinition` Struct]({{ site.manual_interface_struct }}RegionDefinition.html)

