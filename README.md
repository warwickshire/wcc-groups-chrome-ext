WCC Groups Chrome Extension
===========================

This code is for a Chrome extension that launches a Google Groups lookup.
The highlighted email address is used as an input for the search.
The members of the Google group are displayed using an apps script UI application.

![Chrome extension menu option][1]

The chrome extension consists of a manifest file which contains meta data about the extensions. One key value is for permissions. For this extension, we only needed permission for the context menus.

*Manifest.json*
<pre>"permissions": ["contextMenus"]</pre>

The manifest also references the JS file that contains, in this case, the function that launches our Google Apps script application. The highlighted text is passed across as a querystring variable.

*bg.js*
<pre>'url': 'wcc_groups_application_url' + OnClickData.selectionText</pre>

The rest of the files are images for use in deployment, details of which can be found below in the included links below.

Details on how to package up a Chrome Extension can be found here
[https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

Details on how to push a Chrome extension to a private store, only available to the apps domain organisation are here

[https://support.google.com/chrome/a/answer/2663860](https://support.google.com/chrome/a/answer/2663860)


  [1]: https://raw.githubusercontent.com/warwickshire/wcc-groups-chrome-ext/master/wcc_group_chrome_ext_main.png
  [2]: https://developer.chrome.com/extensions/getstarted