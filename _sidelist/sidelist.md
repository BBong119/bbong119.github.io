---
des: treefile
---


{%- assign needRemoveStr = page.url |  split: '/' | last | rstrip -%}
{%- assign currentPath = page.url | remove: needRemoveStr -%}

<ul>
    {%- include searchChildList.html path=currentPath|append:'1.html' ver="8.6" -%}
    <!-- {%- include searchChildList.html path="2.html" ver="8.6" -%}
    {%- include searchChildList.html path="3.html" ver="8.6" -%} -->
</ul>