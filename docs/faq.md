---
id: faq
title: FAQ
---

### How do I load my application in Verse?

#### For Testing & Development
It can be useful to test your application locally before deploying for production use. The **[Deploying for Development](../development)** docs will help you get started.

#### Deploy for Production
If your application is ready for production use then, use the **[Domino Server Deployment](../domino-server-deployment)** documentation to deploy.

### Why won't my application load?

#### Did you add your organization's Verse domain to the manifest.json
The manifest.json requires a `matches` attribute that takes an array of URL strings. For the extension to run on Verse, you must add your organizations domain name to the array. 

#### Check your application for trailing commas and/or syntax errors
The `manifest.json` and `applications.json` will not be parsed correctly if there are trailing commas or other syntax errors. Check your browser's console log to check for error messages. If you are testing your application locally, check the loaded extension for any errors.

#### Are your resources being served and linked to correctly
If your application is using resources served via a web-server, be sure the web server is working properly and that the specified URL is correct.

### Why doesn't my application open in a new window?

#### Did you put the correct `window_features` attribute on the extension
Make sure you add the `target=_blank` attribute to force links to open in a new Window.

#### Are you using a Mac with your browser in `fullscreen`
There is a known issue on Macs where, when the browser is open in **fullscreen**, new windows are forced to open in a new tab instead.
