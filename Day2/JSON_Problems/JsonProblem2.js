const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  
  var obj = {name : "RajiniKanth", age : 33, hasPets : false};
  function printAllKeys(obj)
  {
    return Object.keys(obj);
  }
  var res=printAllKeys(obj);
  console.log(res);
  
});