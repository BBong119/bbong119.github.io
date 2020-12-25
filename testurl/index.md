{%- assign testurl = "/imagecore-viewer-module/test-v7.1/thumbnail-viewer.html" -%}

{%- assign curPageVersion = "latest Version" -%}

{%- if testurl contains '-v' -%}
	{%- assign candidateVersionStr = testurl |  split: '-v' -%}
	{%- for tmpStr in candidateVersionStr offset:1 -%}
		{%- assign tmpVer = tmpStr | split: '/' | first | replace: '.html', '' | rstrip -%}
		{%- capture firstChar -%}
			{{ tmpVer | truncate: 4 | replace:"...", "" }}
		{%- endcapture -%}
		{{ tmpVer }}
		{{ firstChar }}
		{{ "   /   "}}
		{%- if firstChar >= "0" and firstChar <= "9" -%}
			{%- assign curPageVersion = tmpVer -%}
			{%- break -%}
		{%- endif -%}
	{%- endfor -%}
{%- endif -%}



{{ curPageVersion }}
