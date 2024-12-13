---
id: navigation-bar-extension
title: Navigation Bar Extension
---
import { Expandable } from "../src/components/expandable.js"

This sample application demonstrates how to use the , **[Navbar Delete](../extension-points#custom-widget)** and **[Navbar Add Link](../extension-points#custom-widget)** extensions to rebrand the HCL Verse Navbar.

## Add the Navbar Delete Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/navigation-bar-customization/branding)** along with a copy of the complete applications.json file.

```js
[
 {
    "name": "Navbar Extension Sample",
    "title": "Navbar Rebranding",
    "description": "Rebrand the HCL Verse Navbar",
    "extensions": [
      {
        "name": "Delete the default Org link",
        "type": "com.ibm.action.delete",
        "path": ".org",
        "description": "This sample shows how to delete the default organization link"
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
| name        | `string` | the name of the extension |
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| path        | `string` | the path must be a valid CSS selector within the Verse UI |
| description | `string` | description of the extension |


## Add the Navbar Add Link Extensions
```js
[
 {
    "name": "Navbar Extension Sample",
    "title": "Navbar Rebranding",
    "description": "Rebrand the HCL Verse Navbar",
    "extensions": [
      {
        "name": "Delete the default Org link",
        "type": "com.ibm.action.delete",
        "path": ".org",
        "description": "This sample shows how to delete the default organization link"
      },
      // highlight-start
      {
        "name": "New Company Name",
        "type": "com.ibm.action.link",
        "path": "com.ibm.navbar.order.1500",
        "title": "New Company Name",
        "description": "This sample shows how to add a new organization link",
        "payload": {
          "link": "https://www.hcltechsw.com/",
          "title": "New Company Name",
          "window_features": "target=_blank"
        }
      },
      {
        "name": "New Company logo",
        "type": "com.ibm.action.link",
        "title": "New Company Name",
        "path": "com.ibm.navbar.order.1000",
        "description": "This sample shows how to add a new organization logo",
        "payload": {
          "link": "https://www.hcltechsw.com/",
          "title": "New Company Name",
          "icon": "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0nY2hhdC1pbWFnZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSd3aGl0ZScgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBjbGFzcz0nY2hhdC1pbWFnZS1vdXRsaW5lJyBkPSdNMTAgMEM1LjYgMCAyIDMuNiAyIDhjMCA0LjEgMy4xIDcuNCA3IDcuOVYyMGw2LjgtNi41QzE3LjEgMTIuMSAxOCAxMC4xIDE4IDhjMC00LjQtMy42LTgtOC04em01IDEyLjlsLTUgNC43VjE1Yy0zLjkgMC03LTMuMS03LTdzMy4xLTcgNy03IDcgMy4xIDcgN2MwIDEuOS0uOCAzLjYtMiA0Ljl6Jy8+PC9zdmc+",
          "window_features": "target=_blank"
        }
      }
      // highlight-end
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
| name        | `string` | the name of the extension |
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| path        | `string` | the location of the link on the navbar in the format: com.ibm.navbar.order.orderNumber |
| description | `string` | description of the extension |
| title       | `string` | the name used for the new link (if no icon is provided) |
| link        | `string` | Absolute link to new website |
| icon        | `string` | An icon to use when rendering the link (instead of the title text) (The only format supported for this property is a base64-encoded data-uri) |
| window_features |`string` | Additional (optional) attributes to cause link to open in new window |


## Test it Out
<Expandable path="samples/navbar-branding.gif" />

##  How it Works
A combination of the Navbar Extensions are used to rebrand the default HCL Verse navbar. The **[Delete Navbar Components](../extension-points#delete-navbar-components)** extension is used first to remove the default organization logo. The logo is targeted via a CSS **class** selector, `.org`. Additionally, two **[New Link](../extension-points#add-new-links)** extension points are added to further customize the navbar. The first link adds a new company logo to the start of the navbar by targeting a CSS order property of `1000`. Based on the current **[HCL Verse Navbar Orders](../extension-points#hcl-verse-navbar-orders)** table, this places the new link as the first element on the left of the navbar. The second extension adds a new link with the title *New Company Name*. This link is added at order `1500` which, in this case, will be displayed right after the new logo.

For more information on the default ordering of the HCL Verse navbar please reference the **[Navbar Extension](../extension-points#navbar-extension-points)** documentation.

For additional navigation bar extension samples, go **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/navigation-bar-customization/add-delete-link)** and **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/navigation-bar-customization/cascading-menu)**.