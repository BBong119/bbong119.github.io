## BinarizationModes
 
**Arguments Name**
- [`BlockSizeX`](#blocksizex)
- [`BlockSizeY`](#blocksizey)
- [`EnableFillBinaryVacancy`](#enablefillbinaryvacancy)
- [`ImagePreprocessingModesIndex`](#imagepreprocessingmodesindex)
- [`ThreshValueCoefficient`](#threshvaluecoefficient)


---

### BlockSizeX
Sets the horizontal block size for the binarization process.  

- **Value range**   
   [0, 1000]   
   
- **Default value**   
   0  
 
- **Remark**   
   Valid when [`BinarizationMode`]({{ site.manual_interface_enum }}BinarizationMode.html) set to `BM_LOCAL_BLOCK`.  
   0: the block size used for binarization will be set to a value which is calculated automatically.  
   N:  
     - 1 <= N <= 3: the block size used for binarization will be set to 3.   
     - N > 3: the block size used for binarization will be set to N.   
   Block size refers to the size of a pixel neighborhood used to calculate a threshold value for the pixel. An appropriate value for binarizationBlockSize can help generate a high quality binary image and increase the accuracy of barcode localization.
   
&nbsp; 

