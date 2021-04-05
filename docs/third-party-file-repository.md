---
id: third-party-file-repository
title: Third Party File Repository
---
import { Expandable } from "../src/components/expandable.js"

This sample application adds demonstrates how to integrate a **[Third-Party File Repository](./extension-points#third-party-file-repository)** in the `Mail Compose` view of HCL Verse.

## What you will need
Download the Third Party File Repo Integration demo from **[here](https://github.com/ibmverse/third-party-file-repo-integration)** and follow the setup instructions.

## Add the Extension

```js
[
  {
    "name": "Third-party file repository integration",
    "title": "Third-party file repository integration",
    "description": "Integrate third-party file repository in Verse",
    "extensions": [
      {
        "type": "com.ibm.verse.ext.file",
        "name": "Third-party file repository extension",
        "payload": {
          "text": "Third-Party File Repository",
          "url": "https://<third-party-file-repo>.com",
          "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGpJREFUOE+1k4EKgDAIRC36b/3z6kLJFUpOejAYQ293si3MvFMREdHdCQQqoN73rKpTxlxMC4BLpBrBg95NxV74QQ1De/LFQVSD89YMQBgBmPUsQuoAjbYi/ovgb80ctN9BO0JbYOo73xAdbuoHJPh854UAAAAASUVORK5CYII=",
          "renderParams": {
            "width": "450",
            "height": "230"
          }
        }
      }
    ],
    "services": [
      "Verse"
    ]
  }
]
```
#### Extension Properties
| Property    | Type |  Definition |
|-------------|:----:|-------------|
| type        | `string` | the extension point  ([List of Extension Points](./extension-points)) |
| name        | `string` | the name of the application |
| payload     | `object` | JSON object that specifies properties specific to the extension |
| text        | `string` | the display text of the link in the UI |
| icon        | `string` | a base64 encoded data uri |
| url         | `string` | a fully-qualified URL |
| renderParams | `object` | contains `width` and `height` properties  **only valid if the location’s value is window** |

## Test it Out
<Expandable path="samples/third_party_file_repository_integration.gif" />

##  How it Works
The `Third Party File Repository` extension adds the new icon to the action toolbar in the `Mail Compose` view. In this example, the selected action will open the web applcation in a new window of the specified width and height.

How does HCL Verse recieve the links to the selected files? As is usual for handling cross-document messaging, it starts with the *handshake* interaction between Verse and the web application. For Verse to successfully add new file links to the body of an email, selected links are sent to Verse as a postMessage with the following structure:
```js
var msg = {
  verseApiType: 'com.ibm.verse.ext.file.add.links',
  links: selected,
  closeWindow: true
};
```
Where `links` is an array of objects each with a `url` and `name` property. The open web application will close when the message is posted due to the `closeWindow: true` property.

Be sure to read through the code in the third party file repository linked to at the top of this page and the **[Third-Party File Repository](./extension-points#third-party-file-repository)** extension documentation to learn more.