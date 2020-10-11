const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 

  var object = {name: "ISRO", age: 35, role: "Scientist"};
  function convertListToObject(obj)
  {
      let res=[];
    let arr=Object.keys(object);
    let arr2=Object.values(object);
    for(let i=0;i<arr.length;i++)
    {
        var a=new Array(arr[i],arr2[i]);
        res.push(a);
    }
    console.log(res);
  }
  convertListToObject();
});