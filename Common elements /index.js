/**
 * Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
 * 
Input:
n1 = 6; A = {1, 5, 10, 20, 40, 80}
n2 = 5; B = {6, 7, 20, 80, 100}
n3 = 8; C = {3, 4, 15, 20, 30, 70, 80, 120}
Output: 20 80
Explanation: 20 and 80 are the only
common elements in A, B and C. 
*/
let n1 = 6; let A = [1, 5, 10, 20, 40, 80]
let n2 = 5; let B = [6, 7, 20, 80, 100]
let n3 = 8; let C = [3, 4, 15, 20, 30, 70, 80, 120]

let map = new Array();
let i = 0, j = 0, k = 0;
while (i < A.length && j < B.length && k < C.length) {
    if(A[i]==B[j] && B[j]==C[k]){
        map.push(A[i]);
        i++;j++;k++;
    }
    else if(A[i]<B[j]){
        i++;
    }
    else if(B[j]<C[k]){
        j++;
    }
    else{k++;}
    let xx = A[i-1];
    while(xx==A[i]){i++;}
    let yy = B[j-1];
    while(yy == B[j]){j++;}
    let zz = C[k-1];
    while(zz == C[k]){k++;}
}
console.log(map);