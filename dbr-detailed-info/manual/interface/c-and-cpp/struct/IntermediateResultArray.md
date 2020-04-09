---
layout: manual-interface-struct
id: interface_struct_IntermediateResultArray
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/IntermediateResultArray.md
---


# IntermediateResultArray
Stores the intermediate result array.

## Typedefs

```cpp
typedef struct tagIntermediateResultArray  IntermediateResultArray
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultsCount`](#resultscount) | *int* |
| [`results`](#results) | [`PIntermediateResult`](IntermediateResult.md)*  |


### resultsCount
The total count of intermediate result.
```cpp
int tagIntermediateResultArray::resultsCount
```

### results
The intermediate result array.
```cpp
PIntermediateResult* tagIntermediateResultArray::results
```


