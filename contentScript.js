// Send a message to the background script



// // Listen for messages from the background script
// // Listen for messages from the background script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   console.log("Message received in content script:", message.message);
//   setTimeout(changeDiv(message), 1000);
// });
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received in content script:", message);
  changeDiv(message.data);
});

function changeDiv(message) {
  const messageDiv = document.getElementById('message');
  if (messageDiv) {
    messageDiv.innerText = message;
  } else {
    console.error("Couldn't find the 'message' div.");
  }
}
// Call the changeDiv function when the content script loads

