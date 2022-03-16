//Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element.
//Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
//Note: Return -1 if you can't reach the end of the array.

let arr = [1, 0, 5, 8, 9, 0, 6, 7, 6, 8, 9];

//1->3

function jumps(arr) {
    let halt = 0, jump = 0, max = 0;
    if (arr.length <= 1) {
        return 0;
    }
    if (arr[0] === 0) {
        return -1;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, i + arr[i]);
        if (max >= arr.length - 1) {
            jump++;
            return jump;
        }
        if (i === halt) {
            halt = max;
            jump++;
        }
    }
    if (halt >= arr.length - 1) {
        return jump;
    }
    return -1;
}

console.log(jumps(arr));