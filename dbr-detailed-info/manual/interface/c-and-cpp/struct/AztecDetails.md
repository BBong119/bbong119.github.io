## AztecDetails
Stores the Aztec details.
  

### Typedefs

```cpp
typedef struct tagAztecDetails  AztecDetails
```  

### Attributes

- moduleSize
  The barcode module size (the minimum bar width in pixel).
  ```cpp
  int tagAztecDetails::moduleSize
  ```
  
- rows
| Attribute | Type | Description |
|---------- | ---- | ----------- |
| `moduleSize` | *int* |  The barcode module size (the minimum bar width in pixel). |
| `rows` | *int* | The row count of the barcode. |
| `columns` | *int* |  The column count of the barcode. |
| `layerNumber` | *int* |  A negative number (-1, -2, -3, -4) specifies a compact Aztec code. A positive number (1, 2, .. 32) specifies a normal (full-rang) Aztec code. |
| `reserved` | *char\[\]* |  Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct. |
