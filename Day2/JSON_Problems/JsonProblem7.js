const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {


var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}

function assertObjectsEqual(actual, expected, testName)
{
    var a=JSON.stringify(actual);
    var b=JSON.stringify(expected);
    if(a===b)
    console.log("Passed");
    else
    console.log("FAILED");
}

assertObjectsEqual(actual, expected, "detects that two objects are equal");

});