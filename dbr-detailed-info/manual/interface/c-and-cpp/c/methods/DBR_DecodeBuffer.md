
# DBR_DecodeBuffer
Decode barcodes from the memory buffer containing image pixels in defined format.

```c
DBR_API int DBR_DecodeBuffer (void* barcodeReader, const unsigned char* pBufferBytes, const int width, const int height, const int stride, const ImagePixelFormat format, const char* pTemplateName)
```   

---
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pBufferBytes` The array of bytes which contain the image data.  
`[in]	width` The width of the image in pixels.  
`[in]	height` The height of the image in pixels.  
`[in]	stride` The stride (or scan width) of the image.  
`[in]	format` The image pixel format used in the image byte array.  
`[in]	pTemplateName` The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
unsigned char* pBufferBytes;
int iWidth = 0;
int iHeight = 0;
int iStride = 0;
ImagePixelFormat format;
GetBufferFromFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pBufferBytes, &iWidth, &iHeight, &iStride, &format);
int errorCode = DBR_DecodeBuffer(barcodeReader, pBufferBytes, iWidth, iHeight, iStride, format, "");
DBR_DestroyInstance(barcodeReader);
```

