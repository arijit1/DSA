class Solution {
    // Function to count inversions in the array.
    merge(arr,l,m,r){
         // Left subarray
        let left = [];
        for(let i = l; i < m + 1; i++)
        {
            left.push(arr[i]);
             
        }
         
        // Right subarray
        let right = [];
        for(let i = m + 1; i < r + 1; i++)
        {
            right.push(arr[i]);
        }
        let i = 0, j = 0, k = l, swaps = 0;
        while (i < left.length && j < right.length)
        {
            if (left[i] <= right[j])
            {
                arr[k++] = left[i++];
            }
            else
            {
                arr[k++] = right[j++];
                swaps += (m + 1) - (l + i);
            }
        }
        while (i < left.length)
        {
            arr[k++] = left[i++];
        }
        while (j < right.length)
        {
            arr[k++] = right[j++];
        }
        return swaps;
    }
    merge_sort(arr,l,r){
         // particular node of the recursion tree
        let count = 0;
        if (l < r)
        {
            let m = Math.floor((l + r) / 2);
             
            // Total inversion count = left subarray count
            // + right subarray count + merge count
             
            // Left subarray count
            count += this.merge_sort(arr, l, m);
             
            // Right subarray count
            count += this.merge_sort(arr, m + 1, r);
             
            // Merge count
            count += this.merge(arr, l, m, r);
        }
        return count;
        
    }
    inversionCount(arr, N)
    {
        let temp=new Array(N)
        let ans=this.merge_sort(arr,0,arr.length-1);
        return ans
        //your code here
    }
}

let arr = [4, 5, 2, 1, 8, 7, 10];
let pp = new Solution();
let res = pp.inversionCount(arr,arr.length);

console.log(res);