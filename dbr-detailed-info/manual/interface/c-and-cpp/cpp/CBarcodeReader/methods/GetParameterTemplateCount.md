
# GetParameterTemplateCount
Gets the count of the parameter templates.

```cpp
int CBarcodeReader::GetParameterTemplateCount ()	
```   

---

#### Return value
Returns the count of parameter template.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
char errorMessageInit[256];
char errorMessageAppend[256];
reader->InitRuntimeSettingsWithFile("C:\\Program Files (x86)\\Dynamsoft\\{Version number}\\Templates\\RuntimeSettings.json", CM_OVERWRITE, errorMessageInit, 256);
reader->AppendTplStringToRuntimeSettings("{\"Version\":\"3.0\", \"ImageParameter\":{\"Name\":\"IP1\", \"BarcodeFormatIds\":[\"BF_QR_CODE\"], \"ExpectedBarcodesCount\":10}}", CM_IGNORE, errorMessageAppend, 256);
int currentTemplateCount = reader->GetParameterTemplateCount();
delete reader;
```

