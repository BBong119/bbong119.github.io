---
layout: manual-parameter
id: parameter_image_format
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/format-control.md
listFile: parametersList
---


# ImageParameter Object - Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.BarcodeFormatIds`](#barcodeformatids) | Sets the formats of the barcode to be read. Barcode formats can be combined. |
 | [`ImageParameter.BarcodeFormatIds_2`](#barcodeformatids_2) | Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined. |



## BarcodeFormatIds
Sets the formats of the barcode to be read. Barcode formats can be combined.  

**Remark**   
If you already know the barcode type(s) before performing barcode reading, specifying the barcode type(s) to be read will speed up the recognition process.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | BarcodeFormatIds | *string Aarry* | An array item can be any one of the [`BarcodeFormat` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat) items | "BF_ALL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds": ["BF_ONED", "BF_DATAMATRIX"]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`barcodeFormatIds`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#barcodeformatids) | *int* | A combined value of [`BarcodeFormat` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat) items. | `BF_ALL` |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`BarcodeFormat` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat)



## BarcodeFormatIds_2 
Sets the formats of the barcode in BarcodeFormat group 2 to be read. Barcode formats in BarcodeFormat group 2 can be combined.   

**Remark**   
If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.    
The barcode format our library will search for is composed of BarcodeFormat group 1 and BarcodeFormat group 2, so you need to specify the barcode format in group 1 and group 2 individually.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| ImageParameter | BarcodeFormatIds_2 | *string Aarry* | An array item can be any one of the [`BarcodeFormat_2` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat_2) items | "BF2_NULL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds_2": ["BF2_USPSINTELLIGENTMAIL", "BF2_AUSTRALIANPOST"]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------ | ---------- | ----------- | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) | [`barcodeFormatIds_2`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#barcodeformatids_2) | *int* | A combined value of [`BarcodeFormat_2` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat_2) items. | `BF2_NULL` |

**See Also**   
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)
- [`BarcodeFormat_2` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat_2)
