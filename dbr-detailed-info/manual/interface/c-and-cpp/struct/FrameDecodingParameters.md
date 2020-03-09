## FrameDecodingParameters
Defines a struct to configure the frame decoding Parameters.  

#### Typedefs

```cpp
typedef struct tagFrameDecodingParameters  FrameDecodingParameters
```  

#### Attributes
  
| Attribute | Type | Description |
|---------- | ---- | ----------- |
| `maxQueueLength` | *int* |  |
| `maxResultQueueLength` | *int* |  |
| `width` | *int* |  |
| `height` | *int* |  |
| `	stride` | *int* |  |
| `imagePixelFormat` | [`ImagePixelFormat`]({{ site.manual_interface_enum }}ImagePixelFormat.html) |  |
| `region` | [`RegionDefinition`](RegionDefinition.md) |  |
| `threshold` | *float* |  |
| `fps` | *int* |  |
| `autoFilter` | *int* |  |
| `reserved` | *char\[28\]* |  |
