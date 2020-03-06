
# InitLicenseFromLicenseContent
Initialize barcode reader license from the license content on the client machine for offline verification.

```cpp
int CBarcodeReader::InitLicenseFromLicenseContent (const char* pLicenseKey, const char* pLicenseContent)	
```   

---
   
#### Parameters
`[in]	pLicenseKey`	The license key.  
`[in]	pLicenseContent`	An encrypted string representing the license content (quota, expiration date, barcode type, etc.) obtained from the method [`OutputLicenseToString`](OutputLicenseToString.md).


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*


