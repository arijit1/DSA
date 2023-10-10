class Solution {

    sort012(arr, N) {
        let answer = [];
        let c0 = 0, c1 = 0, c2 = 0
        for (let i = 0; i < N; i++) {
            if (arr[i] == 0) {
                c0++;
            }
            if (arr[i] == 1) {
                c1++;
            }
            if (arr[i] == 2) {
                c2++;
            }
        } let k = 0;
        for (let i = 0; i < c0; i++) { answer[k] = 0; k++; }
        for (let i = 0; i < c1; i++) { answer[k] = 1; k++; }
        for (let i = 0; i < c2; i++) { answer[k] = 2; k++; }
        return answer;
    }
}
let s = new Solution();
console.log(s.sort012([0, 2, 1, 2, 0], 5));