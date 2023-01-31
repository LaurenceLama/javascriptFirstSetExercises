// Q1 return the 1st one if FALSY, otherwise return 2nd 1
function filterOutFalsy(ele, ment) {
  return !ele ? ele : ment; //i am confusion when it comes to using this question turning operator
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy([true, "Dog"]));

// Q2 return the length of any given array
function arrayLength(arr) {
  return arr.length;
}

console.log(arrayLength([1, 2, 3]));
console.log(arrayLength([5, 0, -4, 1]));
console.log(arrayLength([]));

// Q3 get last element or pick, to know more
function lastElem(arr) {
  return arr[arr.length - 1];
  return arr[0];
  return arr[2];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(["dog", "cat", "ball"]));

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([3, 2, 0, 6, 2]));

// Q4 find the sum of these arrayss (my guts tells me this part is IMPORTANT)
function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // how to loop through every element in an array (loop meaning it will show everything inside, I think)
    // console.log(arr[i])
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([1, 2, 3, 4, 5, 6]));

// Q5 add up the numbers starting from the chosen number (basically factorials !!!)
function progressiveSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    // <= is valid since me want add up until said number
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(6));

// Q6 given number in seconds, return numbers into mm:ss format (m = minute, s = second)
function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60); //math floor rounds up/down the result to a whole number
  let timerSeconds = seconds % 60;
  if (timerMinutes.toString().length === 1) { //timerMinutes.length does not work cuzz .length works only(I think), so add tostring() when doing smth like this
    timerMinutes = "0" + timerMinutes; // do NOT bother NOT putting 0 on a string. (If ya got any dumber than not putting 0 on THIS situation, lemme explain in homo habilis language. 0 math operator add with other math = math(no 0 in left). Need 0 on left, use '0' string, not math operator, string 0 just add 0 left side)
  }
  if (timerSeconds.toString().length === 1) {
    timerSeconds = "0" + timerSeconds;
  }
  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(1));
console.log(calcTime(625));
console.log(calcTime(140));

// Q7 Find largest, the large one
function getMax(arr) { // for every array, brain cells should think on using 'FOR' LOOPS 
    let large = arr[0] //honestly, wait, if ya forgot how this works, anyname[number], this combo with that bracket brings out the value inside an array. usually the value starts from 0 not 1
    // I was so kinda close to the answer just forgot to include them arr[brackets], also now that I understood it, it does not have to be [0] or [2], yu jast have to bring out any value from an array to compare wether they are > or <    
    for (let i = 1; i < arr.length; ++i) { //with letting i = 1, just proves my point that choosing ANYWHERE inside an array (in this case, large = arr[0] is outside the array) -so creating an operator which includes using an array, we can manipulate arrays in which we can operate operators inside or outside THAT array
        if (arr[i] > large) {
            large = arr[i]
        }
    }
    return large
}

// so what happens is, if me picked anything from the array(array[1 or just pick]), array will loop from everything inside array[i] until it finds someone that is larger, THEN it will pick the specific value inside an array, which is always > the rest of the values
console.log(getMax([-300, -100, -200]))
console.log(getMax([100, 5, 0]))



// before Q8 BIG NOTE, maybe this is a li'l late BUT, when doing for loops (lets use 'arr' as the argument), this thing after the 'for' (let i = 1; i < arr; ++i) console logging the argument is for SINGLE VALUES example:  console.log(argument(5)). But with thing like (let i = 1; i < arr.length; ++i), that thing with the .length loops to EVERY SINGLE ELEMENT INSIDE THAT (parenthesis) example: (200) ; example again: ([1, 2, 3]), just more than 1 existing value inside that (parenthesis like this), thus .length can be used to yeh, loop and use it all

// Q8 reverse a given string
// there are 3 ways to do this

//incrementing for loop
function reverseString(string) { 
    let reverse = '' //I could not have thought of this even with luck so, NT
    for (let i = 0; i < string.length; i++) {
        reverse = string[i] + reverse
    }
    return reverse
}

console.log(reverseString('abc'))

/**  decrementing for loop, so with abc (3 values), we start from 3 -> 1
 * for (let i = string.length; i < 0; i--) {
        reverse += string[i] 
        this thing above is exactly same as this thing below
        reverse = reverse + string[i] 

    }
    return reverse
    
    remember that strings and arrays starts from index 0, so 3 shall be undefined on 'abc'
*/

/** Array reverse property
 * 
 * put this on the f12 console:
 * ['a', 'b', 'c'].reverse()
 * this reverses ONLY an array
 * this wood not work on strings like 'abc'
 * 
 * there is a way tho with this 'abc', follow these steps and learn bro:
 * 'abc'.split('')       = this makes the string an ARRAY like this ['a', 'b', 'c']
 * 'abc'.split('').reverse()   = this reverses the produced ARRAY like umm ['c', 'b', 'a']
 * 'abc'.split('').reverse().join('')  = now join basically makes it a string again, but with previous commands, it is now reversed
 * 
 * """""final""""" array reverse solution (not mine)
 * function reverseString(string) { 
    return string.split('').reverse().join('')
} 

 * console.log(reverse('Laurence Sergeeeeeee'))
 */


// Q9 trun every element in an array to 0

// taking a break