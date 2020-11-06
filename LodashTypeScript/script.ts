//chunk
let chunk=(arr,n)=>{
    let result=[]
    let temp=[...arr]
    let size=Math.ceil((temp.length)/n);
    for(let i=0;i<size;i++)
        result.push(temp.splice(0,n));
    return result;

}
console.log("Chunk Demonstration");
console.log(chunk([1,2,3,4,5,6],2));
console.log(chunk(['a','b','c','d'],3));

//reduce
let reduce=(arr,op)=>{
    let result=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        result=eval(result+op+arr[i]);
    }
    return result;
}
console.log("Reduce Demonstration");
console.log(reduce([1,2,3,4,5],'+'));

//filter (returning the array of eligible persons to vote)
let filter=(arr,age)=>{
    let resultantArray=[]
    arr.forEach(element => {
        if(element>=18)
        resultantArray.push(element)
    });
    return resultantArray;
}
console.log("Filter Demonstration");
console.log(filter([45,78,13,4,90],18))


//find (returning index of the search element)
let find=(arr,searchElement)=>{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===searchElement)
        return i+1;
    }
}
console.log("Find Demonstration");
console.log(find([67,89,6,45,90],45));


//sum

let sum=(...sumArray)=>{
    let add=0;
    for(let i of sumArray)
        add+=i;
    return add;
}
console.log("Sum Demonstration");
console.log(sum(1,5,6,7,8));