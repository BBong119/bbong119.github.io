# ImageParameter Object - Cost Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](#terminatephase) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](#timeout) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](#maxalgorithmthreadcount) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](#expectedbarcodescount) | Sets the number of barcodes expected to be detected for each image. |
 
 
## TerminatePhase
Sets the phase where the algorithm stops.   

**Remarks**   
When the recognition result is not desired, this parameter can be set to skip certain processing stages.    

### As Json Parameter

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Value Range | Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------ | ---------------------------------- |
| ImageParameter | TerminatePhase | ImageParameter.TerminatePhase | *string* | Any one of the `TerminatePhase Enumeration` items | `"TP_BARCODE_RECOGNIZED"` |

**Json Parameter Example**   
```
{
    "TerminatePhase":"TP_BARCODE_RECOGNIZED"
}
```

### As `PublicRuntimeSetting` Member

| Struct |	Struct Member Name |	Struct Member Value Type |	Struct Member Value Range | Struct Member Default Value |
| ------ | ------------------ | ------------------------ | ------------------------- | --------------------------- |
| `PubuliRuntimeSettings` | `terminatePhase` | `TerminatePhase` | Any one of the `TerminatePhase Enumeration` items | `TP_BARCODE_RECOGNIZED` |

**See Also**   
- [`PublicRuntimeSettings`]()
- [`TerminatePhase Enumeration`]()





## Timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.   

**Remarks**   
If you want to stop reading barcodes after a specified amount of time, you can use this parameter to set a timeout.

### As Json Parameter

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Value Range | Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------ | ---------------------------------- |
| ImageParameter | Timeout | ImageParameter.Timeout | *int* | [0,0x7fffffff] | 10000 |

**Json Parameter Example**   
```
{
    "Timeout":10000
}
```

### As `PublicRuntimeSetting` Member

| Struct |	Struct Member Name |	Struct Member Value Type |	Struct Member Value Range | Struct Member Default Value |
| ------ | ------------------ | ------------------------ | ------------------------- | --------------------------- |
| `PubuliRuntimeSettings` | `timeout` | `int` | [0,0x7fffffff] | 10000 |

**See Also**   
- [`PublicRuntimeSettings`]()


## MaxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.   

**Remarks**   
By default, the library concurrently runs four different threads for decoding barcodes in order to keep a balance between speed and quality. For some devices (e.g. Raspberry Pi) that only use one core, you can set it to 1 for best speed. If you create BarcodeReader instances in multiple threads, please set this property to 1 in case the algorithm threads affect your application.


### As Json Parameter

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Value Range | Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------ | ---------------------------------- |
| ImageParameter | MaxAlgorithmThreadCount | ImageParameter.MaxAlgorithmThreadCount | *int* | [1,4] | 4 |

**Json Parameter Example**   
```
{
    "MaxAlgorithmThreadCount":4
}
```

### As `PublicRuntimeSetting` Member

| Struct |	Struct Member Name |	Struct Member Value Type |	Struct Member Value Range | Struct Member Default Value |
| ------ | ------------------ | ------------------------ | ------------------------- | --------------------------- |
| `PubuliRuntimeSettings` | `maxAlgorithmThreadCount` | `int` | [1,4] | 4 |

**See Also**   
- [`PublicRuntimeSettings`]()


## ExpectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.

**Remarks**   
0: means Unknown and it will find at least one barcode.   
1: try to find one barcode. If one barcode is found, the library will stop the localization process and perform barcode decoding.   
n: try to find n barcodes. If the library only finds m (m < n) barcode, it will try different algorithms till n barcodes are found or all algorithms are used.   


### As Json Parameter

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Value Range | Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------ | ---------------------------------- |
| ImageParameter | ExpectedBarcodesCount | ImageParameter.ExpectedBarcodesCount | *int* | [0,0x7fffffff] | 0 |

**Json Parameter Example**   
```
{
    "ExpectedBarcodesCount":0
}

```

### As `PublicRuntimeSetting` Member

| Struct |	Struct Member Name |	Struct Member Value Type |	Struct Member Value Range | Struct Member Default Value |
| ------ | ------------------ | ------------------------ | ------------------------- | --------------------------- |
| `PubuliRuntimeSettings` | `expectedBarcodesCount` | `int` | [0,0x7fffffff] | 0 |

**See Also**   
- [`PublicRuntimeSettings`]()

