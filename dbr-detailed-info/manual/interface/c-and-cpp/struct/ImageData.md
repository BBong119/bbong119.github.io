# ImageData
Stores the image data.  

## Typedefs

```cpp
typedef struct tagImageData  ImageData
```

---

## Attributes
    
| Attribute | Type |
|---------- | ---- |
| [`bytesLength`](#byteslength) | *int* |
| [`bytes`](#bytes) | *unsigned char\** |
| [`width`](#width) | *int* |
| [`height`](#height) | *int* |
| [`stride`](#stride) | *int* |
| [`format`](#format) | [`ImagePixelFormat`]({{ site.manual_interface_enum }}ImagePixelFormat.html) |


### bytesLength
The length of the image data byte array. 
```cpp
int tagImageData::bytesLength
```
  
### width
The width of the image in pixels.  
```cpp
int tagImageData::width
```

### height
The height of the image in pixels.  
```cpp
int tagImageData::height
```

### stride
The stride (or scan width) of the image. 
```cpp
int tagImageData::stride
```

### format
The image pixel format used in the image byte array. 
```cpp
ImagePixelFormat tagImageData::format
```
  

