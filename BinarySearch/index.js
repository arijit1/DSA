function binary(arr,l,r,t){
    //l = low r = high
    if(r>=l){
        //let mid = arr.length/2;
        let mid = l + Math.floor((r - l) / 2);
        if(arr[mid]==t){
            return mid;
        }
        if(arr[mid]>t){  //left half
            return binary(arr,l,mid-1,t);
        }
        
            return binary(arr,mid+1,r,t); //rigth half
        
    }
    return -1;
}

var search = function (nums, target) {
   return binary(nums,0,nums.length-1,target)
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(search(nums, target))