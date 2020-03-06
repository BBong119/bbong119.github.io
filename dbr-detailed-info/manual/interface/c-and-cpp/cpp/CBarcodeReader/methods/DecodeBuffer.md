# DecodeBuffer

Decode barcodes from the memory buffer containing image pixels in defined format.

```cpp
int CBarcodeReader::DecodeBuffer (const unsigned char* pBufferBytes, const int iWidth, const int iHeight, const int iStride, const ImagePixelFormat format, const char* pszTemplateName = "")		
```   

---
   
#### Parameters
`[in]	pBufferBytes` The array of bytes which contain the image data.   
`[in]	iWidth` The width of the image in pixels.   
`[in]	iHeight` The height of the image in pixels.   
`[in]	iStride` The stride (or scan width) of the image.   
`[in]	format` The image pixel format used in the image byte array.   
`[in] pTemplateName`<sub>Optional</sub> The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*   

#### Remark
If no template name is specified, current runtime settings will be used.

---
#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
unsigned char* pBufferBytes;
int iWidth = 0;
int iHeight = 0;
int iStride = 0;
ImagePixelFormat format;
GetBufferFromFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", &pBufferBytes, &iWidth, &iHeight, &iStride, &format);
int errorCode = reader->DecodeBuffer(pBufferBytes, iWidth, iHeight, iStride, format, "");
delete reader;
```
