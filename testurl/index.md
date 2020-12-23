{%- assign testurl = "/imagecore-viewer-module/thumbnail-viewer.html" -%}

{%- capture curPageVersion -%}
	{%- if testurl contains '-v' -%}
		{{ testurl |  split: '-v' | last | split: '/' | first | replace: '.html', '' | rstrip }}
	{%- else -%}
		latest version
	{%- endif -%}
{%- endcapture -%}


{{ curPageVersion }}
{{ curPageVersion | rstrip | truncate: 2 | replace:"…", "" }}
{{ "  slash  "}}

