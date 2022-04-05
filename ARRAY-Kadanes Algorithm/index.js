/**
 * Given an array Arr[] of N integers. 
 * Find the contiguous sub-array(containing at least one number) which has the maximum sum 
 * and return its sum.
 */

//Time Complexity: O(N)
//Auxiliary Space: O(1)
let array = [1, 2, 3, -2, 5];

function Kadanes(arr) {
    let max = arr[0], sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (sum >= 0) {
            sum = sum + arr[i];
        } else {
            sum = arr[i];
        }
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}
console.log(Kadanes(array))