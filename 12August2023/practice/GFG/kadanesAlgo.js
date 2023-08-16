function maxSubarraySum(arr, N) {
    // code here
    let maxSum = arr[0], currentSum = arr[0];
   
        for (let i = 1; i < N; i++) {
            if(currentSum>=0){
                currentSum = currentSum + arr[i];
            }else{
                currentSum = arr[i];
            }
            if(maxSum<currentSum){
                maxSum = currentSum;
            }
        }
    
    console.log(maxSum);

}
maxSubarraySum([1, 2, 3, -2, 5], 5)