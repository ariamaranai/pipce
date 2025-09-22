{
  let { Math, document, innerWidth, innerHeight } = self;
  let { max, min } = Math;
  let { fullscreenElement } = d;
  let videos = (fullscreenElement ?? document).getElementsByTagName("video");
  let video;
  let maxVisibleSize = 0;
  let i = 0;
  while (i < videos.length) {
    let _video = videos[i];
    if (_video.readyState) {
      let { x, right, y, bottom } = _video.getBoundingClientRect();
      let visibleSize = max(min(right, innerWidth) - max(x, 0), 0) * max(min(bottom, innerHeight) - max(y, 0), 0);
      maxVisibleSize < visibleSize && (
        maxVisibleSize = visibleSize,
        video = _video
      );
    }
    ++i;
  }
  (video ??= fullscreenElement?.shadowRoot?.querySelector("video")) && (
    video.addEventListener("enterpictureinpicture", e => e.stopImmediatePropagation(), 1),
    video != document.pictureInPictureElement
      ? video.requestPictureInPicture(video.disablePictureInPicture = 0)
      : document.exitPictureInPicture()
  );
}