/**
 * Given two sorted arrays arr1[] of size N and arr2[] of size M.
 *  Each array is sorted in non-decreasing order.
 *  Merge the two arrays into one sorted array in non-decreasing order
 *  without using any extra space.

Example 1:

Input:
N = 4, M = 5
arr1[] = {1, 3, 5, 7}
arr2[] = {0, 2, 6, 8, 9}
Output: 0 1 2 3 5 6 7 8 9
 */
//let arr2 = [1, 3, 5, 7], arr1 = [0, 2, 6, 8, 9, 12, 13];
let arr1 = [1, 1, 1, 2, 3, 5, 7, 7, 7, 9, 9, 13, 13, 14, 14, 17, 17, 19, 20, 20];
let arr2 = [3, 5, 7, 9, 10, 12, 13, 14, 20, 20];
//let N = 4, M = 6;
//20 10


function merge(arr1, arr2, M, N) {  //Brute Force Solution
    let len = M + N;
    let arr = [];
    for (i = 0; i < len; i++) {
        if (arr1[i] != undefined && arr2[i] != undefined) {
            if (arr1[i] < arr2[i]) {
                arr.push(arr1[i]);
                arr.push(arr2[i]);
            } else {
                arr.push(arr2[i]);
                arr.push(arr1[i]);
            }
        }
        if (arr1[i] == undefined) {
            arr = [...arr, ...arr2.splice(i, arr2.length)];
            break
        }
        if (arr2[i] == undefined) {
            arr = [...arr, ...arr1.splice(i, arr1.length)];
            break;
        }

    }
    return arr;
}

let res = merge(arr1, arr2, arr1.length, arr2.length);
console.log('Brute Force Approach', res);
//========================//

function mergeTwoSort(m, n) { //Optimised O( (m+n)log(m+n) )
    //assuming arr1.length will be always greater than or equal to arr2.length 
    let i = 0, j = 0, k = m - 1;
    while (i <= k && j < n) {
        if (arr1[i] > arr2[j]) {
            arr2[j] = arr2[j] + arr1[k];
            arr1[k] = arr2[j] - arr1[k];
            arr2[j] = arr2[j] - arr1[k];
            j++;
            k--;
        } else {
            i++;

        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    console.log(arr1, arr2);
}
mergeTwoSort(arr1.length, arr2.length);
