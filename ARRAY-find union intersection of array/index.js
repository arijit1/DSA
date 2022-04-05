//Given two arrays a[] and b[] of size n and m respectively.
//The task is to find union between these two arrays.

// pop - Removes from the End of an Array
// shift - Removes from the beginning of an Array
// splice - removes from a specific Array index
// filter - allows you to programatically remove elements from an Array
let a1 = [1, 2, 3, 4, 5, 6, 7];
let a2 = [2, 3, 4, 5, 55];


function union(a1, a2) {   // O(mn) - Time Complexity  naive approach
    let union = [];
    let intersection = [];
    for (let i = 0; i < a2.length; i++) {
        for (let j = 0; j < a1.length; j++) {
            if (a1[j] === a2[i]) {
                intersection.push(a2[i]);
                a2.splice(i, 1);
            }
        }
    }
    union = [...a1, ...a2];
    return { intersection, union };
}

let result = union(a1, a2);
console.log('Intersection ' + result.intersection, 'Union ' + result.union); 