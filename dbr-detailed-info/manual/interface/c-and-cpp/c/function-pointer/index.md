
# C API Reference - Function Pointer

  | Function | Description |
  |----------|-------------|
  | [`CB_Error`](function-points/index.md#cb_error) | Represents the method that will handle the error code returned by the SDK. |
  | [`CB_IntermediateResult`](function-points/index.md#cb_intermediateresult) | Represents the method that will handle the intermediate result array returned by the SDK. |
  | [`CB_TextResult`](function-points/index.md#cb_textresult) | Represents the method that will handle the text result array returned by the SDK. | 
  
---
 




## CB_Error
Represents the method that will handle the error code returned by the SDK.

```c
typedef void(* CB_Error) (int frameId, int errorCode, void* pUser)
```   
   
#### Parameters
`frameId` 	The ID of the frame.  
`errorCode` Error Code generated when decoding the frame.
`pUser` Customized arguments passed to your function.

#### See Also
[Error Code]({{ site.manual_interface_c }}index.html#error-code)

&nbsp;





## CB_IntermediateResult
Represents the method that will handle the intermediate result array returned by the SDK.

```c
typedef void(* CB_IntermediateResult) (int frameId, IntermediateResultArray* pResults, void* pUser)
```   
   
#### Parameters
`frameId` 	The ID of the frame.  
`pResults` The intermediate results of the frame.
`pUser` Arguments passed to your function.

#### See Also
[IntermediateResultArray]({{ site.manual_interface_struct }}IntermediateResultArray.html)

&nbsp;





## CB_TextResult
Represents the method that will handle the error code returned by the SDK.

```c
typedef void(* CB_TextResult) (int frameId, TextResultArray *pResults, void *pUser)
```   
   
#### Parameters
`frameId` 	The ID of the frame.  
`errorCode` Recognized barcode results of the frame.
`pUser` Arguments passed to your function.

#### See Also
[TextResultArray]({{ site.manual_interface_struct }}TextResultArray.html)

&nbsp;


