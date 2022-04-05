let array = [4, 2, -3, 1, 6];
//let array = [1 ,2 ,3 ,4, 5]
//Brute Force Approach O(n*n) space O(1)
let flag = false;
for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
        sum = sum + array[j];
        if (sum === 0) {
            flag = true;
            break;
        }
    }
    if (flag) {
        break;
    }
}
console.log(flag);

//time O(N) space : O(N)
//Efficient Approach
//prefix sum method

let newArr = new Map();
let new_arr = [];
let sum = 0, flag2 = false;
for (let i = 0; i <= array.length; i++) {
    sum = sum + array[i];
    //new_arr.push(sum)
    if (sum == 0 || array[i] == 0 || newArr.has(sum)) {
        flag2 = true;
        break;
    } else {
        newArr.set(array[i])
    }
}
console.log(flag2)
