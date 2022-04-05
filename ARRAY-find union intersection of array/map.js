//find union using map

let a1 = [1, 2, 3, 4, 5, 6, 7];
let a2 = [2, 3, 4, 5, 55];
function map(a1,a2){     //TIme Complexity -> O(m+n)
    let i = 0, j=0;
    let map = new Map();
    while(i<a1.length){
        map.set(a1[i]);
        i++;
    }
    while(j<a2.length){
        map.set(a2[j]);
        j++;
    }
    return map;
}
let res = map(a1,a2).keys();
let union = Array.from(res);
console.log(un);
