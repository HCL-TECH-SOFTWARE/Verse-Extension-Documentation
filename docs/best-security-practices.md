---
id: best-security-practices
title: Best Security Practices
---

There are some guidelines your organization should follow to make your application more secure.

## Running the Application from a Different Origin
HCL recommends hosting your web applications from a different origin than the Verse application. Web apps that run from the same origin as Verse have full access to the Verse application page content and therefore are, potentially, less secure. Any web applications that run from your Verse domain should be reviewed and fully trusted by your organization.

## Cross-Scripting Attack
If your application is using cross-document messaging to communicate with Verse, it can be vulnerable to cross-site scripting attack unless certain security implementations are followed carefully. This section is specific to extensions that use widget actions and leverage the verseDataApi.

### Verify the Origin and Target
When receiving messages, always verify origin of the message. Whenever using the **verseDataApi** you should add a check to ensure the message is coming from a verified origin. When a message event is received, immediately verify its origin before executing any other code:

```js
window.addEventListener("message", function(event) {
  /**
   * You should add the following code to check the origin of the message and prevent
   * the rest of the JavaScript code from executing if the message origin does not match
   * your Verse domain or the expected origin
   */
  if (event.origin !== "<your-Verse-domain-here>"){
    return;
  }
```

Likewise, when sending message, you should always specify the `targetOrigin` which provides control over where messages are sent. From the official **[Web API docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)**:  

***"Always provide a specific targetOrigin, not \*, if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site."***

In the sample HTML page, when posting message from the sample page back to Verse, we specify the targetOrigin to be the origin of the previous event we received, `event.origin`.
:::tip
If you verified the origin of the message by implementing the suggestion in the previous tip, you can be sure that `event.origin` here would be your, verified, Verse domain.
:::
```js
event.source.postMessage(loaded_message, event.origin);
```

### Validate the Message
Always validate the messages being passed; it is the responsibility of the extension developer to ensure data received is treated appropriately.

This includes trying to use `innerText` or `textContent` instead of `innerHTML` when inserting data value into the DOM which will prevent malicious code being inserted and executed.

For example, with the HTML sample page, if it used `insertAdjacentHTML` instead of `innerText` to display the stringified JSON data from the user’s side and a mail subject contained the following line (either in the Mail Compose View or Mail Read View) then when the extension is triggered, a button would be added onto the application’s HTML page, which when clicked, will show an alert:

```html
</div><button onclick='alert()'>Click me!</button><div>
```
This is a proof of concept to show how a malicious user could take advantage of this vulnerability to execute their own script.

To learn more about cross-site scripting attack, please refer to the **[OWASP site](https://owasp.org/)**. Google Chrome has also provided some guidance on how to make your web extension more secure; please refer to their **[documentation](https://developer.chrome.com/extensions/security)**.

 

## URL Scheme Whitelist
Verse defines a **URL Scheme Whitelist** to restrict what URL schemes can be used in an extension URL when opened from Verse. 

### Default URL scheme whitelist
The URL schemes `http`, `https`, `notes`, `im`, `sip`, `tel` and `xmpp` are allowed on Verse by default. If the extension is deployed via browser extension, then `chrome-extension` and `moz-extension` URL schemes are also allowed by default. However, if the extension is opened in a new window or new tab, then only `http`, `https`, `chrome-extension` and `moz-extension` URL schemes are allowed by default.

### Custom URL Scheme Whitelist
You can set the `VOP_Extensibility_Url_Scheme_Whitelist` parameter in **notes.ini**, introduced in Verse on-Premises V1.0.4, to allow additional custom URL schemes. Schemes should be added as a comma-separated string as shown in the example below.

**Example Custom URL Scheme Whitelist**   
In the below example, `ftp` and `thunder` schemes are added to custom URL scheme whitelist, thus, ftp and thunder schemes would be allowed in the extension URL.  
```
VOP_Extensibility_Url_Scheme_Whitelist=ftp,thunder
```

## External Security Resources
| Name |Description |
|------|------------|
| [OWASP](https://owasp.org/) | Open Web Application Security Project provides free, online, articles and resources for web security |
| [Chrome Extension Security](https://developer.chrome.com/extensions/security) | Google Chrome's offical Web Extension security documentation |
| [MDN Content Security Policy](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) | MDN's official Content Security Policy documentation |
| [URL Schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) | An extensive list of registered URL Schemes | 
