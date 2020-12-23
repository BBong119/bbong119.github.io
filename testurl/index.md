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

	{%- if firstChar < "0" or firstChar > "9" -%}
		{%- assign curPageVersion = "last version" -%}
		{{ true }}
	{%- endif -%}
	{{ curPageVersion }}
	{{ firstChar }}
{%- endif-%}


{%- assign testurl = "/imagecore-viewer-module/thumbnail-v7.0.html" -%}

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

	{%- if firstChar < "0" or firstChar > "9" -%}
		{%- assign curPageVersion = "last version" -%}
		{{ true }}
	{%- endif -%}
	{{ curPageVersion }}
	{{ firstChar }}
{%- endif-%}