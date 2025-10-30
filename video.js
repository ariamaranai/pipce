{
  let d = document;
  let video = d.fullscreenElement || d.scrollingElement;
  if (video.tagName != "VIDEO") {
    let videos = video.getElementsByTagName("VIDEO");
    let { max, min } = Math;
    let maxVisibleSize = 0;
    let i = 0;
    while (i < videos.length) {
      let _video = videos[i];
      if (_video.readyState) {
        let rect = _video.getBoundingClientRect();
        let visibleSize = max(min(rect.right, innerWidth) - max(rect.x, 0), 0) * max(min(rect.bottom, innerHeight) - max(rect.y, 0), 0);
        maxVisibleSize < visibleSize && (
          maxVisibleSize = visibleSize,
          video = _video
        );
      }
      ++i;
    }
    video?.readyState || (video = video.shadowRoot?.querySelector("VIDEO"))?.readyState || (video = 0);
  } else
    video.readyState || (video = 0);

  video && (
    video.addEventListener("enterpictureinpicture", e => e.stopImmediatePropagation(), 1),
    video != d.pictureInPictureElement
      ? video.requestPictureInPicture(video.disablePictureInPicture = 0)
      : d.exitPictureInPicture()
  )
}