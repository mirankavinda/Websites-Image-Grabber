document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadButton').addEventListener('click', downloadImages);
  });
  
  function downloadImages() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'downloadImages'});
    });
  }
  