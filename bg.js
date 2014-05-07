chrome.contextMenus.create({
    title: "WCC Group '%s'",  
    contexts: ["selection"],  
    onclick: function search(OnClickData) {  
        chrome.windows.create (
        {
            'url': 'wcc_groups_application_url' + OnClickData.selectionText + '',
            'type': 'popup',
            'width': 600,
            'height': 400,
            'left': (screen.width/2)-(250), 'top': (screen.height/2)-(400/2)
        }
        ) 
    }  
});