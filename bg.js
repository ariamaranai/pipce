{
  let run = (a, b) => {
    let tabId = (b || a).id;
    chrome.scripting.executeScript({
      target: b ? { tabId, frameIds: [a.frameId] } : { tabId, allFrames: !0 },
      func: () => {
        let d = document;
        let video = d.body.getElementsByTagName("video");
        let i = video.length;
        let index = 0;
        if (i) {
          if (i > 1) {
            let maxWidth = 0;
            let width = 0;
            while (
              maxWidth < (width = video[--i].offsetWidth) && (maxWidth = width, index = i),
              i
            );
          }
          (video = video[index]).addEventListener("enterpictureinpicture",
            e => (e.stopImmediatePropagation()),
            1
          );
          video != d.pictureInPictureElement
            ? video.requestPictureInPicture(video.disablePictureInPicture = 0)
            : d.exitPictureInPicture();
        }
      }
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