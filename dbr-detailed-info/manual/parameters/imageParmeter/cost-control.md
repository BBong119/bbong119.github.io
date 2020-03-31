# ImageParameter Object - Cost Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.TerminatePhase`](#terminatephase) | Sets the phase where the algorithm stops. |
 | [`ImageParameter.Timeout`](#timeout) | Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. |
 | [`ImageParameter.MaxAlgorithmThreadCount`](#maxalgorithmthreadcount) | Sets the number of threads the image processing algorithm will use to decode barcodes. |
 | [`ImageParameter.ExpectedBarcodesCount`](#expectedbarcodescount) | Sets the number of barcodes expected to be detected for each image. |
 
 
## TerminatePhase
Sets the phase where the algorithm stops.

| Json Parameter Key Name |	PublicRuntimeSetting struct	| PublicRuntimeSetting Name |	Enumeration | Argument |
| ----------------------- | --------------------------- | ------------------------- | ----------- | -------- |
| ImageParameter.TerminatePhase	| N/A | terminatePhase | {{ site.manual_interface_enum }}TerminatePhase.html | N/A |


## Timeout
Sets the maximum amount of time (in milliseconds) that should be spent searching for a barcode per page. It does not include the time taken to load/decode an image (Tiff, PNG, etc) from disk into memory.


## MaxAlgorithmThreadCount
Sets the number of threads the image processing algorithm will use to decode barcodes.


## ExpectedBarcodesCount
Sets the number of barcodes expected to be detected for each image.
