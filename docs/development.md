---
id: development
title: Loading an Application for Development
---

import { Expandable } from "../src/components/expandable.js"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Verse Extension API is heavily influenced by the Chrome/Firefox Web Extension API. This is used to emulate *deploying* an application without needing to acutally deploy with Domino which streamlines development and testing. If you don't have an application ready, please reference the **[Getting Started](https://git.cwp.pnp-hcl.com/IBM-Verse/verse-developer-chrome-ext/tree/master)** tutorial.

## Prerequisites

There are a few things you will need to get started:  
1. Google Chrome
2. Your custom application or a local copy of the Verse Developer Extension Demo **[source code](https://git.cwp.pnp-hcl.com/IBM-Verse/verse-developer-chrome-ext/tree/master)**.
3. contentscript.js and page.js from **[here](https://git.cwp.pnp-hcl.com/IBM-Verse/verse-developer-chrome-ext/tree/master/src)** *(Only if you are using your custom application)*

## Configuration

Some files will need to be configured and added to your application directory for successful deployment.

### The Manifest

The first file you will need to configure before deploying is the ```manifest.json```. The manifest is a uniform file, used for both Chrome and Firefox web add-ons, to specify some basic application properties such as the name, version, and URL(s) of where the extension should run. For more information take a look at the, ```manifest.json```, **[Browser Compatibility Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#Browser_compatibility).**

**Demo manifest.json:**

```js
{
  "name": "HCL Verse Developer Browser Extension",
  "version": "1.0.0",
  // Leave this property alone
  "manifest_version": 2,
  // This attribute is browser specific to Firefox and only necessary for browser versions < v48.0
  "applications": { "gecko": {"id": "verse_dev_extension@hcl.com", "strict_min_version": "45.0"} },
  "content_scripts": [ {
    // Add the relative path to your contentscript.js file
    "js": [ "/scripts/contentscript.js"],
    "matches": [
      // These should match your organization's URL
      "https://mail.notes.na.collabserv.com/verse*",
      "https://mail.notes.ap.collabserv.com/verse*",
      "https://mail.notes.ce.collabserv.com/verse*"
    ],
    "run_at": "document_start"
  }],
  "web_accessible_resources": [
    "/scripts/page.js",
    "applications.json",
    // Add additional resources here
  ]
}
```

The ```matches``` property contains an array of URLs that tell the browser where the extension should run; more specifically, what pages the `contentscript.js` file should be injected into. **The field should be updated to match that of your own Verse URL**. The **\*** you see at the end of the example URLs mean *`matching 0 or more characters`*. It is recommended to add the star, otherwise, the extension will not run on pages of Verse where the URL does not match, exactly, one of the specified URLS. In addition, a comma should be added to the end of each URL, except for the last one.

:::note
*Trailing commas in the `manifest.json` and `applications.json` can result in parsing errors, causing your application to fail to load.*
:::

The ```web_accessible_resources``` field is an array of paths and should include the ```applications.json``` and the ```page.js``` file. Other resources including images, HTML, CSS, and JavaScript can be specified in the array, making them accessible to the browser. You can read more about the `web_accessible_resources` property **[here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources).**

### The Scripts  
There are two important scripts required to load the `applications.json`. They should be added, **unaltered**, to your project directory and included in the ```manifest.json``` exactly as shown in the above example. Their purpose is to mimic the initialization behavior of the **WidgetRegistry**, which is used to load applications in Verse.  

Scripts:  
  * **```content.js```**
  * **```page.js```**  

### Using Web Accessible Resources
For development purposes, additional application resources can be easily accessed from your web extension's `web_accessible_resources` by using `${extensionPath}` as the base url of the path. 

Before the `applications.json` is loaded into Verse, it is parsed and all instances of `${extensionPath}` are replaced with a fully-qualified URL. For this to work correctly, any resources accessed this way must be declared in the `web_accessible_resources` array of the `manifest.json`.

**Example Extension linking to Additional Resources:**

```js
"name": "Sample Widget Using an HTTP Served Resource",
"type": "com.ibm.verse.ext.widget",
"payload": {
  // Use the port number assigned by the web server application
  "url": "${extensionPath}/samples/actions.html",
  "features": [
    "core"
  ],
  "actions": [
    {
     //Other action properties Ex. 
    },
  ]
}
```
:::caution
When deploying for production use, your resources will need to be hosted via a web server and the `${extensionPath}` shortcut must be updated according otherwise, your resources will not load.
:::

## Installation
Now that the necessary files have been added and configured, you can load your extension into the browser using Chrome or Firefox.

### Installing to Chrome (Latest)
1. Navigate to ```chrome://extensions``` inside of Chrome
2. Make sure **Developer Mode** is toggled on, in the upper right corner of the browser
3. Select the **Load Unpacked** option
4. Select the root folder containing the ```manifest.json``` (in this example it is in the ```/src``` folder)

<Expandable path="deployment/load-to-chrome.gif" />

### Installing to Firefox (Latest)
1. Navigate to ```about:debugging``` and select *This Firefox* from the left panel
2. Select the **Load Temporary Add-on** option
3. Select the ```manifest.json``` file (***not its containing folder***)

<Expandable path="deployment/load-to-firefox.gif" />


## Check it Out!
After following one of the above methods, reload Verse to test your new application. 

<Expandable path="deployment/mail_compose_action.gif" />

*If you deployed your own custom application then look in the Verse UI for your own changes*. The demo application is a Widget extension type that adds a new action to a dropdown menu in the Mail Compose View and an action to back of the Verse people business card. Clicking on the application opens the specified HTML file that is served via the local web server. This widget, also, leverages the **Verse Data API** to receive useful Verse information in the browser (Ex. a business card action extension sends the person’s name, email, phone, etc.).

:::info
To learn more about the different types of extensions that Verse has to offer head over the the **[Extension Documentation](./what-is-an-extension)**.
:::