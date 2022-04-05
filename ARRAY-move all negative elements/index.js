//Move all Negative elements to leftside of array

let array = [0, 1, 2, 3, 4, 5, -2, -3, -4, -5, 2, 4 - 10];

function shiftNegative(arr) {
    let mid = 0;
    let high = arr.length - 1;
    let lo = 0;
    let temp = 0;
    while (mid <= high) {
        if(arr[mid]<0){
            temp = arr[lo];
            arr[lo] = arr[mid];
            arr[mid] = temp;
            mid++;
            lo++;
        }
        else mid++;
    }
    return arr;
}
console.log(array.length);
console.log(shiftNegative(array).length);
