{
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