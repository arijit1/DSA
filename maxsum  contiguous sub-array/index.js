//Given an array Arr[] of N integers.
//Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
//Kadane's Algorithm 

let array = [1, 2, 3, -2, 5]; //output = 9;

let sum = array[0];
let maxsum = array[0];

for (let i = 1; i < array.length; i++) {
    if (sum >= 0) {
        sum = sum + array[i];
    } else {
        sum = array[i];
    }

    if (sum > maxsum) {
        maxsum = sum;
    }
}

console.log(maxsum)