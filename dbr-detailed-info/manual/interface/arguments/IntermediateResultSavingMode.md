## IntermediateResultSavingMode
 
| Argument Name | Valid Modes |
| ------------- | ----------- | 
| [`FolderPath`](#folderpath) | `IRSM_FILESYSTEM`<br>`IRSM_BOTH` |
| [`RecordsetSizeOfLatestImages`](#recordsetsizeoflatestimages) | `IRSM_MEMORY`<br>`IRSM_FILESYSTEM`<br>`IRSM_BOTH` |

**See also**   
[`IntermediateResultSavingMode`]({{ site.manual_interface_enum }}IntermediateResultSavingMode.html)

---

### FolderPath
Sets the path of the output folder which stores intermediate results.  

- **Value range**   
   A string value representing the folder path with max length 480.   
   
- **Default value**   
   ""  
 
- **Remark**     
   "": The library path.    
   Please make sure the path exists and your application has the appropriate permissions for saving the results.
   
&nbsp; 

### RecordsetSizeOfLatestImages
Sets the maximum count of recordset to store the latest images' intermediate results.

- **Value range**   
   [0,0x7fffffff]   
   
- **Default value**   
   0  
 
- **Remark**     
   0: no limitation on the count of recordset.   
   When the count exceeds, the old recordset will be replaced by the new one.
   
&nbsp; 


