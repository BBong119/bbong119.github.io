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
   ```cpp
    #include <stdio.h>
    #include "<relative path>/DynamsoftBarcodeReader.h"
    
    #ifdef _WIN64
    #pragma comment(lib, "<relative path>/DBRx64.lib")
    #else
    #pragma comment(lib, "<relative path>/DBRx86.lib")
    #endif
   ```
   
   Please replace `<relative path>` in the code with the relative path to the `BarcodeReadDemo_C.c` file. Typically, The `DynamsoftBarcodeReader.h` file can be found in `[INSTALLATION FOLDER]\Components\C_C++\Include\`, and the LIB files can be found in `[INSTALLATION FOLDER]\Components\C_C++\Lib\`.
