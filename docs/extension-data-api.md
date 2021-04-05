---
id: extension-data-api
title: Extension Data API
---
:::caution
Adding extensions that use the Verse Data API can make Verse less secure. Follow the **[Secure Deployment Practices](best-security-practices)** guidelines before deploying your application to mitigate any vulnerabilities that may have been introduced.
:::

## Overview
The Verse Data API is what enables your external application to communicate with Verse. There are two ways Verse is able to send data to your application:
1. passing data as a URL query string parameter
2. using what’s known as a `context object`, it is passed in the message event object of the `window.postMessage` function

## Passing Data in a URL
Your application can receive data from Verse through URL query string parameters, which are added to the URL specified in the extension. There are two ways to format the URL query string so that it will be replaced with the desired data:
1. `${propertyName.property}`
2. `<propertyName.property>`

For example, to send the name of a user from a business card extension to your application, specify the following URL in your extension:  
```js
// ${propertyName.property} format
"https://<your-domain-here>/extension.html?username=${profile.name}"

// <propertyName.property> format
"https://<your-domain-here>/extension.html?username=<profile.name>"
```

The `profile.name` property is a variable that contains the user’s name. The valid data parameters are described in the **[Context Objects](#context-objects)** section. 

Your application is responsible for retrieving the URL query parameter with the desired data.

:::tip
**[Getting URL Parameters with JavaScript](https://www.sitepoint.com/get-url-parameters-with-javascript/)**
:::

## Passing Data w/Cross-Document Messaging
You can also use cross-document messaging instead to communicate with Verse. To handle messages from Verse, your web application needs to register an event listener by using:  
```js
window.addEventListener("message", function(event) {
  // handle message event code
});
```

### The Handshake
The data flow begins with a `handshake` interaction between your application and Verse. In your application code, you must send a `com.ibm.verse.application.loaded` message back to the Verse window to inform Verse that your web application is ready to receive data:

```js
window.addEventListener('message', function(evt) {
  var verseApiType = evt && evt.data && evt.data.verseApiType;
  if (verseApiType === 'com.ibm.verse.ping.application.loaded') {
    evt.source.postMessage({
      verseApiType: 'com.ibm.verse.application.loaded'
    }, evt.origin);
  }
}, false);
```
:::note
Extensions that use cross-document messaging must add the `features` property with the value `["core"]` to enable communication with Verse. Take a look at an example **[widget extension](extension-points#widget)** with this feature.
:::

### Parsing the Data
The `message` event received by your application contains a `data` object, which has an object called `verseApiData`.

If the event is triggered by a widget with multiple actions, you should verify the `actionId` property of the `verseApiData` object matches the expected, unique, action `id` to ensure that you only run your code for the correct message events.
```js
window.addEventListener("message", function(event) {
  if (event.data.verseApiData.actionId === "unique.action.id") {
    var verseData = event.data.verseApiData.context; // The context data
  }
}
```

The information that you need from Verse is stored in the `context` property which contains different data depending on where, in the Verse UI, it is called from.

## Context Data Objects
The information contained in the context object depends on the where the action is called. For example, adding a `mail.read` action extension sends information relating to the selected mail: `title`, `subject`, `body`, `etc`. Whereas, adding a `com.ibm.appreg.object.person` action extension sends the person’s `name`, `email`, `phone`, `etc.`.

There are three context objects: `Mail Compose`, `Mail Read`, and `Person`.

### Mail Compose
A context object with mail compose data is passed to actions placed in the Mail Compose view (`mail.compose`).

:::note
Note that `recipientBcc` and `attachments` properties are only available when they are enabled in permissions property of a **[Widget Action](extension-points#widget-actions)** or **[BeforeOnSend](extension-points#beforeonsend)** definition.
:::

#### Example Mail Compose Data
```js
{
  "attachments": [
    {
      "assignedName": "",
      "name": "",
      "size": "",
      "selected": "",
      "uploaded": "",
    }
  ],
  "body": "",
  "contextId": "",
  "id": "",
  "recipientBcc": [
    {
      "displayName": "",
      "emailAddress": ""
    }
  ],
  "recipientCC": [
    {
      "displayName": "",
      "emailAddress": ""
    }
  ],
  "recipientTo": [
    {
      "displayName": "",
      "emailAddress": ""
    }
  ],
  "subject": ""
}
```

### Mail Read
A context object with mail read data is passed to actions placed in the Mail Read view (`mail.read`).

:::note
Note that `recipientBcc` and `attachments` properties are only available when they are enabled in permissions property of a **[Widget Action](extension-points#widget-actions)** definition.
:::

#### Example Mail Read Data
```js
{
  "attachments": [
    {
      "assignedName": "",
      "name": "",
      "size": "",
      "selected": "",
      "uploaded": "",
    }
  ],
  "body": "",
  "contextId": "",
  "id": "",
  "isPreventCopy": "",
  "recipientBcc": [
    {
      "displayName": "",
      "emailAddress": ""
    }
  ],
  "recipientCC": [
    {
      "displayName": "",
      "emailAddress": ""
    }
  ],
  "recipientTo": [
    {
      "displayName": "",
      "emailAddress": ""
    }
  ],
  "sender": {
    "displayName": "",
    "emailAddress": ""
  },
  "subject": "",
  "timeSent": ""
}
```
### Person
A context object with person data is passed to actions placed on the back of the person business cards (`com.ibm.appreg.object.person`).
#### Example Person Data
```js
{
  "currentUser": {
    "company": "",
    "displayName": "",
    "fax": "",
    "id": "",
    "jobTitle": "",
    "mobilePhone": "",
    "name": {
      "displayName": "",
      "displayType": "",
      "familyName": "",
      "formatted": "",
      "givenName": "",
      "honorificPrefix": "",
      "honorificSuffix": "",
      "middleName": ""
    },
    "network": "",
    "photo": "",
    "photoUrl": "",
    "primaryAddress": "",
    "primaryEmail": "",
    "primaryPhone": "",
    "status": "",
    "tags": "",
    "website": ""
  },
  "profile": {
    "company": "",
    "displayName": "",
    "fax": "",
    "id": "",
    "jobTitle": "",
    "mobilePhone": "",
    "name": {
      "displayName": "",
      "displaytype": "",
      "familyName": "",
      "formatted": "",
      "givenName": "",
      "honorificPrefix": "",
      "honorificSuffix": "",
      "middleName": ""
    },
    "network": "",
    "orgId": "",
    "photo": "",
    "photoUrl": "",
    "primaryAddress": "",
    "primaryEmail": "",
    "primaryPhone": "",
    "status": "",
    "tags": "",
    "website": ""
  }
}
```