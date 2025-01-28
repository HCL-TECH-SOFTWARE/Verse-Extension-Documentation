---
id: directory-search-extension
title: Directory Search Extension
---
import { Expandable } from "../src/components/expandable.js"

This example demonstrates how to use the **[Directory Search](../extension-points#directory-search)** extension to add new users to your default HCL Verse search directory.

## Add the Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/custom-directory-search)** along with a copy of the complete applications.json file.

```js
[
  {
    "name": "Directory Search Sample",
    "title": "Directory Search Sample",
    "description": "This is a sample of directory search extension",
    "extensions": [
      {
        "type": "com.ibm.verse.ext.directorySearch",
        "payload": {
          "url": "${extensionPath}/custom-directory-search/index.html",
          "enableBuiltinDirectorySearch": true
        }
      }
    ],
    "services": ["Verse"]
  }
]
```
#### Extension Properties
| Property    | Type |  Definition |
|-------------|:----:|-------------|
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| payload     | `object` | JSON object that specifies properties specific to the extension |
| url         | `string` | The fully-qualified URL of where your application is being served from |
| enableBuiltinDirectorySearch | `Boolean` | controls whether the built-in directory search in Verse is also used |


## Test it Out
<Expandable path="samples/custom-search-directory.gif" />

##  How it Works
The Directory Search extension allows you to customize the results of Verse's built-in search directory. In this application, the search **sample hcl** returns some custom results from the sample web application via cross-document messaging. Selecting **Search Directory** intiates a ping from Verse to the custom web application which, in return, sends a message that informs Verse it is ready to receive information. Verse will then send another message to the web application with the search string. As always, it is good practice to verify the `verseApiData.actionId`, in this case it is `com.ibm.verse.ext.action.directorySearch`.

Once the handshake is complete, the sample web application is responsible for sending relevant search results back to Verse. For the purposes of this demo, there are six hard-coded sample results that are sent in a postMessage to Verse in the format:
```js
var searched_message = {
  verseApiType: 'com.ibm.verse.ext.directorySearch.searchResults',
  returnCode: 0,
  result: searchResult,
};
```
where `searchResult` is an array of objects with properties:
```js
emailAddress: // email address (test@hcl.com)
notesAddress: // Notes name (John Smith/UK/HCL)
displayName: // Name to be displayed. Optional
forwardMailAddress: // Forward mail address. Optional
```

Take a look inside the `script.js` file in the `custom-directory-search` folder to get a better understanding of how the sample web application sends and receives data. Additionally, reference the **[Directory Search](../extension-points#directory-search)** extension documentation for more information.
