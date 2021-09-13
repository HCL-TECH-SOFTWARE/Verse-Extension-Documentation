---
id: getting-started
title: Getting Started
---

The following tutorials and exampes are here to give you a better understanding of the functionality that Verse Extensibility has to offer.

You can download the example directory ahead of time **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src)**

**Things to Note:**

- Notice that `${extensionPath}` is used at the base URL for all sample web applications in the examples. Follow the **[Development Docs](./development)** to gain a better understanding around how this string template will be replaced with a fully-qualified URL when the application is loaded into the broswer.
- Configure the `matches` property in the `manifest.json` to include your organization's domain. It may be useful to reference **[The Manifest](./development#the-manifest)** configuration section of the development docs.
- Resources used by the application need to be added to the `manifest.json`'s `web_accessible_resources` array
- Production ready applications will need to be served from a real web server
