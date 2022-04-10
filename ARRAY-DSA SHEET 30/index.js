/**
 * 
 *  Given an array of size n, find all elements in array that appear more than n/k times.
 *  For example, if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4,
 *  then the output should be [2, 3]. Note that size of array is 8 (or n = 8),
 *  so we need to find all element
 * 
 */

function morethanNdK(arr, n, k) {
    let x = n / k;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    console.log(map);
    for (let [key, val] of map.entries()) {
        let temp = val;
        if (temp >= x) {
            console.log(key);
        }
    }
}
//let arr = [3,1,2,2,1,2,3,3];
let arr = [3 ,1 ,2 ,2 ,2 ,1 ,4 ,3 ,3 ]
morethanNdK(arr,9,4);