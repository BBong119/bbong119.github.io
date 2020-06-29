function TestLiquid()
{
    var navWrap = document.getElementById("uniqueID");

    if(navWrap != null)
    {
        var liAry = navWrap.getElementsByTagName("li");
    
        for (var i = 0, len = liAry.length; i < len; i++) {
            liAry[i].style.listStyleImage = "url('expand-list.png')";
        }
    }
}
