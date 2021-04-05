---
id: your-first-application
title: Your First Application
---
import { Expandable } from "../src/components/expandable.js"

This section will walk you through writing your first HCL Verse extensibility application. You will learn how to add functionality to the Verse `Business Card`, `Mail Compose` and `Mail Read` views. Additionally, this application will demonstrate how your web application can recieve the different Verse data context types. After you have the configured `applications.json`, it is recommended to load the sample application by following the **[Development docs](./development)** to view your application running in Verse.


## Configure the `applications.json`
An application serves as the container to your extensions and you can add one or more extensions to the `applications.json`. All applications should be stored in a file ```applications.json``` with the following structure:

```js
[
  {
    "name": "Sample Application",
    "title": "Getting Started",
    "description": "A sample app to extend Verse",
    "extensions": [],
    "services": ["Verse"]
  }
]
```
#### Application Properties
| Property    | Type | Definition |
|-------------|:----:|------------|
| name        | `string` | the name of the application (must be unique) |
| title       | `string` | the title of your application |
| description | `string` | a description of what the application should do |
| extensions  | `Array<Extension>` | an array of extension definitions ([What is an Extension?](./what-is-an-extension))|
| services    | `Array<String>`| an array of services the extension is deployed to. **All HCL Verse extensions should include "Verse" as a supported service** |

## Add the Extension
This sample application adds one extension to the `applications.json` extension array, a **[Custom Widget](./extension-points#custom-widget)** extension. Custom Widget extensions take widget actions, which define your desired changes.

```js
[
  {
    "name": "Sample Application",
    "title": "Getting Started",
    "description": "A sample app to extend Verse",
    "services": ["Verse"],
    // highlight-start
    "extensions": [
      {
        "name": "Person Action Sample",
        "type": "com.ibm.verse.ext.widget",
        "payload": {
          "url": "${extensionPath}/samples/actions.html",
          "features": [
            "core"
          ],
          "actions": []
        }
      }
    ]
    // highlight-end
  }
]
```
#### Extension Properties
| Property    | Type |  Definition |
|-------------|:----:|-------------|
| name        | `string` | the name of the application |
| type        | `string` | the extension point  ([List of Extension Points](./extension-points)) |
| payload     | `object` | JSON object that specifies properties specific to the extension |
| url         | `string` | The fully-qualified URL of where your application is being served from |
| features    | `Array<String>` | an array of features to enable. Adding `core` enables the [Verse Data API](./extension-data-api) |
| actions     | `Array<WidgetAction>` | an array of [Custom Widget Actions](./extension-points#widget-actions) |

:::tip
Notice that `${extensionPath}` is used as the base URL to `samples/actions.html`. Follow the **[Development docs](./development)** to gain a better understanding around how this string template will be replaced with a fully-qualified URL when the application is loaded into the broswer. Extensions that use external code to render a widget will need to host the resources from a web server.
:::

## Add the Widget Actions
The `Custom Widget` extension `actions` array accepts one or more **[Widget Actions](./extension-points#widget-actions)**, which are responsible for defining the changes you want to contribute to Verse. Three widget actions are added in this sample application: `person`, `mail compose`, and `mail read`. Each action adds a link to its respective location in the Verse UI that opens to `actions.html`.
```js
[
  {
    "name": "Sample Application",
    "title": "Getting Started",
    "description": "A sample app to extend Verse",
    "services": ["Verse"],
    "extensions": [
      {
        "name": "Person Action Sample",
        "type": "com.ibm.verse.ext.widget",
        "payload": {
          "url": "${extensionPath}/samples/actions.html",
          "features": [
            "core"
          ],
          // highlight-start
          "actions": [
            {
              "id": "com.ibm.verse.ext.person.action",
              "object": "com.ibm.appreg.object.person",
              "text": "Person Action",
              "title": "Person Action",
              "location": "window",
              "renderParams": {
                "width": "900",
                "height": "500"
              }
            },
            {
              "id": "com.ibm.verse.ext.mail.compose",
              "path": "mail.compose",
              "text": "Mail Compose Action",
              "title": "Mail Compost Action",
              "location": "tab"
            },
            {
              "id": "com.ibm.verse.ext.mail.read",
              "path": "mail.read",
              "text": "Mail Read Action",
              "title": "Mail Read Action",
              "location": "embedded"
            }
          ]
          // highlight-end
        }
      }
    ]
  }
]
```
#### Widget Action Properties
| Property    | Type |  Definition |
|-------------|:----:|-------------|
| id           | `string` | a unique id |
| path         | `string` | location in Verse to add the action to ([List of Paths](./paths-and-objects#paths)) |
| object       | `string` | another way to specify location in Verse to add action to ([List of Objects](./paths-and-objects#paths)) |
| text         | `string` | Text used to display the new link in the Verse UI |
| title        | `string` | *optional* title of action, will be used as display text if `text` is not specified |
| location     | `string` | where the web application should open (**window|tab|embedded**) |
| renderParams | `object` | contains `width` and `height` properties  **only valid if the location’s value is window** |


## Test it Out
<Expandable path="samples/first-application.gif" />

##  How it Works
As you can see in your own browser or from the demo above, clicking on an added action opens the sample web application. This sample application defines one extension, a Custom Widget, and has three widget actions. The actions are responsible for specifying the location and behavior of the web application set out by the `url` property, which displays the data passed from Verse in `actions.html`.

Each widget action has a `path` or an `object` and a `location`. The `path` and `object` attributes target an area in the Verse UI to add the action to. An path **OR** an object must be defined, but not both. The `location` attribute explains how the sample web application should open: in a new `window`, `tab`, or `embedded` frame. If the `location` is set to `window`, an additional property, `renderParams`, is supported to describe the **height** and **width** of the new window.

You should notice how different data is available depending on the location of the Widget in the Verse UI. If you haven't already, open the `actions.html` and `actions.js` files and read through them. The sample application runs, `actions.js`, a script that listens for a `message` event from Verse. Since the extension specifies `core` in the `features` array, the event object contains an object called `data` that has the follow structure:
```js

{
  "verseApiType": "com.ibm.verse.ping.application.loaded"
}
{
  "verseApiType": "com.ibm.verse.action.clicked",
  "verseApiData": {
    // Unique id of the action selected
    "actionId": "com.ibm.verse.ext.mail.read",
    // Verse Context Data respective to the location of the selected action
    "context": { // data.... }
  }
}
```
:::tip
Check out the different **[data objects](./extension-data-api#context-data-objects)** supported in HCL Verse.
:::