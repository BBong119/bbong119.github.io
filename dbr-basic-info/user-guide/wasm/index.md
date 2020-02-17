---
layout: user-guide
id: user_guide_wasm
sourceCodeUrl: https://github.com/BBong119/bbong119.github.io/blob/master/DBR-Basic-Info/user-guide/wasm/index.md
---


# Dynamsoft JavaScript Barcode SDK for Web  
![Dynamsoft JavaScript Barcode SDK](https://www.dynamsoft.com/blog/wpcontent/uploads/2018/12/blog_dbr6.4.1db06493aba126f0c7f177687cf56a9038dd655a1fd2d4374ab571ce738111858.png)  

[Dynamsoft BarcodeReader SDK for Web](https://www.dynamsoft.com/Products/barcode-recognition-javascript.aspx) is a JavaScript API for barcode scanning based on the **WebAssembly** technology. It supports real-time localization and decoding of various barcode types. The library is capable of scanning barcodes from static images as well as directly from live video streams. It also supports reading multiple barcodes at once.  

Also see [Dynamsoft JavaScript Barcode SDK for Node](https://github.com/dynamsoft-dbr/node-javascript-barcode).  

## Quick Usage
### Web
```
<!DOCTYPE html>
<html>
<body>
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.3.0-v0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
    <script>
        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.BarcodeScanner.createInstance();
            scanner.onFrameRead = results => {console.log(results);};
            scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
            await scanner.show();
        })();
    </script>
</body>
</html>
``` 

## Table of Content
- [Quick Usage](#Quick-Usage)
- [Feature](#Feature)
- Live Demo
- Getting Started: HelloWorld
- Taking a closer look
    - Initializing
    - Configuring Scanner Settings
    - Customizing the UI
- Advanced Usage
    - Print out log for better debugging
    - Show found barcodes
    - Read a specific area/region
- Self-hosted Deployment
- Changelog
- How to Upgrade
- API Documentation
- License Activation
- License Agreement
- Contact Us

## Feature

- Supported Symbologies:  
    1D barcode: **Code 39**, **Code 128**, **Code 93**, **Codabar**, **Interleaved 2 of 5 (ITF)**, **EAN-13**, **EAN-8**, **UPC-A**, **UPC-E**, **Industrial 2 of 5** (Code 2 of 5 Industry, Standard 2 of 5, Code 2 of 5), **Code 39 Extended**.  
    2D barcode: **PDF417**, **QR**, **DataMatrix**, **Aztec**, and **MaxiCode**.  
    GS1 Databar: **Omnidirectional**, **Truncated**, **Stacked**, **Stacked Omnidirectional**, **Expanded**, **Expanded Stacked** and **Limited**.  
    Patch Code  
    GS1 Composite Code  
    Postal Code: **USPS Intelligent Mail**, **PostNet**, **Planet**, **Australian Post**, **UK Royal Mail (RM4SCC)**.  

- Supported Data Sources: **Blob**, **HTMLImageElement**, **HTMLVideoElement**, and **URL**, etc.  

- Browser Compatibility:
    - Unlike normal server-based applications, this library requires some advanced features which fortunately are supported by all mainstream modern browsers. These advanced features are listed below:
        - MediaDevices/getUserMedia  
          Required only for in-browser video streaming. If a browser doesn't have this API the Single Frame Mode is used automatically. If the API exists but doesn't work correctly, Single Frame Mode can be used as an alternative.  
        - WebAssembly, Blob, URL/createObjectURL, Web Workers  
          These four features are required for the library to work.
     - Combining the requirements above results in the following table of supported browsers.  
     
    **NOTE**: Apart from the browsers, the operating systems running on the target devices may also impose some limitations of their own that could restrict the use of the library. Therefore, the following table serves as a rough estimation instead of an accurate guideline. Browser compatibility ultimately depends on whether the browser on that particular operating system supports the features listed above.  
    
    Browser Name | Version
    :-: | :-:
    Chrome | v57+ (v59+ on Android/iOS<sup>1</sup>)
    Firefox | v52+ (v55+ on Android/iOS<sup>1</sup>)
    Edge<sup>2</sup> | v16+
    Safari<sup>3</sup> | v11+
    
    <sup>1</sup> On iOS, camera video streaming only works in Safari.  
    <sup>2</sup> On Edge, due to strict Same-origin policy, you must host the library in the same domain as your web page.  
    <sup>3</sup> Safari 11.2.2 ~ 11.2.6 are not supported.  
  
- Compact and Full Editions  
    As more and more features are being added to the library, the supporting `wasm` file is getting bigger and bigger. For flexibility, we provide two editions. The compact edition has less features but downloads and compiles faster, on the other hand, the full edition has all features built-in.  
    
    Features | Compact edition | Full edition
    :-: | :-: | :-:
    `wasm` size<sup>1</sup>(gzip) | 810KB | 1.1 MB
    1D | √ | √
    QR | √ | √
    Mirco QR | X | √
    PDF417 | √ | √
    Mirco PDF417 | X | √
    DataMatrix | √ | √
    Aztec | X | √
    MaxiCode | X | √
    Patch Code | X | √
    GS1 Composite Code | X | √
    GS1 DataBar | X | √
    Postal Code | X | √
    DPM | X | √
    getRuntimeSettings | √ | √
    updateRuntimeSettings | √ | √
    getIntermediateResults | X | √
    initRuntimeSettingsWithString | X | √
    outputSettingsToString | X | √
    recommended scenario<sup>2</sup> | To C | To B  
    
    <sup>1</sup> The `wasm` file size is based on version 7.2.2. In later versions, the size may differ.  
  
    <sup>2</sup> The compact edition downloads and compiles faster which makes it more suitable for the scenario where a customer only needs to scan a barcode once. On the contrary, in scenarios where an employee needs to continuously scan lots of barcodes or where specific uncommon barcodes or advanced features are required, use the full edition by simply setting the following before you call `loadWasm` or `CreateInstance`.  
    ```
    Dynamsoft.BarcodeReader._bUseFullFeature = true;
    ```
    
## Live Demo  
The following is a screenshot of the live demo. Try it [here](https://demo.dynamsoft.com/dbr_wasm/barcode_reader_javascript.html).  
    
## Getting Started: HelloWorld  
This section will help you use the library to build a simple web application to decode barcodes from a video stream.  

**Basic Requirements**  
- Internet connection  
- Supported Browser  
- Camera access  

### Step One: Write the code in one minute!  
Create an HTML file with the following content. Deploy it to your web server if you have it already.  

- The sample is missing one piece of information to work correctly which is the field `PRODUCT-KEYS`, you can acquire a trial key [here](https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx) to replace it.    
- If you don't have a ready-to-use web server and you happen to have a package manager like [npm](https://www.npmjs.com/package/http-server) or [yarn](https://yarnpkg.com/en/package/http-server), you can set up a simple http server in minutes. Check out http-server on npm or yarn.  

```
<!DOCTYPE html>
<html>
<body>
    <!-- Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license. -->
    <script src="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.3.0-v0/dist/dbr.js" data-productKeys="PRODUCT-KEYS"></script>
    <script>
        let scanner = null;
        (async()=>{
            scanner = await Dynamsoft.BarcodeScanner.createInstance();
            scanner.onFrameRead = results => {console.log(results);};
            scanner.onUnduplicatedRead = (txt, result) => {alert(txt);};
            await scanner.show();
        })();
    </script>
</body>
</html>
```
[Try in JSFiddle](https://jsfiddle.net/DynamsoftTeam/pL4e7yrd/)

### Step Two: Tackle a few issues.
Open the file in your browser and there will be a pop-up asking for permission to access the camera. Once the access is granted, you will see the video stream in the default UI of the **BarcodeScanner**.  

**Note**: If you don't see the pop-up, wait a few seconds for the initialization to finish.  

#### General Issue one
If you open the HTML file as `file:///` or `http://`, the following error may appear in the browser console

[Deprecation] getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.

In Safari 12 the error is

Trying to call getUserMedia from an insecure document.

As the error states, to access the camera with the API getUserMedia, a secure channel (https://) is required.

Note: If you use Chrome or Firefox, you might not get the error because these two browsers allow camera access via file:/// and http://localhost.

To make sure your web application can access the camera, try to configure your web server to support HTTPS. The following links may help.

NGINX: Configuring HTTPS servers
IIS: Create a Self Signed Certificate in IIS
Tomcat: Setting Up SSL on Tomcat in 5 minutes
Node.js: npm tls
General Issue Two
For testing purposes, a self-signed certificate can be used when configuring HTTPS. When accessing the site, the browser might say "the site is not secure". In this case, go to the certificate settings and trust this certificate.

In a production environment, you will need a valid HTTPS certificate that does not have this issue. If you don't have one yet, you can get a free one from Let’s Encrypt. Of course, you are advised to apply for a paid certificate from companies such as Verisign, GeoTrust, etc.
