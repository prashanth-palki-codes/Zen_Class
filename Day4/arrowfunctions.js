const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

//Arrow Functions
//Odd array printing
let arr=[1,2,3,4,5,6,7,8,9,10];
let oddArr=arr.filter(ele=>ele%2===1);
console.log(oddArr);


//StringArray of Strings to titlecase Strings
let stringarr=["hello world","good morning","take care","welcome students"];
let titlecase=[];
for(let i=0;i<stringarr.length;i++)
titlecase.push(stringarr[i].split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
console.log(titlecase);


//Sum of all numbers in an array
let sum=arr.reduce((res,item)=>{return res+item});
console.log(sum);


//Return all prime numbers in an array
let primes=arr.filter(ele=>{
    count=0;
    for(i=1;i<=ele;i++)
    {
        if(ele%i===0)
        count++;
    }
    if(count===2)
    return ele;
});
console.log(primes);


//Return all palindromes in an array
let array=["hello","aba","bbaa","bbabb","pip"];
let palindromes=array.filter(ele=>{
    if(ele===ele.split("").reverse().join(""))
    return ele;
});
console.log(palindromes);

});