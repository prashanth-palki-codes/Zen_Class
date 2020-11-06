var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//chunk
var chunk = function (arr, n) {
    var result = [];
    var temp = __spreadArrays(arr);
    var size = Math.ceil((temp.length) / n);
    for (var i = 0; i < size; i++)
        result.push(temp.splice(0, n));
    return result;
};
console.log("Chunk Demonstration");
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
//reduce
var reduce = function (arr, op) {
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result = eval(result + op + arr[i]);
    }
    return result;
};
console.log("Reduce Demonstration");
console.log(reduce([1, 2, 3, 4, 5], '+'));
//filter (returning the array of eligible persons to vote)
var filter = function (arr, age) {
    var resultantArray = [];
    arr.forEach(function (element) {
        if (element >= 18)
            resultantArray.push(element);
    });
    return resultantArray;
};
console.log("Filter Demonstration");
console.log(filter([45, 78, 13, 4, 90], 18));
//find (returning index of the search element)
var find = function (arr, searchElement) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement)
            return i + 1;
    }
};
console.log("Find Demonstration");
console.log(find([67, 89, 6, 45, 90], 45));
//sum
var sum = function () {
    var sumArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sumArray[_i] = arguments[_i];
    }
    var add = 0;
    for (var _a = 0, sumArray_1 = sumArray; _a < sumArray_1.length; _a++) {
        var i = sumArray_1[_a];
        add += i;
    }
    return add;
};
console.log("Sum Demonstration");
console.log(sum(1, 5, 6, 7, 8));
