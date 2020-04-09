---
layout: manual-interface-struct
id: interface_struct_SamplingImageData
sourceCodeUrl: /dbr-detailed-info/manual/interface/c-and-cpp/struct/SamplingImageData.md
---


# SamplingImageData
Stores the sampling image data.

## Typedefs

```cpp
typedef struct tagSamplingImageData  SamplingImageData
```  
  
---
  

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| [`bytes`](#bytes) | *unsigned char \** |
| [`width`](#width) | *int* |
| [`height`](#height) | *int* |


### bytes
The sampling image data in a byte array.
```cpp
unsigned char* tagSamplingImageData::bytes
```

### width
The width of the sampling image.
```cpp
int tagSamplingImageData::width
```

### height
The height of the sampling image.
```cpp
int tagSamplingImageData::height
```
