---
id: third-party-chat
title: Third Party Chat
---

import { Expandable } from "../src/components/expandable.js"

This sample demonstrates how to use the **[Disable Sametime](../extension-points#disable-sametime)** extension in conjunction with the **[Templated Link](../extension-points#templated-link)** extension to integrate third party chat and meeting services in Verse.

## Add the Disable Sametime Extension

```js
{
  "name": "Chat Service Integration Sample",
  "title": "Chat Service Integration Sample",
  "description": "This is a sample to integrate third-party chat and meeting service in Verse",
  "extensions": [
    // highlight-start
    {
      "type": "com.ibm.appreg.ext.disableSametime"
    }
    // highlight-end
  ],
  "services": [
    "Verse"
  ]
}
```

## Add the Templated Link Chat Extension

```js
{
  "name": "Chat Service Integration Sample",
  "title": "Chat Service Integration Sample",
  "description": "This is a sample to integrate third-party chat and meeting service in Verse",
  "extensions": [
    {
      "type": "com.ibm.appreg.ext.disableSametime"
    },
    // highlight-start
    {
      "type": "com.ibm.appreg.ext.templatedLink",
      "object": "com.ibm.appreg.object.person",
      "payload": {
        "text": "Sample 3rd Party Chat",
        "icon": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbABsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9+z0rwD40f8FLfhZ8DtV1C11C+1zVl0WXyNVudF0mfULbSnBAKyyxjbuUkBlUsynggEV7T4/1a/0HwNrF7pVoL/U7SymmtLZs7Z5VQlFOOcFgM45x05r47+BPie5+EniTQNdj+OL+OPC8saWut6Hrd5FaGzLgRpcWqmONQqZOYAArADyxuUB/fybLYV6dSvVg5qNklFtNt+fLJLyva/Ru1j4viniCrgq9HCUJKDnducoqUYpW6c8G9/s8zXVJan1b8Ffjv4R/aI8D2/iPwXr1j4g0e5A23Fs+dpxnaynDK2CDhgDyK66vk/8AZ4j8PWf7dHiK9+G9pAnhfxHo7y+Ihbo0cY1COfckxVsFd3nOAoGCWcjo2PrAVzZ1l8MJiFCndJpStL4o36S818rqzsrnpcM5vUzHCOpWtzRk4txvySt9qN9eV3++4jdK+DviR/wTUv8A4yfHNms9P1z4e+CNOvnuIorXU4roahMAwSdYxIv2eMZJVBuOSTx2+8qKMqzvG5bOVTBT5XJWf/Dbel1p0sy8+4Yy7OYwhmEOZQbt033V1aSWz91q9le60PL/ANmD9k7wz+yt4au7PQftdxd6myPfXtzIXluim7bn6F3Pc5Y5J4x6gOKKK4cViq2Jqyr4iTlOW7e7PSy7LsNgMNHCYOHJTjsl9731bb1bererP//Z",
        "href": "${extensionPath}/chat-service/chat-service.html",
        "locator": "chat"
      }
    }
    // highlight-end
  ],
  "services": [
    "Verse"
  ]
}
```

## Add the Templated Link Meeting Extension

```js
{
  "name": "Chat Service Integration Sample",
  "title": "Chat Service Integration Sample",
  "description": "This is a sample to integrate third-party chat and meeting service in Verse",
  "extensions": [
    {
      "type": "com.ibm.appreg.ext.disableSametime"
    },
    {
      "type": "com.ibm.appreg.ext.templatedLink",
      "object": "com.ibm.appreg.object.person",
      "payload": {
        "text": "Sample 3rd Party Chat",
        "icon": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAbABsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9+z0rwD40f8FLfhZ8DtV1C11C+1zVl0WXyNVudF0mfULbSnBAKyyxjbuUkBlUsynggEV7T4/1a/0HwNrF7pVoL/U7SymmtLZs7Z5VQlFOOcFgM45x05r47+BPie5+EniTQNdj+OL+OPC8saWut6Hrd5FaGzLgRpcWqmONQqZOYAArADyxuUB/fybLYV6dSvVg5qNklFtNt+fLJLyva/Ru1j4viniCrgq9HCUJKDnducoqUYpW6c8G9/s8zXVJan1b8Ffjv4R/aI8D2/iPwXr1j4g0e5A23Fs+dpxnaynDK2CDhgDyK66vk/8AZ4j8PWf7dHiK9+G9pAnhfxHo7y+Ihbo0cY1COfckxVsFd3nOAoGCWcjo2PrAVzZ1l8MJiFCndJpStL4o36S818rqzsrnpcM5vUzHCOpWtzRk4txvySt9qN9eV3++4jdK+DviR/wTUv8A4yfHNms9P1z4e+CNOvnuIorXU4roahMAwSdYxIv2eMZJVBuOSTx2+8qKMqzvG5bOVTBT5XJWf/Dbel1p0sy8+4Yy7OYwhmEOZQbt033V1aSWz91q9le60PL/ANmD9k7wz+yt4au7PQftdxd6myPfXtzIXluim7bn6F3Pc5Y5J4x6gOKKK4cViq2Jqyr4iTlOW7e7PSy7LsNgMNHCYOHJTjsl9731bb1bererP//Z",
        "href": "${extensionPath}/chat-service/chat-service.html",
        "locator": "chat"
      }
    },
    // highlight-start
    {
      "type": "com.ibm.appreg.ext.templatedLink",
      "object": "com.ibm.appreg.object.person",
      "payload": {
        "text": "WebEx meeting",
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAARbSURBVEhL7ZZ7TJVlHMdfmsFqXRaLOYJic7OsQOBc4NxvhIhoDmfkFunQ8IgHsYwpSGCwnEoZt5kKyYhkGkoRIKFcLPvTP1picFx0mWlbzSFnh8vBc/n2ex9eqMN7jrxtzf7xuz3nOed5f8/7eX6X53kOh/9J98H3TJLAPmpueKGo6wR3yA7unQsIyW/HImsruKwTWJ9/DB7BTqoWBLvdboRXDoCrGwRXOYSoonO4QeN/UrtJ7bG1NYhKq0a05QjiMnbyUyQpCPgOLd+LP+jbQycmwB3/DROTLsDjBn36y0vN58J3P9HL1r6AsI2JmKL5Hv6Bzz1jE0CBwXcm8SN1YZ/8gqrvnUIIvawXhVMY4Lu+65fx6KZ4RG6XYZSW6GKrCqzAYI8XoV0OaE5eZtOliAd7fNMIz01ETIESy0vkfGEElQg8TS201QHuNJ9J6fIxihdP2eRY+nYylGVqpL9nodHA9AAee8G13sSY8EuqeI9dlN2YAgVii1RQV6iRWqWZS8V8icAxLbRdTlGl/Gu5qRidWFaogKxUBeMBLdLrdGj8tlp47i8RmGsbg6l5EP0/O4QRafJRpEwFq5DAe1uuQsoHWqw5psem5lTBwl8i8AMtv6NtxIXuq6NCdoJXpp/oBJEXa1lu9Qc0SKvRIbPRhM1tKwUDf4nAIfW/omd4HOeHHei2j2PKKw08TctMKFWy3Jrf12H1R0ZkNZvwRucKwcJfYo8bhgnsZODzw7dx8doYq/S77g0qIMPuNKjLtCy3adUGrGswIvszM7b1SAw1Vz2EMyOeOY9nFuDApPBcJDrh4JuCslQB7X4Ny23GEQOymozI+cKCnf1SwVVXsKToDHrst+egs+3SDzdm/P7nFqEB3R7y9l0NzJVarKwxIvNjM7JPmWDtsqBowCIY+ksEjjj4Fd0+vegfuiUCd9ud6LOPYkKw5eWkw1FdooB+vw6pH+pZbl9pMiPnbAryL5jw+ZVawdJfIjB/vXElF3GSrp754NnG10DfiAPXx31QlKihKVfCfEjP9u26BgteP21EXqcFbw5QYQWpTRGYP5kfLOhAWF5XQCjf+Gh8MziFRVnL8MTWeDxti2dF9fJxHTZ8asCGZjNs3UYU96VTJuimCyARmImuPy63HaGra9F9TRzyXqr2J7coEL7tRURtl2PJDgWe261E/N5kJJUZkHcuHYWXVP61ME8Bwfwqx6mPXlOPxWl16Bi5xWBfX51C8dkWPLIxDhFb5Ii0yvHMjiQ8+1YSEvZqkbwvCZu/NGBXn5ldiXfhBvGYXeR0KNDMiNR6RK46ipDM5Qh9NRYPZ8ciPCcRi60yRNtkzNu4QhWSKxKwtd0IW28SLdxJufWydwRTEPDf8ng8eDw1jv5ZPE9expOHFNY9KsgopLqDBmQc1eO1Rj2s7S+hoj1XmLWwFgTPappCp8pdgaW7NFCUq5FSa4TpsBbrm3Q43LGP2XhmdrkkSQb/17oPvkcC/gLPZ5Rn6HFpXQAAAABJRU5ErkJggg==",
        "href": "https://webex.com/join/${emails}",
        "locator": "meeting"
      }
    }
    // highlight-end
  ],
  "services": [
    "Verse"
  ]
}
```
#### Extension Properties
| Property    | Type |  Definition |
|-------------|:----:|-------------|
| type        | `string` | the extension point  ([List of Extension Points](../extension-points)) |
| object      | `string` | a target within the Verse UI |
| payload     | `object` | JSON object that specifies properties specific to the extension |
| text        | `string` | the display text of the link in the UI |
| icon        | `string` | a base64 encoded data uri |
| href        | `string` | a fully-qualified URL |
| locator     | `string` | a more specfic target within the Verse UI **(chat or meeting)** |

## Test it Out
<Expandable path="samples/third-party-chat.gif" />

##  How it Works
This example application uses a combination of extensions to customize the chat and meeting actions in HCL Verse. The Disable Sametime extension does not have any required properties but plays an essential role in this customization. It removes the Sametime Chat and Meeting actions from the Verse Important to Me bar and Business Cards. This allows the latter two extensions to override those actions.

Additionally, there are two Templated Widget extensions; one to replace the Sametime Chat action and the other for the Sametime Meeting action, distinguished by the `locator` property. As can be seen in the demo above, the Sametime Chat and Meeting Icons are infact the ones specified in the extensions. Clicking on the new **chat** icon will open to the sample `chat-service.html` web application and the new meeting will open to the specified URL.

The templated link extension for the meeting action leverages the extension's `template variable` to add a user's email as a query parameter. Query parameters are an easy way to pass data through a URL. Take a look at the **[Templated Link](../extension-points#templated-link)** extension documentation for more information.