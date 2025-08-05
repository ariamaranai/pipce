{
  let d = document;
  let videos = d.getElementsByTagName("video");
  let videoLen = videos.length;
  if (videoLen) {
    let video = videos[0];
    if (videoLen > 1) {
      let { scrollingElement } = d; 
      let cx = (innerWidth + scrollingElement.scrollLeft) / 2;
      let cy = (innerHeight + scrollingElement.scrollTop) / 2; 
      let minds = 2e9;
      let i = 0;
      while (i < videos.length) {
        let _video = videos[i];
        if (_video.readyState) {
          let rect = _video.getBoundingClientRect();
          let ds = Math.abs(cx - (rect.width / 2 + rect.x)) + Math.abs(cy - (rect.height / 2 + rect.y));
          ds < minds && (
            minds = ds,
            video = _video
          );
        }
        ++i;
      }
    }
    video.addEventListener("enterpictureinpicture", e => e.stopImmediatePropagation(), 1);
    video != d.pictureInPictureElement
      ? video.requestPictureInPicture(video.disablePictureInPicture = 0)
      : d.exitPictureInPicture();
  }
}