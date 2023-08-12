//https://leetcode.com/problems/two-sum/

let arr = [2,1,3,4] , target = 5;
let ans = [];
//O(n^2)
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        //console.log(j)
        if(arr[i]+arr[j]===target){
            ans.push([arr[i],arr[j]])
        }
    }
}
//console.log(ans);

let map = new Map();
let ans2 = [];
for(let p=0;p<arr.length;p++){
    let compare = target - arr[p];
    if(map.get(compare)){
        ans2.push([map.get(compare),p]);
    }else{
        map.set(compare,p)
    }
}
//console.log(map)
console.log(ans2)
