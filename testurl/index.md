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

{%- if curPageVersion != "last version" -%}
	{%- capture firstChar -%}
		{{ curPageVersion | truncate: 4 | replace:"...", "" }}
	{%- endcapture -%}
	{{ firstChar }}
{%- endif-%}
