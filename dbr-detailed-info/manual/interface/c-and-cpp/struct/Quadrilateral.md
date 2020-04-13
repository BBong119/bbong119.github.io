---
layout: manual-interface-struct
id: interface_struct_Quadrilateral
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/Quadrilateral.md
---


# Quadrilateral
Stores the quadrilateral.  

## Typedefs

```cpp
typedef struct tagQuadrilateral  Quadrilateral 
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`points`](#points) | [`DBRPoint`](DBRPoint.md)[4] |


### points
Four vertexes in a clockwise direction of a quadrilateral. Index 0 represents the left-most vertex. 
```cpp
DBRPoint tagQuadrilateral::points[4]
```



