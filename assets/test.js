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

    if (searchUrl != oriUrl){
        oriUrl = searchUrl;
        if (oriUrl.indexOf("#") != -1) {
            oriUrl = oriUrl.substring(0, oriUrl.indexOf("#") + 1 );
        }
        var tmpstring = '<link href=\"' + oriUrl + '\" rel=\"canonical\">';
        $("head").append(tmpstring);
    }

    var curRelativeUrl = (document.URL.split(document.domain)).pop();


    var tmpExp = new RegExp(/-v[0-9]+.*\//g)
    var searchAry = tmpExp.exec(curRelativeUrl);
    if (searchAry != null)
    {
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
}