(({action, contextMenus, runtime}) => {
  let run = (a, b) =>
    (b || a).url[0] != "c" &&
    chrome.scripting.executeScript({
      target: b
        ? { tabId: b.id, frameIds: [a.frameId] }
        : { tabId: a.id, allFrames: !0 },
      world: "MAIN",
      func: () => {
        let video = document.getElementsByTagName("video");
        let i = video.length;
        let maxWidth = 0;
        let width = 0;
        let index = 0;
        if (i) {
          while (
            width < (width = video[--i].offsetWidth) && (maxWidth = width, index = i),
            i
          );
          (video = video[index]).addEventListener("enterpictureinpicture",
            e => e.stopImmediatePropagation(),
            { capture: !0, once: !0 }
          );
          if (video != document.pictureInPictureElement) {
            video.disablePictureInPicture = 0;
            video.requestPictureInPicture();
          } else {
            document.exitPictureInPicture();
          }
        }
      }
    });
  action.onClicked.addListener(run);
  contextMenus.onClicked.addListener(run);
  runtime.onInstalled.addListener(() =>
    contextMenus.create({
      id: "",
      title: "Picture in picture",
      contexts: ["page", "video"],
    })
  );
})(chrome)