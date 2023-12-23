export function movingWindow(arr, wSize) {
  for (let wStart = 0; wStart <= arr.length - wSize; wStart++) {
    for (let i = wStart; i < wSize; i++) {
      // loop across the window
    }
  }
}

export function altMovingWindow(arr, wSize, callBack) {
  const lookInto = (window) =>
    window.map((element) => {
      //
      console.log("Do stuff");
    });
  for (let wStart = 0; wStart <= arr.length - wSize; wStart++) {
    lookInto(arr.slice(wStart, wStart + wSize));
  }
}
