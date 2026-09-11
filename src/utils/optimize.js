// export const throttle = (callback, delay) => {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();
//     if (now - lastCall > delay) {
//       callback.apply(this, args);
//       lastCall = now;
//     }
//   };
// };

export const debounce = (callback, delay) => {
  let timer = null;

  function debounced(...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(args);
    }, delay);
  }

  debounced.clear = () => {
    clearTimeout(timer);
  };

  return debounced;
};
