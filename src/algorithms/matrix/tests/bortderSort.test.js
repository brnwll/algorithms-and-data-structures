import { borderSort } from "../borderSort";

let input1 = [
  [-4, -3, -2, -1],
  [10, 11, 12, 13],
  [-4, -5, -6, -7],
  [18, 19, 20, 21],
];

let expectedOutput1 = [
  [-7, -4, -4, -3],
  [21, -6, -5, -2],
  [20, 12, 11, -1],
  [19, 18, 13, 10],
];

let input2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

let expectedOutput2 = [
  [10, 20, 30],
  [90, 50, 40],
  [80, 70, 60],
];

let input3 = [[1]];
let expectedOutput3 = [[1]];

describe("borderSort", () => {
  test("correctly sorts valid input", () => {
    expect(borderSort(input1)).toEqual(expectedOutput1);
    expect(borderSort(input2)).toEqual(expectedOutput2);
    expect(borderSort(input3)).toEqual(expectedOutput3);
  });
  test("should throw an error if input is not a square matrix", () => {
    expect(() => borderSort([1, 2, 3])).toThrow();
    expect(() =>
      borderSort([
        [1, 2, 3],
        [1, 2, 3],
      ])
    ).toThrow();
    expect(() => borderSort(["not", "arr", "ay "])).toThrow();
    expect(() => borderSort([1])).toThrow();
  });
});
