//https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1

// Given an array arr[] and an integer K where K is smaller 
// than size of array, the task is to find the Kth smallest element 
// in the given array. It is given that all array elements are distinct.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(log(n))
// Constraints:
// 1 <= N <= 105
// 1 <= arr[i] <= 105
// 1 <= K <= N

class Solution {
    mergesort(leftarr, rightarr){
       let output = [];
       let i=0,j=0,k=0;
       while(i<leftarr.length && j < rightarr.length){
           if(leftarr[i]<rightarr[j]){
               output[k] = leftarr[i];
               i++; k++;
           }else{
               output[k] = rightarr[j];
               k++; j++;
           }
       }
       while(i<leftarr.length){
           output[k] = leftarr[i];
           k++; i++;
       }
       while(j<rightarr.length){
           output[k] = rightarr[j];
           k++; j++;
       }
       return output;
   }
    merge(arr){
        if (arr.length <= 1) {
           return arr;
       }
        let mid = arr.length/2;
       let leftarr = arr.slice(0,Math.floor(mid));
       let rightarr = arr.slice(Math.floor(mid));
       return (
           this.mergesort(this.merge(leftarr),this.merge(rightarr))
           )
   }
 kthSmallest(arr,l,r,k){
   //code here
   let sorted = this.merge(arr);
   return(sorted[k-1])
 }
}
