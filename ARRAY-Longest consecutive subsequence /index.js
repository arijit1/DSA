/**
 * Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
 */

function findLongestConseqSubseq(arr, n) {
    let s = new Set();
    let ans = 0;
    for (let i = 0; i < n; i++) {
        s.add(arr[i]);
    }
    console.log(s);
    for (let i = 0; i < n; i++) {
        if (!s.has(arr[i] - 1)) {
            var j = arr[i];
            while (s.has(j)) {
                j++;
            }
            console.log(j,arr[i]);
            ans = Math.max(ans, j - arr[i]);
        }
    }
    return ans;
}
let arr = [2, 6, 1, 9, 4, 5, 3];
console.log(findLongestConseqSubseq(arr, arr.length))