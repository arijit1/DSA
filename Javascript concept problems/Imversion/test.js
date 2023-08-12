function testing(){
    return 10;
}

function test(){
    let c = testing();
    return c;
}

console.log(test());

function Ventures(){
    this.name = 'krish';
    this.age = "22";
}

Ventures.prototype.gender = 'M';
let obj = new Ventures();
console.log(obj.gender);

function testData(){
    let x = 2;
    return function(){
        return x+2;
    }
}
console.log(testData()())

//currying 
function add(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(add(2)(2)(4));

//Arrow function 
(a,b)=>{
    return a+b;
}

function* generate(){
    yield 1;
    yield 2;
    yield 3;
}
const obj2 = generate();
console.log(obj2.next().done);

(function (){
    console.log("IIFE")
})();