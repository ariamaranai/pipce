onunhandledrejection = e => e.preventDefault();
{
  let { action, contextMenus, scripting, runtime } = chrome;
  let f = (a, b) =>
    scripting.executeScript({
        target: { tabId: (b ?? a).id, allFrames: !0 },
        world: "MAIN",
        files: ["video.js"]
    });
  action.onClicked.addListener(f);
  contextMenus.onClicked.addListener(f);
  runtime.onInstalled.addListener(() =>
    contextMenus.create({
      id: "",
      title: "Picture in picture",
      contexts: ["page", "video"],
      documentUrlPatterns: ["https://*/*", "file://*"]
    })
  );
}
