
# DBR_FreeLicenseString
Free memory allocated for the license string.


```c
DBR_API void DBR_FreeLicenseString (char** content)
```   

---
   
#### Parameters
`[in]	content` The output string which stores the content of license. 

---

#### Remark
[`DBR_OutputLicenseToStringPtr`](DBR_OutputLicenseToStringPtr.md) has to be successfully called before calling this method.

