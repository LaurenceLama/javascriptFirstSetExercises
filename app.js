// Q1 return the 1st one if FALSY, otherwise return 2nd 1
function filterOutFalsy(ele,ment) {

    return !ele ? ele : ment //i am confusion when it comes to using this question turning operator
}

console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy([true,'Dog']))

// Q2 return the length of any given array
function arrayLength(arr) {
    return arr.length
}

console.log(arrayLength([1, 2, 3]))
console.log(arrayLength([5, 0, -4, 1]))
console.log(arrayLength([]))

// Q3 get last element or pick, to know more
function lastElem(arr) {
    return arr[arr.length - 1]
    return arr[0]
    return arr[2]
}

console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem(['dog', 'cat', 'ball']))

function lastElem(arr) {
  return arr[arr.length - 1];

}

console.log(lastElem([3, 2, 0, 6, 2]));

// Q4 find the sum of these arrayss

// imma take a break 1st

console.log(arrSum([2, 2, 2]))