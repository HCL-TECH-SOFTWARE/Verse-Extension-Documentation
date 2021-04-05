---
id: paths-and-objects
title: Paths and Objects
---

Extensions can be placed in different locations within the UI. It is worth noting that some extension types are designed for a specific location in the Verse UI and thus, do not accept a `path` or `object` property.  

:::note
Extensions should use a path OR an object property, not both
:::

## Paths
Paths are one of the ways extensions can specify a location within Verse. The supported paths are:

* `mail.read` - allows application developers to contribute an action under more actions tray when **viewing** an existing email. View the **[Mail Read Data Object](extension-data-api#mail-read)** for more information on the data accessible through this path.
* `mail.compose` - allows application developers to contribute an action under more actions tray when **composing** a new email. View the **[Mail Compose Data Object](extension-data-api#mail-compose)** for more information on the data accessible through this path.
## Objects
Another way for a container to allow extensions to target locations is by `object`. Additionally, The locator property can be used in conjunction with an `object` to hint at a more specific location within the Verse UI. HCL Verse supports the following objects:

* `com.ibm.appreg.object.person` - allows application developers to contribute an action to the People Business card. View the **[Person Data Object](extension-data-api#person)** for more information on the data accessible through this object.
    > **Supported Locators:**  
    The supported locators can be used to override the default Sametime meeting and chat actions, including the chat shortcut found on the People Bubble.
    * `chat` - add an icon in place of the default sametime chat action in the bizcard and people bubble (**Sametime needs to be diabled**)
    * `meeting`- add an icon in place of the default sametime meeting action in the bizcard (**Sametime needs to be diabled**)
