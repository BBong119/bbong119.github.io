
# DBR_AppendFrame
Appends a frame image buffer to the inner frame queue.

```c
DBR_API int DBR_AppendFrame (void* barcodeReader, unsigned char* pBufferBytes)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pBufferBytes` The array of bytes which contain the image data.  


#### Return value
Returns the ID of the appended frame.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int frameId = DBR_AppendFrame(barcodeReader, pBufferBytes);
DBR_DestroyInstance(barcodeReader);
```

