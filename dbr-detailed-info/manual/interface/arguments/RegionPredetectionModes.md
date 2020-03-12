## RegionPredetectionModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`MinImageDimension`](#minimagedimension) | `RPM_GENERAL_GRAY_CONTRAST`<br>`RPM_GENERAL_HSV_CONTRAST`<br>`RPM_GENERAL_RGB_CONTRAST` | 
| [`Sensitivity`](#sensitivity) | `RPM_GENERAL_GRAY_CONTRAST`<br>`RPM_GENERAL_HSV_CONTRAST`<br>`RPM_GENERAL_RGB_CONTRAST` |

**See also**   
[`RegionPredetectionMode`]({{ site.manual_interface_enum }}RegionPredetectionMode.html)

---

### MinImageDimension
Sets the minimum image dimension (in pixels) to pre-detect barcode regions.

- **Value range**   
   [262144, 0x7fffffff]   
   
- **Default value**   
   262144  
 
- **Remark**     
   If the image dimension is larger than the given value, the library will enable the feature of pre-detecting barcode regions. Otherwise, it will skip this step when searching for barcodes.
   
&nbsp; 

### Sensitivity
Sets the sensitivity used for region predetection algorithm.   

- **Value range**   
   [1, 9]   
   
- **Default value**   
   1  
 
- **Remark**     
   A larger value means the library will take more effort to detect regions.
   
