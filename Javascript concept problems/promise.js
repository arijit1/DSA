// function test1() { //line1
//     return Promise.reject('error') //line2
//   }
  
//   test1().then((r) => console.log(r, 'then')).catch((e) => console.log(e, 'catch')); //line3

var fetch = require("node-fetch");
async function find(){
  let result = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${k}`);
console.log(result);
}
find();