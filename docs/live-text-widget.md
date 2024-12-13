---
id: live-text-widget
title: Live Text Widget
---
import { Expandable } from "../src/components/expandable.js"

This sample application demonstrates the **[Live Text](../extension-points#live-text)** widget extension which adds new functionality to text in the body of the `Mail Read` view.

## Add the Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/live-text)** along with a copy of the complete applications.json file.

```js
[
  {
    "name": "Live Text Widget Sample application",
    "title": "Live Text Widget Sample",
    "description": "The sample shows how to contribute a live text extension in Verse",
    "extensions": [
      {
        "name": "Live Text Widget Sample extension",
        "type": "com.ibm.verse.ext.liveText",
        "payload": {
          "text": "Live Text Widget Action",
          "href": "${extensionPath}/live-text/sample1.html?tel=${0}",
          "recognizer": "(([0-9]{3}))[-. ]?([0-9]{3})[-. ]?([0-9]{4})",
          "location": "window",
          "renderParams": {
            "width": "800",
            "height": "600"
          }
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
| name        | `string` | the name of the application |
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| title       | `string` | title of your extension |
| href        | `string` | a fully qualified URL |
| recognizer  | `string` | a JavaScript regular expression |
| location    | `string` | how the web application should open (**window|tab|embedded**) |
| renderParams | `object` | contains `width` and `height` properties  **only valid if the location’s value is window** |

## Test it Out
<Expandable path="samples/live-text.gif" />

##  How it Works
The `Live Text` extension will add an action to any matching text in the `Mail Read` view. As you may have gathered, the `recognizer` is for that of a 10-digit phone number that can be, optionally, separated by a hyphen, period, or space. If there are multiple phone numbers that match the format, each will have an action associated with it. Selecting the action will open to the url specified in the `href` property. In this sample, selecting the `Live Text Widget Action` opens the url in a new window with the specified height and width.

A unique feature of the `Live Text` extension is the ability to add the matching strings to the URL as query arguments. In the sample, this is accomplished using the format `${i}` where `i` corresponds to an index in the array returned by JavaScript's String `match` function.

:::info
Reference the offical **[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)** for more information on Javascript's String `match` property.
:::

Additionally, you can add more than one `Live Text` widget extension to an application. In the event that more than one `recognizer` matches the same string of text in the `Mail Read` view, there will be an action for each match in the dropdown action tray. Please reference the provided sample for multiple Live Text actions **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/live-text/multiple-actions)**.

Please reference the **[Live Text Extension Point](../extension-points#live-text)** documentation for more information on the Live Text widget extension.