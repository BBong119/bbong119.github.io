---
layout: general_layout
sideHeader: User Guide for C
id: user_guide_c
sourceCodeUrl: /dbr-basic-info/user-guide/windows/c.md
---


# User Guide for Windows Edition - C

## System Requirements

- Operating systems:
   - Windows 7, 8, 10.
   - Windows Server 2003, 2008, 2008 R2, 2012.
  
- Environment: Visual Studio 2008 and above.  


&nbsp; 

   
## Installation
To install Dynamsoft Barcode Reader Windows Edition on your development machine, you can download the SDK from the [Dynamsoft website](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Download.aspx) and run the setup program. The trial installer includes a free trial license valid for 30 days.   
   
After installation, you can find samples for supported platforms in the **Samples** folder under the installation folder.  


&nbsp; 


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
   Please update `<your image file full path>` and `<your license key here>` in the code accordingly.   
   
4. Run the project.   
   Build the application and copy the related DLL files to the same folder as the EXE file. The DLLs can be found in `[INSTALLATION FOLDER]\Components\C_C++\Redist\`.
   - For x86 mode, required DLLs are: x86\DynamsoftBarcodeReaderx86.dll,x86\vcomp110.dll,x86\DynamicPdf.dll (for decoding barcodes from PDF files), x86\DynamsoftLicClientx86.dll.   
   - For x64 mode, required DLLs are: x64\DynamsoftBarcodeReaderx64.dll, x64\vcomp110.dll, x64\DynamicPdfx64.dll (for decoding barcodes from PDF files), x64\DynamsoftLicClientx64.dll.
   
   To test, you can open the Command Prompt and execute the EXE file with a barcode image.
   
To deploy your application, make sure the DLLs are in the same folder as the EXE file. See the [Distribution](#distribution) section for more details.   


&nbsp; 


## Decoding Methods
The SDK provides multiple decoding methods that support reading barcodes from different sources, including static images,
video stream, files in memory, base64 string, bitmap, etc. Here is a list of all decoding methods:
- [DBR_DecodeFile]({{ site.manual_interface_c }}methods/decode.html#dbr_decodefile): Reads barcodes from a specified file (BMP, JPEG, PNG, GIF, TIFF or PDF).   
- [DBR_DecodeBase64String]({{ site.manual_interface_c }}methods/decode.html#br_decodebase64string): Reads barcodes from a base64 encoded string of a file.   
- [DBR_DecodeDIB]({{ site.manual_interface_c }}methods/decode.html#dbr_decodedib): Reads barcodes from a bitmap. When handling multi-page images, it will only decode the
current page.   
- [DBR_DecodeBuffer]({{ site.manual_interface_c }}methods/decode.html#dbr_decodebuffer): Reads barcodes from raw buffer.
- [DBR_DecodeFileInMemory]({{ site.manual_interface_c }}methods/decode.html#dbr_decodefileinmemory): Decodes barcodes from an image file in memory.   
   
You can find more samples in more programming languages at [Code Gallery](https://www.dynamsoft.com/Downloads/Dynamic-Barcode-Reader-Sample-Download.aspx).


&nbsp; 


## Barcode Reading Settings
Calling the [decoding methods](#decoding-methods) directly will use the default scanning modes and it will satisfy most of the needs. The SDK also allows you to adjust the scanning settings to optimize the scanning performance for different usage scenarios.   
   
There are two ways to change the barcode reading settings - using the PublicRuntimeSettings Struct or template. For new
developers, We recommend you to start with the PublicRuntimeSettings struct; For those who are experienced with the SDK,
you may use a template which is more flexible and easier to update.   

- [Use `PublicRuntimeSettings` Struct to Change Settings](#use-publicruntimesettings-struct-to-change-settings)   
- [Use A Template to Change Settings](#use-a-template-to-change-settings)   

### Use [`PublicRuntimeSettings`]({{ site.manual_interface_struct}}PublicRuntimeSettings.html) Struct to Change Settings
Here are some common scanning settings you might find helpful:   
- [Specify Barcode Type to Read](#specify-barcode-type-to-read)   
- [Specify Maximum Barcode Count](#specify-maximum-barcode-count)   
- [Specify a Scan Region](#specify-a-scan-region)  

For more scanning settings guide, check out the [How To](#how-to-guide) section.

#### Specify Barcode Type to Read
By default, the SDK will read all the supported barcode formats except Postal Codes and Dotcode from the image. (See [Product Overview]({{ site.dbrOverview }}) for the full supported barcode list.)   

If your full license only covers some barcode formats, you can use `BarcodeFormatIds` and `BarcodeFormatIds_2` to specify the barcode format(s). Check out [`BarcodeFormat`]({{ site.manual_interface_enum }}BarcodeFormat.html) and [`BarcodeFormat_2`]({{ site.manual_interface_enum }}BarcodeFormat_2.html).   

For example, to enable only 1D barcode reading, you can use the following code:   

```c
void *hBarcode = NULL;
char sError[512];
TextResultArray* pResult = NULL;
PublicRuntimeSettings runtimeSettings;
hBarcode = DBR_CreateInstance();
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
DBR_InitLicense(hBarcode, "<Put your license key here>");
//Set the barcode format
DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
runtimeSettings.barcodeFormatIds = 2047; // OneD barcode
DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings,sError,512);
//Replace "Put the path of your file here" with your own file path
DBR_DecodeFile(hBarcode,"<Put your file path here>","");
DBR_GetAllTextResults(hBarcode, &pResult);
DBR_FreeTextResults(&pResult);
DBR_DestroyInstance(hBarcode);
```

#### Specify maximum barcode count
By default, the SDK will read as many barcodes as it can. To increase the recognition efficiency, you can use `expectedBarcodesCount` to specify the maximum number of barcodes to recognize according to your scenario.   

```c
void *hBarcode = NULL;
char sError[512];
TextResultArray* pResult = NULL;
PublicRuntimeSettings runtimeSettings;
hBarcode = DBR_CreateInstance();
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
DBR_InitLicense(hBarcode, "<Put your license key here>");
//Set the number of barcodes to be expected
DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
runtimeSettings.expectedBarcodesCount = 1;
DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings, sError, 512);
//Replace "<Put the path of your file here>" with your own file path
DBR_DecodeFile(hBarcode,"<Put your file path here>","");
DBR_GetAllTextResults(hBarcode, &pResult);
DBR_FreeTextResults(&pResult);
DBR_DestroyInstance(hBarcode);
```

#### Specify a scan region
By default, the barcode reader will search the whole image for barcodes. This can lead to poor performance especially when
dealing with high-resolution images. You can speed up the recognition process by restricting the scanning region.   

To specify a region, you will need to define an area. The following code shows how to create a template string and define the region.   

```c
void *hBarcode = NULL;
char sError[512];
TextResultArray* pResult = NULL;
PublicRuntimeSettings runtimeSettings;
hBarcode = DBR_CreateInstance();
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
DBR_InitLicense(hBarcode, "<Put your license key here>");
//Decode the barcodes on the left half of the image
DBR_GetRuntimeSettings(hBarcode, &runtimeSettings);
runtimeSettings.region.regionBottom = 100;
runtimeSettings.region.regionLeft = 0;
runtimeSettings.region.regionRight = 50;
runtimeSettings.region.regionTop = 0;
runtimeSettings.region.regionMeasuredByPercentage = 1; //The region is determined by percentage
DBR_UpdateRuntimeSettings(hBarcode, &runtimeSettings,sError,512);
//Replace "<Put the path of your file here>" with your own file path
DBR_DecodeFile(hBarcode,"put your file path here","");
DBR_GetAllTextResults(hBarcode, &pResult);
DBR_FreeTextResults(&pResult);
DBR_DestroyInstance(hBarcode);
```

### Use A Template to Change Settings
Besides the option of using the PublicRuntimeSettings struct, the SDK also provides [`DBR_InitRuntimeSettingsWithString`]({{ site.manual_interface_c }}methods/parameter-and-runtime-settings-advanced.html#dbr_initruntimesettingswithstring) and [`DBR_InitRuntimeSettingsWithFile`]({{ site.manual_interface_c }}methods/parameter-and-runtime-settings-advanced.html#dbr_initruntimesettingswithfile) APIs that enable you to use a template to control all the runtime settings. With a template, instead of writing many codes to modify the settings, you can manage all the runtime settings in a JSON file/string.    

```c
void *hBarcode = NULL;
char sError[512];
TextResultArray* pResult = NULL;
hBarcode = DBR_CreateInstance();
// Initialize license prior to any decoding
//Replace "<Put your license key here>" with your own license
DBR_InitLicense(hBarcode, "<Put your license key here>");
//Use a template to modify the runtime settings
//DBR_InitRuntimeSettingsWithString() can also be used to modify the runtime settings with a json string
DBR_InitRuntimeSettingsWithFile(hBarcode, "<Put your file path here>", CM_OVERWRITE, sError, 512);
//Output runtime settings to a json file.
//DBR_OutputLicenseToString() can also be used to output the settings to a string
DBR_OutputSettingsToFile(hBarcode, "<Put your file path here>", "runtimeSettings");
//Replace "<Put your file path here>" with your own file path
DBR_DecodeFile(hBarcode,"put your file path here","");
DBR_GetAllTextResults(hBarcode, &pResult);
DBR_FreeTextResults(&pResult);
DBR_DestroyInstance(hBarcode);
```  

Below is a template for your reference. To learn more about the APIs, you can check out [`PublicRuntimeSettings`]({{ site.manual_interface_struct }}PublicRuntimeSettings.html) Struct.  
```c
{
   "ImageParameter" : {
      "BarcodeFormatIds" : [ "BF_ALL" ],
      "BinarizationModes" : [
         {
            "BlockSizeX" : 0,
            "BlockSizeY" : 0,
            "EnableFillBinaryVacancy" : 1,
            "ImagePreprocessingModesIndex" : -1,
            "Mode" : "BM_LOCAL_BLOCK",
            "ThreshValueCoefficient" : 10
         }
      ],
      "DeblurLevel" : 9,
      "Description" : "",
      "ExpectedBarcodesCount" : 0,
      "GrayscaleTransformationModes" : [
         {
            "Mode" : "GTM_ORIGINAL"
         }
      ],
      "ImagePreprocessingModes" : [
         {
            "Mode" : "IPM_GENERAL"
         }
      ],
      "IntermediateResultSavingMode" : {
         "Mode" : "IRSM_MEMORY"
      },
      "IntermediateResultTypes" : [ "IRT_NO_RESULT" ],
      "MaxAlgorithmThreadCount" : 4,
      "Name" : "runtimesettings",
      "PDFRasterDPI" : 300,
      "Pages" : "",
      "RegionDefinitionNameArray" : null,
      "RegionPredetectionModes" : [
         {
            "Mode" : "RPM_GENERAL"
         }
      ],
      "ResultCoordinateType" : "RCT_PIXEL",
      "ScaleDownThreshold" : 2300,
      "TerminatePhase" : "TP_BARCODE_RECOGNIZED",
      "TextFilterModes" : [
         {
            "MinImageDimension" : 65536,
            "Mode" : "TFM_GENERAL_CONTOUR",
            "Sensitivity" : 0
         }
      ],
      "TextResultOrderModes" : [
         {
            "Mode" : "TROM_CONFIDENCE"
         },
         {
            "Mode" : "TROM_POSITION"
         },
         {
            "Mode" : "TROM_FORMAT"
         }
      ],
      "TextureDetectionModes" : [
         {
            "Mode" : "TDM_GENERAL_WIDTH_CONCENTRATION",
            "Sensitivity" : 5
         }
      ],
      "Timeout" : 10000
   },
   "Version" : "3.0"
}
```

&nbsp; 


## Licensing and Distributing
[Licensing and Distributing]()


&nbsp; 


## How-to Guides

This section covers the following topics:
- [Read barcodes from camera stream]()
- [Read barcodes with different colors]()
- [Filter out unwanted barcode results]()
- [Decode DPM Data Matrix]()
- [Get barcode rotation angle]()
- [Get barcode confidence]()
- [Get intermediate results]()
- [Get detailed barcode information]()
- [Turn on or off text filter]()
- [Scan in multiple threads]()
- [Test batch scan performance]()
- [Set custom area for accompanying texts]()
- [Enable scale up for barcode recognition]()
- [Check if the barcode image is clear enough for recognition]()
- [Generate a custom barcode reading template]()


&nbsp; 


## FAQ
- [Licensing]()
   - [How to find my license key for the full version?]()
   - [Does Dynamsoft Barcode Scanner SDK require an Internet connection?]()
   - [When does a device counts as an activated device?]()
   - [For an environment with no internet connection allowed, can I use your barcode reader SDK?]()
- [Using Barcode Reader]()
   - [When I scan barcodes, why are the barcode results marked with asterisks (\*)?]() 
   - [I saw you have Windows Edition, Linux Edition, JavaScript Edition, etc. Which is the right one for my application?]()
   - [Why does it return strange or non-printable characters as a result?]()
   - [How to get the “result image” with overlays once barcodes are found in the image?]()
   - [The barcode reader SDK sometimes return false results with four or less characters. How to avoid it?]()
   - [Can I scan barcodes on US Driver’s Licenses?]()


&nbsp; 


## Contact Us
If there are any questions, please feel free to contact [support@dynamsoft.com](mailto:support@dynamsoft.com).
