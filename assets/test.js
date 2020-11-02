function TestLiquid()
{
    var navWrap = document.getElementById("uniqueID");

    if(navWrap != null)
    {
        var liAry = navWrap.getElementsByTagName("li");
    
        for (var i = 0, len = liAry.length; i < len; i++) {
            liAry[i].style.listStyleImage = "url('/assets/expand-list.png')";
        }
    }
}

function UrlReplace()
{
    var docUrl = document.URL;    
    var ver = getUrlVars(docUrl)["ver"];
    var matchVer = getUrlVars(docUrl)["matchVer"];
    if (matchVer != "true" && ver != undefined) {
        RedirToGivenVersionPage(ver);
    }

    if (ver == undefined)
    {
        var tmpExp = new RegExp(/-v[0-9]+[^\/]*[\/(.html)]/g);
        var searchAry = tmpExp.exec(docUrl);
        if (searchAry != null){
            ver = searchAry[0].replace('-v','');
            ver = ver.replace('.html','');
            ver = ver.replace('/', '');
        }
        else{
            ver = "latest"
        }
    }

    var allHerf1 = $(".container").find("a");
    for (var i = 0; i < allHerf1.length; i++)
    {
        var hrefVal = allHerf1[i].href;

        var exp = new RegExp(/[?]+([^=]+)=/gi)
        if (exp.exec(hrefVal) != null){
            allHerf1[i].href = hrefVal + '&&ver='+ver;
        }
        else{
            allHerf1[i].href = hrefVal + '?ver='+ver;
        }   
    }

    var searchUrl = document.URL;
    var oriUrl = searchUrl;
    //history version doc url
    searchUrl = searchUrl.replace(/\/index-v[0-9]+[^\/]*.html/g,"/");
    searchUrl = searchUrl.replace(/-v[0-9]+[^\/]*\//g,"/");
    searchUrl = searchUrl.replace(/-v[0-9]+[^\/]*.html/g,".html");

    var dochead = document.head || document.getElementsByTagName('head')[0];

    if (searchUrl != oriUrl){
        oriUrl = searchUrl;
        if (oriUrl.indexOf("#") != -1) {
            oriUrl = oriUrl.substring(0, oriUrl.indexOf("#") + 1 );
        }
        if (oriUrl.indexOf("?") != -1){
            oriUrl = oriUrl.substring(0, oriUrl.indexOf("?") + 1 );
        }
        var linkTag = document.createElement('link');
        linkTag.href = oriUrl;
        linkTag.rel = 'canonical';
        dochead.appendChild(linkTag);
    } 
}


function getUrlVars(inputUrl) {
    var vars = {};
    var parts = inputUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function RedirToGivenVersionPage(inputVer)
{
    var curVerTag = $(".currentVersion ");
    var bestVerIndex = -1;
    var verDiff = -1;
    var curVer = null;
    if (curVerTag != null) {
        var verText = curVerTag[0].innerText;
        if (verText == "latest version"){
            curVer = "latest"
        }
        else{
            curVer = verText.replace('version ','');
        }
        if (curVer == inputVer){
            return;
        }
        else {
            bestVerIndex = -1;
            verDiff = GetVersionDiff(inputVer, curVer);
        }
    }
    
    var historyList = $(".otherVersions");
    if (historyList != null)
    {
        var listAry = historyList[0].getElementsByTagName("li");

        for (var i = 0; i < listAry.length; i++) {
            var tmpVerText = listAry[i].innerText;
            var tmpVer = null;
            if (tmpVerText == "latest version"){
                tmpVer = "latest"
            }
            else{
                tmpVer = tmpVerText.replace('version ','');
            }
            if (tmpVer == inputVer){
                var aTag = $(listAry[i]).children("a");
                if (aTag.length > 0) {
                    var exp = new RegExp(/[?]+([^=]+)=/gi)
                    if (exp.exec(aTag.href) != null){
                        window.location.replace(aTag.href + "&&ver=" +inputVer+"&&matchVer=true");
                    }
                    else{
                        window.location.replace(aTag.href + "?ver=" +inputVer+"&&matchVer=true");
                    }
                }
            }
            else {
                var tmpDiff = GetVersionDiff(inputVer, tmpVer);
                if (tmpDiff >= 0 && tmpDiff < verDiff){
                    bestVerIndex = i;
                    verDiff = tmpDiff;
                }
            }
        }
    }
 
    
    if (bestVerIndex >= 0){
        var aTag = $(listAry[bestVerIndex]).children("a");
        if (aTag.length > 0) {
            var exp = new RegExp(/[?]+([^=]+)=/gi)
            if (exp.exec(aTag.href) != null){
                window.location.replace(aTag.href + "&&ver=" +inputVer+"&&matchVer=true");
            }
            else{
                window.location.replace(aTag.href + "?ver=" +inputVer+"&&matchVer=true");
            }
        }
    }

    return;
}

function GetVersionDiff(inputVer, compareVer)
{
    if (compareVer == "latest"){
        return 100;
    }

    if (compareVer < inputVer){
        return -1;
    }

    var inputChar = inputVer.split('.');
    var compareChar = compareVer.split('.');
    var diff = 0;

    var maxLength = Math.max(inputChar.length, compareChar.length);

    var curWeight = 1;
    for (var i = 0; i < maxLength; i++){
        var tmpInput = i < inputChar.length ? inputChar[i] : 0;
        if (isNaN(tmpInput)){
            diff = diff + curWeight;
            break;
        }
        var tmpCompare = i < compareChar.length ? compareChar[i] : 0;
        if (isNaN(tmpCompare)){
            diff = diff + curWeight;
            break;
        }
        var tmpDiff = tmpCompare - tmpInput;
        if (tmpDiff >= 0){
            curWeight = curWeight / 10;
            diff = diff + curWeight * tmpDiff;
        }
        else{
            diff = diff - curWeight;
            curWeight = curWeight / 10;
            diff = diff + curWeight * (tmpDiff + 10);
        }
    }
    
    return diff;
}