# C API Reference - Decode Methods

  | Method               | Description |
  |----------------------|-------------|
  | [`DBR_DecodeFile`](methods/DBR_DecodeFile.md) | Decode barcodes from a specified image file. |
  | [`DBR_DecodeFileInMemory`](methods/DBR_DecodeFileInMemory.md) | Decode barcodes from an image file in memory. |
  | [`DBR_DecodeBuffer`](methods/DBR_DecodeBuffer.md) | Decode barcodes from raw buffer. |
  | [`DBR_DecodeBase64String`](methods/DBR_DecodeBase64String.md) | Decode barcodes from a base64 encoded string. |
  | [`DBR_DecodeDIB`](methods/DBR_DecodeDIB.md) | Decode barcode from a handle of device-independent bitmap (DIB). | 
  
 
## DBR_DecodeFile
Decode barcodes from a specified image file.

```c
DBR_API int DBR_DecodeFile (void* barcodeReader, const char* pFileName, const char* pTemplateName)	
```   
   
#### Parameters
`[in] barcodeReader` Handle of the barcode reader instance.  
`[in]	pFileName` A string defining the file name.  
`[in]	pTemplateName` The template name.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`DBR_GetErrorString`](DBR_GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
int errorCode = DBR_DecodeFile(barcodeReader, "C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
DBR_DestroyInstance(barcodeReader);
```

## DBR_DecodeFileInMemory

## DBR_DecodeBuffer

## DBR_DecodeBase64String

## DBR_DecodeDIB
