export const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (arr[mid] !== target && start <= end) {
    arr[mid] < target ? (start = mid + 1) : (end = mid - 1);
  }
  return arr[mid] === target ? mid : -1;
};
