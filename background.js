chrome.webNavigation.onCompleted.addListener(function () {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

        console.log(tabs[0].url);
        var activeTab = tabs[0];

        if (activeTab.url.includes("netflix") && activeTab.url.includes("watch")) {

            console.log("Background.js logging : sending message to content.js")
            chrome.tabs.sendMessage(activeTab.id, { "message": "click_on_skip" });

        }
    });

});


chrome.tabs.onUpdated.addListener(function (tabId , info) {

    if (info.status === 'complete') {

        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

            console.log(tabs[0].url);
            var activeTab = tabs[0];
    
            if (activeTab.url.includes("netflix") && activeTab.url.includes("watch")) {
    
                console.log("Background.js logging : sending message to content.js to skip intro")
                chrome.tabs.sendMessage(activeTab.id, { "message": "click_on_skip" });
    
            }
        });
    }
  });
// Called when the user clicks on the browser action.

// chrome.browserAction.onClicked.addListener(function (tab) {

//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      
//         chrome.storage.local.set({"do_operations": "true"}, function() {
//             console.log('do_operations is set to ' + "true");
//           });
        

        
//         var activeTab = tabs[0];
//         console.log("Active tab as",activeTab)    
//         chrome.tabs.sendMessage(activeTab.id, { "message": "clicked_browser_action" , "do_operations":true });

//     });

// });

// chrome.runtime.onMessage.addListener(

//     function (request, sender, sendResponse) {

//         if (request.message === "open_new_tab") {
            
//             chrome.storage.local.get(['do_operations'], function(result) {
//                 console.log('Value currently is ' + result.do_operations);
//               });

//             console.log("Background.js logging : Message received from content.js",request.message);

//         }
//     }
// );
