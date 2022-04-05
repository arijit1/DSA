const br = '--------------------------------------';
//Brute Force Approach
let  array = [1,2,3,4,5,6];
let temp = [ ];
let j =0;
for(let i=array.length-1;i>=0;i--){
	temp[j++] =array[i]
}
console.log(temp);
console.log(br);

//Optimized Approach (iterative way)
let start = 0, end = array.length-1;
while(start<end){
    let temp =array[start]
    array[start]=array[end]
    array[end] = temp;
    end--;
    start++;
}
console.log(array)
console.log(br);

//Recursive Approach
let top = 0, down=array.length-1;

function swap(arr,top,down){
    if(top>=down){
        return arr;
    }
    let temp = arr[top];
    arr[top]=arr[down];
    arr[down] = temp;
    top++;
    down--;
    return swap(arr,top,down);
}
console.log(swap(array,top,down));