{
let f =(a, b)=> (b||a).url[0] !="c" && chrome.scripting.executeScript({
  target: b ? {tabId: b.id, frameIds: [a.frameId]}: {tabId: a.id, allFrames: !0},
  world:"MAIN",
  func: ()=> {
    let d = document, v = d.getElementsByTagName("video"), i = v.length, n = 0, w = 0, t= 0
    if (i) {
      while (w < (t = v[--i].offsetWidth) && (w = t, n = i), i);
      (v = v[n]).addEventListener("enterpictureinpicture", e => e.stopImmediatePropagation(), {capture: !0, once: !0})
      v != d.pictureInPictureElement ? (v.disablePictureInPicture = 0, v.requestPictureInPicture()) : d.exitPictureInPicture()
    }
  }
})
chrome.action.onClicked.addListener(f)
chrome.contextMenus.onClicked.addListener(f)
}
chrome.runtime.onInstalled.addListener(()=> chrome.contextMenus.create({id:"", title:"Picture in picture", contexts:["page","video"]}))