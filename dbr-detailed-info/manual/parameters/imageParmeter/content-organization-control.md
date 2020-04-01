# ImageParameter Object - Content Organization Control Parameters

 | Parameter Name | Description |
 | -------------- | ----------- | 
 | [`ImageParameter.Name`](#name) | The name of the ImageParameter object. |
 | [`ImageParameter.Description`](#description) | The description of the ImageParameter object. |
 | [`ImageParameter.FormatSpecificationNameArray`](#formatspecificationnamearray) | The names of the referenced FormatSpecification object(s). |
 | [`ImageParameter.RegionDefinitionNameArray`](#regiondefinitionnamearray) | The names of the referenced RegionDefinition object(s). |
 
 
 
## Name
The name of the ImageParameter object.   

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------- |
| ImageParameter | Name | ImageParameter.Name | *string* | It must be a mandatory setting value. |

**Remark**    
It must be a unique name.   

**Json Parameter Example**   
```
{
    ""Name"":""ImageParameter1""
}
```

 
## Description
The description of the ImageParameter object.

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------- |
| ImageParameter | Description | ImageParameter.Description | *string* | `""` |

**Json Parameter Example**   
```
{
    ""Description"":""This template demonstrate...""
}
```
  

## FormatSpecificationNameArray
The names of the referenced FormatSpecification object(s). 

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------- |
| ImageParameter | FormatSpecificationNameArray | ImageParameter.FormatSpecificationNameArray | *string Array* | `null` |

**Remark**   
An array item is a name of any available `FormatSpecifications`.    

**Json Parameter Example**   
```
{
    ""FormatSpecificationNameArray"":[
        ""FormatSpecification1"",
        ""FormatSpecification2""
    ]
}
```

## RegionDefinitionNameArray
The names of the referenced RegionDefinition object(s). 

| Json Object |	Json Parameter Name |	Json Parameter Key Name | Json Parameter Key Value Type |	Json Parameter Key Default Value |
| ----------- | ------------------- | ----------------------- | ----------------------------- | ------------------------------- |
| ImageParameter | RegionDefinitionNameArray | ImageParameter.RegionDefinitionNameArray | *string Array* | `null` |

**Remark**   
An array item is a name of any available `RegionDefinitions`.    

**Json Parameter Example**   
```
{
    ""RegionDefinitionNameArray"":[
        ""RegionDefinition1"",
        ""RegionDefinition2""
    ]
}
```
