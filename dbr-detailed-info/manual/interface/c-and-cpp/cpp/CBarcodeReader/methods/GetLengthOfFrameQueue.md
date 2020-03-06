
# GetLengthOfFrameQueue

Get length of current inner frame queue.

```cpp
int CBarcodeReader::GetLengthOfFrameQueue ()	
```

---

#### Return value
Returns length of current inner frame queue.

---

#### Code Snippet
```cpp
CBarcodeReader* reader = new CBarcodeReader();
reader->InitLicense("t0260NwAAAHV***************");
int frameLength = reader->GetLengthOfFrameQueue();
delete reader;
```

