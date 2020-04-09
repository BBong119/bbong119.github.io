---
layout: manual-interface-struct
id: interface_struct_TextResultArray
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/TextResultArray.md
---


# TextResultArray
Stores the text result array.  

## Typedefs

```cpp
typedef struct tagTextResultArray  TextResultArray
typedef struct tagTextResultArray*  PTextResultArray
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`resultsCount`](#resultscount) | *int* |
| [`results`](#results) | [`PTextResult`](TextResult.md)\* |


### resultsCount
The total count of text result.
```cpp
int tagTextResultArray::resultsCount
```

### results
The text result array.
```cpp
PTextResult* tagTextResultArray::results
```

