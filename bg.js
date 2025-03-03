{
  let run = (a, b) => {
    if (!b && a.url[0] == "c") {
      try {
        chrome.scripting.executeScript({
          target: b
            ? { tabId: b.id, frameIds: [a.frameId] }
            : { tabId: a.id, allFrames: !0 },
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
                e => e.stopImmediatePropagation(),
                { capture: !0, once: !0 }
              );
              video != d.pictureInPictureElement
                ? (video.disablePictureInPicture = 0 , video.requestPictureInPicture())
                : d.exitPictureInPicture();
            }
          }
        });
      } catch (e) {}
    }
  }
  chrome.action.onClicked.addListener(run);
  chrome.contextMenus.onClicked.addListener(run);
}
chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({
    id: "",
    title: "Picture in picture",
    contexts: ["page", "video"],
    documentUrlPatterns: ["https://*/*", "https://*/", "http://*/*", "http://*/", "file://*/*", "file://*/"]
  })
);