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
        var linkTag = document.createElement('link');
        linkTag.href = oriUrl;
        linkTag.rel = 'canonical';
        dochead.appendChild(linkTag);
    }

    var curRelativeUrl = (document.URL.split(document.domain)).pop();


    var test = getUrlVars(document.URL)["ver"];

    var tmpExp = new RegExp(/-v[0-9]+.*\//g);
    var searchAry = tmpExp.exec(curRelativeUrl);
    if (searchAry != null)
    {
        var testVer = searchAry[0].replace('-v','');
        testVer = testVer.replace('/', '');

        var allHerf1 = $(".container").find("a");
        for (var i = 0; i < allHerf1.length; i++)
        {
            var hrefVal = allHerf1[i].href;

            var exp = new RegExp(/[?]+([^=]+)=/gi)
            if (hrefVal.exec(exp) != null){
                allHerf1[i].href = hrefVal + '&&ver='+testVer;
            }
            else{
                allHerf1[i].href = hrefVal + '?ver='+testVer;
            }   
        }

        var needFindStr = curRelativeUrl.split(searchAry[0])[0] + "/";
        var needReplaceStr = curRelativeUrl.split(searchAry[0])[0] + searchAry[0];

        var allHref = $(".content").find("a");
    
        for (var i = 0; i < allHref.length; i++)
        {
            var hrefVal = allHref[i].href;
            if (hrefVal.search(needReplaceStr) < 0)
            {
                hrefVal = hrefVal.replace(/-v[0-9]+.*\//g,"/");
                hrefVal = hrefVal.replace(/-v[0-9]+.*.html/g,".html");
                if (hrefVal.search(needFindStr) > 0)
                {
                    allHref[i].href = hrefVal.replace(needFindStr, needReplaceStr);
                }
            }
        }
    }
    else{
        var testVer = "latest";

        var allHerf1 = $(".container").find("a");
        for (var i = 0; i < allHerf1.length; i++)
        {
            var hrefVal = allHerf1[i].href;

            var exp = new RegExp(/[?]+([^=]+)=/gi)
            if (exp.exec(hrefVal) != null){
                allHerf1[i].href = hrefVal + '&&ver='+testVer;
            }
            else{
                allHerf1[i].href = hrefVal + '?ver='+testVer;
            }   
        }
    }
    
}


function getUrlVars(inputUrl) {
    var vars = {};
    var parts = inputUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}