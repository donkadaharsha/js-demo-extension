

// let x = 0;
// const c=document.getElementById('status');
//     c.innerHTML = "hihiwhdiw";
// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);

//   if (tab && tab.url && tab.url.startsWith("https://www.netflix")) {
//     x = x + 1;
//     // Send message to update DOM in popup script
// // popup.js
    
//  else {
//     console.log("No active tab or tab URL is undefined.");
//   }

//   // Call getCurrentTab again after 1 second
//   setTimeout(getCurrentTab, 1000);
// }

// // Run getCurrentTab() initially when the extension is installed or reloaded
// getCurrentTab();

//listening for changes in web browser
// console.log("hui");
// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   console.log(tab.url);
//   if (tab.url && tab.url.includes("youtube.com")) {
//     const queryParams = tab.url;
//     const urlParams = new URLSearchParams(queryParams);
//     const videoId = urlParams.get("v");
//     console.log(queryParams);
//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       videoId: videoId,
//     });
//   }
// });


// Listen for messages from content scripts
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("Message received in background script:", message);
  

//   // Modify the message and send it back to the content script
//   if (message.type === "GREETING") {
//     const modifiedMessage = message.message.toUpperCase();
//     chrome.tabs.sendMessage(sender.tab.id, { type: "RESPONSE", message: modifiedMessage });
    
    
//   }
// });


// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   console.log(tab);
//   console.log(tab);
//   if (tab) {
//     chrome.tabs.sendMessage(tab.id, { message: tab.url });
//   } else {
//     console.error("No active tab found.");
//   }
  
//   return tab;
// }
// getCurrentTab();

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { data: "Hello from background!" });

});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in background:", message);
});