// An array contains both positive and negative numbers in random order. 
// Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

function moveNegative(arr){  //insertion sort :> O(n^2)
    for(let i = 1; i<(arr.length);i++){
        let j= i-1;
        while(j>=0 && (arr[j]>0 && arr[j+1]<0)){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            j--;
        }

    }
    console.log(arr);
}

moveNegative([-12,11,-13,-5,6,-7,5,-3,-6]);

//----Optimize using sorting alog ---- O(nlogn)//
function moveNegativeSort(arr){
    arr.sort((a,b)=>a-b);
    console.log(arr);
}
moveNegativeSort([-12,11,-13,-5,6,-7,5,-3,-6]);

