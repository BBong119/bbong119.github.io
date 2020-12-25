{%- assign testurl = "/imagecore-viewer-module/thumbnail-viewer-v7.1.html" -%}

{%- assign curPageVersion = "latest Version" -%}

{%- if testurl contains '-v' -%}
	{%- assign candidateVersionStr = testurl |  split: '-v' -%}
	{%- for tmpStr in candidateVersionStr offset:1 -%}
		{%- assign tmpStr = tmpStr | split: '/' | first | replace: '.html', '' | rstrip -%}
		{%- capture firstChar -%}
			{{ tmpStr | truncate: 4 | replace:"...", "" }}
		{%- endcapture -%}
		{{ tmpStr }} 
		{{ "   " }}
		{{ firstChar }}
		{{ "   /   "}}
		{%- if firstChar >= "0" and firstChar <= "9" -%}
			{%- assign curPageVersion = tmpStr -%}
			{%- break -%}
		{%- endif -%}
	{%- endfor -%}
{%- endif -%}



{{ curPageVersion }}
