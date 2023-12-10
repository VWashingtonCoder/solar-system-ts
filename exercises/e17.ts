export const minBy = (
  array: Element[],
  cb: (element: Element | undefined) => {}
) => {
  if (array.length === 0) return undefined;

  let min = cb(array[0]);
  let minElement = array[0];

  for (let element of array) {
    if (cb(element) < min) {
      min = cb(element);
      minElement = element;
    }
  }
  return minElement;
};

export function maxBy(
  array: Element[],
  cb: (element: Element | undefined) => {}
) {
  if (array.length === 0) return undefined;

  let max = cb(array[0]);
  let maxElement = array[0];

  for (let element of array) {
    if (cb(element) > max) {
      max = cb(element);
      maxElement = element;
    }
  }
  return maxElement;
}
