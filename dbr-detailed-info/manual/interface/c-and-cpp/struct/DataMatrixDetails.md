## DataMatrixDetails
Stores the DataMatrix details.

#### Typedefs

```cpp
typedef struct tagDataMatrixDetails  DataMatrixDetails
```  

#### Attributes
  
| Attribute | Type | Description |
|---------- | ---- | ----------- |
| [`moduleSize`](#modulesize) | *int* |  |
| [`rows`](#rows) | *int* | The row count of the barcode. | 
| [`columns`](#columns) | *int* | The column count of the barcode. |
| [`dataRegionRows`](#dataregionrows) | *int* | The data region row count of the barcode. |
| [`dataRegionColumns`](#dataregioncolumns) | *int* | The data region column count of the barcode. |
| [`dataRegionNumber`](#dataregionnumber) | *int* | The data region count. |
| [`reserved`](#reserved) | *char\[32\]* | Reserved memory for the struct. The length of this array indicates the size of the memory reserved for this struct. |

