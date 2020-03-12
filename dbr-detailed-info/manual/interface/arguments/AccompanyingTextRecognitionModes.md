## AccompanyingTextRecognitionModes
 
| Argument Name | Valid Modes |
| ------------- | ----------- |
| [`RegionBottom`](#regionbottom) | `ATRM_GENERAL` |
| [`RegionLeft`](#regionleft) | `ATRM_GENERAL` |
| [`RegionRight`](#regionright) | `ATRM_GENERAL` |
| [`RegionTop`](#regiontop) | `ATRM_GENERAL` |

If RegionLeft, RegionTop, RegionRight and RegionBottom are all equal to 0, the accompanying text zone will be detected automatically by the SDK. For more info on how to set a custom area for accompanying texts, please refer to [this article](https://www.dynamsoft.com/help/Barcode-Reader/devguide/HowTo/SetCustomAreaForAccompanyingTexts.html).  

**See also**  
[`AccompanyingTextRecognitionMode`]({{ site.manual_interface_enum }}AccompanyingTextRecognitionMode.html)
---

### RegionBottom
Specifies the y-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.   

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0 

&nbsp; 

### RegionLeft
Specifies the x-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.    

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   

&nbsp; 

### RegionRight
Specifies the x-coordinate of the bottom-right corner of the region in percentage. This value is relative to the top-left corner of the barcode.   

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   
 
&nbsp; 

### RegionTop
Specifies the y-coordinate of the top-left corner of the region in percentage. This value is relative to the top-left corner of the barcode.   

- **Value range**   
   [-255, 255]   
   
- **Default value**   
   0   
