/**
Input: N = 5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: The sequence 2, 4, 1, 3, 5 
has three inversions (2, 1), (4, 1), (4, 3).
*/

/**  */

let arr = [4, 5, 2, 1, 8, 7, 10];
var invCount = 0;

function countInversion(arr, n) {  //Brute Force O(n*n)
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
}
//console.log(countInversion(arr,arr.length))

function merge_(arr, l, m, r) {
    let lh = [];
    for (let i = l; i < m + 1; i++) {
        lh.push(arr[i]);

    }

    // Right subarray
    let rh = [];
    for (let i = m + 1; i < r + 1; i++) {
        rh.push(arr[i]);
    }
    let i = 0, j = 0, k = 0, swaps = 0;
    while (i < lh.length && j < rh.length) {
        if (lh[i] <= rh[j]) {
            arr[k++] = lh[i++];
        } else {
            arr[k++] = rh[j++];
            swaps += (m + 1) - (l + i);
        }
    }
    while (i < lh.length) {
        arr[k++] = lh[i++];
    }
    while (j < rh.length) {
        arr[k++] = rh[j++];
    }
    return swaps;
}

function mergeSort(arr, l, r) {
    //console.log(r);]
    let count = 0;
    if (l < r) {
       
        let mid = Math.floor((l + r) / 2);
        count += mergeSort(arr, l, mid);
        count += mergeSort(arr, mid + 1, r);
        count += merge_(arr, l, mid, r)
    }
    return count;

}

console.log(mergeSort(arr, 0, arr.length - 1));
console.log(invCount)