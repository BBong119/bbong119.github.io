(function(){
  	var navWrap = document.getElementById("menuLsitContainer");
  	var nav1s = navWrap.getElementsByTagName("span");
	var nav2s = document.getElementsByName("listLevel2");
	var URL = document.URL;
	
	var isfound = false;
	for(var i = 0, len = nav1s.length; i < len; i++){
		if (isfound)
		{
			nav2s[i].style.display = "none";
			continue;
		}
		var nav3s = nav2s[i].getElementsByTagName("li");				
		for (var j = 0, len2 = nav3s.length; j < len2; j++)
		{
			var hrefValue = nav3s[j].getElementsByTagName("a")[0].href;
			if (URL.search(hrefValue) != -1)
			{
				isfound=true;
				nav2s[i].style.display = "block";
				break;
			}
		}
		if (!isfound)
		{
			nav2s[i].style.display = "none";
		}
	}
	
	for(var i = 0, len = nav1s.length; i < len; i++){
   		nav1s[i].onclick=(function(i){
    			return function(){
     				if (nav2s[i].style.display == "block"){
					nav2s[i].style.display = "none";
				}
				else{
					nav2s[i].style.display = "block";
				}				       						
    			}
   		})(i)
  	}			     
})()
		
function GenerateContentByHead()
{
	var h2_list = $ ('.content h2');
	if (h2_list.length > 0)
      	{
       		var appendContent = '';
       		for (var i = 0; i < h2_list.length; i++)
       		{
       		  	var curH2Text = $(h2_list[i]).text();
       		  	var curH2Href = curH2Text.replace(/\s+/g, '-');
       		  	curH2Href = curH2Href.replace(/[`~!@#$^&*()%=|{}':;',\\[\\]<>]/g,"");
       		  	curH2Href = curH2Href.toLowerCase();
       		  	var curliContent = '<li><a href="#'+ curH2Href + '" class="otherLinkColour">' + curH2Text + '</a>';
       		  	var h3_list =  $(h2_list[i]).nextUntil(h2_list[i+1], "h3");
       		  	if (h3_list.length > 0)
       		  	{
       		  	  	curliContent += '<ul name="listLevel2">';
       		  	  	for (var j = 0; j < h3_list.length; j++)
       		  	  	{
       		  	  	  	var curH3Text = $(h3_list[j]).text();
       		  	  	  	var curH3Href = curH3Text.replace(/\s+/g, '-');
       		  	  	  	curH3Href = curH3Href.replace(/[`~!@#$^&*()%=|{}':;',\\[\\]<>]/g,"");
       		  	  	  	curH3Href = curH3Href.toLowerCase();
       		  	  	  	curliContent += '<li><a href="#'+ curH3Href + '" class="otherLinkColour">' + curH3Text + '</a></li>';
       		  	  	}
       		  	  	curliContent += '</ul>'
       		  	}
       		  	curliContent += '</li>'
       		  	appendContent += curliContent;
       		}
       		if($('#menuLsitContainer').length != 0 )
       		{
       			$($('#menuLsitContainer')[0]).prepend(appendContent);
       		}
     	 }
}
GenerateContentByHead();
