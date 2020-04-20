---
layout: manual-parameter
id: parameter_region_format
sourceCodeUrl: /dbr-detailed-info/manual/parameters/regionDefinition/format-control.md
listFile: parametersList
---


# RegionDefinition Object - Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`RegionDefinition.BarcodeFormatIds`](#barcodeformatids) | Sets which types of barcode(s) in BarcodeFormat group 1 to be read in this region. |
 | [`RegionDefinition.BarcodeFormatIds_2`](#barcodeformatids_2) | Sets which types of barcode(s) in BarcodeFormat group 2 to be read in this region. |


---

## BarcodeFormatIds
Sets which types of barcode(s) in BarcodeFormat group 1 to be read in this region.  

**Remark**   
If you already know the barcode type(s) before performing barcode reading, specifying the barcode type(s) to be read will speed up the recognition process.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | BarcodeFormatIds | *string Aarry* | An array item can be any one of the [`BarcodeFormat` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat) items | "BF_ALL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds": ["BF_ONED", "BF_DATAMATRIX"]
}
```


## BarcodeFormatIds_2 
Sets which types of barcode(s) in BarcodeFormat group 2 to be read in this region.  

**Remark**   
If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.    
The barcode format our library will search for is composed of BarcodeFormat group 1 and BarcodeFormat group 2, so you need to specify the barcode format in group 1 and group 2 individually.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| RegionDefinition | BarcodeFormatIds_2 | *string Aarry* | An array item can be any one of the [`BarcodeFormat_2` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat_2) items | "BF2_NULL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds_2": ["BF2_USPSINTELLIGENTMAIL", "BF2_AUSTRALIANPOST"]
}
```
