
# OutputLicenseToStringPtr
Output the license content as an encrypted string from the license server to be used for offline license verification.

```cpp
int CBarcodeReader::OutputLicenseToStringPtr (char** content)	
```   

---
   
#### Parameters
`[in,out]	content` The output string which stores the content of license.


#### Return value
Returns error code (returns 0 if the function operates successfully).    
*You can call [`GetErrorString`](GetErrorString.md) to get detailed error message.*

#### Remarks
[`InitLicenseFromServer`](InitLicenseFromServer.md) has to be successfully called before calling this method.



