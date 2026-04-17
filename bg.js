{
  let run = async (a, b) => {
    try {
      return await chrome.scripting.executeScript({
        target: { tabId: (b || a).id, allFrames: !0 },
        world: "MAIN",
        files: ["video.js"]
      });
    } catch {}
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