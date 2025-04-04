{
  let run = (a, b) => {
    let tabId = (b || a).id;
    chrome.userScripts.execute({
      target: b ? { tabId, frameIds: [a.frameId] } : { tabId, allFrames: !0 },
      js: [{ file: "main.js" }]
    }).catch(() => 0);
  }
  chrome.action.onClicked.addListener(run);
  chrome.contextMenus.onClicked.addListener(run);
}
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: "Picture in picture",
    contexts: ["page", "video"],
    documentUrlPatterns: ["https://*/*", "file://*"]
  })
);