// Given an array of N elements and a number K. 
// The task is to arrange array elements according to the absolute difference with K, i. e., element having minimum difference comes first and so on.
// Note : If two or more elements are at equal distance arrange them in same sequence as in the given array.

//https://practice.geeksforgeeks.org/problems/sort-by-absolute-difference-1587115621/1

function customSort(arr, K) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const currentElement = arr[i];
    const currentDiff = Math.abs(currentElement - K);
    let j = i - 1;

    while (j >= 0 && Math.abs(arr[j] - K) > currentDiff) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}
console.log(customSort([10, 5, 3, 9, 2], 7)); // O(N^2)

//----Optimized-----//

//Function to sort the array according to difference with given number.
function sortABS(arr, N, K) {
  arr.sort((a, b) => Math.abs(a - K) - Math.abs(b - K));
  return arr;
}
console.log(sortABS([10, 5, 3, 9, 2], 7)); //O(nlogn)