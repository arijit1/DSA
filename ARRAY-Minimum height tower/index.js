// Given heights of n towers and a value k. 
// We need to either increase or decrease the height of 
// every tower by k (only once) where k > 0. 
// The task is to minimize the difference between the heights of the 
// longest and the shortest tower after modifications and output this difference.

// K = 3, N = 5
// Arr = [3, 9, 12, 16, 20]

//sort
[3, 9, 12, 16, 20]
[6, 12, 12, 13, 17]
//17 - 6 = 11

//let input_arr = [12, 3, 9, 16, 20] , k = 3;
let input_arr = [1, 5, 8, 10] , k = 2;
//sort the array;
function mergeSort(lh, rh) {
    let i = 0, j = 0, k = 0;
    let op = [];
    while (i < lh.length && j < rh.length) {
        if (lh[i] < rh[j]) {
            op[k] = lh[i];
            i++; k++;
        } else {
            op[k] = rh[j];
            k++; j++;
        }
    }
    while (i < lh.length) {
        op[k] = lh[i];
        i++; k++;
    }
    while (j < rh.length) {
        op[k] = rh[j];
        k++; j++;
    }
    return op;
}

function sort_Array(arr) {
    let len = arr.length;
    if (len <= 1) { return arr }
    let mid = Math.floor(len / 2);
    let lh = arr.slice(0, mid);
    let rh = arr.slice(mid);

    return (mergeSort(sort_Array(lh), sort_Array(rh)));
}
let sortedArray = sort_Array(input_arr);


let mid = Math.floor(sortedArray.length/2);
let index = 0;
console.log(mid);
while(index<mid){
    sortedArray[index] = sortedArray[index]+k;
    index++;
}
while(index<sortedArray.length){
    sortedArray[index] = sortedArray[index]-k;
    index++;
}

let minDiff = sortedArray[sortedArray.length-1] - sortedArray[0];
console.log(minDiff);