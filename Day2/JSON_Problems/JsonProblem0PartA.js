const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 

var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"}, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3}
 ]
}

//Task 1
cat.height=5;
cat.weight=10;
console.log(cat.height,cat.weight);

//Task2
cat.name="Fluffyy";
console.log(cat.name);

//Task 3
var allActivities=[];
var catFriendsNames=[];
for(let i=0;i<cat.catFriends.length;i++)
{
    for(let j=0;j<cat.catFriends[i].activities.length;j++)
    allActivities.push(cat.catFriends[i].activities[j]);
}
console.log(allActivities);


//Task 4

for(let i=0;i<cat.catFriends.length;i++)
catFriendsNames.push(cat.catFriends[i].name);
console.log(catFriendsNames);


//Task 5
var totalWeight=0;
for(let i=0;i<cat.catFriends.length;i++)
totalWeight+=cat.catFriends[i].weight;
console.log(totalWeight);


//Task 6
var allActs=[];
for(let i=0;i<cat.activities.length;i++)
allActs.push(cat.activities[i]);
for(let i=0;i<cat.catFriends.length;i++)
{
    for(let j=0;j<cat.catFriends[i].activities.length;j++)
    allActs.push(cat.catFriends[i].activities[j]);
}
console.log(allActs);



//Task 7
cat.catFriends[0].activities.push("drink milk");
cat.catFriends[0].activities.push("play with kids");
cat.catFriends[1].activities.push("shout at strangers");
cat.catFriends[1].activities.push("run around home");
console.log(cat.catFriends[0].activities);
console.log(cat.catFriends[1].activities);



//Task 8
cat.catFriends[0].furcolor="brown";
console.log(cat.catFriends[0].furcolor);


});