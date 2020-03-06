
# InitLicense
Read product key and activate the SDK.

```cpp
int CBarcodeReader::InitLicense (const char* pLicense)	
```   

---
   
#### Parameters
`[in]	pLicense` The product keys.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
delete reader;
```
