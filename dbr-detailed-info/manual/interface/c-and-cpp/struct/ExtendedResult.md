
## ExtendedResult
Stores the extended result. 

#### Typedefs

```cpp
typedef struct tagExtendedResult  ExtendedResult
```  

#### Attributes
  
| Attribute | Type | Description |
|---------- | ---- | ----------- |
| `resultType` | [`ResultType`]({{ site.manual_interface_enum }}ResultType.md) | Extended result type. |
| `barcodeFormat` | [`BarcodeFormat`]({{ site.manual_interface_enum }}BarcodeFormat.md) | Barcode type in BarcodeFormat group 1. |
| `barcodeFormatString` | *const char \** | Barcode type in BarcodeFormat group 1 as string. |
| `barcodeFormat_2` | [`BarcodeFormat_2`]({{ site.manual_interface_enum }}BarcodeFormat_2.md) | Barcode type in BarcodeFormat group 2. |
| `barcodeFormatString_2` | *const char \** | Barcode type in BarcodeFormat group 2 as string. |
|`confidence` | *int* | The confidence of the result. |
|`bytes` | *unsigned char \** | The content in a byte array. |
|`bytesLength` | *int* | The length of the byte array. |
|`accompanyingTextBytes` | *unsigned char \** | The accompanying text content in a byte array. |
|`accompanyingTextBytesLength` | *int* | The length of the accompanying text byte array. |
|`deformation` | *int* | The deformation value. |
|`detailedResult` | *void \** | One of the following: [`QRCodeDetails`](QRCodeDetails.md), [`PDF417Details`](PDF417Details.md), [`DataMatrixDetails`](DataMatrixDetails.md), [`AztecDetails`](AztecDetails.md), [`OneDCodeDetails`](OneDCodeDetails.md). |
|`samplingImage` | [`SamplingImageData`](SamplingImageData,md) | The sampling image info. |
|`clarity` | *int* | The clarity of the barcode zone in percentage. |
|`reserved` | *char\[40\]* | Reserved memory for struct. The length of this array indicates the size of the memory reserved for this struct. |

