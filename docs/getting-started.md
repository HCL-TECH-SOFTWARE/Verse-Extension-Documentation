---
id: getting-started
title: Getting Started
---

The following tutorials and exampes are here to give you a better understanding of the functionality that Verse Extensibility has to offer.

Download the samples source code from **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master)**

Most of the samples in these tutorials require additional resources that are in the Verse Developer Extension Demo [source code](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master). In order to install and test the samples, follow the instructions in the **[Loading an Application for Development](../development)**. 

For each extension's `Add the Extension` section, edit the applications.json file in the `src` directory next to manifest.json.

In the ```src/manifest.json``` file, configure the matches property to include your organization's domain. It may be useful to reference **[The Manifest](../development#the-manifest)** configuration section of the development docs.


**Things to Note:**

- Resources used by the application need to be added to the manifest.json file's ```web_accessible_resources``` array. The manifest.json file in the sources already has the resources added that are needed for the samples described here.
- When you are ready to deploy applications to production servers, they need to be hosted by a web server. The browser extensions that you are configuring here are only for development and test. 
- Notice that ```${extensionPath}``` is used at the base URL for all sample web applications in the examples in applications.json. Follow the **[Loading an Application for Development](../development)** to gain a better understanding around how this string template will be replaced with a fully-qualified URL when the application is loaded into the browser. ```${extensionPath}``` cannot be used when moving the application to production servers. ```${extensionPath}``` needs to manually be replaced with a fully-qualified URL of your server.

