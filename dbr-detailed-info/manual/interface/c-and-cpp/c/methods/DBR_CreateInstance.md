
# DBR_CreateInstance
Create an instance of Dynamsoft Barcode Reader.


```c
DBR_API void* DBR_CreateInstance ()	
```   

---

#### Return value
Returns an instance of Dynamsoft Barcode Reader. If failed, returns NULL.


#### Remark
Partial of the decoding result will be masked with "\*" without a valid license key.

---

#### Code Snippet
```c
void* barcodeReader = DBR_CreateInstance();
DBR_InitLicense(barcodeReader, "t0260NwAAAHV***************");
DBR_DestroyInstance(barcodeReader);
```

