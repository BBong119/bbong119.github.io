---
breadcrumbText: Test
---

{{ site.include_array }}
{%- for tmpVal in site.include_array -%}
    {{ tmpVal}}
{%- endfor -%}

{%- include searchChildList.html ver="latest version" curPath="" targetRelativePath="/sidelist/sidelist.html" -%}

{{ page.repo }}
