
# OutputLicenseToString
Output the license content as an encrypted string from the license server to be used for offline license verification.

```cpp
int CBarcodeReader::OutputLicenseToString (char content[], const int contentLen)
```   

---
   
#### Parameters
`[in,out]	content` The output string which stores the content of license.  
`[in]	contentLen` The length of output string. The recommended length is 512 per license key.

#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

#### Remark
[`InitLicenseFromServer`](InitLicenseFromServer.md) has to be successfully called before calling this method.


