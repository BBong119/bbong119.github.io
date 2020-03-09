## DataMatrixDetails
Stores the DataMatrix details.

#### Typedefs

```cpp
typedef struct tagDataMatrixDetails  DataMatrixDetails
```  

#### Attributes
  
| Attribute | Type | Description |
|---------- | ---- | ----------- |
| `moduleSize` | *int* |  |
| `rows` | *int* | The row count of the barcode. | 
| `columns` | *int* | The column count of the barcode. |
| `dataRegionRows` | *int* | The data region row count of the barcode. |
| `dataRegionColumns` | *int* | The data region column count of the barcode. |
| `dataRegionNumber` | *int* | The data region count. |
| `reserved` | *char\[32\]* | Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct. |

