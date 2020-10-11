const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  

var arr = ["GUVI", "I", "am", "Geek"];
function transformFirstAndLast(arr)
{
    var myKey=arr[0];
    var value=arr[arr.length-1];
  var newObject = {[myKey]: value};
  return newObject;
}
console.log(transformFirstAndLast(arr));

});