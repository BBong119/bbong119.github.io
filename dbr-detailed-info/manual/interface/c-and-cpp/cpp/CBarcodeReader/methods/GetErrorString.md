
# GetErrorString

Get error message by error code.

```cpp
static const char* CBarcodeReader::GetErrorString (const int iErrorCode)
```

---

#### Parameters
`[in] iErrorCode`	Error code.

#### Return value
The error message.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int errorCode = reader->DecodeFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Images\\AllSupportedBarcodeTypes.tif", "");
const char* errorString = CBarcodeReader::GetErrorString(errorCode);
delete reader;
```
