//Given an array, cyclically rotate the array clockwise by one.
//input = [1,2,3,4,5] output = [5,1,2,3,4]


function rotate(arr) {
    let n = arr.length;
    let x = arr[n-1];
    for (i = n - 1; i >= 0; i--) {
        arr[i] =arr[i-1];
    }
    arr[0] = x;
    console.log(arr)
}
rotate([1,2,3,4,5])