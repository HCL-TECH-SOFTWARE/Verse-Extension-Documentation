---
id: modify-on-send
title: Modify On Send
---

import { Expandable } from "../src/components/expandable.js"

## With an User Interface

This sample application adds one extension to the `applications.json` extension array, a **[Modify On Send](../extension-points#modify-on-send)** extension. You can use this extension to present the user with a UI as well as (optionally) modify the message before it is sent.

### Add the Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source [here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/with-ui) along with a copy of the complete applications.json file.

```js
[
  {
    "name": "ModifyOnSend",
    "title": "ModifyOnSend",
    "description": "This sample demonstrates using the ModifyOnSend extension point",
    "extensions": [
      {
        "name": "Modify on Send",
        "type": "com.ibm.verse.ext.modifyOnSend",
        "title": "Modify the contents of mail",
        "payload": {
          "location": "embedded",
          "pattern": "\\[(PROTECTED|PRIVATE|CLASSIFIED|SECRET)\\](\\s+|)",
          "url": "${extensionPath}/modify-on-send/with-ui/index.html"
        }
      }
    ],
    "services": [
      "Verse"
    ]
  }
];
```

#### Extension Properties

| Property |   Type   |                              Definition                              |
| :------: | :------: | :------------------------------------------------------------------: |
|   name   | `string` |                      The name of the extension                       |
|   type   | `string` | The extension point ([List of Extension Points](../extension-points)) |
|  title   | `string` |                      The title of the extension                      |
| location | `string` |       embedded - Indicates that the extension will render a UI       |
| pattern  | `string` |  A regex to limit what subject modifications the extension can make  |
|   url    | `string` |             The fully-qualified URL of your application              |

### Test it out

<Expandable path="samples/modify-on-send-with-ui.gif" />

### How it Works

This **[Modify On Send](../extension-points#modify-on-send)** extension example prompts the user to add a classificiation to the subject of each email being sent. Additionally, this extension appends a signature to the end of the message body. This can be useful to inject a disclaimer at the end of each message being sent.

The extension leverages the **[Mail Compose data api](../extension-data-api#mail-compose)**, Thus, the sample web application has access to the mail's data context. The script, `modify-on-send/with-ui/script.js`, handles the cross-document messaging _handshake_ to let Verse know that the extension is ready to receive data. When the sample web application receives a message event with the `verseApiType` of `com.ibm.verse.message.modify.mail` the data context is there as well. As always, it is good practice to confirm the `actionId` to ensure the data you recieve is coming from the correct action; the `actionId` is `com.ibm.verse.ext.action.modifyOnSend`.

For this tutorial, the user is presented with a simple UI that allows the user to pick from a list of classifications, or the user can choose to skip classifying the message. Once the user picks a selection, the selected classification is appended to the beginning of the original subject.

This extension specified a `pattern` which will restrict the modifications that can be made to the subject. There is one classification option that is not part of the acceptable pattern. If the user makes this selection, the message's subject will not be updated and the message will not be sent. If the user picks a valid classification, then the pattern check will indicate to Verse that the subject should be modified before the message is sent.

This extension also appends a simple sentence to the end of the mail message's body. This could be leveraged to automatically append a disclaimer statement at the end of all outgoing messages.

If the user selects to send the message without modifications, the message will be sent without any modifications having been made.

Since this is an embedded extension, the extension will not be automatically terminated after a period of time. This allows the end user ample time to interact with the UI being presented.

## Without an User Interface

This sample application adds one extension to the `applications.json` extension array, a **[Modify On Send](../extension-points#modify-on-send)** extension. You can use this extension to modify a message before it is sent, without presenting a UI to the end user..

View this extension's source **[here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/no-ui)**.

### Add the Extension
As described in **[Loading an Application for Development](../development)**, you should make these changes in the ```applications.json``` file located in the ```src``` directory of the downloaded Verse Developer Extension Demo source code. 

Note: you can view the extension's source [here](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/no-ui) along with a copy of the complete applications.json file.

```js
[
  {
    "name": "ModifyOnSend",
    "title": "ModifyOnSend",
    "description": "This sample demonstrates using the ModifyOnSend extension point",
    "extensions": [
      {
        "name": "Modify on Send",
        "type": "com.ibm.verse.ext.modifyOnSend",
        "title": "Modify the contents of mail",
        "payload": {
          "url": "${extensionPath}/modify-on-send/no-ui/index.html"
        }
      }
    ],
    "services": [
      "Verse"
    ]
  }
];
```

#### Extension Properties

| Property |   Type   |                              Definition                              |
| :------: | :------: | :------------------------------------------------------------------: |
|   name   | `string` |                      The name of the extension                       |
|   type   | `string` | The extension point ([List of Extension Points](../extension-points)) |
|  title   | `string` |                      The title of the extension                      |
|   url    | `string` |             The fully-qualified URL of your application              |

### Test it out

<Expandable path="samples/modify-on-send-no-ui.gif" />

### How it Works

This **[Modify On Send](../extension-points#modify-on-send)** extension example modifies the subject of each email being sent without presenting any UI to the end user. Additionally, this extension appends a signature to the end of the message body. This can be useful to inject a disclaimer at the end of each message being sent.

The extension leverages the **[Mail Compose data api](../extension-data-api#mail-compose)**. Thus, the sample web application has access to the mail's data context. The script, `modify-on-send/with-ui/script.js`, handles the cross-document messaging _handshake_ to let Verse know that the extension is ready to receive data. When the sample web application receives a message event with the `verseApiType` of `com.ibm.verse.message.modify.mail` the data context is there as well. As always, it is good practice to confirm the `actionId` to ensure the data you recieve is coming from the correct action; the `actionId` is `com.ibm.verse.ext.action.modifyOnSend`.

For this tutorial, the extension will ignore messages being sent with the string `"MODIFYONSEND"` in the subject. If the subject does not contain `"MODIFYONSEND"`, then the extension will modify the subject of the message to prepend `"[MODIFIED SUBJECT] "` to the original subject.

This extension does not specify a `pattern`. Therefore, the only restriction for the modified subject is that the modified subject must contain the original subject. This is due to the `modifiedSubjectMustContainOriginalSubject` property having a default value of `true`.

This extension also appends a simple sentence to the end of the mail message's body. This could be leveraged to automatically append a disclaimer statement at the end of all outgoing messages.

Once the extension has responded to Verse with `com.ibm.verse.message.modify.mail` or `com.ibm.verse.message.continue.send` verseApiType (depending on whether or not the original subject contained `MODIFYONSEND`), the extension will be terminated by Verse and modifications will be handled appropriately based on the properties of the extension.
