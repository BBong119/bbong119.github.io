---
breadcrumbText: Test
---


{%- for tmpFile in site.sidelist -%}
        {%- if tmpFile.url == "/sidelist/sidelist.html" -%}
                {{ tmpFile.content }}
        {%- break -%}
        {%- endif -%}
{%- endfor -%}

{{ page.repo }}
