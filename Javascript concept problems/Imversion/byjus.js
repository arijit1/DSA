var cat = {skin:"brown",nails:"sharp"}
var bird = {skin:"feathers",nails:"grip"}

function animal(arg='animals'){
    return (arg+','+this.skin+','+this.nails)
}

console.log(animal.bind(cat)()) //bind returns new function

console.log(animal.call(cat,'CAT'));

console.log(animal.apply(bird,["Bird"]))

//Destructuring

let array = [1,2,3,4,5,6,7,8,9,10];

[a,b,c,...d]=array;
console.log(a,b,c);
array = [...array,a];
console.log(array);

({a,b,...r}={a:21,b:31,c:4,d:5,e:3});
console.log(a,b);

