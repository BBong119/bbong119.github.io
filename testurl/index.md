{%- assign testurl = "/imagecore-viewer-module/thumbnail-viewer.html" -%}

{%- capture curPageVersion -%}
	{%- if testurl contains '-v' -%}
		{{ testurl |  split: '-v' | last | split: '/' | first | replace: '.html', '' | rstrip }}
	{%- else -%}
		latest version
	{%- endif -%}
{%- endcapture -%}


{{ curPageVersion }}
{{ "  slash  "}}


<!-- {%- if curPageVersion != "latest version" -%}
	{%- assign firstChar = "i" -%}
	{{ firstChar }}
	{%- if firstChar < 0 or fisrtChar > 9 -%}
        {{ true }}
		{%- assign curPageVersion = "latest version" -%}
    {%- else -%}
        {{ false }}
	{%- endif -%}
{%- endif -%} -->

