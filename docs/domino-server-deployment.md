---
id: domino-server-deployment
title: Domino Server Deployment
---
If you do not have a deployment ready application, you should take a look at the **[example applications](../getting-started)** for reference or the **[extension docs](../what-is-an-extension)** to start your own.
## Your Application
All applications should be stored in a file `applications.json` with the following structure:

```jsx
[
  {
    "name": "App1",
    "title": "Sample Application",
    "description": "A sample app to extend Verse",
    "extensions": [],
    "services": ["Verse"]
  },
  {
    "name": "App2",
    ......
  }
]
```
### Application Properties
| Property    | Definition |
|-------------|------------|
| name        | the name of the application (must be unique) |
| title       | the title of your application |
| description | a description of what the application should do |
| extensions  | an array of extension definitions ([What is an Extension?](../what-is-an-extension))|
| services    | an array of services the extension is deployed to. **All HCL Verse extensions should include "Verse" as a supported service** |

Production ready, HCL Verse applications should be deployed to Domino. There are two different methods of deployment:  
1. using the built-in endpoint
2. using a custom endpoint

## When to use the built-in endpoint
HCL Verse on premises exposes a built-in endpoint to serve an application and should be used if the application does not need to be dynamically loaded (the applications JSON is a static file). The `applications.json` can either be loaded as a **local file** on the Domino server via path name or served as a **hosted file** via HTTP. The `VOP_Extensibility_Data_Provider_Name` notes.ini parameter specifies which data provider should be used and can be set to `localFileProvider` (**default**) or `httpDataProvider`. *The data provider will periodically check the source applications.json file for updates, so you don’t have to restart the server after a new version of applications.json is deployed.*

### Local File Data Provider
Serving applications locally is easy to do with the localFileProvider. Steps to deploy:
1. Deploy the `applications.json` file to **Domino**
2. Set `VOP_Extensibility_Data_Provider_Name` to `localFileProvider` or leave it blank since it defaults to the desired setting
3. Specify the **path** to the applications JSON with the notes.ini parameter: `VOP_Extensibility_Applications_Json_FilePath=D:\example\applications.json`

### Hosted File Data Provider
Alternatively, the applications JSON can be served via an HTTP server. Steps to deploy:
1. Deploy the `applications.json` file to the **HTTP server**
2. Set `VOP_Extensibility_Data_Provider_Name` to `httpDataProvider`
3. Specify the **HTTP URL** to the applications JSON with the notes.ini parameter: `VOP_Extensibility_Applications_Json_URL=https://example.com/vop/applications.json`

## When to use the custom endpoint
Sometimes it might be useful to dynamically serve applications using code. If that is the case, then you will need to implement and use a custom endpoint. It is important to note that the endpoint response format must match, exactly, that of the [HCL Connections Appregistry API](../domino-server-deployment#example-response-data). Otherwise, Verse may be unable to parse the information. Steps to deploy:

1. Configure custom endpoint should serve the response data
2. Specify the **URL** of the custom endpoint with the notes.ini parameter: `VOP_Extensibility_Endpoint_URL=https://rest.example.com/vop/appregistry/services/Verse/applications`

### Example Response Data
The items attribute of the response is an array of the applications defined in the `applications.json`.

```jsx
{
  /* The items list contains ALL registered applications and extensions */
  // highlight-start
  "items": [
    {
      "name": "App1",
      "services": ["Verse"],
      "extensions": [
        {
          /* Extensions */
        }
      ]
    },
    {
      "name": "App2",
      ......
    }
  ]
  // highlight-end
  "offset": 0,
  "limit": 0,
  "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0",
  "first": {
    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"
  },
  "prev": {
    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"
  },
  "next": {
    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"
  },
  "last": {
    "href": "/vop/appregistry/services/Verse/applications?offset=0&limit=0"
  },
}
```

## Notes.ini Parameter Overview
| Parameter| Description | Values | Default |
|----------|----------|----------|----------|
| VOP_Extensibility_Data_Provider_Name| directs domino where to locate the `applications.js` when using the built-in endpoint | "localFileProvider", "httpDataProvider" | "localFileProvider" |
| VOP_Extensibility_Applications_Json_FilePath| a path to the `applications.json` on the domino server | {String} filePath | N/A |
| VOP_Extensibility_Applications_Json_URL | an HTTP URL to where the `applications.json`` is served | {String} URL | N/A |
| VOP_Extensibility_Endpoint_URL | an custom endpoint URL where configured, application, response data can be retrieved | {String} URL | N/A |
