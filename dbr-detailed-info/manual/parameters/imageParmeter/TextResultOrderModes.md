---
layout: manual-parameter
id: parameter_image_TextResultOrderModes
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParmeter/TextResultOrderModes.md
---

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
