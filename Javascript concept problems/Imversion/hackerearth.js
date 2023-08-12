//map
//sort
//sum


function maxSum(arr,n,K){
     if(K<=0){return 0;}

     let amap = new Map();

     for(let i=0 ; i<n;i++){
         if(amap.has(arr[i])){
             amap.set(arr[i],amap.get(arr[i])+arr[i]);
         }
         else
         amap.set(arr[i],arr[i]);
     }
     let an = [...amap.values()]
     an.sort((a,b)=>{return b-a})
     console.log(an);

     let sum = 0;
     let i=0;
     while(i<K && i<an.length){
         sum=sum+an[i];
         i++;
     }
     return sum;
}
//maxSum(arr,n,K)
let res = maxSum([2 ,1, 2, 5],4,2);
console.log(res);

const readline = require('readline')
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const lines = []
rl.on('line', (input) => {
    lines.push(input);
})
rl.on('close', () => {
// (function() {
    // const lines = require('fs').readFileSync('test.in', 'utf8').split('\n')
    let l = 0;
    let t = +lines[l++]
    const output = []
    for (let i = 0; i < t; i++) {
        const n = +lines[l++]
        const arr = lines.slice(l, l + n).map(str => str.trim().split(' ').map(Number))
        l += n
        output[i] = solve(n, arr)
    }
    console.log(output.join('\n'))
// })()
})
 
function solve(n, arr) {
    //console.log(arr)
    let ans = Infinity
    for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
    for (let c = b + 1; c < arr.length; c++) {
    for (let d = c + 1; d < arr.length; d++) {
        //console.log(a+':'+arr[a]+':'+arr[b]+':'+arr[c]+':'+arr[d]+'|||');
        ans = Math.min(ans, cal4(arr[a], arr[b], arr[c], arr[d]))
        
    }
    }
    }
    }
    return ans + 1
}
function cal4(a, b, c, d) {
    a = a.slice()
    b = b.slice()
    c = c.slice()
    d = d.slice()
    console.log("A: ",a);
    let ans = 0
    for (let i = 0; i < a.length; i++) {
        const min = Math.min(a[i], b[i], c[i], d[i])
        a[i] -= min
        b[i] -= min
        c[i] -= min
        d[i] -= min
        ans += min
    }
    let min = Infinity
    min = Math.min(min, cal3(a, b, c) + cal1(d))
    min = Math.min(min, cal3(a, b, d) + cal1(c))
    min = Math.min(min, cal3(a, d, c) + cal1(b))
    min = Math.min(min, cal3(d, b, c) + cal1(a))
    min = Math.min(min, cal2(a, b) + cal2(c, d))
    min = Math.min(min, cal2(a, c) + cal2(b, d))
    min = Math.min(min, cal2(a, d) + cal2(c, b))
    return ans + (min === Infinity ? 0 : min)
}
function cal3(a, b, c) {
    a = a.slice()
    b = b.slice()
    c = c.slice()
 
    let ans = 0
    for (let i = 0; i < a.length; i++) {
        const min = Math.min(a[i], b[i], c[i])
        a[i] -= min
        b[i] -= min
        c[i] -= min
        ans += min
    }
    let min = Infinity
    min = Math.min(min, cal2(a, b) + cal1(c))
    min = Math.min(min, cal2(a, c) + cal1(b))
    min = Math.min(min, cal2(b, c) + cal1(a))
    return ans + (min === Infinity ? 0 : min)
}
function cal2(a, b) {
    a = a.slice()
    b = b.slice()
    // console.log('cal2', a, b)
    let ans = 0
    for (let i = 0; i < a.length; i++) {
        const min = Math.min(a[i], b[i])
        a[i] -= min
        b[i] -= min
        ans += min + a[i] + b[i]
    }
    // console.log('cal2', ans)
    return ans
}
function cal1(a) {
    return a.reduce((s, x) => s + x, 0)
}