# ImageParameter Object - Cost Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](#terminatephase) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](#timeout) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](#maxalgorithmthreadcount) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](#expectedbarcodescount) | Sets the number of barcodes expected to be detected for each image. |
 
 
## TerminatePhase
Sets the phase where the algorithm stops.

### As Json Parameter

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Value Range | Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------ | ---------------------------------- |
| ImageParameter | TerminatePhase | ImageParameter.TerminatePhase | *string* | Any one of the `TerminatePhase Enumeration` items | `"TP_BARCODE_RECOGNIZED"` |


### As `PublicRuntimeSetting` Member

| Struct |	Struct Member Name |	Struct Member Value Type |	Struct Member Value Range | Struct Member Default Value |
| ------ | ------------------ | ------------------------ | --------------------------- | 
| `PubuliRuntimeSettings` | `terminatePhase` | `TerminatePhase` | Any one of the `TerminatePhase Enumeration` items | `TP_BARCODE_RECOGNIZED` |


## Timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.


## MaxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.


## ExpectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.
