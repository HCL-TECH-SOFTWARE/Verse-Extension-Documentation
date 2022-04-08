---
id: what-is-an-extension
title: What is a Verse Extension?
---
## General Extension Properties
* `{string}` **name** the name of your extension
* `{string}` **description** a description of what the extension does
* `{string}` **type** the extension point for the target extension (**[List of Extension Points](../extension-points)**)  
* `{string}` **path** a link to a specific location in the Verse UI (**[Supported Paths](../paths-and-objects#paths)**)  
* `{string}` **object** another way to link to a specific location in the Verse UI (**[Supported Objects](../paths-and-objects#objects)**)  
* `{object}` **payload** a JSON object that contains the supported attributes of the target extension (Ex. url, icon, text, etc.). 

**General Extension Example:**  

```js
......
"extensions": [
  {
    "name": "Sample Extension 1",
    "description": "What does your extension do",
    "type": "link.to.your.extension.point",
    "path": "link.to.place.in.Verse.UI",
    "object": "other.link.to.Verse.UI",
    "payload": {
      /**
       * Attributes specific to the extension type
       */
    }
  }
],
......
```

## [Paths and Objects](../paths-and-objects)
Paths and objects allows extension points to alter behavior and UI at specific locations within the container. Defined **paths** and **objects** offer a way for extensions to target specific locations within the Verse UI. **[List of supported paths and objests](../paths-and-objects)**

## [Extension Points](../extension-points)
Extension Points define the type of extension being contributed and each extension point has a set of required attributes. Take a look at the **[full list of extension points](../extension-points)** that HCL Verse has to offer.

## [Verse Data API](../extension-data-api)
Some HCL Verse extensions utilize **cross-document messaging** to enable communication between Verse and the extension's JavaScript code. The Verse Data API was created to enable such communication. If you plan on adding any extensions that use the Verse Data API, take a look at the **[Verse Data API](../extension-data-api)** documentation to gain a better understanding of how it works.