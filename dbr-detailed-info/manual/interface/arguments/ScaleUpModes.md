## ScaleUpModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| AcuteAngleWithXThreshold | `SUM_LINEAR_INTERPOLATION`<br>`SUM_NEAREST_NEIGHBOUR_INTERPOLATION` |
| ModuleSizeThreshold | `SUM_LINEAR_INTERPOLATION`<br>`SUM_NEAREST_NEIGHBOUR_INTERPOLATION` |
| TargetModuleSize | `SUM_LINEAR_INTERPOLATION`<br>`SUM_NEAREST_NEIGHBOUR_INTERPOLATION` |

**See also**   
[`ScaleUpMode`]({{ site.manual_interface_enum }}ScaleUpMode.html)

If the module size of the barcode is smaller than the ModuleSizeThreshold and the acute angle with X of the barcode is larger than the AcuteAngleWithXThreshold, the barcode will be enlarged to N times (N=1,2,3...) till N * modulesize >= TargetModuleSize. For more info on how to custom scale up rules, please refer to [this article](https://www.dynamsoft.com/help/Barcode-Reader/devguide/HowTo/EnableScaleUp.html).

---

### AcuteAngleWithXThreshold
Sets the acute angle threshold for scale-up.   

- **Value range**   
   [-1, 90]   
   
- **Default value**   
   -1  
 
- **Remark**     
   
   
&nbsp; 


