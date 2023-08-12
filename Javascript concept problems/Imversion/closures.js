function add(a){
    return function(y){
        return a+y;
    }
}

let res = add(2);
console.log(res(5));

let exp = a=>b=>a+b;

let result = exp(5);
console.log(result(5))

//Prototype

function student(){this.name="Arijit";}

student.prototype.age="22yr";
let teacher = new student();
console.log(teacher.age);
console.log(teacher.name);
console.log(student.age);//undefined

//Object create
const variety = {fruit:"apple",game:"pubg",print: function (){
    console.log(this.fruit,this.game,this.age);
}}
const me = Object.create(variety);
me.age="54yr";
me.print();

function multiply(x,y){
    return new Promise((res,rej)=>{
        if(x===0||y===0){
            rej(0);
        }else{
            res(x*y);
        }
    });
}
let sol = multiply(2,0);
sol.then((r)=>console.log(r)).catch((e)=>console.log(e));