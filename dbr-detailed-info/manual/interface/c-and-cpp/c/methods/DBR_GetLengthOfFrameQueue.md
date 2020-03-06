
# DBR_GetLengthOfFrameQueue
Get length of current inner frame queue.

```c
DBR_API int DBR_GetLengthOfFrameQueue (void* barcodeReader)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  

#### Return value
Returns the length of the inner frame queue.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int frameLength = DBR_GetLengthOfFrameQueue(barcodeReader);
DBR_DestroyInstance(barcodeReader);
```

