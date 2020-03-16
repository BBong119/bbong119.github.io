# Developer guide for Windows Edition - C

## System requirements

- Operating systems:
   - Windows 7, 8, 10.
   - Windows Server 2003, 2008, 2008 R2, 2012.
  
- Environment: Visual Studio 2008 and above.  
   
## Installation
To install Dynamsoft Barcode Reader Windows Edition on your development machine, you can download the SDK from the [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx) and run the setup program. The trial installer includes a free trial license valid for 30 days.   
   
After installation, you can find samples for supported platforms in the **Samples** folder under the installation folder.  

## Getting Started: HelloWorld
1. Start Visual Studio and create a new Win32 Console Application in C. Let's name it `BarcodeReadDemo_C`.   
2. Add Dynamsoft Barcode Reader headers and libs in `BarcodeReadDemo_C.c`.
   ```c
    #include <stdio.h>
    #include "<relative path>/DynamsoftBarcodeReader.h"
    
    #ifdef _WIN64
    #pragma comment(lib, "<relative path>/DBRx64.lib")
    #else
    #pragma comment(lib, "<relative path>/DBRx86.lib")
    #endif
   ```
   
   Please replace `<relative path>` in the code with the relative path to the `BarcodeReadDemo_C.c` file. Typically, The `DynamsoftBarcodeReader.h` file can be found in `[INSTALLATION FOLDER]\Components\C_C++\Include\`, and the LIB files can be found in `[INSTALLATION FOLDER]\Components\C_C++\Lib\`.   
 
3. Update the main function in `BarcodeReadDemo_C.c`.
   ```c
   int main()
   {
       // Define variables
       void *hBarcode = NULL;
       int iRet = -1;
       int iIndex = 0;
       int iLicMsg = -1;
       TextResultArray* pResult = NULL;
       hBarcode = DBR_CreateInstance();

       // Initialize license prior to any decoding
       iLicMsg = DBR_InitLicense(hBarcode, "<your license key here>");

       //If error occurs to the license initialization
        if (iLicMsg != DBR_OK) 
       {
           printf("Failed to initialize the license successfully: %d\r\n%s\r\n", iLicMsg, DBR_GetErrorString(iLicMsg));
           return iLicMsg;
       }

       // Start decoding. Leave the template name empty ("") will use the settings from PublicRuntimeSettings
       DBR_DecodeFile(hBarcode, "<your image file full path>", "");

       // Get the text result
       iRet = DBR_GetAllTextResults(hBarcode, &pResult);

       // If error occurs
       if (iRet != DBR_OK) 
       {
           printf("Failed to read barcode: %d\r\n%s\r\n", iRet, DBR_GetErrorString(iRet));
           return iRet;
       }

       // If succeeds
       printf("%d total barcode(s) found. \n", pResult->resultsCount);
       for (iIndex = 0; iIndex < pResult->resultsCount; iIndex++)
       {
           printf("Result %d\n", iIndex + 1);
           printf("Barcode Format: %s\n", pResult->results[iIndex]->barcodeFormatString);
           printf("Text reads: %s \n", pResult->results[iIndex]->barcodeText);
       }

       // Finally release BarcodeResultArray and destroy instance
       DBR_FreeTextResults(&pResult);
       DBR_DestroyInstance(hBarcode);
       system("pause");
       return 0;
   }
   ```
