
# 
Initialize the license and connect to the specified server for online verification.

```cpp
int CBarcodeReader::InitLicenseFromServer (const char* pLicenseServer, const char* pLicenseKey)
```   

---
   
#### Parameters
`[in]	pLicenseServer` The URL of the license server.  
`[in]	pLicenseKey`The license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

