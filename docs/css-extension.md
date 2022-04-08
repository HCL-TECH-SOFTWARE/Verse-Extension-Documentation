---
id: css-extension
title: CSS Extension
---
import { Expandable } from "../src/components/expandable.js"

In this tutorial you will learn how to use the **[Custom CSS](../extension-points#css-support)** extension type. 

## Add the Extension

```js
[
 {
    "name": "CSS Extension Sample",
    "description": "The sample shows how to customize Verse UI",
    "title": "CSS Extension Sample",
    "extensions": [
      {
        "id": "unique-extension-id",
        "type": "com.ibm.verse.ext.css",
        "name": "CSS extension sample",
        "payload": {
          "css": ".ics-scbanner {background-color:green!important;} .seq-window .compose-button {font-size:16px!important;background-color:red!important;} .message-list-container .seq-msg-row {background-color:yellow!important;} .createEvent {display:none!important;}"
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
| name        | `string` | the name of the extension |
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| payload     | `object` | JSON object that specifies properties specific to the extension |
| css         | `string` | CSS styles in string format |

## Test it Out
<Expandable path="samples/custom-css.gif" />

##  How it Works
The **[Custom CSS](../extension-points#css-support)** extension can be used to override default styles and add custom styles to the HCL Verse UI. Valid CSS is read in as a string from the `css` attribute and applied to the page, injected as a stylesheet with the `id` attribute and specified styles.

Be diligent when adding CSS to the extension, styles may not load if there are syntax errors. For more information, reference the **[Custom CSS](../extension-points#css-support)** extension docs.