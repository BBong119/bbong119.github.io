# FrameDecodingParameters
Defines a struct to configure the frame decoding Parameters.  

## Typedefs

```cpp
typedef struct tagFrameDecodingParameters  FrameDecodingParameters
```

---

## Attributes
  
| Attribute | Type |
|---------- | ---- |
| `maxQueueLength` | *int* |
| `maxResultQueueLength` | *int* |
| `width` | *int* |
| `height` | *int* |
| `	stride` | *int* |
| `imagePixelFormat` | [`ImagePixelFormat`]({{ site.manual_interface_enum }}ImagePixelFormat.html) |
| `region` | [`RegionDefinition`](RegionDefinition.md) |
| `threshold` | *float* |
| `fps` | *int* |
| `autoFilter` | *int* |
| `reserved` | *char\[28\]* |


### maxQueueLength
The maximum number of frames waiting for decoding.
```cpp
int tagFrameDecodingParameters::maxQueueLength
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    3

### maxResultQueueLength
The maximum number of frames waiting results (text result/localization result) will be kept for further reference.  
```cpp
int tagFrameDecodingParameters::maxResultQueueLength
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    10  

### width
The width of the frame image in pixels. 
```cpp
int tagFrameDecodingParameters::width
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0  

### height
The height of the frame image in pixels.
```cpp
int tagFrameDecodingParameters::height
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0  

### stride
The stride (or scan width) of the frame image.
```cpp
int tagFrameDecodingParameters::stride
```
- **Value range**   
    [0,0x7fffffff]   
      
- **Default value**   
    0 
      
### imagePixelFormat
The image pixel format used in the image byte array.
```cpp
ImagePixelFormat tagFrameDecodingParameters::imagePixelFormat
```
- **Value range**   
    A value of [`ImagePixelFormat`]({{ site.manual_interface_enum }}ImagePixelFormat.html) Enumeration items.
      
- **Default value**   
    `IPF_GRAYSCALED`
    
- **See also**  
    [`ImagePixelFormat`]({{ site.manual_interface_enum }}ImagePixelFormat.html)
      
### region
The region definition of the frame to calculate the internal indicator.  
```cpp
RegionDefinition tagFrameDecodingParameters::region
```
- **Default value**  
    `{ regionLeft = 0, regionRight = 100, regionTop = 0, regionBottom = 100, regionMeasuredByPercentage = 1 }`
      
- **See also**   
    [`RegionDefinition`](RegionDefinition.md)
     
### threshold
The threshold used for filtering frames.
```cpp
float tagFrameDecodingParameters::threshold
```
- **Value range**   
    [0, 1]
      
- **Default value**   
    0.1
    
- **Remark**  
    The SDK will calculate an inner indicator for each frame from AppendFrame(), if the change rate of the indicators between the current frame and the history frames is larger than the given threshold, the current frame will not be added to the inner frame queue waiting for decoding.

### fps

### autoFilter

### reserved
