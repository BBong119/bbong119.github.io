---
layout: manual-parameter
id: parameter_format_format
sourceCodeUrl: /dbr-detailed-info/manual/parameters/formatSpecification/format-control.md
---

# FormatSpecification Object - Format Control

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`FormatSpecification.BarcodeAngleRangeArray`](#barcodeanglerangearray) | Sets the range of angles (in degrees) for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesLengthRangeArray`](#barcodebyteslengthrangearray) | Sets the range of barcode bytes length for barcodes search. | 
 | [`FormatSpecification.BarcodeBytesRegExPattern`](#barcodebytesregexpattern) | Specifies the regular express pattern of barcode byte characters. | 
 | [`FormatSpecification.BarcodeHeightRangeArray`](#barcodeheightrangearray) | Sets the range of barcode heights (in pixels) to for barcodes search. | 
 | [`FormatSpecification.BarcodeTextLengthRangeArray`](#barcodetextlengthrangearray) |	Sets the range of barcode text length for barcodes search. | 
 | [`FormatSpecification.BarcodeTextRegExPattern`](#barcodetextregexpattern) | Specifies the regular express pattern of barcode characters. | 
 | [`FormatSpecification.BarcodeWidthRangeArray`](#barcodewidthrangearray) | Sets the range of barcode widths (in pixels) for barcodes search.(Hint). | 
 | [`FormatSpecification.MinQuietZoneWidth`](#minquietzonewidth) | The minimum width of the barcode quiet zone. | 
 | [`FormatSpecification.ModuleSizeRangeArray`](#modulesizerangearray) | Sets the range of module size (in pixels) for barcodes search. (Hint). | 
 | [`FormatSpecification.BarcodeFormatIds`](#barcodeformatids) | Sets which barcode format the current FormatSpecification configuration is applied to. | 
 | [`FormatSpecification.BarcodeFormatIds_2`](#barcodeformatids_2) | Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to. |
 | [`FormatSpecification.MirrorMode`](#mirrormode) | Sets whether to decode mirrored barcodes. | 
 | [`FormatSpecification.RequireStartStopChars`](#requirestartstopchars) |	Sets whether the start and stop characters are required when searching for Code 39 barcodes. | 
 | [`FormatSpecification.FindUnevenModuleBarcode`](#findunevenmodulebarcode) | Specifies whether to find barcodes with uneven barcode modules. Not support yet. | 
 | [`FormatSpecification.AllModuleDeviation`](#allmoduledeviation) | Set the module size deviation from the standard barcode module size. | 
 | [`FormatSpecification.HeadModuleRatio`](#headmoduleratio) | Set the module count and module size ratio of the barcode head part. | 
 | [`FormatSpecification.TailModuleRatio`](#tailmoduleratio) |	Set the module count and module size ratio of the barcode tail part. | 
 | [`FormatSpecification.StanardFormat`](#stanardformat) | Set the standard barcode format. | 
 | [`FormatSpecification.Code128Subset`](#code128subset) | Set the code 128 subset. | 
 | [`FormatSpecification.AustralianPostEncodingTable`](#australianpostencodingtable) | Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode. | 


---

## BarcodeAngleRangeArray
Sets the range of angles (in degrees) for barcodes search. 


### As Json Parameter
`BarcodeAngleRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of angles (in degrees) for barcodes search. Default values will be used if there is no manual setting.   



| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeAngleRangeArray | *JSON Object Array* | `MinValue`: [0, 360]<br>`MaxValue`: [0, 360]<br>**MaxValue >= MinValue** | `null` |


**Json Parameter Example**   
```
{
    "BarcodeAngleRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```



&nbsp;



## BarcodeBytesLengthRangeArray
Sets the range of barcode bytes length for barcodes search.

### As Json Parameter
`BarcodeBytesLengthRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeBytesLengthRangeArray | *JSON Object Array* | `MinValue`: [0, 7fffffff]<br>`MaxValue`: [0, 7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeBytesLengthRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


&nbsp;



## BarcodeBytesRegExPattern
Specifies the regular express pattern of barcode byte characters.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeBytesRegExPattern | *string* | regular express pattern as string. | "" |

**Json Parameter Example**   
```
{
    "BarcodeBytesRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


&nbsp;



## BarcodeHeightRangeArray
Sets the range of barcode heights (in pixels) to for barcodes search.


### As Json Parameter
`BarcodeHeightRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeHeightRangeArray | *JSON Object Array* | `MinValue`: [0, 7fffffff]<br>`MaxValue`: [0, 7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeHeightRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


&nbsp;



## BarcodeTextLengthRangeArray
Sets the range of barcode text length for barcodes search.


### As Json Parameter
`BarcodeTextLengthRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeTextLengthRangeArray | *JSON Object Array* | `MinValue`: [0, 7fffffff]<br>`MaxValue`: [0, 7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeTextLengthRangeArray": [
    {
        "MinValue": 4,
        "MaxValue": 200
    }
    ]
}
```

### As `PublicRuntimeSettings` Member

| Struct |	Struct Member Name | Value Type | Value Range | Default Value |
| ------ | ------------------- | ---------- | ------------ | ------------- |
| [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html | [`minBarcodeTextLength`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html#minbarcodetextlength)) | [0,0x7fffffff] | 0 |

**Remark**   
0: means no limitation on the barcode text length.

**See Also**    
- [`PublicRuntimeSettings` Struct]({{ site.manual_interface_struct }}PublicRuntimeSettings.html)


&nbsp;


## BarcodeTextRegExPattern
Specifies the regular express pattern of barcode characters.


### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeTextRegExPattern | *string* | regular express pattern as string. | "" |

**Json Parameter Example**   
```
{
    "BarcodeTextRegExPattern": " ^([*].+[*]|[+].+[+])$"
}
```


&nbsp;


## BarcodeWidthRangeArray
Sets the range of barcode widths (in pixels) for barcodes search.


### As Json Parameter
`BarcodeWidthRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeWidthRangeArray | *JSON Object Array* | `MinValue`: [0, 7fffffff]<br>`MaxValue`: [0, 7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "BarcodeWidthRangeArray": [
    {
        "MinValue": 100,
        "MaxValue": 200
    }
    ]
}
```


&nbsp;



## MinQuietZoneWidth
The minimum width of the barcode quiet zone.

**Remark**   
The unit is barcode module. For example, if barcode module is 2px and MinQuietZoneWidth is 4, then the width of quiet zone is 8px.
   
    
### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MinQuietZoneWidth | *int* | [0,0x7fffffff] | 4 |

**Json Parameter Example**   
```
{
    "MinQuietZoneWidth": 10
}
```


&nbsp;



## ModuleSizeRangeArray
Sets the range of module size (in pixels) for barcodes search.

    
### As Json Parameter
`ModuleSizeRangeArray` as a JSON parameter is a JSON Object array. Each JSON Object has two keys `MinValue` and `MaxValue` for setting the range of barcode bytes length for barcodes search. Default values will be used if there is no manual setting. 


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | ModuleSizeRangeArray | *JSON Object Array* | `MinValue`: [0, 7fffffff]<br>`MaxValue`: [0, 7fffffff]<br>**MaxValue >= MinValue** | `null` |

**Json Parameter Example**   
```
{
    "ModuleSizeRangeArray": [
    {
        "MinValue": 3,
        "MaxValue": 20
    }
    ]
}
```


&nbsp;


## BarcodeFormatIds
Sets which barcode format the current FormatSpecification configuration is applied to. 

**Remark**   
If you already know the barcode type(s) before performing barcode reading, specifying the barcode type(s) to be read will speed up the recognition process.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeFormatIds | *string Aarry* | An array item can be any one of the [`BarcodeFormat` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat) items | "BF_ALL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds": ["BF_ONED", "BF_DATAMATRIX"]
}
```


&nbsp;



## BarcodeFormatIds_2 
Sets which barcode format in BarcodeFormat group 2 the current FormatSpecification configuration is applied to.   


**Remark**   
If the barcode type(s) are certain, specifying the barcode type(s) to be read will speed up the recognition process.    
The barcode format our library will search for is composed of BarcodeFormat group 1 and BarcodeFormat group 2, so you need to specify the barcode format in group 1 and group 2 individually.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | BarcodeFormatIds_2 | *string Aarry* | An array item can be any one of the [`BarcodeFormat_2` Enumeration]({{ site.manual_interface_enum }}format-enum.html#barcodeformat_2) items | "BF2_NULL" |

**Json Parameter Example**   
```
{
    "BarcodeFormatIds_2": ["BF2_USPSINTELLIGENTMAIL", "BF2_AUSTRALIANPOST"]
}
```


&nbsp;



## MirrorMode
Sets whether to decode mirrored barcodes.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | MirrorMode | *string* | "MM_NORMAL"<br>"MM_MIRROR"<br>"MM_BOTH" | `null` |

**Remark**   
- "MM_NORMAL": Doesn't decode mirror barcodes.
- "MM_MIRROR": Decodes only mirror barcodes.
- "MM_BOTH": Decodes both normal and mirror barcodes.

**Json Parameter Example**   
```
{
    "MirrorMode": "MM_NORMAL"
}
```


&nbsp;


## RequireStartStopChars
Sets whether the start and stop characters are required when searching for Code 39 barcodes.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | RequireStartStopChars | *int* | [0, 1] | 1 |

**Remark**   
- 0: start and stop characters are not required.
- 1: start and stop characters are required.


**Json Parameter Example**   
```
{
    "RequireStartStopChars": 0
}
```


&nbsp;


## FindUnevenModuleBarcode
Specifies whether to find barcodes with uneven barcode modules.    
**Not support yet.**

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | FindUnevenModuleBarcode | *int* | [0, 1] | 1 |

**Remark**   
- 0: do not find barcodes with uneven barcode modules.
- 1: find barcodes with uneven barcode modules.


**Json Parameter Example**   
```
{
    "FindUnevenModuleBarcode": 0
}
```


&nbsp;



## AllModuleDeviation
Set the module size deviation from the standard barcode module size.   

**Remark**   
The unit is barcode module. For example, if the standard barcode module is 2px and AllModuleDeviation is 1, then the non-standard barcode module size is 4px.
    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | AllModuleDeviation | *int* | [0,7fffffff] | 0 |


**Json Parameter Example**   
```
{
    "AllModuleDeviation": 0
}
```


&nbsp;



## HeadModuleRatio
Set the module count and module size ratio of the barcode head part.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | HeadModuleRatio | *string* | N/A | "" |


**Json Parameter Example**   
```
{
    "HeadModuleRatio": "211412"
}
```


&nbsp;



## TailModuleRatio
Set the module count and module size ratio of the barcode tail part.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | TailModuleRatio | *string* | N/A | "" |


**Json Parameter Example**   
```
{
    "TailModuleRatio": "2331112"
}
```


&nbsp;



## StanardFormat
Set the standard barcode format.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | StanardFormat | Any one of the [`BarcodeFormat`]({{ site.manual_interface_enum }}format-enum.html#barcodeformat) or [`BarcodeFormat_2`]({{ site.manual_interface_enum }}format-enum.html#barcodeformat_2) Enumeration items. | N/A | "" |


**Json Parameter Example**   
```
{
    "StandardFormat": "BF_CODE128"
}
```


&nbsp;



## Code128Subset
Set the code 128 subset.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | Code128Subset | *string* | "A"<br>"B"<br>"C" | "" |


**Json Parameter Example**   
```
{
    "Code128Subset": "A"
}
```

&nbsp;



## AustralianPostEncodingTable
Set the encoding table used to code the Customer Information Field of Australian Post Customer Barcode.

    
### As Json Parameter


| Json Object |	Json Parameter Name | Value Type | Value Range | Default Value |
| ----------- | ------------------- | ---------- | ----------- | ------------- |
| FormatSpecification | AustralianPostEncodingTable | *string* | "C"<br>"N" | "C" |


**Json Parameter Example**   
```
{
    "AustralianPostEncodingTable": "N"
}
```

