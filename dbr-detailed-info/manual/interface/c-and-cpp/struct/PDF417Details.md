---
layout: manual-interface-struct
id: interface_struct_PDF417Details
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/PDF417Details.md
---


# PDF417Details
Stores the PDF417 details.

## Typedefs

```cpp
typedef struct tagPDF417Details  PDF417Details
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`moduleSize`](#modulesize) | *int* |
| [`rows`](#rows) | *int* |
| [`columns`](#columns) | *int* |
| [`errorCorrectionLevel`](#errorcorrectionlevel) | *int* |
| [`reserved`](#reserved) | *char\[32\]* |


### moduleSize
The barcode module size (the minimum bar width in pixel).
```cpp
int tagPDF417Details::moduleSize
```

### rows
The row count of the barcode.
```cpp
int tagPDF417Details::rows
```

### columns
The column count of the barcode.
```cpp
int tagPDF417Details::columns
```

### errorCorrectionLevel
The error correction level of the barcode.
```cpp
int tagPDF417Details::errorCorrectionLevel
```

### reserved
Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct.
```cpp
char tagPDF417Details::reserved[32]
```
