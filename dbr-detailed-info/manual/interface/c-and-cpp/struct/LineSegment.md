# LineSegment
Stores line segment data.

## Typedefs

```cpp
typedef struct tagLineSegment  LineSegment
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`startPoint`](#startpoint) | [`DBRPoint`](DBRPoint.md) |
| [`endPoint`](#endpoint) | [`DBRPoint`](DBRPoint.md) |
| [`linesConfidenceCoefficients`](#linesconfidencecoefficients) | *unsigned char \** |

### startPoint
The start point of the line segment.   
```cpp
DBRPoint tagLineSegment::startPoint
```

### endPoint
The end point of the line segment.
```cpp
DBRPoint tagLineSegment::endPoint
```

### linesConfidenceCoefficients
The confidence coefficients for lines. There are 4 coefficients in this set:   
    - linesConfidenceCoefficients\[0\] is average positive amplitude;   
    - linesConfidenceCoefficients\[1\] is max positive amplitude; 
    - linesConfidenceCoefficients\[2\] is average negative amplitude;   
    - linesConfidenceCoefficients\[3\] is max negative amplitude.
```cpp
unsigned char* tagLineSegment::linesConfidenceCoefficients
```
