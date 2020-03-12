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

### SmoothBlockSizeX
Sets the horizontal block size for the smoothing process.   

- **Value range**   
   [3, 1000]  
   
- **Default value**   
   3  
 
- **Remark**     
   Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.
   
&nbsp;  

### SmoothBlockSizeY
Sets the vertical block size for the smoothing process.  

- **Value range**   
   [3, 1000]  
   
- **Default value**   
   3  
 
- **Remark**     
   Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.
   
&nbsp;  

### SharpenBlockSizeX
Sets the horizontal block size for the sharpening process.  

- **Value range**   
   [3, 1000]   
   
- **Default value**   
   3  
 
- **Remark**     
      Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.  
   
&nbsp; 

### SharpenBlockSizeY
	Sets the vertical block size for the sharpening process.    

- **Value range**   
   [3, 1000]   
   
- **Default value**   
   3  
 
- **Remark**     
      Block size refers to the size of a pixel neighborhood used to calculate the threshold for the pixel. An appropriate value can help increase the accuracy of barcode localization.  
