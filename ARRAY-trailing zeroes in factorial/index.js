let num = 12;
let res = 0;

for(let i=5;i<=num;i=i*5){
    res = res + num/i;
}

console.log(Math.floor(res));