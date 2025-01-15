---
id: development
title: Loading an Application for Development
---

import { Expandable } from "../src/components/expandable.js"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page details how to setup an extension as a browser extension. Working with browser extensions allows you to develop your extension on a local workstation before deploying to a production server.

The Verse Extension API is heavily influenced by the Chrome/Firefox Web Extension API. This is used to emulate *deploying* an application without needing to acutally deploy with Domino which streamlines development and testing.

## Prerequisites

There are a few things you will need to get started:  
1. Google Chrome or Firefox (Version 119 or greater)
2. A local copy of the Verse Developer Extension Demo **[source code](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples)**.

## Configuration

Some files will need to be configured and added to your application directory for successful deployment.

### The Manifest

The first file you will need to configure before deploying is the ```manifest.json```. The manifest is a uniform file, used for both Chrome and Firefox web add-ons, to specify some basic application properties such as the name, version, and URL(s) of where the extension should run. For more information take a look at the, ```manifest.json```, **[Browser Compatibility Documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json#Browser_compatibility).**

**Demo manifest.json:**
This demo manifest.json file can be found **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/blob/master/src/manifest.json)**.

```js
{
  "name": "HCL Verse Developer Browser Extension",
  "version": "1.1.0",
  "manifest_version": 3,
  "content_scripts": [ {
    "js": [ "contentscript.js"],
    "matches": [
      // These should match your organization's URL
      "https://server.com/*"
    ],
    "run_at": "document_start"
  }],
  "web_accessible_resources": [{
    "resources": [
      "page.js",
      "applications.json",
      "custom-directory-search/index.html",
      "custom-name-picker/index.html",
      "first-application/actions.html",
      "hook-before-send/index.html",
      "hook-before-send-disable/index.html",
      "live-text/sample1.html",
      "live-text/sample2.html",
      "modify-on-send/no-ui/index.html",
      "modify-on-send/with-ui/index.html",
      "third-party-chat-service/chat-service.html",
      "third-party-chat-service/meeting-service.html"
      // Add additional resources here any of your extensions
    ],
    "matches": [
      // These should match your organization's URL
      "https://server.com/*"
    ]
  }]
}
```

The ```matches``` property contains an array of URLs that tell the browser where the extension should run; more specifically, what pages the `contentscript.js` file should be injected into. **The field should be updated to match that of your own Verse URL**. The **\*** you see at the end of the example URLs mean *`matching 0 or more characters`*. It is recommended to add the star, otherwise, the extension will not run on pages of Verse where the URL does not match, exactly, one of the specified URLS. In addition, a comma should be added to the end of each URL, except for the last one.

The ```web_accessible_resources``` field is an array of paths and should include the ```applications.json``` and the ```page.js``` file. Other resources including images, HTML, CSS, and JavaScript can be specified in the array, making them accessible to the browser. You can read more about the `web_accessible_resources` property **[here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources).** Note that the demo manifest.json file has many items in the `web_accessible_resources` which are used by samples in the Verse Developer Extension Demo **[source code](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples)**. 

:::note
*Trailing commas in the `manifest.json` and `applications.json` can result in parsing errors, causing your application to fail to load.*
:::

### applications.json
The `applications.json` file is what contains the Verse application details. The default demo `applications.json` file in [demo sources](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/blob/master/src/applications.json) is detailed [here](https://opensource.hcltechsw.com/Verse-Extension-Documentation/docs/your-first-application/).

### The Scripts  
Note that there are two important scripts required to load the `applications.json`. For any application they are required, **unaltered**, in your project directory and included in the ```manifest.json``` exactly as shown in the above example. Their purpose is to mimic the initialization behavior of the **WidgetRegistry**, which is used to load applications in Verse.  

Scripts:  
  * **```content.js```**
  * **```page.js```**  

### Using Web Accessible Resources
For development purposes, additional application resources can be easily accessed from your web extension's `web_accessible_resources` by using `${extensionPath}` as the base url of the path. 

Before the `applications.json` is loaded into Verse, it is parsed and all instances of `${extensionPath}` are replaced with a fully-qualified URL. For this to work correctly, any resources accessed this way must be declared in the `web_accessible_resources` array of the `manifest.json`.

For example, see the use of `${extensionPath}` [here]((https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/blob/master/src/applications.json).

:::caution
When deploying for production use, your resources will need to be hosted via a web server and any instances of `${extensionPath}` need to manually be replaced with a fully-qualified URL of your server. otherwise, your resources will not load.
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

Note that after the extension is loaded into the browser, if you change any of the local files for the extension, you will need to refresh the extension in the browser and then refresh Verse to pull in the changes.


## Check it Out!
After following one of the above methods, reload Verse to test your new application. 

See the [Your First Application documentation](https://opensource.hcltechsw.com/Verse-Extension-Documentation/docs/your-first-application/) for info on what the [default application](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/blob/master/src/applications.json) does.

## Creating your own application
After getting familiar with the demo application, you can modify applications.json and manifest.json to create your own custom application.

:::info
To learn more about the different types of extensions that Verse has to offer head over the the **[Extension Documentation](../what-is-an-extension)**.
:::