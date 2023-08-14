//REVERSE an array 

// Given an array (or string), the task is to reverse the array/string.

//Input  : arr[] = {1, 2, 3}
//Output : arr[] = {3, 2, 1}

let arr = [4, 5, 2, 6, 3];

let temp;
function temps(f,l){
   temp = arr[f];
   arr[f] = arr[l];
   arr[l] = temp;
}
const halfLength = Math.ceil(arr.length / 2);
for (let i = 0; i < halfLength; i++) {
    temps(i,arr.length-i-1);
}
console.log(arr);