// Write a function to find if a given string is a palindrome or not. The function should return boolean value.
// Case sensitivity should be ignored.
// String below 3 characters should not be considered a palindrome.
//abcba
function pallindrome(s1) {
    let flag = false;
    if (s1.length < 3) { return flag; }

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s1[s1.length - 1 - i]) {
            flag = true;
            continue;
        } else {
            flag = false;
            break;
        }
    }
    return flag;
}
pallindrome("abpbx");

// Write a function to find how many palindromes are there in a given string.
// ex: ababbbaba: aba, bab, bbb, bab, aba, abbba, babbbab, ababbbaba = 8
// input: ababbbaba
// output: 8
let string1 = "ARIJIT"
console.log(string1.substring(0, 0));


function subString(str2) {
    let count = 0;
    for (let i = 0; i < str2.length - 1; i++) {
        for (let j = i; j < str2.length; j++) {
            let compareString = str2.substring(i, j + 1);
            let res = pallindrome(compareString);
            if (res == true) {
                console.log(compareString);
                count++;
            }
        }
    }
    console.log(count);
}
subString("ababbbabq");

// Write a function to return indices of most repeated number in an array
let input = [1, 2, 3, 4, 4, 4, 66, 4, 5, 5, 5, 5, 5, 5, 5]
// Output: [3,4,5,6]

function max(n1,n2){
    if(n1>n2){
        return n1;
    }
    return n2;
}

function numberIndex(arr1) {
    let countRep = {};
    for (let i = 0; i < arr1.length; i++) {
        let count =[] ;
       for(let j=0;j<arr1.length;j++){
           if(arr1[i]==arr1[j]){
           count.push(j);
           }
       }
        countRep[arr1[i]] = count;
    }
    //console.log(countRep);
    let temp1=0,temp2=0, currentOBJ;;
    for(obj in countRep){
        temp1 = countRep[obj].length;
        if(temp1>temp2){
            temp2=temp1;
            currentOBJ=obj;
        }
    }
    console.log(countRep[currentOBJ])
}
numberIndex(input);