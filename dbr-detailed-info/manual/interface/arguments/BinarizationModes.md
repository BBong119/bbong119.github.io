## BinarizationModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`BlockSizeX`](#blocksizex) | `BM_LOCAL_BLOCK` |
| [`BlockSizeY`](#blocksizey) | `BM_LOCAL_BLOCK` |
| [`EnableFillBinaryVacancy`](#enablefillbinaryvacancy) | `BM_LOCAL_BLOCK` |
| [`ImagePreprocessingModesIndex`](#imagepreprocessingmodesindex) | `BM_LOCAL_BLOCK` |
| [`ThreshValueCoefficient`](#threshvaluecoefficient) | `BM_LOCAL_BLOCK` |

**See also**
[`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html)

---

### BlockSizeX
Sets the horizontal block size for the binarization process. 

- **Value range**   
   [0, 1000]   
   
- **Default value**   
   0  
 
- **Remark**     
   0: the block size used for binarization will be set to a value which is calculated automatically.  
   N:  
     - 1 <= N <= 3: the block size used for binarization will be set to 3.   
     - N > 3: the block size used for binarization will be set to N.   
   
   Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. An appropriate value for binarizationBlockSize can help generate a high quality binary image and increase the accuracy of barcode localization.
   
&nbsp; 

### BlockSizeY
Sets the vertical block size for the binarization process. 

- **Value range**   
   [0, 1000]   
   
- **Default value**   
   0  
 
- **Remark**   
   0: the block size used for binarization will be set to a value which is calculated automatically.  
   N:  
     - 1 <= N <= 3: the block size used for binarization will be set to 3.   
     - N > 3: the block size used for binarization will be set to N.   
   
   Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. An appropriate value for binarizationBlockSize can help generate a high quality binary image and increase the accuracy of barcode localization.
   
&nbsp; 

### EnableFillBinaryVacancy
Sets whether to enable binary vacancy filling.      

- **Value range**   
   [0, 1]   
   
- **Default value**   
   1  
 
- **Remark**   
   0: disable.  
   1: enable.  
   
   For barcodes with a large module size, there might be a vacant area in the position detection pattern after binarization. The vacant area may result in decoding failure. Setting this to True will fill in the vacant area with black and may help improve the decoding success rate. Better accuracy for images with a large module size.
   
&nbsp; 
