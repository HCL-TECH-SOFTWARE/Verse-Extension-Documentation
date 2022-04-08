---
id: extension-points
title: Extension Points
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`Extension points` are assigned to an extensions `type` property; **every extension will need to specify a `type`**. 
All of the extension points that HCL Verse supports can be found below, along with examples.

## General Extension Points

### Simple Link
**Extension Point:** `com.ibm.appreg.ext.simpleLink`

The Simple Link extension adds a clickable URL link to the HCL Verse UI. 

#### Properties:  
> **Required:**  
* `{string}` **text** The display text for the link in the UI
* `{string}` **href** The absolute link location (URL)
* `{string}` **path** The path identifies where the action is contributed
* `{string}` **object** The object identifies where the action is contributed

> **Optional:**  
* `{string}` **icon** An icon use when rendering the link. If an icon is used and supported it will override the display text. *(The only format supported for this property is a base64-encoded data-uri)*
* `{string}` **alt** Alt text for the link.

#### Example Simple Link
```js
{
  "type": "com.ibm.appreg.ext.simpleLink",
  "object": "com.ibm.appreg.object.person",
  "payload": {
    "text": "Click this sample link!",
    "href": "https://sample.com/simple-link-target.html",
    "icon": "data:image/png;base64,..."  
  }
}
```
In the example, a clickable link will be added to the back of the people business card.  

### Templated Link
**Extension Point:** `com.ibm.appreg.ext.templatedLink`

The Templated Link extension is similar to Simple Link and adds a clickable URL link to the HCL Verse UI. However, it also adds the ability to configure the extension to receive data from Verse within the URL by defining a template variable in the `href` attribute.

To add a template variable to the URL, the text should be added in the following format: **${property}**. When the link is selected by a user, the variable(s) will be replaced with the corresponding value, passed with respect to the `path`/`object`. For example, a templated link placed on the back of the Person Business card will have a different data context than a templated link inside of the Mail Compose View.  

:::info
For more in depth information on the different data contexts take a look at the Verse **[Extension Data API](../extension-data-api)** docs.
:::

#### Properties:
> **Required:**  
* `{string}` **text** The text for the link in the UI
* `{string}` **href** The absolute link location (URL)
* `{string}` **path** The path identifies where the action is contributed
* `{string}` **object** The object identifies where the action is contributed

> **Optional:**  
* `{string}` **icon** An icon to use when rendering the link *(The only format supported for this property is a base64-encoded data-uri)*
* `{string}` **alt** Alt text for the link.

#### Example Templated Link
```js
{
  "type": "com.ibm.appreg.ext.templatedLink",
  "object": "com.ibm.appreg.object.person",
  "payload": {
    "text": "Look up the user's work email",
    "href": "https://sample.com/simple-link-target.html?user=${emails.work}",
    "icon": "data:image/png;base64,..."
  }
}
```
This example adds a link, with the text *Look up the user's work email*, to the back of the Person Business card. When the user selects the link, a new tab will open to the URL specified in the `href` and any template variables will be replaced with the associated data. In this case, the new link would look something like:  
```
https://sample.com/simple-link-target.html?user=verse.user%40domain.com
```
The values from the query string can then be used to enhance the functionality of your web-based extension.

## Widget Extensions
A `Widget` is a type of extension point that consumes **[Widget Actions](../extension-points#widget-actions)** that will be contributed to the Verse UI. A widget can have one or more actions and the `url` field of the widget will apply to **all** of that widget's actions. Widget Actions cannot be added directly to the `applications.json` *extension* array, it must be contained in a Widget extension.

### Custom Widget
**Extension Point:** `com.ibm.verse.ext.widget`


#### Properties:
> **Required:**
* `{string}` **url** The widget’s url, when the action in the widget is clicked the widget will open the web application in the manner specified by the `location` property of the widget action.
* `{array}` **actions** An array of Widget Actions. This property identifies the contributed Widget Actions by this widget.

> **Optional:**
* `{array}` **features** An array of strings. This property is used to specify what features, provided by the container are used by this application. Each feature maps to a set of APIs provided by the container. **There is only one supported feature:**  
  * **core** - indicates that the widget needs to communicate with the Verse page via cross-document messaging

#### Example Widget
```js
{
  "type": "com.ibm.verse.ext.widget",
  "payload": {
    "url": "https://sample.com/widget.html",
    // make the Verse data API accessible via cross-document messaging
    "features": ["core"],
    "actions": [
      // Add your widget actions here
    ]
  }
}
```
This example widget specifies the URL of the web application that will open when one of the actions is triggered. It also enables the Verse Data API to be available via cross-document messaging.

#### Widget Actions
Widget Actions are the UI components that will be added to Verse. They cannot be used directly as extensions; they should, instead, be added to a widget extension's `actions` array. Widget Actions are objects with their own set of properties.

#### Properties
> **Required:**  
* `{string}` **id** A unique id for the action
* `{string}` **text** The text used in the Verse UI
* `{string}` **path** The **[path](../paths-and-objects#paths)** identifies where the action is contributed
* `{string}` **object** The **[object](../paths-and-objects#objects)** identifies where the action is contributed

:::note
An action must contain either a **path** OR an **object** property.
:::

> **Optional:**  
* `{string}` **icon** An icon to use when rendering the link *(The only format supported for this property is a base64-encoded data-uri)*
* `{string}` **alt** Alt text for the action.
* `{object}` **location** This property is used to specify where to render the widget. The supported values are:  
  * **window** - the widget will be opened in a new window. We can use the `renderParams` property to specify the new window’s size
  * **tab** - the widget will open in a new tab
  * **embedded** - the widget will open inside of the component specified by path. This value is supported for both `mail.read` and `mail.compose` actions
* `{object}` **renderParams** This property is used to specify the window size when the application is opened in a new window. The renderParams property contains width and height properties. **This property is only valid if the location’s value is window.**
* `{array}` **permissions** This property controls which sensitive information will be exposed in verseApiData context property. The supported values are:
  * **bcc** - The recipientBcc property will be exposed in verseApiData context property if action path is `mail.read` or `mail.compose`
  * **attachment** - The attachments property will be exposed in verseDataApi context object if action path is `mail.read` or `mail.compose`.

#### Example Widget Action
```js
"actions": [
  {
    "id": "com.ibm.verse.widget.action.mailCompose", // Unique id
    "path": "mail.compose",
    "text": "Click this action",
    "icon": "data:image/png;base64,...",
    "location": "window",
    "renderParams": {
      "width": "800",
      "height": "600"
    },
    "permissions": ["bcc", "attachment"]
  },
  // Other actions
]
```
This example widget action contributes a button to the Mail Compose view options dropdown menu. When selected web application specified in the corresponding widget URL, will open in a new window with a width of 800px and height of 600px. The new page will also receive the verseDataApi object that includes the `bcc` and `attachment` information.

:::info
For more in depth information on the different data contexts take a look at the Verse **[Extension Data API](../extension-data-api)** docs.
:::

### Alternative Name Picker
**Extension Point:** `com.ibm.verse.ext.namePicker`

The Name Picker extension is a specific Widget extension defined to allow organizations to contribute a customized name picker. If you add this extension, the `To` label on the Mail Compose view is rendered as a link and the custom name picker will be rendered inside of the compose view when selected. Users can then select names from the custom name picker and they will be added to the `To`, `Cc`, or `Bcc` input fields depending on which one is selected.

#### Properties
> **Required:**  
* `{string}` **url** Your widget absolute url, when the To link is clicked, a new embedded window will open in the mail compose view pointing to this URL. The resource at the URL must display a UI allowing the user to add names to the email.

> **Optional:**  
* `{string}` **title** extension title
* `{string}` **name** name of the extension

#### Example Name Picker
```js
{
  "type": "com.ibm.verse.ext.namePicker",
  "name": "Custom name picker in mail compose",
  "title": "Add Contact",
  "payload": {
    "url": "<absolute-url-path>/custom-name-picker/index.html"
  }
}
```
:::note
You may notice there are no `path`, `object` or `actions` properties. This is because the Name Picker extension widget handles all of those values for you. You just need to add the `url` to your widget which will be responsible for rendering the Name Picker UI with a list of names and sending the data back to Verse if a user adds a name.
:::

You're probably wondering how Verse will know when a user is selected from the list. A **response message** will be required from the Name Picker widget to add recipients. There are two methods to add recipients to the UI:

<Tabs
  defaultValue="1"
  values={[
    { label: 'Method 1', value: '1', },
    { label: 'Method 2', value: '2', },
  ]
}>
<TabItem value="1">

#### One at a Time
In this method, the selected recipient will be added to whichever input field has focus at the time of adding.

> #### Response Properties:
>> **Required:**  
* `{string}` **verseApiType** the verseApiType must be com.ibm.verse.add.contact
* `{string}` **userEmail** The selected recipient's email address
 
>> **Optional:**  
`{string}` **userName** The recipient name to be used in the name chiclet

#### Example Method 1 Response
```js
var userEmail = samantha@hcl.com;
var userName = Samantha;
var emails_message = {
  verseApiType: "com.ibm.verse.add.contact",
  userEmail: userEmail,
  userName: userName
};
evt.source.postMessage(emails_message, evt.origin);
```

</TabItem>
<TabItem value="2">

#### Multiple Fields and Recipients
This method can add multiple recipients to one or all of `To`, `Cc`, or `Bcc` input fields by changing the data the extension sends back to Verse.

> #### Response Properties:
>> **Required:**  
* `{string}` **verseApiType** the verseApiType must be com.ibm.verse.add.contact
 
>> **Optional:**  
* `{array}` **recipientTo** An array of Recipients to be added to To field.
* `{array}` **recipientCC** An array of Recipients to be added to Cc field.
* `{array}` **recipientBcc** An array of Recipients to be added to Bcc field.

:::note
Note that the response message must have at least ONE of **recipientTo**, **recipientCC** or **recipientBcc** properties. Additionally, a recipient is a JSON object
with two properties, `userEmail` and `userName`.
:::

#### Example Method 2 Response
```js
var emails_message = {
  verseApiType: "com.ibm.verse.add.contact",
  recipientTo: toArray,
  recipientCC: ccArray,
  recipientBcc: bccArray
};
evt.source.postMessage(emails_message, evt.origin);
```

</TabItem>
</Tabs>

### BeforeOnSend
**Extension Point:** `com.ibm.verse.ext.beforeOnSend`

The BeforeOnSend extension is also a specific widget extension that allows third-party logic to modify a mail when it is being sent. The extension can display some UI, for example, to warn the user about something in the email about to be sent. There are three types of behavior the extension can produce:

* If it determines the mail is OK to send it can allow it to be sent without any further action from the user.
* If it wants to display a warning to the user but still allow them to send the mail it can display a UI and re-enable the send button.
* If it wants to block the user from sending the mail it can display a UI and leave the send button disabled (`disableSend` property is set to **true**)

:::note
In case the external application fails to load, the ‘Send’ button will be automatically re-enabled and a message will be displayed to the user warning them that there is risk associated with sending the email because the extension that validates their mail cannot be loaded.
:::

#### Properties
> **Required:**  
* {string} **url** To specify the name picker application’s url

>**Optional**  
* `{boolean}` **disableSend** By default disableSend is set as false, which means that ‘Send’ button will always be enabled and the user can send the message without any blocker. If disableSend is set as true, then ‘Send’ button will be disabled until the external application re-enables it by sending a message to Verse.
* `{array}` **permissions** The property controls which sensitive information will be exposed in verseApiData context property. The acceptable values can be bcc and attachment.
  * **bcc** - The recipientBcc property will be exposed in verseApiData context property.
  * **attachment** - The attachments property will be exposed in verseApiData context property.
 
#### Example BeforeOnSend
```js
{
  "type": "com.ibm.verse.ext.beforeOnSend",
  "name": "Hook Before Send Extension",
  "title": "Hook Before Send Extension",
  "payload": {
    "url": "<absolute-url-path>/hook-before-send/index.html",
    "disableSend": true
  }
}
```

In this example, when the user clicks the send button on an email, the body content of the email is sent in the verseApiData to the widget at the specified URL. Some third-party logic can be performed on the body text to "validate" it. If the widget deems the text to be "invalid" the send button will be disabled and the user will not be able to send the message, otherwise, the message will be sent. The widget is responsible for sending the appropriate response back to Verse.

> #### Response Properties:
>> **Required:**  
* `{string}` **verseApiType** the verseApiType must be **com.ibm.verse.message.continue.send**

#### Example BeforeOnSend Response
```js
if (notValid) {
  var errorNode = document.getElementById('error');
  errorNode.textContent = 'Are you sure you want to send an email that contains a credit card number?';
} else {
  var response_message = {
    verseApiType: 'com.ibm.verse.message.continue.send'
  };
  event.source.postMessage(response_message, event.origin);
}
```

When the extension does load, there is no timeout limit for how long HCL Verse will wait for the `com.ibm.verse.message.continue.send` response. The embedded web application will display while Verse waits for the response. This may lead to a scenario where the user's content is "valid" but Verse is waiting for a response. Thus, if the web page is designed to be a warning/suggestion message, the text should be dynamically added to the page via JavaScript at the time that the logic determines its validity to avoid confusion.

If Verse is unable to load the web based extension, a default warning message will display to inform the user the extension could not be loaded and sending the message is at the user's own risk. 

### Live Text
**Extension Point:** `com.ibm.verse.ext.liveText`

The Live Text widget extension recognizes defined patterns of data in the body of the Mail Read View and turns matching text into a link that opens an expandable menu of custom actions. Each Live Text extension has **one** defined pattern and corresponds to **one** action. If there is more than one live text extension that recognizes the same text, each action is added to the dropdown action menu on that text.

In addition, recognized text can be used in the URL. The recognizer will parse the recognized text into an array of matched text groups which can then be used in the URL by index like so:  
```
ORIGINAL URL = "http://<absolute-url-path>/live-text/sample1.html?phone=${1}"
REGULAR EXPRESSION = "Tel:([0-9]{8})"
EXAMPLE TEXT = "Tel:555123456"
// One match for the whole line and one for just the expression
MATCHES = ["Tel:555123456", "555123456"]

NEW URL = "http://<absolute-url-path>/live-text/sample1.html?phone=555123456"
```
:::info
You can find more information about JavaScript Regular Expressions, **[here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)**.
:::

#### Properties
> **Required:**  
* `{string}` **text** The text for the Live Text action.
* `{string}` **href** The Live Text absolute link location. Use `${matchingIndex}` syntax to define a variable in the href. The `matchingIndex` is the index of the text matched by the recognizer. When a Live Text action is executed, the `${matchingIndex}` will be replaced with text recognized by the index.
* `{string}` **recognizer** A regular expression in string form, not a regex literal, to recognize the specified text pattern as Live Text.
 

> **Optional:**  
* `{string}` **alt** Alt text for Live Text action.
* `{string}` **location** This property specifies where to open the Live Text extension. The acceptable values can be window or tab.
  * **window** - The Live Text extension will be opened in the new window. We can use renderParams to specify the new window’s size. If renderParams is not provided, a default renderParams will be used.
  * **tab** - The Live Text extension will be opened in the new tab.
* `{object}` **renderParams** This property specifies the window size when the extension is open in a new window. The renderParams property contains width and height properties, which are used to specify the new window’s width/height accordingly. This property is only valid if the `location`’s value is window.

#### Example Live Text
```js
{
  "type": "com.ibm.verse.ext.liveText",
  "payload": {
    "text": "UPS",
    "href":  "http://www.live-text-tracking-example.com/?TrackingNumber1=${0}",
    "recognizer": "1Z([A-Z0-9]{16})"
  }
}
```
In this example, if the user opens an email containing a tracking number (a string 16 characters long that begins with "1Z"), the text will be replaced with the live text widget. The user can select that text and a dropdown menu will open with the available actions. This particular action takes the user to the "tracking website" and appends the recognized tracking number to the URL for a quick look up.

### Third-Party File Repository
**Extension Point:** `com.ibm.verse.ext.file`

The Third-Party File Repository extension adds the ability to offer an external file repository to add file links into emails. The extension is added to the options bar in the Mail Compose View.

#### Properties
> **Required:**  
* `{string}` **text** The name of the repository.
* `{string}` **url** The target absolute url to open the repository. Only `https` protocol should be used in url, since Verse uses `https` protocol and `Cross-document Messaging` is used to communicate between Verse and the file repository extension.
* `{string}` **icon** An icon to use when rendering the link *(The only format supported for this property is a base64-encoded data-uri)*

> **Optional:**  
* `{object}` **renderParams** The window width and height when the repository is loaded in a new window. If not specified, the browser determines the new window width and height.

#### Example Third-Party File Repository
```js
{
  "type": "com.ibm.verse.ext.file",
  "name": "Third-party file repository extension",
  "payload": {
    "text": "Third-Party File Repository",
    "url": "https://third-party-file-repo.com",
    "icon": "data:image/png;base64,...",
    "renderParams": {
      "width": "450",
      "height": "230"
    }
  }
}
```
This Third-Party File Repository example adds an icon to the Mail Compose View options bar. When a user clicks the icon a new window with the specified width and height will open to the URL which should have the available files. Your file repository application will be responsible for loading any available resources and sending the selected files back to Verse so that they can be added to the email.

There are two required steps to appropriately handle this communication:

<details open>
<summary>Step 1: Notify Verse that your application is ready to send and receive data </summary>

#### Step 1: Notify Verse that your application is ready to send and receive data  
When your application is requested by the user, Verse sends it a message with the verseApiType, `com.ibm.verse.ping.application.loaded`, to check if it ready to receive the other data. Your application must respond with `com.ibm.verse.application.loaded` to notify Verse when it is ready.

:::caution
The Verse ping message will timeout if it does not receive the `com.ibm.verse.application.loaded` message from your application within **30 seconds**.
:::

#### Example Response
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

</details>

<details>
<summary>Step 2: Send the selected link information to Verse</summary>

#### Step 2: Send the selected link information to Verse
After the user selects which files/links to add, your application will need to send that information back to Verse.

> #### Response Properties
>> **Required:**  
* `{string}` **verseApiType** This property indicates the message type, the value must be **com.ibm.verse.ext.file.add.links**

>> **Optional:**  
* `{array}` **links** It is an array of the file or folder links. Each link is a JSON object that contains:
  * `{string}` **url** - The url used to open a file or folder.
  * `{string}` **name** - The display text of the link.
* `{boolean}` **closeWindow** Tells Verse whether to close your third-party file repository application when Verse receives the Add Links message. The default value is false.

#### Example Response
```js
{
  verseApiType: "com.ibm.verse.ext.file.add.links",
  links: [{
    url: "http://link-of-one-file",
    name: "HCL Verse Introduction.pdf"
  }, {
    url: "https://link-of-another-file",
    name: "HCL Products.ppt"
  }, {
    // other file or folder links
  }],
  closeWindow: true
}
```
</details>

### Directory Search
**Extension Point:** `com.ibm.verse.ext.directorySearch`

The Directory Search extension can contribute a custom search directory to find people in Verse.

#### Properties
> **Required:**  
* `{string}` **url** The extension’s absolute url. Only https protocol is allowed in url, since Verse uses https protocol and Cross-document Messaging is used to communicate between Verse and the directory search extension.
 
> **Optional**  
* `{boolean}` `enableBuiltinDirectorySearch` This property controls whether the built-in directory search in Verse is also used. When the value is true, the built-in search is used and the results from the built-in search are combined with the results from the custom directory search. By default, this value is false.

#### Example Directory Search Extension
```js
{
  "type": "com.ibm.verse.ext.directorySearch",
  "payload": {
    "url": "<absolute-url-path>/custom-directory-search/index.html",
    "enableBuiltinDirectorySearch": false
  }
}
```
In this example, when a user is performing a directory search, selecting the 'Search Directory' button will instead ping and display the results received by the custom application. Results from the built-in, Verse, directory will not be used because `enableBuiltinDirectorySearch` is set to false.

The custom directory search application will be responsible for handling the Cross-document messaging with Verse. There are three required steps for the extension to work:
<details open>
<summary>Step 1: Notify Verse that your application is ready to send and receive data</summary>

#### Step 1: Notify Verse that your application is ready to send and receive data
As you may have already seen with other extensions that use `Cross-document messaging`, Verse sends your application a message with the verseApiType, `com.ibm.verse.ping.application.loaded`, to check if it ready to receive the other data. Your application must respond with `com.ibm.verse.application.loaded` to notify Verse when it is ready.

:::note
Verse's extension listener will timeout if it does not receive the `com.ibm.verse.application.loaded` message from your application within **30 seconds** from the inital `ping`.
:::

#### Example Response
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

</details>

<details>
<summary>Step 2: Verse sends the search text to the directory search extension</summary>

#### Step 2: Verse sends the search text to the directory search extension
After a user enters text and clicks the 'Search Directory` button, Verse sends a message to your extension with the following structure:  
```js
{
  verseApiType: "com.ibm.verse.action.clicked",
  verseApiData: {
    actionId: "com.ibm.verse.ext.action.directorySearch",
    context: {
      searchString: "The text to search"
    }
  }
}
```
</details>

<details>
<summary>Step 3: The directory search extension sends the search results to Verse</summary>

#### Step 3: The directory search extension sends the search results to Verse
After the extension receives the user's text, it must send the results back to Verse.
:::caution
If Verse directory search will timeout if it does not receive the results within **60 seconds**
:::

> #### Response Properties:
>> **Required:**  
* `{string}` **verseApiType** The value of this property must be ‘com.ibm.verse.ext.directorySearch.searchResults’.
* `{number}` **returnCode** The property is the status code of your response, and the value could be:
  * **0:** Success
  * **1:** General error
  * **2:** No network connection
  * **3:** Server no response
 
>> **Optional:**  
* `{string}` **result** The value is an array of the search result items, returned only when returnCode is 0(success). If the result is an empty array or not specified, Verse will treat is as no `matches found`. Each result item is a JSON object that contains below properties. At least one emailAddress or notesAddress is required; displayName and forwardMailAddress is optional.
  * `{string}` **emailAddress:** Email address
  * `{string}` **notesAddress:** Notes address
  * `{string}` **displayName:** Name to be displayed. Optional
  * `{string}` **forwardMailAddress:** Forward email address. Optional

#### Example Response
```js
{
  verseApiType: "com.ibm.verse.ext.directorySearch.searchResults",
  returnCode: 0,
  result: [
    {
      emailAddress: "johnsmith@sample.com",
      notesAddress: "John Smith/UK/SAMPLE",
      displayName: "John Smith",
      forwardMailAddress: "johnsmith@sampleuk.com",
    },
    {
      emailAddress: "johnLi@sample.com",
      displayName: "John Li",
    },
   {
      notesAddress: "John Zhang/China/SAMPLE",
      displayName: "John Zhang",
    },
   {
     emailAddress: "john-wang@sample.com",
   }
  ]
}
```

</details>

### Modify On Send

**Extension Point:** `com.ibm.verse.ext.modifyOnSend`

The Modify On Send extension is a specific Widget extension defined to allow third-party logic to modify a mail when it is being sent. The extension can optionally display a UI. For example, a UI may be helpful to ask the user for their input before modifying the message.

There are a couple of different types of message modifications that can be performed on send:

- Modify the subject of the email
- Append "signature" contents to the end of the message body

#### Properties

> **Required:**
- {string} **url** The extension’s absolute url. Only https protocol is allowed in url, since Verse uses https protocol and Cross-document Messaging is used to communicate between Verse and the modify on send extension.

> **Optional**
- `{string}` **location** This property specifies where to open the Modify on Send extension. The acceptable values can be `embedded` or `hidden`. The default value is `hidden`.
  - **embedded**: The widget's UI will be shown over the compose area
  - **hidden**: The widget will not have a visible UI. Instead, it will be loaded in a hidden iFrame.
- `{string}` **pattern** This property specifies a **[Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)** (Regex) that restricts the types of modifications that can be made to the subject of the message. If a `pattern` is specified, then Verse will ensure that the original message and the modified message are identical, ignoring the text matched by the regex. This can be used to ensure that the extension cannot make arbitrary modifications. Instead, they can only make modifications that are matched by the Regex. If the pattern restriction is not adhered to, then the message will not be sent. Additionally, the user will be presented with a notification indicating the message was not sent.
- `{boolean}` **modifiedSubjectMustContainOriginalSubject** Default: `true`. This property specifies whether the modified subject must contain the original subject. If this check fails, the message will not be sent. Additionally, the user will be presented with a notification indicating the message was not sent.

:::note
If **modifiedSubjectMustContainOriginalSubject** is `true` (default) and a **pattern** is specified, both of the aforementioned subject checks will be enforced.
:::

:::note
If **modifiedSubjectMustContainOriginalSubject** is `false` and **pattern** is not specified, then there will not be any restrictions on the modifications that can be made by the extension.
:::

:::note
The modify on send extension is not leveraged when offline. If a modify on send extension was deployed the last time the offline appregistry was updated, then the user's send button will be disabled when they go offline. This addresses the concern that offline mode could be used to bypass the security aspects of the extension.
:::

#### Example Modify On Send Extension with a UI and a pattern restriction
```js
{
  "name": "Modify on Send",
  "type": "com.ibm.verse.ext.modifyOnSend",
  "title": "Modify the contents of mail",
  "payload": {
    "location": "embedded"
    "pattern": "\\[(PROTECTED|PRIVATE|CLASSIFIED|SECRET)\\](\\s*)"
    "url": "<absolute-url-path>/modify-on-send-ui/index.html"
  }
}
```

For this complete extension, see **[this example](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/with-ui)**.

In this example, when a user sends a mail message, this extension will be rendered over the mail compose UI. Once the extension has loaded, the user will see and interact with the extension's UI. The extension can then modify the message (optional) before allowing the send operation to complete. The extension will only be able to modify the subject by appending a classfication to the subject. If the extension tries to modify the subject in some other way, Verse will ignore the modification and will not send the email.

Some examples of **valid modified** versions of the original subject `Some subject`

**Example 1:**
```js
// payload
{
  "pattern": ".*",
  "modifiedSubjectMustContainOriginalSubject": false
}
```
* Original subject: `"Test Subject"`
  * Pattern matches: `"Test Subject"`
  * Original subject comparison string (original - pattern match): `""`
* Modified subject: `"Modified"`
  * Pattern matches: `"Modified"`
  * Modified subject comparison string (modified - pattern match): `""`
* Pattern comparison check: `"" === ""`
  * *Subject modifications are permitted*
* modifiedSubjectMustContainOriginalSubject check: N/A
  * *Subject modifications are permitted*
* **Subject modifications are permitted**

**Example 2:**
```js
// payload
{
  "pattern": ".*",
  "modifiedSubjectMustContainOriginalSubject": true
}
```
* Original subject: `"Test Subject"`
  * Pattern matches: `"Test Subject"`
  * Original subject comparison string (original - pattern match): `""`
* Modified subject: `"Modified"`
  * Pattern matches: `"Modified"`
  * Modified subject comparison string (modified - pattern match): `""`
* Pattern comparison check: `"" === ""`
  * *Subject modifications are permitted*
* modifiedSubjectMustContainOriginalSubject check: `"Modified".contains("Test Subject") === false`
  * *Subject modifications are **NOT** permitted*
* **Subject modifications are NOT permitted**

**Example 3:**
```js
// payload
{
  "pattern": "\\[(PRIVATE|CLASSIFIED)\\](\\s*)",
  "modifiedSubjectMustContainOriginalSubject": false
}
```
* Original subject: `"Classification: [PRIVATE] Test Subject"`
  * Pattern matches: `"[PRIVATE] "`
  * Original subject comparison string (original - pattern match): `"Classification: Test subject"`
* Modified subject: `"Classification: [CLASSIFIED] Test subject"`
  * Pattern matches: `"[CLASSIFIED] "`
  * Original subject comparison string (original - pattern match): `"Classification: Test subject"`
* Pattern comparison check: `"Classification: Test subject" === "Classification: Test subject"`
  * *Subject modifications are permitted*
* modifiedSubjectMustContainOriginalSubject: N/A
  * *Subject modifications are permitted*
* **Subject modifications are permitted**

**Example 4:**
```js
// payload
{
  "pattern": "\\[(PRIVATE|CLASSIFIED)\\](\\s*)",
  "modifiedSubjectMustContainOriginalSubject": true
}
```
* Original subject: `"Classification: [PRIVATE] Test Subject"`
  * Pattern matches: `"[PRIVATE] "`
  * Original subject comparison string (original - pattern match): `"Classification: Test subject"`
* Modified subject: `"Classification: [CLASSIFIED] Test subject"`
  * Pattern matches: `"[CLASSIFIED] "`
  * Original subject comparison string (original - pattern match): `"Classification: Test subject"`
* Pattern comparison check: `"Classification: Test subject" === "Classification: Test subject"`
  * *Subject modifications are permitted*
* modifiedSubjectMustContainOriginalSubject: `"Classification: [CLASSIFIED] Test subject".contains("Classification: [PRIVATE] Test Subject")`
  * *Subject modifications **NOT** are permitted*
* **Subject modifications are NOT permitted**

#### Example hidden Modify On Send Extension
```js
{
  "name": "Modify on Send",
  "type": "com.ibm.verse.ext.modifyOnSend",
  "title": "Modify the contents of mail",
  "payload": {
    "url": "<absolute-url-path>/modify-on-send-no-ui/index.html"
  }
}
```

For this complete extension, see **[this example](https://github.com/HCL-TECH-SOFTWARE/Verse-Extension-samples/tree/master/src/modify-on-send/no-ui)**.

In this example, when a user sends a mail message, this extension will be rendered in a hidden iFrame. Once the extension has loaded, the extension can then modify the message (optional) before allowing the send operation to complete.

:::caution
If a modify on send extension specifying `location: "hidden"` doesn't perform one of the Step 3 options (see below) within **30 seconds** of receiving the `com.ibm.verse.application.loaded` message, then Verse will terminate the extension and the message will not be sent. If the modify on send extension specifies `location: "embedded"`, then the extension will not be terminated. This allows the user to interact with the extension's UI without worrying about the message being sent before the user is able to interact with the extension.
:::

The modify on send extension will be responsible for handling the Cross-document messaging with Verse. There are three required steps for the extension to work:
<details open>
<summary>Step 1: Notify Verse that your application is ready to send and receive data</summary>

#### Step 1: Notify Verse that your application is ready to send and receive data
As you may have already seen with other extensions that use `Cross-document messaging`, Verse sends your application a message with the verseApiType, `com.ibm.verse.ping.application.loaded`, to check if it ready to receive the other data. Your application must respond with `com.ibm.verse.application.loaded` to notify Verse when it is ready.

:::note
Verse's extension listener will timeout if it does not receive the `com.ibm.verse.application.loaded` message from your application within **30 seconds** from the inital `ping`. In the case of a timeout, the message will not be sent.
:::

#### Example Response
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

</details>

<details>
<summary>Step 2: Verse sends the message contents to the modify on send extension</summary>

#### Step 2: Verse sends the message contents to the modify on send extension
After a user clicks on the "Send" button, Verse will load the modify on send extension and expect step 1 to be completed. Then Verse will send a message to your extension with the following structure:
```js
{
  verseApiType: "com.ibm.verse.action.clicked",
  verseApiData: {
    actionId: "com.ibm.verse.ext.action.modifyOnSend",
    context: {
      // mail.compose context object
    }
  }
}
```
For more information regarding the `mail.compose` context object, please refer to the **[Mail Compose](../extension-data-api#mail-compose)** context data object.
</details>

<details>
<summary>Step 3 (Option A - modifying): The extension sends modified message context data back to Verse</summary>

#### Step 3 (Option A - modifying): The extension sends modified message context data back to Verse
After the extension receives the `mail.compose` context object, it can return modified message data to modify the initial mail compose context object.

> #### Response Properties:
>> **Required:**
* `{string}` **verseApiType: The value of this property must be `com.ibm.verse.message.modify.mail`.
>> **Optional:**
* `{object}` **modifiedContext** An object containing the modified context object data that should be used by Verse to modify the original message before sending.
  * `{string}` **subject** The modified subject to use. Optional
  * `{string}` **signature** The contents to append to the end of the original message's body contents. Optional

#### Example Response
```js
{
  verseApiType: "com.ibm.verse.message.modify.mail",
  modifiedContext: {
    subject: "The subject of this message has been modified",
    signature: "This email and any attached files are confidential and intended soley for the use of the individual(s) to whom they are addressed."
  }
}
```

</details>

<details>
<summary>Step 3 (Option B - sending unmodified): The extension sends the original unmodified message</summary>

#### Step 3 (Option B - sending unmodified): The extension sends the original unmodified message
After the extension receives the `mail.compose` context object, it can send the original message without modification.

> #### Response Properties:
>> **Required:**
* `{string}` **verseApiType: The value of this property must be `com.ibm.verse.message.continue.send`.

#### Example Response
```js
{
  verseApiType: "com.ibm.verse.message.continue.send"
}
```

</details>

## Navbar Extension Points
With HCL Verse's Navbar extension points, you can customize the navigation bar by hiding default links and menus, and by adding custom links and menus. Using a combination of the following Navbar extension points, the HCL Verse navbar can be tailored to fit the specific needs of your organization.

:::note
Note that only absolute links are supported in these extensions.
:::

### Delete Navbar Components
**Extension Point:** `com.ibm.action.delete`

The delete extension point allows you to remove certain elements from the Navbar. Navbar items can be targeted by using valid **CSS selectors** such as a class, id, tag name, etc. If multiple elements are found to match the specified selector they will all be removed.
:::info
More information on CSS selectors can be found **[here](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)**.
:::

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.action.delete
* `{string}` **path** the path must be a valid CSS selector

> **Optional:**  
* `{string}` **name** name of the extension
* `{string}` **description** description of the extension

#### Example Navbar Delete Extension
```js
{
  "type": "com.ibm.action.delete",
  "path": ".org",
  "name": "Delete default organization name",
  "description": "This sample shows how to delete the default organization name"
}
```
This example extension simply removes the default organization name. A new organization name or logo could then be added in its place using the Navbar Add Link extension.

### Add New Links
**Extension Point:** `com.ibm.action.link`

The new link extension allows you to contribute new text and/or icon links to specific locations on the Navbar. Navbar locations are targeted using the CSS `order` property; elements are arranged in lowest to greatest order. New links will be placed **before** navbar elements with greater order values. Likewise, new links will be placed after navbar elements with equal or lesser order values.

#### HCL Verse Navbar Orders
| Navbar Item | HCL Verse | Mail | Calendar | People Menu | More Menu | Report Defect | Delegation | Chat | Help Menu | User Tray |
|:-----------:|:---------:|:----:|:--------:|:-----------:|:---------:|:-------------:|:----------:|:----:|:---------:|:---------:|
| **Order** | 1500 | 3000 | 4000 | 20000 | 97000 | 150000 | 170000 | 300000 | 400000 | 500000 |


There is a special set of order values, **[96000-96999]**, that place new navbar links inside of the "More" dropdown menu.

:::note
New link extensions without a valid `path` property are automatically added to the "More" dropdown menu.
:::

#### Properties
> **Required:**  
* `{string}` **id** a unique id that will be used as the `class` attribute (Ex. class="navext-{id}")
* `{string}` **type** the type must be com.ibm.action.link
* `{string}` **path** the location of the link on the navbar in the format: com.ibm.navbar.order.**orderNumber**
* `{string}` **title** the name used for the new link (if no icon is provided)
* `{string}` **link** Absolute link to new website

> **Optional:**  
* `{string}` **name** name of the extension
* `{string}` **description** description of the extension
* `{string}` **icon** An icon to use when rendering the link (instead of the title text) *(The only format supported for this property is a base64-encoded data-uri)*
* `{string}` **window_features** Additional (optional) attributes to cause link to open in new window (**[What are window_features?](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features)**)

#### Example Navbar Add Link Extension
```js
{
  "id": "my-custom-link",
  "type": "com.ibm.action.link",
  "path": "com.ibm.navbar.order.96001",
  "name": "Sample New Link",
  "title": "Sample New Link",
  "description": "This sample shows how to add a new link to More menu",
  "payload": {
    "link": "https://www.hcltech.com/",
    "window_features": "target=_blank",
    "icon": "data:image/png;base64,..."
  }
}
```
This example adds a new link with the text "Sample New Link" to the end of the "More" dropdown menu in the navbar. The link will open in a new window when clicked because of the **"target=_blank"** `window_feature`.


### Add Link to Existing Menu
**Extension Point:** `com.ibm.action.existingmenu.link`

This extension point allows you to contribute new links to an existing Navbar menu. Existing Navbar menus are targeted using a valid CSS selector (class, id, etc.) follows by a numerical order number: `<css-selector>.<order-number>`.

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.existingmenu.link
* `{string}` **path** the path must be a valid CSS selector
* `{string}` **title** the name used for the new link (if no icon is provided)
* `{string}` **link** Absolute link to new website

> **Optional:**  
* `{string}` **name** name of the extension
* `{string}` **description** description of the extension
* `{string}` **window_features** Additional (optional) attributes to cause link to open in new window (**[What are window_features?](https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features)**)

#### Example Add Link to Existing Menu
```js
{
  "type": "com.ibm.action.existingmenu.link",
  "path": ".help.1",
  "name": "help.link",
  "title": "New Help Link",
  "description": "This sample shows how to contribute a link to a custom menu",
  "payload": {
    "link": "https://example-link.com",
    "window_features": "target=_blank"
  }
}
```
This example adds a new link to the Help menu with the text, "New Help Link".

### Add New Menu w/Links
The navbar extensions also give you the ability to contribute new menus. You will need two different extension points to accomplish this: one to add the menu and another to add each link.

#### New Menu
**Extension Point:** `com.ibm.action.menu`

This extension point is for creating a new menu. The links are created as separate extensions and are added using the menu name. Menus are contributed to the Navbar, similar to how you can add links, using the order value to specify their location. 
:::caution
The reserved order values, **96000-96999**, are **not** valid for new menus.
:::

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.action.menu
* `{string}` **path** the location of the link on the navbar in the format: com.ibm.navbar.order.**orderNumber**
* `{string`} **title** the text used in the navbar for the menu

> **Optional:**  
* `{string}` **name** name of the extension
* `{string}` **description** description of the extension

#### Example New Menu Extension
```js
{
  "type": "com.ibm.action.menu",
  "path": "com.ibm.navbar.order.3500",
  "name": "NewsMenuContainer",
  "description": "This sample shows how to contribute a new menu",
  "title": "News"
}
```
:::note
The menu will **not** be contributed to the navbar if there are no associated menu links.
:::

#### New Menu Links
**Extension Point:** `com.ibm.action.menu.link`  

This extension point is very similar to the New Link extension; however, the links will be added to custom, navbar, dropdown menus. Menu links are placed on new menus by setting the `path` attribute to the following format: `<name-of-menu>.<unique-identifier>`. If multiple links are added to a menu they will be added in lexographical order by `identifier`.

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.action.menu.link
* `{string}` **path** the location of the link on the navbar in the format: com.ibm.navbar.order.**orderNumber**
* `{string}` **title** the name used to display the link
* `{string}` **link** Absolute link to new website

> **Optional:**  
* `{string}` **name** name of the extension
* `{string}` **description** description of the extension

#### Example New Menu Link
```js
{
  "type": "com.ibm.action.menu.link",
  "path": "NewsMenuContainer.a",
  "name": "news.source1",
  "description": "This sample shows how to contribute a link to a custom menu",
  "payload": {
    "link": "http://news-source1.com",
    "target":"_blank"
  },
  "title": "News Source 1"
}
```
This menu link example adds a new link with the name "News Source 1" to the menu that was defined in the new menu example above.

## SameTime Extension Points

### Enable Sametime
**Extension Point:** `com.ibm.appreg.ext.enableSametime`

The Enable Sametime extension point allows you to override the Administration panel setting to allow Sametime chat in Verse, even if Instant Messaging is disabled in the Administration panel.

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.appreg.ext.enableSametime

> **Optional:**  
* `{string}` **name** name of the extension

#### Example Enable Sametime Extension
```js
{
  "name": "Enable Sametime",
  "type": "com.ibm.appreg.ext.enableSametime"
}
```

### Disable Sametime
**Extension Point:** `com.ibm.appreg.ext.disableSametime`

The Disable Sametime extension allows you to disable and remove Sametime Chat from the Verse UI.

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.appreg.ext.disableSametime

> **Optional:**  
* `{string}` **name** name of the extension

#### Example Disable Sametime Extension
```js
{
  "name": "Enable Sametime",
  "type": "com.ibm.appreg.ext.disableSametime"
}
```

## CSS Extension Points
There is only one CSS Extension point and it allows you to further tailor the Verse UI to your organization's needs by supporting custom CSS styles.

### CSS Support
**Extension Point:** `com.ibm.verse.ext.css`

The CSS extension point allows you to customize the Verse UI using standard CSS; your styles are injected into Verse's index page as a stylesheet.

:::caution
**Security Tip:** an administrator should check the CSS extension before deployment to understand and control any potential risks that come with changing the look and behavior of the Verse UI.
:::

#### Properties
> **Required:**  
* `{string}` **type** the type must be com.ibm.verse.ext.css
* `{string}` **css** specifies the styles you want to apply to Verse as a string of CSS

> **Optional:**  
* `{string}` **id** unique id (will be used as id of stylesheet)
* `{string}` **name** name of the extension

#### Example CSS Extension
```js
{
  "id": "some-unique-id",
  "type": "com.ibm.verse.ext.css",
  "name": "Customize Navbar",
  "description": "Change the default background color of the Verse navigation bar",
  "payload": {
    "css": ".ics-scbanner {background-color:green!important;}"
  }
}
```
This example changes the background color of the Verse navbar to green. The stylesheet added to the Verse index page will have an id attribute with the value specified in the extension to make it easier to identify. 
:::tip
You may need to apply for the `!important` tag for some styles to take effect.
:::

## Offline Extension Point Support
The following extension points are supported in offline mode:  
* **[Navbar Extension Points](../extension-points#navbar-extension-points)**
* **[CSS Support](../extension-points#css-extension-points)**
