const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

//Programs in anonymous and IIFE ( Immediately Invokes Function Expression)


//1. Odd numbers in an Array
//anonymous
let arr=[1,2,3,4,5,6,7,8,9,10];
var odds=function(arr){
    var t=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===1)
        t.push(arr[i]);
    }
    return t;
}
console.log("Anonymous call---->");
console.log(odds(arr));
//IIFE
console.log("IIFE call---->");
console.log((function(arr){
    var t=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===1)
        t.push(arr[i]);
    }
    return t;
})(arr));


//2. String Array to Titlecase Strings
let stringarr=["hello world","good morning","take care","welcome students"];
var titlecase=function(stringarr){
    let title=[];
    for(let i=0;i<stringarr.length;i++)
    title.push(stringarr[i].split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
    return title;
}
console.log("Anonymous call---->")
console.log(titlecase(stringarr));
//IIFE
console.log("IIFE call---->");
console.log(function(stringarr){
    let title=[];
    for(let i=0;i<stringarr.length;i++)
    title.push(stringarr[i].split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' '));
    return title;
}(stringarr));


//3.sum of all numbers  in Array
let arrsum=function(arr){
let sum=arr.reduce((a,b) => a+b);
return sum;
}
console.log("Anonymous call---->");
console.log(arrsum(arr));
//IIFE
console.log("IIFE call---->");
console.log(function(arr){
let sum=arr.reduce((a,b) => a+b);
return sum;
}(arr));


//4.Return all prime numbers in Array
let primes=function(arr){
    let lst=[];
    for(let i=0;i<arr.length;i++)
    {
        let count=0;
        for(let j=1;j<=arr[i];j++)
        {
            if(arr[i]%j===0)
            count++;
        }
        if(count===2)
        lst.push(arr[i]);
    }
    return lst;
}
console.log("Anonymous call---->");
console.log(primes(arr));
//IIFE
console.log("IIFE call---->");
console.log(function(arr){
    let lst=[];
    for(let i=0;i<arr.length;i++)
    {
        let count=0;
        for(let j=1;j<=arr[i];j++)
        {
            if(arr[i]%j===0)
            count++;
        }
        if(count===2)
        lst.push(arr[i]);
    }
    return lst;
}(arr));



//5.Return all the palindromes in Array
let array=["hello","aba","bbaa","bbabb","pip"];
let palindromes=function(array){
    return array.filter(ele=>{
    if(ele===ele.split("").reverse().join(""))
    return ele;
});
}
console.log("Anonymous call---->");
console.log(palindromes(array));
//IIFE
console.log("IIFE call---->");
console.log(function(array){
    return array.filter(ele=>{
    if(ele===ele.split("").reverse().join(""))
    return ele;
});
}(array));


//6.Return median of two sorted arrays of same size
let arr1=[1,2,3,4,5];
let arr2=[5,6,7,8,9];
let median=function(arr1,arr2){
    let merged=[...arr1,...arr2];
    return (merged[(arr.length/2)]+merged[(arr.length)/2-1])/2;
}
console.log("Anonymous call---->");
console.log(median(arr1,arr2));
//IIFE
console.log("IIFE call---->");
console.log(function(arr1,arr2){
    let merged=[...arr1,...arr2];
    return (merged[(arr.length/2)]+merged[(arr.length)/2-1])/2;
}(arr1,arr2));


//7.Remove duplicates from an array
let duplicates=[1,2,3,1,2,2,2,5,6,3,4,6,8];
let unique=function(duplicates){
    let uniq=[...new Set(duplicates)];
    return uniq;
}
console.log("Anonymous call---->");
console.log(unique(duplicates));
//IIFE
console.log("IIFE call---->");
console.log(function(duplicates){
    let uniq=[...new Set(duplicates)];
    return uniq;
}(duplicates));


//8.Rotate an array ny k times and return rotated array
let arr3=[1,2,3,4,5];
let newArray =arr3.slice();
let k=2;
let rotatedArray=function(nums){
for (var i = 0; i < k; i++) 
{ 
    for (var j = nums.length - 1; j > 0; j--) 
    {
        var temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
    }
}
return nums;
}
console.log("Anonymous call---->");
console.log(rotatedArray(arr3,k));
//IIFE
console.log("IIFE call---->");
console.log(function(nums){
for (var i = 0; i < k; i++) 
{ 
    for (var j = nums.length - 1; j > 0; j--) 
    {
        var temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
    }
}
return nums;
}(newArray,k));

});