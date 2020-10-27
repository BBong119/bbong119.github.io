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
            if (hrefVal.serach(needReplaceStr) < 0)
            {
                hrefVal = hrefVal.replace(/-v[0-9]+.*\//g,"/");
                hrefVal = hrefVal.replace(/-v[0-9]+.*.html/g,".html");
                if (hrefVal.serach(needFindStr) > 0)
                {
                    allHref[i].href = hrefVal.replace(needFindStr, needReplaceStr);
                }
            }
        }
    }
}