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
    let r=0;
    if(actual.foo===expected.foo)
    {
        if(actual.bar===expected.bar)
        r=1;
    }
    if(r===1)
    console.log("Passed");
    else
    console.log("FAILED");
}

assertObjectsEqual(actual, expected, "detects that two objects are equal");

});