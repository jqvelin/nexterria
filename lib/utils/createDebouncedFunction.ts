export default function createDebouncedFunction(
  callback: () => void,
  delayMs: number
) {
  let timeout: ReturnType<typeof setTimeout>;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, delayMs);
  };
}
