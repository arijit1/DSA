//Given an array of N integers arr[] where each element represents the max number of steps that can be made forward from that element.
//Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.
//Note: Return -1 if you can't reach the end of the array.

let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

//1->3

function jumps(arr) {
    let jump = 0;
    let pos = 0;
    let des = 0;
    if (arr[0] === 0) {
        return -1;
    }
    for (let i = 0; i < n - 1; i++) {
        des = Math.max(des, i + arr[i]);
        if (pos === i) {
            pos = des;
            jump++;
        }
    }
    return jump;
}

console.log(jumps(arr));