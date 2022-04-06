---
id: introduction
title: Introduction
---

Welcome to HCL Verse extensibility. Verse accepts custom applications, defined by a set of extension points, that allow you to add new capabilities and extend Verse to further meet your business needs.

It is important to note the difference between *applications* and *extensions* in the context of this documentation:

* ***Application***: you can think of an application as the container for extensions. There may be multiple applications registered in Verse and an application may hold one or more extensions. Applications are defined in a file, ```applications.json```, which contains an array of said applications.
* ***[Extensions](../what-is-an-extension)***: extensions provide the details of each desired customization: type, location, etc. and are defined within an application. Each application can have one or more extensions.

HCL Verse **[extensions](../what-is-an-extension)** are JSON objects which take a set of supported attributes that will expand Verse's capabilities. Extensions are composed of `extension points`, `paths/objects`, and `payloads`. Verse has a wide array of defined **[extension points](../extension-points)** that it supports. Each extension has different properties to control how it contributes to Verse's behavior and UI. 

Use the documentation and examples to get started.