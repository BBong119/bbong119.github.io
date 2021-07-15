---
breadcrumbText: Test
---

{%- for tmpVal in site.include_array -%}
    {{ "23" }}
    {{ tmpVal}}
{%- endfor -%}

{%- include searchChildList.html ver="latest version" curPath="" targetRelativePath="/sidelist/sidelist.html" -%}

{{ page.repo }}
