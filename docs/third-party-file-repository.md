---
id: third-party-file-repository
title: Third Party File Repository
---
import { Expandable } from "../src/components/expandable.js"

This sample application adds demonstrates how to integrate a **[Third-Party File Repository](../extension-points#third-party-file-repository)** in the `Mail Compose` view of HCL Verse.

## What you will need to do
Set up the sample file repository and extension by following the instructions **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/blob/master/src/third-party-file-repo/README.md).

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

Be sure to read through the code in the third party file repository linked to at the top of this page and the **[Third-Party File Repository](../extension-points#third-party-file-repository)** extension documentation to learn more.