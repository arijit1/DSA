//https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1


//solution 1
function minDifference(arr, K) {
    const N = arr.length;
    
    // Sort the array
    arr.sort((a, b) => a - b);
    
    // Initialize the result with the difference between the tallest and shortest towers
    let result = arr[N - 1] - arr[0];
    
    // For each tower except the last one
    for (let i = 0; i < N - 1; i++) {
        let min = Math.min(arr[0] + K, arr[i + 1] - K);
        let max = Math.max(arr[N - 1] - K, arr[i] + K);
        result = Math.min(result, max - min);
        console.log(result);
    }
    console.log("----")
    return result;
}

// Example usage
const towerHeights = [2, 6, 3, 4, 7, 2, 10, 3, 2, 1];
const K = 5;
const minDiff = minDifference(towerHeights, K);
console.log("Minimum possible difference:", minDiff);


//Solution 2

// User function Template for Java

// class Solution {
//     int getMinDiff(int[] arr, int n, int k) {
//         // code here
        
//         Arrays.sort(arr);
//         int diff=arr[n-1] - arr[0];
//         int min;
//         int max;
        
//         for(int i=1;i<n;i++){
            
//             if(arr[i]-k <0)continue;
            
//             max=Math.max(arr[i-1]+k,arr[n-1]-k);
//             min=Math.min(arr[0]+k,arr[i]-k);
            
//             diff=Math.min(diff,max-min);
          
            
            
//         }
//           return diff;
//     }
// }

// solution 2 is better than solution 1. Reasons below.K
// Early Skip: In your approach, you skip towers with negative adjusted heights (if (arr[i] - k < 0) continue;). This allows you to skip unnecessary calculations for towers that cannot be adjusted within the given range.

// Loop Range: Your loop starts from the second tower (for (int i = 1; i < n; i++)), which means you don't need to consider the first tower separately. This simplifies the loop structure.

// Calculation Limits: Your approach calculates the minimum and maximum adjusted heights directly inside the loop, without using an additional loop as in the original implementation I provided. This might save some overhead.

// Optimization in Calculations: Your approach's calculation of min and max is slightly optimized compared to the original implementation. This could lead to slightly faster calculations.

// Specific Data and K Value: Depending on the specific values in the tower heights and the value of K, the differences between towers might lead to fewer iterations in your approach.