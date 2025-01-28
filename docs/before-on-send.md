---
id: hook-before-send
title: Hook Before Send
---
import { Expandable } from "../src/components/expandable.js"

This sample application adds one extension to the `applications.json` extension array, a **[BeforeOnSend](../extension-points#beforeonsend)** extension. You can use this extension to perform logic on an email and prevent it from being sent.

## Add the Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/hook-before-send)** along with a copy of the complete applications.json file.

```js
[
  {
    "name": "Hook Before Send",
    "title": "Hook Before Send Sample",
    "description": "Sample that shows how to check for a credit card number before sending",
    "extensions": [
      {
        "type": "com.ibm.verse.ext.beforeOnSend",
        "name": "Hook Before Send Extension",
        "title": "Credit Card Checker",
        "payload": {
          "url": "${extensionPath}/hook-before-send/index.html"
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
| url         | `string` | The fully-qualified URL of your application |


## Test it Out
<Expandable path="samples/before-on-send.gif" />

##  How it Works
This **[BeforeOnSend](../extension-points#beforeonsend)** extension example adds some verification logic to the send email action in HCL Verse. As you can see in the demo above, sending an email that contains a credit card number is prevented and requires user confirmation to continue. 

The extension also leverages the `VerseDataAPI` thus, the sample web application has access to the **[Mail Compose](../extension-data-api#mail-compose)** data context: `recipients`, `subject`, `body`, etc. The script, `hook-before-send/script.js`, handles the cross-document messaging *handshake* to let Verse know it is ready to receive data. When the sample web application receives a message event with the `verseApiType` of `com.ibm.verse.action.clicked` the data context is there as well. As always, it is good practice to confirm the `actionId` to ensure the data you recieve is coming from the correct action; the `actionId` is `com.ibm.verse.ext.action.beforeOnSend`.

For this tutorial, the `body` attribute of the `verseDataAPI` is used to search for a *credit card-like* string inside the body of the email. If no matches are found, a message is sent back to Verse with the `verseApiType`, `com.ibm.verse.message.continue.send`. Otherwise, the `index.html` page is displayed as an embedded frame within the `Mail Compose` view with an appropriate warning message. The user has the option to revise the email or can bypass the warning and send the email anyways. 

There is the option to disable sending completely by setting `disableSend: true` in the `payload`. Please reference the **[BeforeOnSend](../extension-points#beforeonsend)** extension documentation for more information Please reference the provided sample that implements `disableSend: true` **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/hook-before-send-disable)**.