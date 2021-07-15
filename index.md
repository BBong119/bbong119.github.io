---
breadcrumbText: Test
---
{%- for tP in site.html_pages -%}
    {{ tp.url }}
{%- endfor -%}

{%- include searchChildList.html ver="10000" curPath="" targetRelativePath="sidelist/sidelist.html" -%}

{{ page.repo }}
