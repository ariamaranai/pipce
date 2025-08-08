{
  let d = document;
  let videos = d.getElementsByTagName("video");
  let videoLen = videos.length;
  let video = videos[0];
  if (videoLen > 1) {
    let { innerWidth, innerHeight } = self;
    let maxVisibleSize = 0;
    let i = 0;
    while (i < videos.length) {
      let _video = videos[i];
      if (_video.readyState) {
        let { x, right, y, bottom } = _video.getBoundingClientRect();
        let visibleSize = Math.max(Math.min(right, innerWidth) - Math.max(x, 0), 0) * Math.max(Math.min(bottom, innerHeight) - Math.max(y, 0), 0);
        maxVisibleSize < visibleSize && (
          maxVisibleSize = visibleSize,
          video = _video
        );
      }
      ++i;
    }
  }
  video && (
    video.addEventListener("enterpictureinpicture", e => e.stopImmediatePropagation(), 1),
    video != d.pictureInPictureElement
      ? video.requestPictureInPicture(video.disablePictureInPicture = 0)
      : d.exitPictureInPicture()
  );
}