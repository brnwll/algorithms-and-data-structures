import { binarySearch } from "./algos/search.js";

/*
  binary search ✅
  bubble sort
  insertion sort
  merge sort
  quick sort
  selection sort
*/

const binarySearchButton = document.querySelector("#binarySearch");
binarySearchButton.addEventListener("click", () => {
  console.log("Binary Search");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const searchTerm = 5;
  const binarySearchResult = binarySearch(arr, searchTerm);
  console.log(binarySearchResult);
});
