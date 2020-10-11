const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr)
{
    var mykey;
    var myValue;
    var newObject={};
    for(let i=0;i<arr.length;i++)
    {
        mykey=arr[i][0];
        myValue=arr[i][1];
        newObject[mykey]=myValue;
    }
 
 return newObject;
}
console.log(fromListToObject(arr));

});