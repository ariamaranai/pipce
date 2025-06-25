{
  let run = async (a, b) => {
    try {
      await chrome.userScripts.execute({
        target: { tabId: (b || a).id, allFrames: !0 },
        js: [{ file: "video.js" }]
      });
    } catch (e) {}
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