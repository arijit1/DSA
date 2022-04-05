//Given an array, rotate the array by one position in clock-wise direction.

class RotateArray {
    rotate(arr) {
        let len = arr.length;
        for (let i = 0; i < len / 2; i++) {
            let temp;
            temp = arr[i];
            arr[i] = arr[len - 1 - i];
            arr[len - 1 - i] = temp;
        }
        return arr;
    }
}

let rotate = new RotateArray();
console.log(rotate.rotate([1, 2, 3, 4, 5, 6, 7, 8, 9]));