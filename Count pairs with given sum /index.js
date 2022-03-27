//Brute force O(n*n)
function getPairsCount(arr, n, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == k) {
                count++;
            }
        }
    }
    return count;
}
let arr = [1, 5, 7, 1]
console.log(getPairsCount(arr, arr.length, 6));

function getPairsCount(arr, n, k) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i],0);
        }
        
    }
}