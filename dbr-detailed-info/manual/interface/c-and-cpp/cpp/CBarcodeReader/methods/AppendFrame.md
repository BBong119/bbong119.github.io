# AppendFrame

Append a frame image buffer to the inner frame queue.  

```cpp
int CBarcodeReader::AppendFrame (unsigned char* pBufferBytes) 
```   

---
   
#### Parameters
`[in]	pBufferBytes` The array of bytes which contain the image data.

#### Return value
Returns the ID of the appended frame.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int frameId = reader->AppendFrame(pBufferBytes);
delete reader;
```

