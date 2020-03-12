## TextFilterModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`MinImageDimension`](#minimagedimension) | `TFM_GENERAL_CONTOUR` |
| [`Sensitivity`](#sensitivity) | `TFM_GENERAL_CONTOUR` |

**See also**   
[`TextFilterMode`]({{ site.manual_interface_enum }}TextFilterMode.html)

---

### MinImageDimension
Sets the minimum image dimension (in pixels) to filter the text.

- **Value range**   
   [65536, 0x7fffffff]   
   
- **Default value**   
   65536  
 
- **Remark**     
   If the image dimension is larger than the given value, the library will enable the text filtering feature. Otherwise, it will skip this step when doing barcode recognition. The feature can speed up the recognition process.
   
&nbsp; 

### Sensitivity
Sets the sensitivity used for text filtering.

- **Value range**   
   [0, 9]   
   
- **Default value**   
   0
 
- **Remark**     
   0: automatically set by the library.   
   A larger value means the library will take more effort to filter text.
   
