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
| [`results`](#results) | [`PTextResult`](TextRsult.md)\* |


### resultCount
The total count of text result.
```cpp
int tagTextResultArray::resultsCount
```

### results
The text result array.
```cpp
PTextResult* tagTextResultArray::results
```

