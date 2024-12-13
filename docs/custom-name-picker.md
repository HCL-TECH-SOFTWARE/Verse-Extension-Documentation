---
id: custom-name-picker
title: Custom Name Picker
---
import { Expandable } from "../src/components/expandable.js"

In this tutorial you will learn how to use the **[Name Picker](../extension-points#alternative-name-picker)** extension type. 

## Add the Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/custom-name-picker)** along with a copy of the complete applications.json file.

```js
[
  {
    "name": "Custom Name Picker",
    "title": "Custom Name Picker",
    "description": "Sample that shows how to add a custom name picker in mail compose view",
    "extensions": [
      {
        "type": "com.ibm.verse.ext.namePicker",
        "name": "Custom name picker in mail compose",
        "title": "Add Contact",
        "payload": {
          "url": "${extensionPath}/custom-name-picker/index.html"
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
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| name        | `string` | the name of the extension |
| title       | `string` | the label for the action as seen by the user |
| payload     | `object` | JSON object that specifies properties specific to the extension |
| url         | `string` | The fully-qualified URL of your application |

## Test it Out
<Expandable path="samples/custom-name-picker.gif" />

##  How it Works
This extension turns the `To` field, in the `Mail Compose` view into a link. Selecting the `To` field opens an embedded web application specified in the `url` property. In this example, the web application is `custom-name-picker/index.html` which renders a list of sample users that are defined in `custom-name-picker/ui.js`. 

When the `To` link is selected, `Verse` sends a message to the web application with the verseApiType `com.ibm.verse.ping.application.loaded`. When the application has loaded, it solidifies the *handshake* by sending back a message with verseApiType `com.ibm.verse.application.loaded`. Now that Verse knows the application is ready to receive data, the extension recieves a new message from Verse with the verseApiType `com.ibm.verse.action.clicked`. It is also good practice to verify the `actionId` which, for the Name Picker extension, is `com.ibm.verse.ext.action.namePicker`.

Each sample user in the custom name picker has an `Add` button that posts a message back to Verse with the verseApiType `com.ibm.verse.add.contact` and the data of the selected user. Verse uses that data to add the user's name to the `To` field. 

The custom name picker application in this tutorial only supports adding single users at a time to the `To` field. Please reference the **[Name Picker](../extension-points#alternative-name-picker)** extension point for information on adding multiple users at a time and how to add users to the `Cc` and `Bcc` fields.