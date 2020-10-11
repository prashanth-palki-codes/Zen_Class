const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 

var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role","JSWizard"]],[["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role","Coder"]]];
    
    
function transformEmployeeData(array)
{
    var tranformEmployeeList = [];
    for(let i=0;i<array.length;i++)
    {
        var newObject={};
        for(let j=0;j<array[i].length;j++)
        {
                var mykey=array[i][j][0];
                var myval=array[i][j][1];
                newObject[mykey]=myval;
                
        }
        tranformEmployeeList.push(newObject);
    }
    return tranformEmployeeList;
}

console.log(transformEmployeeData(array));
});