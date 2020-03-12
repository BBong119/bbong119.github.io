## Arguments of AccompanyingTextRecognitionModes

- [`RegionBottom`](#regionbottom)
- [`RegionLeft`](#regionleft)
- [`RegionRight`](#regionright)
- [`RegionTop`](#regiontop)
  
    
If RegionLeft, RegionTop, RegionRight and RegionBottom are all equal to 0, the accompanying text zone will be detected automatically by the SDK.   
   
     
For more info on how to set a custom area for accompanying texts, please refer to [this article](https://www.dynamsoft.com/help/Barcode-Reader/devguide/HowTo/SetCustomAreaForAccompanyingTexts.html).

---

### RegionBottom
Specifies the y-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.  

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   
 
- **Remark**   
   Valid when [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}AccompanyingTextRecognitionMode.html) mode set to `ATRM_GENERAL`.   

### RegionLeft
Specifies the x-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.   

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   
 
- **Remark**   
   Valid when [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}AccompanyingTextRecognitionMode.html) mode set to `ATRM_GENERAL`.   

### RegionRight
Specifies the x-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.   

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   
 
- **Remark**   
   Valid when [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}AccompanyingTextRecognitionMode.html) mode set to `ATRM_GENERAL`.   
   
   
### RegionTop
Specifies the y-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.    

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   
 
- **Remark**   
   Valid when [`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}AccompanyingTextRecognitionMode.html) mode set to `ATRM_GENERAL`.   
