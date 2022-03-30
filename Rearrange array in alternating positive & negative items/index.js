/**
 * 
 * Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
 * output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
 * 
 * 
 * Input:  arr[] = {1, 2, 3, -4, -1, 4}
 * Output: arr[] = {-4, 1, -1, 2, 3, 4}
 * 
 */
let arr = [1, 2, 3, -4, -1, 4];

function rotate(arr, s, j) {
    let x = arr[j];
    for (let i = j; i >= s; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = x;
    return arr;
}
function rearrange(arr) {
    for (let k = 0; k < arr.length; k++) {
        if (k % 2 == 0 && arr[k] < 0) { continue; }  //even -ve
        else if (k % 2 != 0 && arr[k] > 0) { continue; } //odd +ve
        else if (k % 2 == 0 && arr[k] > 0) {
            let i = k, j = k;
            while (j < arr.length) {
                if (arr[j] < 0) {
                    arr = rotate(arr, i, j);
                }
                j++;
            }
        } else if (k % 2 != 0 && arr[k] < 0) {
            let i = k, j = k;
            while (i < arr.length) {
                if (arr[i] > 0) {
                    arr = rotate(arr, j, i);
                }
                i++;
            }
        }
    }
    return arr;
}
console.log(rearrange(arr))