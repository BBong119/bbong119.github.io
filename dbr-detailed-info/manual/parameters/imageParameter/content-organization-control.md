---
layout: manual-parameter
id: parameter_image_content
sourceCodeUrl: /dbr-detailed-info/manual/parameters/imageParameter/content-organization-control.md
listFile: parametersList
---

# ImageParameter Object - Content Organization Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Name`](#name) | The name of the ImageParameter object. |
 | [`ImageParameter.Description`](#description) | The description of the ImageParameter object. |
 | [`ImageParameter.FormatSpecificationNameArray`](#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |
 | [`ImageParameter.RegionDefinitionNameArray`](#regiondefinitionnamearray) | The names of the referenced RegionDefinition object(s). |
 
 
---

## Name
The name of the ImageParameter object.  

**Remark**    
It must be a unique name.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | Name | *string* | It must be a mandatory setting value. |

**Json Parameter Example**   
```
{
    "Name":"ImageParameter1"
}
```



&nbsp;




## Description
The description of the ImageParameter object.

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | Description | *string* | "" |

**Json Parameter Example**   
```
{
    "Description":"This template demonstrate..."
}
```
  


&nbsp;




## FormatSpecificationNameArray
The names of the referenced FormatSpecification object(s). 

**Remark**   
An array item is a name of any available `FormatSpecifications`.   

### As Json Parameter

| Json Object |	Json Parameter Name | Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | FormatSpecificationNameArray | *string Array* | `null` |

   
**Json Parameter Example**   
```
{
    "FormatSpecificationNameArray":[
        "FormatSpecification1",
        "FormatSpecification2"
    ]
}
```



&nbsp;




## RegionDefinitionNameArray
The names of the referenced RegionDefinition object(s). 

**Remark**   
An array item is a name of any available `RegionDefinitions`.    

### As Json Parameter

| Json Object |	Json Parameter Name |	Value Type | Default Value |
| ----------- | ------------------- | ---------- | ------------- |
| ImageParameter | RegionDefinitionNameArray | *string Array* | `null` |


**Json Parameter Example**   
```
{
    "RegionDefinitionNameArray":[
        "RegionDefinition1",
        "RegionDefinition2"
    ]
}
```
