## LocalizationModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`ScanStride`](#scanstride) | `LM_SCAN_DIRECTLY` |
| [`ScanDirection`](#scandirection) | `LM_SCAN_DIRECTLY` |

**See also**   
[`LocalizationMode`]({{ site.manual_interface_enum }}LocalizationMode.html)

---

### ScanStride
Sets the stride in pixels between scans when searching for barcodes.  

- **Value range**   
   [0, 0x7fffffff]   
   
- **Default value**   
   0  
 
- **Remark**     
  0: automatically set by the library.   
  When the set value is greater than half the width or height of the current image, the actual processing is 0.
   
&nbsp; 

### ScanDirection
Sets the scan direction when searching barcode.

- **Value range**   
    [0, 2]   
   
- **Default value**   
   0  
 
- **Remark**     
  0: Both vertical and horizontal direction.   
  1: Vertical direction.   
  2: Horizontal direction.
   
