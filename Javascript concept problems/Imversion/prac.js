function x(a){
    return function (b){
        return a+b;
    }
}
let res = x(10);
console.log(res(3));

let add = a => b=> a+b;
console.log(add(2)(4));

console.log("========");

function closure(){
    let name = 'aman';
    return function(){
         console.log(name+' is awesome')
    }
}
closure()();