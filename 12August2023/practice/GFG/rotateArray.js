function rotate(arr,n){
    //code here
    let rev = []; let k=0;
    for(let i=n-1;i<=0;i--){
        rev[k++]=arr[i];
    }
    return rev;
}
console.log(rotate([1,2,3,4,5],5))