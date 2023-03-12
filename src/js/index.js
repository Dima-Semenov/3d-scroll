export const initialiseScroll = () => {
  let zSpacing = -1000;
  let lastPos = zSpacing / 5;
  let $frames = document.getElementsByClassName('frame');
  let frames = Array.from($frames);
  let zVals = [];

  window.onscroll = function () {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    frames.forEach((element, index) => {
      zVals.push(index * zSpacing + zSpacing);
      zVals[index] += delta * -5.5;
      let frame = frames[index];
      let transform = `translateZ(${zVals[index]}px)`;
      let opacity = zVals[index] < Math.abs(zSpacing) / 1.4 ? 1 : 0;

      frame.setAttribute(
        'style',
        `transform: ${transform}; opacity: ${opacity}`
      );
    });
  };
};
