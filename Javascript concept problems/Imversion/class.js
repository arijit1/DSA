//bind

var person = {age:22,gender:'M'}

function result(){
    return this.age+this.gender
}
let c = result.bind(person)();
console.log(c);

//currying
const adding = a=> b=> a+b; 
function add(A){
    let c= 10;
    return function(b){
        return A+b+c;
    }
}
console.log(add(2)(3));

//closures
function sum(){
    let game = 2;
   return function(){
        console.log(game);
   }
}
let count = sum();
count();

let p = console.log;
p('hello world');