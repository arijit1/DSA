let arr = [6, -3, -1, 0, 0, 2];

let max_ending_here = arr[0], min_ending_here = arr[0], max_so_far = arr[0];

for (let i = 1; i < arr.length; i++) {
    let temp = Math.max(
        Math.max(
            arr[i], arr[i] * max_ending_here),
        arr[i] * min_ending_here);
    min_ending_here = Math.min(Math.min(arr[i], arr[i] * max_ending_here), arr[i] * min_ending_here);
    max_ending_here = temp;
    max_so_far = Math.max(max_so_far, max_ending_here);
}
console.log(max_so_far);
