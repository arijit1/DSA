class Solution {
 
    getMinDiff(input_arr, k) {
            
    let sortedArray = input_arr.sort((a,b)=>a-b);

    let mid = Math.floor(sortedArray.length/2); 
    let index = 0;

    while(index<mid){
        sortedArray[index] = sortedArray[index]+k;
        index++;
    }
    while(index<sortedArray.length){
        sortedArray[index] = sortedArray[index]-k;
        index++;
    }
    console.log(sortedArray);
    let minDiff = sortedArray[sortedArray.length-1] - sortedArray[0];
    return minDiff;
    }
}

let ss = new Solution();
let input_arr = [1, 5, 8, 10] , k = 2;
console.log(ss.getMinDiff(input_arr,k))