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
let arr1 = [1, 3, 5, 7], arr2 = [0, 2, 6, 8, 9, 12, 13], N = 4, M = 5;

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
        if(arr1[i] == undefined){
            arr = [...arr,...arr2.splice(i,arr2.length)];
            break
        }
        if(arr2[i] == undefined){
            arr = [...arr,...arr1.splice(i,arr1.length)];
            break;
        }

    }
    return arr;
}

let res = merge(arr1, arr2, M, N);
console.log(res);