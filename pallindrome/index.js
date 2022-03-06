//Is Given number pallindrome
let num = 1221;
let sum = 0, r;

while (num > 0) {
    r = num % 10;
    sum = sum * 10 + r;
    num = Math.floor(num / 10);
    //num/=10;
}
console.log(sum);

//Is Given String pallindrome
let word = 'abbbba';
let temp = '';
for(let i = word.length-1;i>=0;i--){
    temp = temp + word[i];
}

console.log(temp);