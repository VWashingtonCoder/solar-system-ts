// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find(
  array: [],
  callback: (element: boolean | number | string | [] | {}) => {}
) {
  for (let element of array) {
    if (callback(element)) {
      return element;
    }
  }
}
