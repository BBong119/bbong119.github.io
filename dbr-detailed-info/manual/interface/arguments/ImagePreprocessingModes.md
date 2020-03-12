## ImagePreprocessingModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`Sensitivity`](#sensitivity) | `IPM_GRAY_EQUALIZE` |
| [`SmoothBlockSizeX`](#smoothblocksizex) | `IPM_GRAY_SMOOTH`<br>`IPM_SHARPEN_SMOOTH` |
| [`SmoothBlockSizeY`](#smoothblocksizey) | `IPM_GRAY_SMOOTH`<br>`IPM_SHARPEN_SMOOTH` |
| [`SharpenBlockSizeX`](#sharpenblocksizex) | `IPM_SHARPEN_SMOOTH` |
| [`SharpenBlockSizeY`](#sharpenblocksizey) | `IPM_SHARPEN_SMOOTH` |

**See also**   
[`ImagePreprocessingMode`]({{ site.manual_interface_enum }}ImagePreprocessingMode.html)

---

### Sensitivity
Sets the sensitivity used for gray equalization.

- **Value range**   
   [1, 9]  
   
- **Default value**   
   5  
 
- **Remark**     
   If you have an image with a low level of contrast, you can set the property to a larger value. A larger value means a higher possibility that gray equalization will be activated. This may cause adverse effect on images with a high level of contrast.
   
&nbsp; 


