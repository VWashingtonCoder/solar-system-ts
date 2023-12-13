export const minBy = <X>(array: X[], cb: (element: X) => number | string) => {
  let minElement = array[0];
  let min = array.map((element) => cb(element))[0] as number | string;

  for (let element of array) {
    const cbResult = cb(element);

    if (cbResult < min) {
      min = cbResult;
      minElement = element;
    }
  }
  return minElement;
};

export function maxBy<X>(array: X[], cb: (element: X) => number | string) {
  let maxElement = array[0];
  let max = array.map((element) => cb(element))[0] as number | string;

  for (let element of array) {
    const cbResult = cb(element);
    if (cbResult > max) {
      max = cbResult;
      maxElement = element;
    }
  }
  return maxElement;
}
