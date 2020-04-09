---
layout: manual-interface-struct
id: interface_struct_Contour
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/Contour.md
---


# Contour
Stores the contour information.

## Typedefs

```cpp
typedef struct tagContour  Contour
```  

---

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`pointsCount`](#pointscount) |  *int* |
| [`points`](#points) | [DBRPoint](DBRPoint.md) \* |


### pointsCount
The total points count of the contour.
```cpp
int tagContour::pointsCount
```  
  
### points
The points array.
```cpp
DBRPoint* tagContour::points
```  
