export default function debouce(claback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setInterval(() => {
      claback(...args);
      timer = null;
    }, delay);
  };
}
