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

### width

### height

### stride

### imagePixelFormat

### region

### threshold

### fps

### autoFilter

### reserved
