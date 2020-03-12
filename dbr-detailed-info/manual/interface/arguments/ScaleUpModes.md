## ScaleUpModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`AcuteAngleWithXThreshold`](#acuteanglewithxthreshold) | `SUM_LINEAR_INTERPOLATION`<br>`SUM_NEAREST_NEIGHBOUR_INTERPOLATION` |
| [`ModuleSizeThreshold`](#modulesizethreshold) | `SUM_LINEAR_INTERPOLATION`<br>`SUM_NEAREST_NEIGHBOUR_INTERPOLATION` |
| [`TargetModuleSize`](#targetmodulesize) | `SUM_LINEAR_INTERPOLATION`<br>`SUM_NEAREST_NEIGHBOUR_INTERPOLATION` |

**See also**   
[`ScaleUpMode`]({{ site.manual_interface_enum }}ScaleUpMode.html)   
   
   
If the module size of the barcode is smaller than the [`ModuleSizeThreshold`](#modulesizethreshold) and the acute angle with X of the barcode is larger than the [`AcuteAngleWithXThreshold`](#acuteanglewithxthreshold), the barcode will be enlarged to N times (N=1,2,3...) till N * modulesize >= [`TargetModuleSize`](#targetmodulesize). For more info on how to custom scale up rules, please refer to [this article](https://www.dynamsoft.com/help/Barcode-Reader/devguide/HowTo/EnableScaleUp.html).

---

### AcuteAngleWithXThreshold
Sets the acute angle threshold for scale-up.   

- **Value range**   
   [-1, 90]   
   
- **Default value**   
   -1  
 
- **Remark**     
   -1 : means automatically set by the library.  
   
&nbsp; 

### ModuleSizeThreshold
Sets the module size threshold for scale-up.  

- **Value range**   
   [0, 0x7fffffff]  
   
- **Default value**   
   0  
 
- **Remark**     
   0 : means automatically set by the library. 
   
&nbsp; 

### TargetModuleSize
Sets the target module size for scale-up.

- **Value range**   
   [0, 0x7fffffff]  
   
- **Default value**   
   0  
 
- **Remark**     
   0 : means automatically set by the library. 
   
&nbsp; 

